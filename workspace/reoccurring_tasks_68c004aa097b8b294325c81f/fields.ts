
import { Reoccurring_tasks_FieldIds, WorkflowIds } from "../enums";
      
// Fields for workflow: Reoccurring tasks

// Note: Field functions are extracted to ./functions/ directory
      
// They are referenced here as "@function:functionName" strings
      
export const fields: HailerFieldGeneric[] = [
  {
    _id: Reoccurring_tasks_FieldIds.customer_a46,
    data: [
      WorkflowIds.companies_a51
    ],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Customer",
    required: false,
    type: "activitylink"
  },
  {
    _id: Reoccurring_tasks_FieldIds.accounting_001,
    collapsedByDefault: true,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Accounting",
    required: false,
    type: "subheader"
  },
  {
    _id: Reoccurring_tasks_FieldIds.accounting_for_bank_statements_reference_payments_005,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:accounting_for_bank_statements_reference_payments_005",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Accounting for bank statements + reference payments",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.recording_of_purchase_invoices_00b,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:recording_of_purchase_invoices_00b",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Recording of purchase invoices",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.depreciation_018,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:depreciation_018",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Depreciation",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.closing_of_the_settlement_account_01d,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:closing_of_the_settlement_account_01d",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Closing of the settlement account",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.recording_of_inventory_values_025,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:recording_of_inventory_values_025",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Recording of inventory values",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.recording_of_sales_from_another_system_02d,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:recording_of_sales_from_another_system_02d",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Recording of sales from another system",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.deferred_taxes_038,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:deferred_taxes_038",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Deferred taxes",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.checking_the_accounts_receivable_ledger_049,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:checking_the_accounts_receivable_ledger_049",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Checking the accounts receivable ledger",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.payroll_059,
    collapsedByDefault: true,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Payroll",
    required: false,
    type: "subheader"
  },
  {
    _id: Reoccurring_tasks_FieldIds.hourly_entries_064,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:hourly_entries_064",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Hourly entries",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.payroll_accounting_069,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:payroll_accounting_069",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Payroll accounting",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.salaries_sent_for_approval_072,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:salaries_sent_for_approval_072",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Salaries sent for approval",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.salaries_paid_07a,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:salaries_paid_07a",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Salaries paid",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.holiday_pay_reserve_vacation_days_085,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:holiday_pay_reserve_vacation_days_085",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Holiday pay reserve / vacation days",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.obligations_netvisor_term_08a,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:obligations_netvisor_term_08a",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "\"Obligations\" (Netvisor term)",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.separate_report_092,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:separate_report_092",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Separate report",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.separate_report_payment_09a,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:separate_report_payment_09a",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Separate report (payment)",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.travel_expenses_0a5,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:travel_expenses_0a5",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Travel expenses",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.financial_statements_0aa,
    collapsedByDefault: true,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Financial Statements",
    required: false,
    type: "subheader"
  },
  {
    _id: Reoccurring_tasks_FieldIds.adjustments_to_depreciation_0b2,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:adjustments_to_depreciation_0b2",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Adjustments to depreciation",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.tax_accrual_0ba,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:tax_accrual_0ba",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Tax accrual",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.all_balance_sheet_accounts_checked_0c5,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:all_balance_sheet_accounts_checked_0c5",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "All balance sheet accounts checked",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.advance_tax_0ce,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:advance_tax_0ce",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Advance tax",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.financial_statement_ready_0d6,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:financial_statement_ready_0d6",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Financial statement ready",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.financial_statement_signed_0de,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:financial_statement_signed_0de",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Financial statement signed",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.audited_0f2,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:audited_0f2",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Audited",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.tax_return_filed_111,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:tax_return_filed_111",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Tax return filed",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.annual_general_meeting_139,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:annual_general_meeting_139",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Annual general meeting",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.financial_statement_registered_14d,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:financial_statement_registered_14d",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Financial statement registered",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.dividend_report_155,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:dividend_report_155",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Dividend Report",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.dividend_tax_paid_15d,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:dividend_tax_paid_15d",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Dividend tax paid",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.annual_dividend_report_167,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:annual_dividend_report_167",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Annual dividend report",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.dividend_recorded_172,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    function: "@function:dividend_recorded_172",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Dividend recorded",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.month_002,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Month",
    required: false,
    type: "daterange"
  },
  {
    _id: Reoccurring_tasks_FieldIds.fiscal_year_updated_in_hailer_00b,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "fiscalYearUpdatedInHailer",
    label: "Fiscal year updated in Hailer",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.accounting_comment_144,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "accountingComment",
    label: "Accounting Comment",
    required: false,
    type: "text"
  },
  {
    _id: Reoccurring_tasks_FieldIds.payroll_comment_148,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "payrollComment",
    label: "Payroll Comment",
    required: false,
    type: "text"
  },
  {
    _id: Reoccurring_tasks_FieldIds.financial_statements_comment_14d,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "financialStatementsComment",
    label: "Financial Statements Comment",
    required: false,
    type: "text"
  },
  {
    _id: Reoccurring_tasks_FieldIds.vat_calculation_created_624,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    key: "vatCalculationCreated",
    label: "VAT calculation created",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.vat_report_sent_627,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    key: "vatReportSent",
    label: "VAT report sent",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Reoccurring_tasks_FieldIds.vat_paid_62b,
    data: [
      "To Do",
      "Doing",
      "Done",
      "N/A"
    ],
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    key: "vatPaid",
    label: "VAT paid",
    required: false,
    type: "textpredefinedoptions"
  }
];
