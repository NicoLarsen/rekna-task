// Company with checkbox configuration
export interface Company {
  _id: string;
  name: string;
  checkboxConfig: Record<string, boolean>; // checkboxFieldId -> isChecked
  fiscalYearEnd: number | null; // epoch ms of fiscal year end date
  fsDeadlineMonths: number | null; // months after fiscal year end
}

// Recurring task activity for a specific company/month
export interface RecurringTaskActivity {
  _id: string;
  name: string;
  companyId: string;
  currentPhase: string; // phase ID
  statusValues: Record<string, string | null>; // statusFieldId -> "To Do" | "Doing" | "Done" | null
  categoryComments: Record<string, string>; // category -> comment text
}

// Cell data for the matrix
export interface CellData {
  companyId: string;
  taskCheckboxId: string;
  taskStatusFieldId: string;
  activityId: string | null;
  isApplicable: boolean; // company has checkbox ticked
  status: string | null; // "To Do" | "Doing" | "Done" | null
}

// Pending change for batch update
export interface PendingChange {
  activityId: string;
  fieldId: string;
  newValue: string | null;
}
