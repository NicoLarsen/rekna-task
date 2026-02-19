import { HailerApi } from '@hailer/app-sdk';
import {
  COMPANIES_WORKFLOW_ID,
  COMPANIES_PHASE_ID,
  RECURRING_TASKS_WORKFLOW_ID,
  RT_CUSTOMER_FIELD_ID,
  RT_STARTS_FIELD_ID,
  ALL_TASKS,
  ACCOUNTING_TASKS,
  FINANCIAL_STATEMENTS_TASKS,
  getAllCheckboxFieldIds,
  getAllStatusFieldIds,
  ACCOUNTING_COMMENT_FIELD_ID,
  PAYROLL_COMMENT_FIELD_ID,
  FS_COMMENT_FIELD_ID,
  CATEGORY_COMMENT_FIELDS,
} from '../config/taskMappings';
import { Company, RecurringTaskActivity } from '../types';
import { getCheckboxValue, getActivityLinkId, getTextValue, getRawFieldValue } from '../utils/fieldUtils';
import { getMonthStart, formatMonthActivityName } from '../utils/dateUtils';

async function listActivities(
  hailer: HailerApi,
  workflowId: string,
  phaseId: string
): Promise<any[]> {
  // Paginate to get all activities (default returns only 20)
  const allActivities: any[] = [];
  let skip = 0;
  const pageSize = 20; // use default page size since custom limit breaks the SDK
  while (true) {
    const opts = skip > 0 ? { skip } : {};
    const raw = await hailer.activity.list(workflowId, phaseId, opts);
    const page = Array.isArray(raw) ? raw : (raw as any)?.activities || (raw as any)?.data || [];
    allActivities.push(...page);
    if (page.length < pageSize) break; // last page
    skip += page.length;
  }
  console.log(`[dataService] activity.list(${workflowId}/${phaseId}): ${allActivities.length} activities (${Math.ceil(skip / pageSize) + 1} pages)`);
  return allActivities;
}

// Field IDs for FS calculation
const FISCAL_YEAR_FIELD_ID = '68dbc23b4a49cff295cfe03b'; // daterange
const FS_DEADLINE_MONTHS_FIELD_ID = '68dbc2564a49cff295cfe16d'; // numericunit

// Fetch companies from Customers phase
export async function fetchCompanies(hailer: HailerApi): Promise<Company[]> {
  console.log('[dataService] fetchCompanies starting');
  const activities = await listActivities(hailer, COMPANIES_WORKFLOW_ID, COMPANIES_PHASE_ID);
  console.log(`[dataService] Got ${activities.length} companies`);

  const checkboxFieldIds = getAllCheckboxFieldIds();

  const companies = activities.map((activity) => {
    const checkboxConfig: Record<string, boolean> = {};
    checkboxFieldIds.forEach((fieldId) => {
      checkboxConfig[fieldId] = getCheckboxValue(activity, fieldId);
    });

    // Extract fiscal year end date
    const fiscalYearValue = getRawFieldValue(activity, FISCAL_YEAR_FIELD_ID);
    let fiscalYearEnd: number | null = null;
    if (fiscalYearValue) {
      // Could be { start: X, end: Y } or just a number
      if (typeof fiscalYearValue === 'object' && 'end' in fiscalYearValue) {
        fiscalYearEnd = fiscalYearValue.end;
      } else if (typeof fiscalYearValue === 'number') {
        fiscalYearEnd = fiscalYearValue;
      }
    }

    // Extract deadline months (numericunit)
    const deadlineValue = getRawFieldValue(activity, FS_DEADLINE_MONTHS_FIELD_ID);
    let fsDeadlineMonths: number | null = null;
    if (deadlineValue !== undefined && deadlineValue !== null) {
      // numericunit could be { value: X } or just X
      if (typeof deadlineValue === 'object' && 'value' in deadlineValue) {
        fsDeadlineMonths = Number(deadlineValue.value);
      } else {
        fsDeadlineMonths = Number(deadlineValue);
      }
    }

    return {
      _id: activity._id,
      name: activity.name,
      checkboxConfig,
      fiscalYearEnd,
      fsDeadlineMonths,
    };
  });

  // Sort companies alphabetically by name (case-insensitive)
  companies.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

  return companies;
}

// Fetch recurring tasks for a specific month (from both To do and Done phases)
export async function fetchRecurringTasks(
  hailer: HailerApi,
  year: number,
  month: number
): Promise<RecurringTaskActivity[]> {
  console.log(`[dataService] fetchRecurringTasks for ${year}-${month + 1}`);

  // Fetch from both "To do" and "Done" phases
  const TO_DO_PHASE_ID = '68c004aa097b8b294325c81e';
  const DONE_PHASE_ID = '699083ac8415a9621a71b377';

  const [todoActivities, doneActivities] = await Promise.all([
    listActivities(hailer, RECURRING_TASKS_WORKFLOW_ID, TO_DO_PHASE_ID),
    listActivities(hailer, RECURRING_TASKS_WORKFLOW_ID, DONE_PHASE_ID),
  ]);

  const allActivities = [
    ...todoActivities.map(a => ({ ...a, currentPhase: TO_DO_PHASE_ID })),
    ...doneActivities.map(a => ({ ...a, currentPhase: DONE_PHASE_ID })),
  ];

  console.log(`[dataService] Got ${allActivities.length} recurring tasks total (${todoActivities.length} To do, ${doneActivities.length} Done)`);

  const statusFieldIds = getAllStatusFieldIds();

  // Filter by month suffix in activity name (e.g., "Hailer Oy - 2026-02")
  // The starts date field doesn't persist through the API, so we use the name convention
  const monthSuffix = formatMonthActivityName(year, month); // e.g., "2026-02"

  const filtered = allActivities
    .filter((activity) => {
      return activity.name?.endsWith(` - ${monthSuffix}`);
    })
    .map((activity) => {
      const companyId = getActivityLinkId(activity, RT_CUSTOMER_FIELD_ID);

      const statusValues: Record<string, string | null> = {};
      statusFieldIds.forEach((fieldId) => {
        const value = getTextValue(activity, fieldId);
        // Store the value as-is (can be null, "To Do", "Doing", "Done")
        statusValues[fieldId] = value;
      });

      // Extract category comments
      const categoryComments: Record<string, string> = {
        'Accounting': getTextValue(activity, ACCOUNTING_COMMENT_FIELD_ID) || '',
        'Payroll': getTextValue(activity, PAYROLL_COMMENT_FIELD_ID) || '',
        'Financial Statements': getTextValue(activity, FS_COMMENT_FIELD_ID) || '',
      };

      return {
        _id: activity._id,
        name: activity.name,
        companyId: companyId || '',
        currentPhase: activity.currentPhase,
        statusValues,
        categoryComments,
      };
    })
    .filter((rt) => rt.companyId);

  console.log(`[dataService] ${filtered.length} tasks match month ${year}-${month + 1}`);
  return filtered;
}

// Check if financial statements are due for a company in a given month
// Logic: fiscal year end + deadline months - 1 month
function isFSDueForMonth(company: Company, year: number, month: number): boolean {
  if (!company.fiscalYearEnd || !company.fsDeadlineMonths) {
    return false;
  }
  const endDate = new Date(company.fiscalYearEnd);
  endDate.setMonth(endDate.getMonth() + company.fsDeadlineMonths - 1);
  const targetYear = endDate.getFullYear();
  const targetMonth = endDate.getMonth();
  return targetYear === year && targetMonth === month;
}

// Create monthly recurring task activities for all companies
export async function createMonthlyTasks(
  hailer: HailerApi,
  companies: Company[],
  existingTasks: RecurringTaskActivity[],
  year: number,
  month: number,
  signal?: AbortSignal
): Promise<number> {
  const monthStart = getMonthStart(year, month);
  const monthNameSuffix = formatMonthActivityName(year, month);

  const existingCompanyIds = new Set(existingTasks.map((rt) => rt.companyId));
  const companiesToCreate = companies.filter((company) => {
    // Skip companies that already have a task for this month
    if (existingCompanyIds.has(company._id)) return false;
    // Skip companies with no applicable tasks (all checkboxes unchecked)
    const hasAnyApplicable = Object.values(company.checkboxConfig).some((v) => v);
    return hasAnyApplicable;
  });

  if (companiesToCreate.length === 0) return 0;

  let created = 0;
  for (const company of companiesToCreate) {
    if (signal?.aborted) {
      console.log(`[dataService] Creation stopped by user after ${created} tasks`);
      return created;
    }
    console.log(`[dataService] Creating task for ${company.name}`);
    try {
      // Step 1: Create activity with name only (fields during create cause validation errors)
      const result = await hailer.activity.create(
        RECURRING_TASKS_WORKFLOW_ID,
        [{ name: `${company.name} - ${monthNameSuffix}` }],
        {}
      );
      const newActivity = Array.isArray(result) ? result[0] : result;
      const activityId = newActivity?._id;
      if (!activityId) {
        console.error(`[dataService] Create returned no activity ID:`, result);
        continue;
      }
      console.log(`[dataService] Created activity ${activityId}, now setting fields`);

      // Step 2: Update with customer link, date, and status fields for ALL tasks
      const fields: Record<string, string | number> = {
        [RT_CUSTOMER_FIELD_ID]: company._id,
        [RT_STARTS_FIELD_ID]: monthStart,
      };

      // Check if financial statements are due this month for this company
      const fsDue = isFSDueForMonth(company, year, month);
      const fsTaskFieldIds = new Set(FINANCIAL_STATEMENTS_TASKS.map((t) => t.rtStatusFieldId));
      const hasNoFsDeadline = company.fsDeadlineMonths === null || company.fiscalYearEnd === null;

      // Count fields for logging
      let fsFieldsSkipped = 0;
      let fsFieldsNA = 0;
      let fsFieldsToDo = 0;

      // Set status for ALL tasks: "To Do" if applicable, "N/A" if not
      ALL_TASKS.forEach((task) => {
        const isChecked = company.checkboxConfig[task.companyCheckboxId] || false;
        const isFsTask = fsTaskFieldIds.has(task.rtStatusFieldId);

        // FS task: SKIP entirely (don't create the field) if:
        // 1. No FS deadline or fiscal year configured, OR
        // 2. FS is configured but not due this month
        if (isFsTask && (hasNoFsDeadline || !fsDue)) {
          fsFieldsSkipped++;
          return;
        }

        // Regular N/A logic: unchecked checkbox
        if (!isChecked) {
          fields[task.rtStatusFieldId] = 'N/A';
          if (isFsTask) fsFieldsNA++;
        } else {
          fields[task.rtStatusFieldId] = 'To Do';
          if (isFsTask) fsFieldsToDo++;
        }
      });

      // Summary log per company
      if (fsFieldsSkipped > 0) {
        console.log(`[dataService] ${company.name}: skipped ${fsFieldsSkipped} FS fields (no deadline configured)`);
      } else if (fsFieldsToDo > 0) {
        console.log(`[dataService] ${company.name}: set ${fsFieldsToDo} FS fields to To Do (FS due)`);
      } else if (fsFieldsNA > 0) {
        console.log(`[dataService] ${company.name}: set ${fsFieldsNA} FS fields to N/A (FS not due)`);
      }

      await hailer.activity.update([{ _id: activityId, fields }], {});
      console.log(`[dataService] Updated ${activityId} with ${Object.keys(fields).length} fields`);
      created++;
    } catch (err: any) {
      console.error(`[dataService] Failed for ${company.name}:`, err);
      throw new Error(`Failed to create task for ${company.name}: ${err?.message || err}`);
    }
  }
  return created;
}

// Update existing tasks with missing fields (e.g., newly added VAT fields)
export async function updateExistingTasksWithMissingFields(
  hailer: HailerApi,
  companies: Company[],
  existingTasks: RecurringTaskActivity[],
  signal?: AbortSignal
): Promise<number> {
  const companyMap = new Map(companies.map((c) => [c._id, c]));

  let updated = 0;

  for (const task of existingTasks) {
    if (signal?.aborted) {
      console.log(`[dataService] Update stopped by user after ${updated} tasks`);
      return updated;
    }

    const company = companyMap.get(task.companyId);
    if (!company) continue;

    // Find fields that are missing (null/undefined in statusValues but should exist)
    const missingFields: Record<string, string> = {};

    // Only check accounting tasks for missing fields (VAT fields are in accounting)
    ACCOUNTING_TASKS.forEach((taskMapping) => {
      const fieldId = taskMapping.rtStatusFieldId;
      const currentValue = task.statusValues[fieldId];

      // If field is missing (null or undefined), add it
      if (currentValue === null || currentValue === undefined) {
        const isChecked = company.checkboxConfig[taskMapping.companyCheckboxId] || false;
        missingFields[fieldId] = isChecked ? 'To Do' : 'N/A';
      }
    });

    if (Object.keys(missingFields).length > 0) {
      console.log(`[dataService] Updating ${task.name} with ${Object.keys(missingFields).length} missing fields`);
      try {
        await hailer.activity.update([{ _id: task._id, fields: missingFields }], {});
        updated++;
      } catch (err: any) {
        console.error(`[dataService] Failed to update ${task.name}:`, err);
      }
    }
  }

  return updated;
}

// Bulk update recurring task statuses
export async function bulkUpdateStatuses(
  hailer: HailerApi,
  changes: Map<string, Map<string, string | null>>
): Promise<void> {
  if (changes.size === 0) return;

  const activitiesToUpdate = Array.from(changes.entries()).map(([activityId, fieldChanges]) => {
    const fields: Record<string, string | null> = {};
    fieldChanges.forEach((value, fieldId) => {
      fields[fieldId] = value;
    });

    return { _id: activityId, fields };
  });

  console.log(`[dataService] Bulk updating ${activitiesToUpdate.length} activities`);
  await hailer.activity.update(activitiesToUpdate, {});
}

// Move recurring task to Done phase (preserves N/A values)
export async function moveTaskToDone(
  hailer: HailerApi,
  activityId: string
): Promise<void> {
  const DONE_PHASE_ID = '699083ac8415a9621a71b377';
  console.log(`[dataService] Moving task ${activityId} to Done phase`);

  // Just move the phase — all applicable statuses are already "Done"
  // (completion button only appears at 100%), and N/A values must be preserved
  await hailer.activity.update([
    {
      _id: activityId,
      phaseId: DONE_PHASE_ID,
    },
  ], {});
}

// Update category comment field
export async function updateCategoryComment(
  hailer: HailerApi,
  activityId: string,
  category: string,
  comment: string
): Promise<void> {
  const fieldId = CATEGORY_COMMENT_FIELDS[category];
  if (!fieldId) {
    console.error(`[dataService] Unknown category: ${category}`);
    return;
  }

  // Use empty string to clear text fields (null may be ignored by some APIs)
  const fieldValue = comment.trim() === '' ? '' : comment;
  console.log(`[dataService] Updating ${category} comment for ${activityId}:`, {
    fieldId,
    fieldValue,
    isClearing: fieldValue === '',
  });

  try {
    const result = await hailer.activity.update([
      {
        _id: activityId,
        fields: {
          [fieldId]: fieldValue,
        },
      },
    ], {});
    console.log(`[dataService] Update result:`, result);
  } catch (err) {
    console.error(`[dataService] Update failed:`, err);
    throw err;
  }
}
