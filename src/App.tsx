import { useEffect, useState, useMemo, useRef } from 'react';
import { Box, Text, Spinner, VStack, useToast } from '@chakra-ui/react';
import useHailer from './hailer/use-hailer';
import { Company, RecurringTaskActivity } from './types';
import {
  fetchCompanies,
  fetchRecurringTasks,
  createMonthlyTasks,
  bulkUpdateStatuses,
  moveTaskToDone,
} from './services/dataService';
import { formatMonthDisplay } from './utils/dateUtils';
import { ALL_TASKS } from './config/taskMappings';
import Header from './components/Header';
import MatrixGrid from './components/MatrixGrid';
import ActionFABs from './components/ActionFABs';
import CategoryPopup from './components/CategoryPopup';
import CreatingTasksSpinner from './components/CreatingTasksSpinner';
import { useLanguage } from './i18n/LanguageContext';
import { getCategoryLabel } from './i18n/translations';

export default function App() {
  const { hailer, inside, latestSignal } = useHailer();
  const toast = useToast();
  const { t, language } = useLanguage();

  // Load selected month from localStorage or default to current month
  const [year, setYear] = useState(() => {
    const saved = localStorage.getItem('rekna-selected-month');
    if (saved) {
      try {
        const [savedYear] = saved.split('-').map(Number);
        if (savedYear && savedYear >= 2000 && savedYear <= 2100) return savedYear;
      } catch {
        // Invalid format, use default
      }
    }
    return new Date().getFullYear();
  });

  const [month, setMonth] = useState(() => {
    const saved = localStorage.getItem('rekna-selected-month');
    if (saved) {
      try {
        const [, savedMonth] = saved.split('-').map(Number);
        // Convert from 1-12 format to 0-11 (JavaScript month index)
        if (savedMonth !== undefined && savedMonth >= 1 && savedMonth <= 12) return savedMonth - 1;
      } catch {
        // Invalid format, use default
      }
    }
    return new Date().getMonth();
  });

  // Track pending month separately from displayed month
  const [pendingYear, setPendingYear] = useState<number | null>(null);
  const [pendingMonth, setPendingMonth] = useState<number | null>(null);

  const [companies, setCompanies] = useState<Company[]>([]);
  const [tasks, setTasks] = useState<RecurringTaskActivity[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [pendingChanges, setPendingChanges] = useState<Map<string, Map<string, string | null>>>(new Map());
  const [isCreating, setIsCreating] = useState(false);
  const createAbortRef = useRef<AbortController | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Load accordion state from localStorage or use defaults
  const [categoryExpanded, setCategoryExpanded] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('rekna-accordion-state');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // Invalid JSON, use defaults
      }
    }
    return {
      'Accounting': true,
      'Payroll': true,
      'Financial Statements': false,
    };
  });

  const [categoryPopupState, setCategoryPopupState] = useState<{ companyId: string; category: string } | null>(null);

  const [searchTerm, setSearchTerm] = useState('');

  // Filter companies based on search term
  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate how many companies don't have a task for this month yet
  // Only count companies that have at least one applicable task (checkbox checked)
  // Use filteredCompanies to respect search filter
  const existingCompanyIds = new Set(tasks.map((t) => t.companyId));
  const missingTaskCount = filteredCompanies.filter((c) => {
    if (existingCompanyIds.has(c._id)) return false;
    return Object.values(c.checkboxConfig).some((v) => v);
  }).length;

  // Theme is handled by Chakra's default color mode

  // Load data when inside changes or when pending month is set
  useEffect(() => {
    if (!inside) return;

    // Determine which month to load
    const targetYear = pendingYear !== null ? pendingYear : year;
    const targetMonth = pendingMonth !== null ? pendingMonth : month;

    async function loadData() {
      try {
        setLoading(true);
        setError(null);
        const [companiesData, tasksData] = await Promise.all([
          fetchCompanies(hailer),
          fetchRecurringTasks(hailer, targetYear, targetMonth),
        ]);
        console.log(`[App] Loaded ${companiesData.length} companies, ${tasksData.length} tasks`);

        // Update displayed month and data together in one render
        if (pendingYear !== null) {
          setYear(pendingYear);
          // Save to localStorage (format: "YYYY-MM")
          const monthStr = String((pendingMonth !== null ? pendingMonth : month) + 1).padStart(2, '0');
          localStorage.setItem('rekna-selected-month', `${pendingYear}-${monthStr}`);
        }
        if (pendingMonth !== null) {
          setMonth(pendingMonth);
          // Save to localStorage (format: "YYYY-MM")
          const monthStr = String(pendingMonth + 1).padStart(2, '0');
          localStorage.setItem('rekna-selected-month', `${pendingYear !== null ? pendingYear : year}-${monthStr}`);
        }
        setPendingYear(null);
        setPendingMonth(null);

        setCompanies(companiesData);
        setTasks(tasksData);
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Failed to load data';
        setError(msg);
        toast({ description: msg, status: 'error', duration: 5000, isClosable: true });
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [inside, pendingYear, pendingMonth]);

  // Listen for signals and re-fetch tasks when activity.create/update/delete fires for Recurring Tasks workflow
  useEffect(() => {
    if (!inside || !latestSignal) return;

    const signal = latestSignal;
    const RECURRING_TASKS_WORKFLOW_ID = '68c004aa097b8b294325c81f';

    // Check if signal is for Recurring Tasks workflow
    const isRelevant =
      (signal.sig === 'activity.create' ||
       signal.sig === 'activity.update' ||
       signal.sig === 'activity.delete') &&
      signal.meta?.processId === RECURRING_TASKS_WORKFLOW_ID;

    if (isRelevant) {
      console.log(`[App] Relevant signal detected (${signal.sig}), re-fetching tasks for current month`);
      fetchRecurringTasks(hailer, year, month)
        .then((tasksData) => {
          setTasks(tasksData);
          console.log(`[App] Re-fetched ${tasksData.length} tasks after signal`);
        })
        .catch((err) => {
          console.error('[App] Failed to re-fetch tasks after signal:', err);
        });
    }
  }, [latestSignal, inside, year, month, hailer]);

  const handlePrevMonth = () => {
    // Set pending month/year to trigger background fetch
    if (month === 0) {
      setPendingMonth(11);
      setPendingYear(year - 1);
    } else {
      setPendingMonth(month - 1);
      setPendingYear(year);
    }
    setPendingChanges(new Map());
  };

  const handleNextMonth = () => {
    // Set pending month/year to trigger background fetch
    if (month === 11) {
      setPendingMonth(0);
      setPendingYear(year + 1);
    } else {
      setPendingMonth(month + 1);
      setPendingYear(year);
    }
    setPendingChanges(new Map());
  };

  const handleToggleCategory = (category: string) => {
    setCategoryExpanded((prev) => {
      const updated = { ...prev, [category]: !prev[category] };
      // Save to localStorage
      localStorage.setItem('rekna-accordion-state', JSON.stringify(updated));
      return updated;
    });
  };

  const handleCreateTasks = async () => {
    if (isCreating) {
      // Stop creation
      createAbortRef.current?.abort();
      return;
    }

    const controller = new AbortController();
    createAbortRef.current = controller;

    try {
      setIsCreating(true);
      const count = await createMonthlyTasks(hailer, companies, tasks, year, month, controller.signal);
      if (controller.signal.aborted) {
        toast({ description: `Stopped after creating ${count} task(s).`, status: 'warning', duration: 3000, isClosable: true });
      } else if (count === 0) {
        toast({ description: 'All companies already have tasks for this month.', status: 'info', duration: 3000, isClosable: true });
      } else {
        toast({ description: `Created ${count} task(s).`, status: 'success', duration: 3000, isClosable: true });
      }
      const tasksData = await fetchRecurringTasks(hailer, year, month);
      setTasks(tasksData);
    } catch (err) {
      console.error('[App] Create tasks error:', err);
      const msg = err instanceof Error ? err.message : (typeof err === 'string' ? err : JSON.stringify(err));
      toast({ description: msg || 'Unknown error creating tasks', status: 'error', duration: 8000, isClosable: true });
    } finally {
      setIsCreating(false);
      createAbortRef.current = null;
    }
  };

  const handleCellClick = (activityId: string, fieldId: string, currentStatus: string | null) => {
    // INTENTIONAL ORDER: To Do → Done → Doing → To Do
    // Most tasks skip "Doing" — users click once to mark Done.
    // This saves clicks. Do NOT change back to To Do → Doing → Done.
    let newStatus: string | null = null;
    if (!currentStatus) newStatus = 'To Do';
    else if (currentStatus === 'To Do') newStatus = 'Done';
    else if (currentStatus === 'Done') newStatus = 'Doing';
    else if (currentStatus === 'Doing') newStatus = 'To Do';

    setPendingChanges((prev) => {
      const updated = new Map(prev);
      if (!updated.has(activityId)) updated.set(activityId, new Map());
      updated.get(activityId)!.set(fieldId, newStatus);
      return updated;
    });
  };

  const handleConfirm = async () => {
    try {
      setIsSaving(true);
      await bulkUpdateStatuses(hailer, pendingChanges);
      toast({ description: t.ui.changesSaved, status: 'success', duration: 3000, isClosable: true });
      const tasksData = await fetchRecurringTasks(hailer, year, month);
      setTasks(tasksData);
      setPendingChanges(new Map());
    } catch (err) {
      toast({ description: err instanceof Error ? err.message : 'Failed to save', status: 'error', duration: 5000, isClosable: true });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDiscard = () => {
    setPendingChanges(new Map());
    toast({ description: t.ui.changesDiscarded, status: 'info', duration: 2000, isClosable: true });
  };

  const handleCategoryPillClick = (companyId: string, category: string) => {
    setCategoryPopupState({ companyId, category });
  };

  const handleCategoryPopupConfirm = async (changes: Map<string, string | null>) => {
    if (changes.size === 0) return;

    // Find the company's task activity
    const task = tasks.find((t) => t.companyId === categoryPopupState?.companyId);
    if (!task) return;

    // Build activity changes map
    const activityChanges = new Map<string, Map<string, string | null>>();
    activityChanges.set(task._id, changes);

    try {
      setIsSaving(true);
      await bulkUpdateStatuses(hailer, activityChanges);
      const categoryName = getCategoryLabel(categoryPopupState?.category || 'Category', language);
      toast({ description: t.ui.categoryUpdated.replace('{category}', categoryName), status: 'success', duration: 3000, isClosable: true });
      const tasksData = await fetchRecurringTasks(hailer, year, month);
      setTasks(tasksData);
      setCategoryPopupState(null);
    } catch (err) {
      toast({ description: err instanceof Error ? err.message : 'Failed to save', status: 'error', duration: 5000, isClosable: true });
    } finally {
      setIsSaving(false);
    }
  };

  const handleCompletionClick = async (activityId: string) => {
    try {
      await moveTaskToDone(hailer, activityId);
      toast({ description: t.ui.movedToDonePhase, status: 'success', duration: 3000, isClosable: true });
      const tasksData = await fetchRecurringTasks(hailer, year, month);
      setTasks(tasksData);
    } catch (err) {
      toast({ description: err instanceof Error ? err.message : 'Failed to move', status: 'error', duration: 5000, isClosable: true });
    }
  };

  const categoryPopupCompany = companies.find((c) => c._id === categoryPopupState?.companyId);
  const categoryPopupActivity = categoryPopupState?.companyId ? tasks.find((t) => t.companyId === categoryPopupState.companyId) || null : null;

  // Calculate total monthly completion percentage across all companies
  // MUST be before early returns to satisfy React hooks rules
  const totalCompletion = useMemo(() => {
    if (tasks.length === 0) return 0;

    let totalTasks = 0;
    let doneTasks = 0;

    tasks.forEach((activity) => {
      const company = companies.find((c) => c._id === activity.companyId);
      if (!company) return;

      Object.entries(activity.statusValues).forEach(([fieldId, status]) => {
        const taskMapping = ALL_TASKS.find((t) => t.rtStatusFieldId === fieldId);
        if (!taskMapping) return;

        const isApplicable = company.checkboxConfig[taskMapping.companyCheckboxId] || false;
        if (!isApplicable) return;

        // Check for pending changes
        const changes = pendingChanges.get(activity._id);
        let effectiveStatus = status;
        if (changes?.has(fieldId)) {
          effectiveStatus = changes.get(fieldId) || null;
        }

        if (effectiveStatus === null && isApplicable) {
          effectiveStatus = 'To Do';
        }

        // Exclude N/A from both total and done counts
        if (effectiveStatus === 'N/A') return;

        totalTasks++;
        if (effectiveStatus === 'Done') doneTasks++;
      });
    });

    if (totalTasks === 0) return 0;
    return Math.round((doneTasks / totalTasks) * 100);
  }, [tasks, companies, pendingChanges]);

  if (!inside) {
    return (
      <Box p={8} textAlign="center">
        <Text fontSize="lg" color="subtleText">{t.ui.connectingToHailer}</Text>
      </Box>
    );
  }

  if (loading && companies.length === 0) {
    return (
      <Box p={8} textAlign="center">
        <Spinner size="xl" />
        <Text mt={4}>{t.ui.loadingData}</Text>
      </Box>
    );
  }

  if (error && companies.length === 0) {
    return (
      <Box p={8} textAlign="center">
        <Text color="red.500">{error}</Text>
      </Box>
    );
  }

  // Check if we're loading a pending month
  const isTransitioning = pendingYear !== null || pendingMonth !== null;

  // Calculate total number of pending changes
  const changeCount = Array.from(pendingChanges.values()).reduce(
    (total, fieldMap) => total + fieldMap.size,
    0
  );

  return (
    <VStack spacing={0} align="stretch" h="100vh" bg="gray.800" color="white">
      <Header
        monthDisplay={formatMonthDisplay(year, month, language)}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
        onCreateTasks={handleCreateTasks}
        isCreating={isCreating}
        categoryExpanded={categoryExpanded}
        onToggleCategory={handleToggleCategory}
        missingTaskCount={missingTaskCount}
        isTransitioning={isTransitioning}
      />

      <MatrixGrid
        companies={filteredCompanies}
        tasks={tasks}
        pendingChanges={pendingChanges}
        onCellClick={handleCellClick}
        categoryExpanded={categoryExpanded}
        onToggleCategory={handleToggleCategory}
        year={year}
        month={month}
        onCategoryPillClick={handleCategoryPillClick}
        onCompletionClick={handleCompletionClick}
        hailer={hailer}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        totalCompletion={totalCompletion}
      />

      <ActionFABs
        visible={pendingChanges.size > 0}
        onConfirm={handleConfirm}
        onDiscard={handleDiscard}
        isSaving={isSaving}
        changeCount={changeCount}
      />

      <CreatingTasksSpinner visible={isCreating} />

      {categoryPopupCompany && categoryPopupState && (
        <CategoryPopup
          isOpen={!!categoryPopupState}
          onClose={() => setCategoryPopupState(null)}
          company={categoryPopupCompany}
          activity={categoryPopupActivity}
          category={categoryPopupState.category}
          onConfirm={handleCategoryPopupConfirm}
        />
      )}
    </VStack>
  );
}
