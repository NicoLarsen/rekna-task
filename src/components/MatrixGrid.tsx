import { useState, useMemo, useEffect, useRef } from 'react';
import { Box, Text, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { HailerApi } from '@hailer/app-sdk';
import { Company, RecurringTaskActivity } from '../types';
import {
  FINANCIAL_STATEMENTS_TASKS,
  ALL_TASKS,
  TaskMapping,
  ACCOUNTING_TASKS,
  PAYROLL_TASKS,
} from '../config/taskMappings';
import StatusCell from './StatusCell';
import CompletionButton from './CompletionButton';
import { HailerSearch } from '../hailerTheme/hailerIcons/HailerSearch';
import { HailerChevron } from '../hailerTheme/hailerIcons/HailerChevron';
import { useLanguage } from '../i18n/LanguageContext';
import { getTaskLabel, getCategoryLabel } from '../i18n/translations';

interface MatrixGridProps {
  companies: Company[];
  tasks: RecurringTaskActivity[];
  pendingChanges: Map<string, Map<string, string | null>>;
  onCellClick: (activityId: string, fieldId: string, currentStatus: string | null) => void;
  categoryExpanded: Record<string, boolean>;
  onToggleCategory: (category: string) => void;
  year: number;
  month: number;
  onCategoryPillClick: (companyId: string, category: string) => void;
  onCompletionClick: (activityId: string) => void;
  hailer: HailerApi;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  totalCompletion: number;
}

// Subtle category background tints (low opacity versions of category colors)
const CATEGORY_BG: Record<string, string> = {
  'Accounting': 'rgba(66, 153, 225, 0.08)',
  'Payroll': 'rgba(159, 122, 234, 0.08)',
  'Financial Statements': 'rgba(237, 137, 54, 0.08)',
};

// Category colors for toggle buttons and collapsed columns
const CATEGORY_COLORS: Record<string, string> = {
  'Accounting': '#4299E1', // blue.500
  'Payroll': '#9F7AEA', // purple.500
  'Financial Statements': '#ED8936', // orange.500
};

export default function MatrixGrid({
  companies,
  tasks,
  pendingChanges,
  onCellClick,
  categoryExpanded,
  onToggleCategory,
  year,
  month,
  onCategoryPillClick,
  onCompletionClick,
  hailer,
  searchTerm,
  onSearchChange,
  totalCompletion,
}: MatrixGridProps) {
  const DONE_PHASE_ID = '699083ac8415a9621a71b377';
  const { language, t } = useLanguage();

  // Track hovered cell for column/row highlighting (includes row index for tooltip placement)
  const [hoveredCell, setHoveredCell] = useState<{ companyId: string; columnId: string; rowIndex: number } | null>(null);

  // Track which columns are wide enough for horizontal text (key = columnId, value = isWide)
  const [wideColumns, setWideColumns] = useState<Record<string, boolean>>({});
  const columnRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Hysteresis thresholds to prevent oscillation at boundary widths
  const SWITCH_TO_HORIZONTAL_WIDTH = 90;  // Switch to horizontal at 90px
  const SWITCH_TO_VERTICAL_WIDTH = 70;    // Switch back to vertical at 70px

  // ResizeObserver to detect column width changes
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const updates: Record<string, boolean> = {};
      entries.forEach((entry) => {
        const columnId = entry.target.getAttribute('data-column-id');
        if (columnId) {
          const width = entry.contentRect.width;
          const currentlyWide = wideColumns[columnId] || false;

          // Use hysteresis: different thresholds for switching directions
          if (currentlyWide) {
            // Currently horizontal - only switch to vertical if width drops below lower threshold
            if (width < SWITCH_TO_VERTICAL_WIDTH) {
              updates[columnId] = false;
            }
          } else {
            // Currently vertical - only switch to horizontal if width exceeds upper threshold
            if (width >= SWITCH_TO_HORIZONTAL_WIDTH) {
              updates[columnId] = true;
            }
          }
        }
      });
      if (Object.keys(updates).length > 0) {
        setWideColumns((prev) => ({ ...prev, ...updates }));
      }
    });

    // Observe all registered columns
    columnRefs.current.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [categoryExpanded, wideColumns]); // Include wideColumns in deps to access current state

  // CRITICAL: Build columns in fixed category order (Accounting → Payroll → Financial Statements)
  // Each category either shows expanded task columns OR a single collapsed summary column
  const CATEGORY_ORDER = ['Accounting', 'Payroll', 'Financial Statements'] as const;

  // Map category name to tasks
  const CATEGORY_TO_TASKS: Record<string, TaskMapping[]> = {
    'Accounting': ACCOUNTING_TASKS,
    'Payroll': PAYROLL_TASKS,
    'Financial Statements': FINANCIAL_STATEMENTS_TASKS,
  };

  // Build column structure: each category appears exactly once in the fixed order
  const columnStructure: Array<{ type: 'expanded' | 'collapsed'; category: string; tasks?: TaskMapping[] }> = [];

  CATEGORY_ORDER.forEach((category) => {
    if (categoryExpanded[category]) {
      columnStructure.push({ type: 'expanded', category, tasks: CATEGORY_TO_TASKS[category] });
    } else {
      columnStructure.push({ type: 'collapsed', category });
    }
  });

  // Map companyId -> recurring task activity
  const tasksByCompany = new Map<string, RecurringTaskActivity>();
  tasks.forEach((t) => tasksByCompany.set(t.companyId, t));

  // Set of FS task field IDs for quick lookup
  const fsTaskFieldIds = new Set(FINANCIAL_STATEMENTS_TASKS.map((t) => t.rtStatusFieldId));

  // Calculate completion percentage for a company (ALL tasks, not just visible ones)
  // Financial statement tasks only count in months where FS is due
  function getCompletionPercentage(company: Company): number {
    const activity = tasksByCompany.get(company._id);
    if (!activity) return 0;

    const fsDue = isFSDue(company);
    let total = 0;
    let done = 0;

    ALL_TASKS.forEach((task: TaskMapping) => {
      const isApplicable = company.checkboxConfig[task.companyCheckboxId] || false;
      if (!isApplicable) return;

      // Skip financial statement tasks if FS is not due this month
      if (fsTaskFieldIds.has(task.rtStatusFieldId) && !fsDue) return;

      total++;
      let status = activity.statusValues[task.rtStatusFieldId] || null;
      if (status === null && isApplicable) status = 'To Do';

      const changes = pendingChanges.get(activity._id);
      if (changes?.has(task.rtStatusFieldId)) {
        status = changes.get(task.rtStatusFieldId) || null;
      }

      if (status === 'N/A') { total--; return; }
      if (status === 'Done') done++;
    });

    if (total === 0) return 0;
    return (done / total) * 100;
  }

  // Calculate FS due month for a company
  function getFsDueMonth(fiscalYearEnd: number, deadlineMonths: number): { year: number; month: number } {
    const endDate = new Date(fiscalYearEnd);
    // Add (deadline - 1) months
    endDate.setMonth(endDate.getMonth() + deadlineMonths - 1);
    return { year: endDate.getFullYear(), month: endDate.getMonth() };
  }

  // Check if FS is due for a company in the current displayed month
  function isFSDue(company: Company): boolean {
    if (!company.fiscalYearEnd || !company.fsDeadlineMonths) return false;
    const dueDate = getFsDueMonth(company.fiscalYearEnd, company.fsDeadlineMonths);
    return dueDate.year === year && dueDate.month === month;
  }

  // Get category progress counts for a company
  function getCategoryProgress(company: Company, category: string): { done: number; total: number } | null {
    const activity = tasksByCompany.get(company._id);
    if (!activity) return null;

    // Get tasks for this category
    let categoryTasks: TaskMapping[] = [];
    switch (category) {
      case 'Accounting':
        categoryTasks = ACCOUNTING_TASKS;
        break;
      case 'Payroll':
        categoryTasks = PAYROLL_TASKS;
        break;
      case 'Financial Statements':
        // FS is only shown if due this month
        if (!isFSDue(company)) return { done: 0, total: 0 };  // Return 0/0 instead of null
        categoryTasks = FINANCIAL_STATEMENTS_TASKS;
        break;
    }

    let total = 0;
    let done = 0;

    categoryTasks.forEach((task) => {
      const isApplicable = company.checkboxConfig[task.companyCheckboxId] || false;
      if (!isApplicable) return;

      total++;
      let status = activity.statusValues[task.rtStatusFieldId] || null;
      if (status === null && isApplicable) status = 'To Do';

      const changes = pendingChanges.get(activity._id);
      if (changes?.has(task.rtStatusFieldId)) {
        status = changes.get(task.rtStatusFieldId) || null;
      }

      if (status === 'N/A') { total--; return; }
      if (status === 'Done') done++;
    });

    // Return 0/0 instead of null when no tasks are applicable
    return { done, total };
  }


  const getCellData = (company: Company, task: TaskMapping) => {
    const isApplicable = company.checkboxConfig[task.companyCheckboxId] || false;
    const activity = tasksByCompany.get(company._id);
    const hasActivity = !!activity;

    // Bug fix: Check if this is an FS task and if FS is due for this company
    const isFsTask = fsTaskFieldIds.has(task.rtStatusFieldId);
    const fsDue = isFSDue(company);

    // FS task but not due this month → treat as not applicable (show dash)
    if (isFsTask && !fsDue) {
      return { status: null, isApplicable: false, hasActivity: false, activityId: null, isChanged: false };
    }

    let status = activity?.statusValues[task.rtStatusFieldId] || null;

    // CRITICAL: If activity exists but status is null, AND checkbox is checked,
    // the function field should have set "To Do" as initial value.
    // Since API doesn't return function field values, we treat null as "initial state"
    // and let the cell rendering logic decide whether to show "To Do" or placeholder.

    // If task exists but status is null AND checkbox is checked, assume function field set "To Do"
    if (hasActivity && status === null && isApplicable) {
      status = 'To Do';
    }

    // Check pending changes
    if (activity) {
      const changes = pendingChanges.get(activity._id);
      if (changes?.has(task.rtStatusFieldId)) {
        status = changes.get(task.rtStatusFieldId) || null;
      }
    }

    const isChanged = activity ? (pendingChanges.get(activity._id)?.has(task.rtStatusFieldId) || false) : false;

    return { status, isApplicable, hasActivity, activityId: activity?._id || null, isChanged };
  };

  const COMPANY_COL_W = '160px';
  const COMPLETION_COL_W = '60px';
  const CELL_MIN_W = '40px';
  const ACCORDION_ROW_H = '36px';  // Thin row for accordion pills only
  const TASK_NAME_ROW_H = '120px';  // Row for vertical task names
  const LABEL_BAR_H = '28px';

  // Resolve hovered column label (translated)
  const hoveredLabel = useMemo(() => {
    if (!hoveredCell) return null;
    // Check if it's a collapsed category column
    if (['Accounting', 'Payroll', 'Financial Statements'].includes(hoveredCell.columnId)) {
      return getCategoryLabel(hoveredCell.columnId, language);
    }
    // Find task label from any expanded category
    for (const col of columnStructure) {
      if (col.type === 'expanded' && col.tasks) {
        const found = col.tasks.find((task) => task.rtStatusFieldId === hoveredCell.columnId);
        if (found) return getTaskLabel(found.rtStatusFieldId, language);
      }
    }
    return null;
  }, [hoveredCell, columnStructure, language]);

  return (
    <Box overflow="auto" flex="1" position="relative">
      <Box display="flex" flexDirection="column" minW="100%">
        {/* Sticky header block: accordion row + task names row + label bar */}
        <Box position="sticky" top={0} zIndex={3} bg="gray.800">
          {/* ROW 1: Accordion pills only */}
          <Box display="flex">
            {/* Company column header - empty for accordion row */}
            <Box
              minW={COMPANY_COL_W} w={COMPANY_COL_W} flexShrink={0} h={ACCORDION_ROW_H}
              position="sticky" left={0} zIndex={4} bg="gray.800"
              borderBottom="1px solid" borderColor="gray.700"
            />

            {/* Completion % column header - empty for accordion row */}
            <Box
              minW={COMPLETION_COL_W} w={COMPLETION_COL_W} flexShrink={0} h={ACCORDION_ROW_H}
              position="sticky" left={COMPANY_COL_W} zIndex={4} bg="gray.800"
              borderBottom="1px solid" borderColor="gray.700"
            />

            {/* Render accordion pills spanning each category */}
            {columnStructure.map((col) => {
              const color = CATEGORY_COLORS[col.category];
              const bg = CATEGORY_BG[col.category] || 'transparent';

              if (col.type === 'expanded' && col.tasks) {
                // Expanded category - pill spans all task columns
                const colSpan = col.tasks.length;

                return (
                  <Box
                    key={`accordion-${col.category}`}
                    flex={colSpan}
                    minW={`calc(${CELL_MIN_W} * ${colSpan})`}
                    h={ACCORDION_ROW_H}
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                    bg={bg}
                    borderBottom="1px solid"
                    borderColor="gray.700"
                    pl={2}
                  >
                    <Box
                      px={3}
                      py={1}
                      borderRadius="full"
                      bg="transparent"
                      border="1px solid"
                      borderColor={color}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      gap={1}
                      cursor="pointer"
                      color={color}
                      fontSize="xs"
                      fontWeight="bold"
                      _hover={{ opacity: 0.85 }}
                      transition="all 0.15s"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleCategory(col.category);
                      }}
                      flexShrink={0}
                      whiteSpace="nowrap"
                    >
                      <HailerChevron
                        boxSize={3}
                        transform="rotate(180deg)"
                        transition="transform 0.15s"
                      />
                      <Text as="span">{getCategoryLabel(col.category, language)}</Text>
                    </Box>
                  </Box>
                );
              } else {
                // Collapsed category - single narrow column with compact chevron pill
                return (
                  <Box
                    key={`accordion-collapsed-${col.category}`}
                    flex="1"
                    minW={CELL_MIN_W}
                    h={ACCORDION_ROW_H}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg={bg}
                    borderBottom="1px solid"
                    borderColor="gray.700"
                  >
                    <Box
                      w="24px"
                      h="24px"
                      borderRadius="full"
                      bg="transparent"
                      border="1px solid"
                      borderColor={color}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      cursor="pointer"
                      color={color}
                      _hover={{ opacity: 0.85 }}
                      transition="all 0.15s"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleCategory(col.category);
                      }}
                      flexShrink={0}
                    >
                      <HailerChevron
                        boxSize={3}
                        transform="rotate(90deg)"
                        transition="transform 0.15s"
                      />
                    </Box>
                  </Box>
                );
              }
            })}
          </Box>

          {/* ROW 2: Task names (and search input) */}
          <Box display="flex">
            {/* Company column header - Total completion % + Search input */}
            <Box
              minW={COMPANY_COL_W} w={COMPANY_COL_W} flexShrink={0} h={TASK_NAME_ROW_H}
              display="flex" flexDirection="column" justifyContent="flex-end" px={2} pb={2} gap={1}
              position="sticky" left={0} zIndex={4} bg="gray.800"
              borderBottom="1px solid" borderColor="gray.600"
            >
              <Text fontSize="30px" fontWeight="bold" color="#7BC8A4" lineHeight="1">
                {totalCompletion}%
              </Text>
              <InputGroup size="sm">
                <InputLeftElement pointerEvents="none" h="32px">
                  <HailerSearch boxSize={4} color="gray.400" />
                </InputLeftElement>
                <Input
                  placeholder={t.ui.filterPlaceholder}
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  bg="gray.700"
                  border="1px solid"
                  borderColor="gray.600"
                  borderRadius="full"
                  _hover={{ borderColor: 'gray.500' }}
                  _focus={{ borderColor: 'blue.400', boxShadow: '0 0 0 1px var(--chakra-colors-blue-400)' }}
                  color="white"
                  _placeholder={{ color: 'gray.500' }}
                  h="32px"
                />
              </InputGroup>
            </Box>

            {/* Completion % column header */}
            <Box
              minW={COMPLETION_COL_W} w={COMPLETION_COL_W} flexShrink={0} h={TASK_NAME_ROW_H}
              display="flex" alignItems="flex-end" justifyContent="center" px={2} pb={2}
              position="sticky" left={COMPANY_COL_W} zIndex={4} bg="gray.800"
              borderBottom="1px solid" borderColor="gray.600"
            >
              <Text fontSize="xs" fontWeight="bold">{t.ui.completionPercentage}</Text>
            </Box>

            {/* Render task name columns */}
            {columnStructure.map((col) => {
              if (col.type === 'expanded' && col.tasks) {
                // Expanded category - render individual task name columns
                return col.tasks.map((task) => {
                  const bg = CATEGORY_BG[col.category] || 'transparent';
                  const isHighlighted = hoveredCell?.columnId === task.rtStatusFieldId;
                  const isWide = wideColumns[task.rtStatusFieldId] || false;

                  return (
                    <Box
                      key={task.rtStatusFieldId}
                      ref={(el) => {
                        if (el) {
                          columnRefs.current.set(task.rtStatusFieldId, el);
                          el.setAttribute('data-column-id', task.rtStatusFieldId);
                        }
                      }}
                      flex="1" minW={CELL_MIN_W} h={TASK_NAME_ROW_H}
                      display="flex" flexDirection="column" alignItems="center"
                      justifyContent={isWide ? 'center' : 'flex-end'}
                      position="relative"
                      borderBottom="1px solid" borderColor="gray.600"
                      bg={isHighlighted ? 'blue.700' : bg}
                      pb={isWide ? 0 : 2}
                      px={isWide ? 2 : 0}
                      transition="background-color 0.1s"
                    >
                      {/* Task label - horizontal when wide, vertical when narrow */}
                      <Box
                        fontSize="sm"
                        fontWeight={isHighlighted ? 'bold' : 'medium'}
                        color={isHighlighted ? 'white' : 'gray.300'}
                        sx={isWide ? {
                          cursor: 'pointer',
                          userSelect: 'none',
                          textAlign: 'left',
                          width: '100%',
                          whiteSpace: 'pre-wrap',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        } : {
                          writingMode: 'vertical-rl',
                          textOrientation: 'mixed',
                          transform: 'rotate(180deg)',
                          cursor: 'pointer',
                          userSelect: 'none',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          maxHeight: '110px',
                        }}
                        onMouseEnter={() => setHoveredCell({ companyId: '', columnId: task.rtStatusFieldId, rowIndex: -1 })}
                        onMouseLeave={() => setHoveredCell(null)}
                      >
                        {getTaskLabel(task.rtStatusFieldId, language)}
                      </Box>
                    </Box>
                  );
                });
              } else {
                // Collapsed category - single narrow column with vertical category name
                const isHighlighted = hoveredCell?.columnId === col.category;
                const bg = CATEGORY_BG[col.category] || 'transparent';
                const isWide = wideColumns[col.category] || false;

                return (
                  <Box
                    key={`collapsed-names-${col.category}`}
                    ref={(el) => {
                      if (el) {
                        columnRefs.current.set(col.category, el);
                        el.setAttribute('data-column-id', col.category);
                      }
                    }}
                    flex="1"
                    minW={CELL_MIN_W}
                    h={TASK_NAME_ROW_H}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent={isWide ? 'center' : 'flex-end'}
                    position="relative"
                    borderBottom="1px solid"
                    borderColor="gray.600"
                    bg={isHighlighted ? 'blue.700' : bg}
                    pb={isWide ? 0 : 2}
                    px={isWide ? 2 : 0}
                    transition="background-color 0.1s"
                  >
                    {/* Category name - horizontal when wide, vertical when narrow */}
                    <Box
                      fontSize="sm"
                      fontWeight="bold"
                      color={isHighlighted ? 'white' : CATEGORY_COLORS[col.category]}
                      sx={isWide ? {
                        cursor: 'pointer',
                        userSelect: 'none',
                        textAlign: 'center',
                        width: '100%',
                        whiteSpace: 'pre-wrap',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      } : {
                        writingMode: 'vertical-rl',
                        textOrientation: 'mixed',
                        transform: 'rotate(180deg)',
                        cursor: 'pointer',
                        userSelect: 'none',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxHeight: '110px',
                      }}
                      onMouseEnter={() => setHoveredCell({ companyId: '', columnId: col.category, rowIndex: -1 })}
                      onMouseLeave={() => setHoveredCell(null)}
                    >
                      {getCategoryLabel(col.category, language)}
                    </Box>
                  </Box>
                );
              }
            })}
          </Box>

          {/* Label bar - hovered task name only */}
          <Box
            h={LABEL_BAR_H}
            display="flex"
            alignItems="center"
            bg="gray.800"
            transition="background-color 0.15s"
            overflow="hidden"
            px={2}
            borderBottom="1px solid"
            borderColor="gray.600"
          >
            {/* Hovered task name - center */}
            {hoveredLabel && (
              <Box
                flex="1"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="blue.700"
                borderRadius="md"
                px={3}
              >
                <Text fontSize="sm" fontWeight="bold" color="white" noOfLines={1}>
                  {hoveredLabel}
                </Text>
              </Box>
            )}
          </Box>
        </Box>

        {/* Company rows */}
        {companies.map((company, rowIndex) => {
          const activity = tasksByCompany.get(company._id);
          const isLocked = activity?.currentPhase === DONE_PHASE_ID;
          const completionPercentage = getCompletionPercentage(company);
          const isComplete = completionPercentage === 100;

          return (
            <Box
              key={company._id}
              display="flex"
              borderBottom="1px solid" borderColor="gray.700"
              _hover={{ bg: isLocked ? 'green.900' : 'gray.750' }}
              bg={isLocked ? 'rgba(34, 139, 34, 0.15)' : undefined} // subtle green tint
            >
              {/* Company name - sticky left */}
              <Box
                minW={COMPANY_COL_W} w={COMPANY_COL_W} flexShrink={0}
                display="flex" alignItems="center" px={2} py={1}
                position="sticky" left={0} zIndex={2}
                bg={isLocked ? 'rgba(34, 139, 34, 0.15)' : 'gray.800'}
                borderRight="1px solid" borderColor="gray.700"
                transition="background-color 0.1s"
              >
                <Text
                  fontSize="md"
                  color={hoveredCell?.companyId === company._id ? '#9DD8BE' : '#7BC8A4'}
                  fontWeight={hoveredCell?.companyId === company._id ? 'extrabold' : 'bold'}
                  noOfLines={1}
                  cursor="pointer"
                  _hover={{ textDecoration: 'underline', color: '#9DD8BE' }}
                  onClick={() => hailer.ui.activity.open(company._id, { tab: 'discussion' })}
                  transition="all 0.1s"
                >
                  {company.name}
                </Text>
              </Box>

              {/* Completion % button - sticky left after company name */}
              <Box
                minW={COMPLETION_COL_W} w={COMPLETION_COL_W} flexShrink={0}
                display="flex" alignItems="center" justifyContent="center" py={1}
                position="sticky" left={COMPANY_COL_W} zIndex={2}
                bg={isLocked ? 'rgba(34, 139, 34, 0.15)' : 'gray.800'}
              >
                {activity && (
                  <CompletionButton
                    percentage={completionPercentage}
                    isClickable={isComplete && !isLocked}
                    onClick={() => {
                      if (isComplete && !isLocked) {
                        onCompletionClick(activity._id);
                      }
                    }}
                  />
                )}
              </Box>

              {/* Render cells in fixed category order (matching headers) */}
              {columnStructure.map((col) => {
                if (col.type === 'expanded' && col.tasks) {
                  // Expanded category - render individual task cells
                  return col.tasks.map((task) => {
                    const { status, isApplicable, hasActivity, activityId, isChanged } = getCellData(company, task);
                    const bg = CATEGORY_BG[col.category] || 'transparent';

                    return (
                      <Box
                        key={task.rtStatusFieldId}
                        flex="1" minW={CELL_MIN_W}
                        display="flex" alignItems="center" justifyContent="center"
                        py={1}
                        bg={bg}
                        opacity={isLocked ? 0.6 : 1}
                      >
                        <StatusCell
                          status={status}
                          isApplicable={isApplicable}
                          isChanged={isChanged}
                          hasActivity={hasActivity}
                          categoryColor={CATEGORY_COLORS[col.category]}
                          onClick={() => {
                            if (!isLocked && isApplicable && activityId && status !== 'N/A') {
                              onCellClick(activityId, task.rtStatusFieldId, status);
                            }
                          }}
                          onMouseEnter={() => setHoveredCell({ companyId: company._id, columnId: task.rtStatusFieldId, rowIndex })}
                          onMouseLeave={() => setHoveredCell(null)}
                        />
                      </Box>
                    );
                  });
                } else {
                  // Collapsed category - render single narrow summary cell
                  const progress = getCategoryProgress(company, col.category);
                  const hasActivity = !!activity;

                  // No activity or no applicable tasks → show grey dash
                  if (!hasActivity || !progress || progress.total === 0) {
                    return (
                      <Box
                        key={`collapsed-${col.category}`}
                        flex="1"
                        minW={CELL_MIN_W}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        py={1}
                        bg={CATEGORY_BG[col.category]}
                        opacity={isLocked ? 0.6 : 1}
                      >
                        <Box
                          w="32px"
                          h="32px"
                          borderRadius="full"
                          bg="gray.700"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          color="gray.500"
                          fontSize="md"
                          fontWeight="bold"
                        >
                          −
                        </Box>
                      </Box>
                    );
                  }

                  // Pill color: grey if 0/0, red if 0 done, yellow if partially done, green if all done
                  const pillBg = progress.total === 0
                    ? '#718096'  // gray.500
                    : progress.done === 0
                      ? '#C45555'
                      : progress.done === progress.total
                        ? '#4DB88A'
                        : '#C49B3E';

                  return (
                    <Box
                      key={`collapsed-${col.category}`}
                      flex="1"
                      minW={CELL_MIN_W}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      py={1}
                      bg={CATEGORY_BG[col.category]}
                      opacity={isLocked ? 0.6 : 1}
                    >
                      <Box
                        px={2}
                        h="32px"
                        borderRadius="full"
                        bg={pillBg}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        color="white"
                        fontSize="xs"
                        fontWeight="bold"
                        cursor={isLocked ? 'default' : 'pointer'}
                        _hover={isLocked ? {} : { opacity: 0.85, transform: 'scale(1.05)' }}
                        transition="all 0.1s"
                        onClick={() => {
                          if (!isLocked) {
                            onCategoryPillClick(company._id, col.category);
                          }
                        }}
                        onMouseEnter={() => setHoveredCell({ companyId: company._id, columnId: col.category, rowIndex })}
                        onMouseLeave={() => setHoveredCell(null)}
                        whiteSpace="nowrap"
                      >
                        {progress.done}/{progress.total}
                      </Box>
                    </Box>
                  );
                }
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
