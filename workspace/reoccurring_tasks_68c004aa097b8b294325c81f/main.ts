// Configuration for workflow: Reoccurring tasks
      
import { HailerMembers, Reoccurring_tasks_FieldIds, Reoccurring_tasks_PhaseIds, WorkflowIds, WorkspaceTeams } from "../enums";
      
export const workflowConfig: HailerWorkflowUpdatePayload = {
  _id: WorkflowIds.reoccurring_tasks_81f,
  allowGuests: true,
  coverImage: "6991bfb03be4e426938a50ee",
  createNewLabel: "",
  defaultView: "table",
  discussionPermissions: [
    "discussion.message.add",
    "discussion.message.add.attachment",
    "discussion.message.remove.own",
    "discussion.read.history"
  ],
  enableAddedField: true,
  enableAttachments: true,
  enableGuestEditing: true,
  enableLinkedAnnouncements: true,
  enableMapLocation: false,
  enableMessenger: true,
  enableModifiedField: true,
  enablePredefinedName: false,
  enablePreselectedTeam: true,
  enableUniqueName: false,
  enableUnlinkedMode: false,
  fieldsOrder: [
    Reoccurring_tasks_FieldIds.customer_a46,
    Reoccurring_tasks_FieldIds.accounting_001,
    Reoccurring_tasks_FieldIds.accounting_comment_144,
    Reoccurring_tasks_FieldIds.accounting_for_bank_statements_reference_payments_005,
    Reoccurring_tasks_FieldIds.recording_of_purchase_invoices_00b,
    Reoccurring_tasks_FieldIds.depreciation_018,
    Reoccurring_tasks_FieldIds.closing_of_the_settlement_account_01d,
    Reoccurring_tasks_FieldIds.recording_of_inventory_values_025,
    Reoccurring_tasks_FieldIds.recording_of_sales_from_another_system_02d,
    Reoccurring_tasks_FieldIds.deferred_taxes_038,
    Reoccurring_tasks_FieldIds.checking_the_accounts_receivable_ledger_049,
    Reoccurring_tasks_FieldIds.vat_calculation_created_624,
    Reoccurring_tasks_FieldIds.vat_report_sent_627,
    Reoccurring_tasks_FieldIds.vat_paid_62b,
    Reoccurring_tasks_FieldIds.payroll_059,
    Reoccurring_tasks_FieldIds.payroll_comment_148,
    Reoccurring_tasks_FieldIds.hourly_entries_064,
    Reoccurring_tasks_FieldIds.payroll_accounting_069,
    Reoccurring_tasks_FieldIds.salaries_sent_for_approval_072,
    Reoccurring_tasks_FieldIds.salaries_paid_07a,
    Reoccurring_tasks_FieldIds.holiday_pay_reserve_vacation_days_085,
    Reoccurring_tasks_FieldIds.obligations_netvisor_term_08a,
    Reoccurring_tasks_FieldIds.separate_report_092,
    Reoccurring_tasks_FieldIds.separate_report_payment_09a,
    Reoccurring_tasks_FieldIds.travel_expenses_0a5,
    Reoccurring_tasks_FieldIds.financial_statements_0aa,
    Reoccurring_tasks_FieldIds.financial_statements_comment_14d,
    Reoccurring_tasks_FieldIds.adjustments_to_depreciation_0b2,
    Reoccurring_tasks_FieldIds.tax_accrual_0ba,
    Reoccurring_tasks_FieldIds.all_balance_sheet_accounts_checked_0c5,
    Reoccurring_tasks_FieldIds.advance_tax_0ce,
    Reoccurring_tasks_FieldIds.financial_statement_ready_0d6,
    Reoccurring_tasks_FieldIds.financial_statement_signed_0de,
    Reoccurring_tasks_FieldIds.audited_0f2,
    Reoccurring_tasks_FieldIds.tax_return_filed_111,
    Reoccurring_tasks_FieldIds.annual_general_meeting_139,
    Reoccurring_tasks_FieldIds.financial_statement_registered_14d,
    Reoccurring_tasks_FieldIds.dividend_report_155,
    Reoccurring_tasks_FieldIds.dividend_tax_paid_15d,
    Reoccurring_tasks_FieldIds.annual_dividend_report_167,
    Reoccurring_tasks_FieldIds.dividend_recorded_172,
    Reoccurring_tasks_FieldIds.month_002,
    Reoccurring_tasks_FieldIds.fiscal_year_updated_in_hailer_00b
  ],
  inviteActivityCreator: true,
  members: [
    {
      id: HailerMembers.nico_larsen_74e,
      info: {},
      permissions: [
        "admin"
      ]
    },
    {
      id: HailerMembers.workspace,
      info: {},
      permissions: [
        "any"
      ]
    }
  ],
  name: "Reoccurring tasks",
  nameEditable: false,
  nameFieldPlaceHolderText: "Give a title",
  nameFunction: "const customerName = dep.customerMeta ? dep.customerMeta.name : 'No Customer'; const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; let monthName = ''; if (dep.monthRange && dep.monthRange.start) { const date = new Date(dep.monthRange.start); monthName = monthNames[date.getUTCMonth()]; } else { monthName = 'No Month'; } return customerName + ' - ' + monthName;",
  nameFunctionEnabled: false,
  nameFunctionVariables: {
    customerMeta: {
      data: [
        Reoccurring_tasks_FieldIds.customer_a46,
        "meta"
      ],
      type: ">"
    },
    monthRange: {
      data: [
        Reoccurring_tasks_FieldIds.month_002
      ],
      type: "="
    }
  },
  order: 5,
  personInChargeLabel: "",
  phasesOrder: [
    Reoccurring_tasks_PhaseIds.to_do_81e,
    Reoccurring_tasks_PhaseIds.done_377
  ],
  preselectedTeam: {
    account: "675b24f48a5aeaa8084153e4",
    team: WorkspaceTeams.rekna_team_3e3
  }
};
      