// Workflow and Phase IDs
export const COMPANIES_WORKFLOW_ID = '677393544e9c3c0478e35a51';
export const COMPANIES_PHASE_ID = '677393544e9c3c0478e35a60'; // Customers

export const RECURRING_TASKS_WORKFLOW_ID = '68c004aa097b8b294325c81f';
export const RECURRING_TASKS_PHASE_ID = '68c004aa097b8b294325c81e'; // New Phase

// Recurring Tasks activity fields
export const RT_CUSTOMER_FIELD_ID = '68c00b71097b8b294325fa46';
export const RT_STARTS_FIELD_ID = '68cc512c661806bb5d9fd767';
export const RT_REPEATED_FIELD_ID = '68c004c1097b8b294325c967';

// Category comment field IDs
export const ACCOUNTING_COMMENT_FIELD_ID = '6996016421a4de96fe3b6144';
export const PAYROLL_COMMENT_FIELD_ID = '6996016421a4de96fe3b6148';
export const FS_COMMENT_FIELD_ID = '6996016421a4de96fe3b614d';

export const CATEGORY_COMMENT_FIELDS: Record<string, string> = {
  'Accounting': ACCOUNTING_COMMENT_FIELD_ID,
  'Payroll': PAYROLL_COMMENT_FIELD_ID,
  'Financial Statements': FS_COMMENT_FIELD_ID,
};

// Task mapping interface
export interface TaskMapping {
  label: string;
  companyCheckboxId: string;
  rtStatusFieldId: string;
}

// Task categories
export const ACCOUNTING_TASKS: TaskMapping[] = [
  {
    label: 'Accounting for bank statements + reference payments',
    companyCheckboxId: '68d943075303baa12167b6e6',
    rtStatusFieldId: '698f06c9e51763655d5b9005',
  },
  {
    label: 'Recording of purchase invoices',
    companyCheckboxId: '68d943795303baa12167b7ac',
    rtStatusFieldId: '698f06cae51763655d5b900b',
  },
  {
    label: 'Depreciation',
    companyCheckboxId: '68d9438c5303baa12167b7dc',
    rtStatusFieldId: '698f06cae51763655d5b9018',
  },
  {
    label: 'Closing of the settlement account',
    companyCheckboxId: '68d943a25303baa12167b80c',
    rtStatusFieldId: '698f06cae51763655d5b901d',
  },
  {
    label: 'Recording of inventory values',
    companyCheckboxId: '68d943b85303baa12167b83c',
    rtStatusFieldId: '698f06cae51763655d5b9025',
  },
  {
    label: 'Recording of sales from another system',
    companyCheckboxId: '68d943cd5303baa12167b886',
    rtStatusFieldId: '698f06cae51763655d5b902d',
  },
  {
    label: 'Deferred taxes',
    companyCheckboxId: '68d943db5303baa12167b8b7',
    rtStatusFieldId: '698f06cae51763655d5b9038',
  },
  {
    label: 'Checking the accounts receivable ledger',
    companyCheckboxId: '68d943ea5303baa12167b8f8',
    rtStatusFieldId: '698f06cae51763655d5b9049',
  },
  {
    label: 'VAT calculation created',
    companyCheckboxId: '699607cc941c1a93e9fe1618',
    rtStatusFieldId: '699607cd941c1a93e9fe1624',
  },
  {
    label: 'VAT report sent',
    companyCheckboxId: '699607cd941c1a93e9fe161b',
    rtStatusFieldId: '699607cd941c1a93e9fe1627',
  },
  {
    label: 'VAT paid',
    companyCheckboxId: '699607cd941c1a93e9fe161f',
    rtStatusFieldId: '699607cd941c1a93e9fe162b',
  },
];

export const PAYROLL_TASKS: TaskMapping[] = [
  {
    label: 'Hourly entries',
    companyCheckboxId: '68d944545303baa12167b9df',
    rtStatusFieldId: '698f06cbe51763655d5b9064',
  },
  {
    label: 'Payroll accounting',
    companyCheckboxId: '68d944645303baa12167ba10',
    rtStatusFieldId: '698f06cbe51763655d5b9069',
  },
  {
    label: 'Salaries sent for approval',
    companyCheckboxId: '68d944755303baa12167ba45',
    rtStatusFieldId: '698f06cbe51763655d5b9072',
  },
  {
    label: 'Salaries paid',
    companyCheckboxId: '68d9448f5303baa12167ba97',
    rtStatusFieldId: '698f06cbe51763655d5b907a',
  },
  {
    label: 'Holiday pay reserve / vacation days',
    companyCheckboxId: '68d9449d5303baa12167baea',
    rtStatusFieldId: '698f06cbe51763655d5b9085',
  },
  {
    label: 'Obligations (Netvisor term)',
    companyCheckboxId: '68d944d85303baa12167bb76',
    rtStatusFieldId: '698f06cbe51763655d5b908a',
  },
  {
    label: 'Separate report',
    companyCheckboxId: '68d944e95303baa12167bbbd',
    rtStatusFieldId: '698f06cbe51763655d5b9092',
  },
  {
    label: 'Separate report (payment)',
    companyCheckboxId: '68d944f95303baa12167bc04',
    rtStatusFieldId: '698f06cce51763655d5b909a',
  },
  {
    label: 'Travel expenses',
    companyCheckboxId: '68d9452b5303baa12167bc65',
    rtStatusFieldId: '698f06cce51763655d5b90a5',
  },
];

export const FINANCIAL_STATEMENTS_TASKS: TaskMapping[] = [
  {
    label: 'Adjustments to depreciation',
    companyCheckboxId: '68d945a65303baa12167bd59',
    rtStatusFieldId: '698f06cce51763655d5b90b2',
  },
  {
    label: 'Tax accrual',
    companyCheckboxId: '68d945af5303baa12167bd70',
    rtStatusFieldId: '698f06cce51763655d5b90ba',
  },
  {
    label: 'All balance sheet accounts checked',
    companyCheckboxId: '68d945c95303baa12167bdf4',
    rtStatusFieldId: '698f06cce51763655d5b90c5',
  },
  {
    label: 'Advance tax',
    companyCheckboxId: '68d945d95303baa12167be2c',
    rtStatusFieldId: '698f06cce51763655d5b90ce',
  },
  {
    label: 'Financial statement ready',
    companyCheckboxId: '68d945e55303baa12167be7f',
    rtStatusFieldId: '698f06cde51763655d5b90d6',
  },
  {
    label: 'Financial statement signed',
    companyCheckboxId: '68d945f65303baa12167beaf',
    rtStatusFieldId: '698f06cde51763655d5b90de',
  },
  {
    label: 'Audited',
    companyCheckboxId: '68d9460e5303baa12167bee3',
    rtStatusFieldId: '698f06cde51763655d5b90f2',
  },
  {
    label: 'Tax return filed',
    companyCheckboxId: '68d946275303baa12167bf2c',
    rtStatusFieldId: '698f06cee51763655d5b9111',
  },
  {
    label: 'Annual general meeting',
    companyCheckboxId: '68d946335303baa12167bf5b',
    rtStatusFieldId: '698f06cee51763655d5b9139',
  },
  {
    label: 'Financial statement registered',
    companyCheckboxId: '68d9463f5303baa12167bf90',
    rtStatusFieldId: '698f06cee51763655d5b914d',
  },
  {
    label: 'Dividend Report',
    companyCheckboxId: '68d9464c5303baa12167bfc6',
    rtStatusFieldId: '698f06cfe51763655d5b9155',
  },
  {
    label: 'Dividend tax paid',
    companyCheckboxId: '68d9465a5303baa12167bff5',
    rtStatusFieldId: '698f06cfe51763655d5b915d',
  },
  {
    label: 'Annual dividend report',
    companyCheckboxId: '68d946665303baa12167c024',
    rtStatusFieldId: '698f06cfe51763655d5b9167',
  },
  {
    label: 'Dividend recorded',
    companyCheckboxId: '68d946745303baa12167c05e',
    rtStatusFieldId: '698f06cfe51763655d5b9172',
  },
  {
    label: 'Fiscal year updated in Hailer',
    companyCheckboxId: '6990aefa686166113617fcdb',
    rtStatusFieldId: '698f06d0e51763655d5b900b',
  },
];

// All tasks combined
export const ALL_TASKS = [
  ...ACCOUNTING_TASKS,
  ...PAYROLL_TASKS,
  ...FINANCIAL_STATEMENTS_TASKS,
];

// Category metadata
export interface TaskCategory {
  name: string;
  tasks: TaskMapping[];
}

export const TASK_CATEGORIES: TaskCategory[] = [
  { name: 'Accounting', tasks: ACCOUNTING_TASKS },
  { name: 'Payroll', tasks: PAYROLL_TASKS },
  { name: 'Financial Statements', tasks: FINANCIAL_STATEMENTS_TASKS },
];

// Matrix-only categories (excludes FS from regular columns)
export const TASK_CATEGORIES_MATRIX: TaskCategory[] = [
  { name: 'Accounting', tasks: ACCOUNTING_TASKS },
  { name: 'Payroll', tasks: PAYROLL_TASKS },
];

// Status values - includes N/A for tasks that aren't relevant for a given month
export type TaskStatus = 'To Do' | 'Doing' | 'Done' | 'N/A' | null;

// Helper to get all checkbox field IDs
export const getAllCheckboxFieldIds = (): string[] => {
  return ALL_TASKS.map((t) => t.companyCheckboxId);
};

// Helper to get all status field IDs
export const getAllStatusFieldIds = (): string[] => {
  return ALL_TASKS.map((t) => t.rtStatusFieldId);
};
