
import { Companies_FieldIds, Personnel_FieldIds, Shares_transactions_FieldIds, Systems_in_use_FieldIds, Time_tracker_FieldIds, WorkflowIds } from "../enums";
      
// Fields for workflow: Companies

// Note: Field functions are extracted to ./functions/ directory
      
// They are referenced here as "@function:functionName" strings
      
export const fields: HailerFieldGeneric[] = [
  {
    _id: Companies_FieldIds.accounting_a52,
    data: [],
    label: "Accounting",
    type: "numericunit",
    unit: "€"
  },
  {
    _id: Companies_FieldIds.signing_probability_a54,
    data: [
      "100%",
      "High",
      "Medium",
      "Low"
    ],
    label: "Signing probability",
    type: "textpredefinedoptions"
  },
  {
    _id: Companies_FieldIds.est_signing_date_a55,
    data: [],
    label: "Est. Signing Date",
    type: "date"
  },
  {
    _id: Companies_FieldIds.user_responsible_for_financical_statements_a56,
    data: [],
    defaultTo: false,
    function: "@function:user_responsible_for_financical_statements_a56",
    functionEnabled: true,
    functionVariables: {
      user: {
        data: [
          Companies_FieldIds.person_responsible_for_financial_statements_66c,
          Personnel_FieldIds.user_48c
        ],
        type: ">"
      }
    },
    key: "responsible_user",
    label: "User responsible for financical statements",
    type: "users"
  },
  {
    _id: Companies_FieldIds.lost_for_reason_a58,
    data: [
      "Price",
      "Scope",
      "Delivery Time",
      "Other"
    ],
    label: "Lost for Reason",
    required: true,
    type: "textpredefinedoptions"
  },
  {
    _id: Companies_FieldIds.customer_satisfaction_a59,
    data: [
      "😀",
      "🙂",
      "😒"
    ],
    label: "Customer Satisfaction",
    type: "textpredefinedoptions"
  },
  {
    _id: Companies_FieldIds.financial_statement_c35,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Financial statement",
    required: false,
    type: "numericunit",
    unit: "€"
  },
  {
    _id: Companies_FieldIds.total_mrr_d67,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Total MRR",
    required: false,
    type: "numericunit",
    unit: "€"
  },
  {
    _id: Companies_FieldIds.payroll_de0,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Payroll",
    required: false,
    type: "numericunit",
    unit: "€"
  },
  {
    _id: Companies_FieldIds.licenses_accounting_f80,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Licenses (accounting)",
    required: false,
    type: "numericunit",
    unit: "€"
  },
  {
    _id: Companies_FieldIds.other_services_8f4,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Other services",
    required: false,
    type: "numericunit",
    unit: "€"
  },
  {
    _id: Companies_FieldIds.time_spent_total_cea,
    data: [],
    function: "@function:time_spent_total_cea",
    functionEnabled: true,
    functionVariables: {
      timeSpent: {
        data: [
          WorkflowIds.time_tracker_ad3,
          Time_tracker_FieldIds.time_spent_c97
        ],
        type: "<"
      }
    },
    inviteToDiscussionOnChange: false,
    label: "Time spent total",
    required: false,
    type: "numericunit",
    unit: "h"
  },
  {
    _id: Companies_FieldIds.ohjausryhm_43a,
    data: [
      WorkflowIds.ohjausryhmt_2d4
    ],
    function: "@function:ohjausryhm_43a",
    functionEnabled: true,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Ohjausryhmä",
    required: false,
    type: "activitylink"
  },
  {
    _id: Companies_FieldIds.admin_45f,
    collapsedByDefault: true,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Admin",
    required: false,
    type: "subheader"
  },
  {
    _id: Companies_FieldIds.category_2b4,
    data: [
      "🔵",
      "🚀"
    ],
    defaultTo: true,
    defaultValue: "🔵",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Category",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Companies_FieldIds.sold_accounting_services_643,
    collapsedByDefault: true,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Sold accounting services📒",
    required: false,
    type: "subheader"
  },
  {
    _id: Companies_FieldIds.accounting_for_bank_statements_reference_payments_6e6,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Accounting for bank statements + reference payments",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.user_responsible_for_accounting_709,
    data: [],
    function: "@function:user_responsible_for_accounting_709",
    functionEnabled: true,
    functionVariables: {
      user: {
        data: [
          Companies_FieldIds.person_responsible_for_accounting_ba4,
          Personnel_FieldIds.user_48c
        ],
        type: ">"
      }
    },
    inviteToDiscussionOnChange: false,
    label: "User responsible for accounting",
    required: false,
    type: "users"
  },
  {
    _id: Companies_FieldIds.recording_of_purchase_invoices_7ac,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Recording of purchase invoices",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.depreciation_7dc,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Depreciation",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.closing_of_the_settlement_account_80c,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Closing of the settlement account",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.recording_of_inventory_values_83c,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Recording of inventory values",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.recording_of_sales_from_another_system_886,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Recording of sales from another system",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.deferred_taxes_8b7,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Deferred taxes",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.checking_the_accounts_receivable_ledger_8f8,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Checking the accounts receivable ledger",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.sold_payroll_services_927,
    collapsedByDefault: true,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Sold payroll services💸",
    required: false,
    type: "subheader"
  },
  {
    _id: Companies_FieldIds.user_responsible_for_payroll_999,
    data: [],
    function: "@function:user_responsible_for_payroll_999",
    functionEnabled: true,
    functionVariables: {
      user: {
        data: [
          Companies_FieldIds.person_responsible_for_payroll_c04,
          Personnel_FieldIds.user_48c
        ],
        type: ">"
      }
    },
    inviteToDiscussionOnChange: false,
    label: "User responsible for payroll",
    required: false,
    type: "users"
  },
  {
    _id: Companies_FieldIds.hourly_entries_9df,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Hourly entries",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.payroll_accounting_a10,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Payroll accounting",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.salaries_sent_for_approval_a45,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Salaries sent for approval",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.salaries_paid_a97,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Salaries paid",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.holiday_pay_reserve_vacation_days_aea,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Holiday pay reserve / vacation days",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.obligations_netvisor_term_b76,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "\"Obligations\" (Netvisor term)",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.separate_report_bbd,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Separate report",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.separate_report_payment_c04,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Separate report (payment)",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.travel_expenses_c65,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Travel expenses",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.contents_of_the_financial_statements_c9e,
    collapsedByDefault: true,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Contents of the financial statements 📓",
    required: false,
    type: "subheader"
  },
  {
    _id: Companies_FieldIds.old_fields_ce4,
    collapsedByDefault: true,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Old fields",
    required: false,
    type: "subheader"
  },
  {
    _id: Companies_FieldIds.adjustments_to_depreciation_d59,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Adjustments to depreciation",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.tax_accrual_d70,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Tax accrual",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.all_balance_sheet_accounts_checked_df4,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "All balance sheet accounts checked",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.advance_tax_e2c,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Advance tax",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.financial_statement_ready_e7f,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Financial statement ready",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.financial_statement_signed_eaf,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Financial statement signed",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.audited_ee3,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Audited",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.tax_return_filed_f2c,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Tax return filed",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.annual_general_meeting_f5b,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Annual general meeting",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.financial_statement_registered_f90,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Financial statement registered",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.dividend_report_fc6,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Dividend Report",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.dividend_tax_paid_ff5,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Dividend tax paid",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.annual_dividend_report_024,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Annual dividend report",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.dividend_recorded_05e,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Dividend recorded",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.accounting_deadline_434,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "accounting_deadline",
    label: "Accounting deadline",
    placeholder: "Between 1 and 31",
    required: false,
    type: "numericunit",
    unit: "of the month"
  },
  {
    _id: Companies_FieldIds.payroll_deadline_463,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "payroll_deadline",
    label: "Payroll deadline",
    placeholder: "Between 1 and 31",
    required: false,
    type: "numericunit",
    unit: "of the month"
  },
  {
    _id: Companies_FieldIds.person_responsible_for_financial_statements_66c,
    data: [
      WorkflowIds.personnel_815
    ],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Person responsible for financial statements",
    required: false,
    type: "activitylink"
  },
  {
    _id: Companies_FieldIds.ytunnus_b80,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "y_tunnus",
    label: "Y-tunnus",
    required: false,
    type: "text"
  },
  {
    _id: Companies_FieldIds.company_info_762,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Company info",
    required: false,
    type: "subheader"
  },
  {
    _id: Companies_FieldIds.fiscal_year_03b,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "fiscal_year",
    label: "Fiscal year",
    required: false,
    type: "daterange"
  },
  {
    _id: Companies_FieldIds.deadline_for_financial_statement_16d,
    data: [],
    description: "Here insert how many months after the end of the fiscal year we have to create the end-of-year financical statement",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Deadline for financial statement",
    placeholder: "Number of months",
    required: false,
    type: "numericunit",
    unit: "months"
  },
  {
    _id: Companies_FieldIds.person_responsible_for_accounting_ba4,
    data: [
      WorkflowIds.personnel_815
    ],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Person responsible for accounting",
    required: false,
    type: "activitylink"
  },
  {
    _id: Companies_FieldIds.person_responsible_for_payroll_c04,
    data: [
      WorkflowIds.personnel_815
    ],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Person responsible for payroll",
    required: false,
    type: "activitylink"
  },
  {
    _id: Companies_FieldIds.person_responsible_for_client_6ba,
    data: [
      WorkflowIds.personnel_815
    ],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Person responsible for client",
    required: false,
    type: "activitylink"
  },
  {
    _id: Companies_FieldIds.user_responsible_for_client_908,
    data: [],
    function: "@function:user_responsible_for_client_908",
    functionEnabled: true,
    functionVariables: {
      user: {
        data: [
          Companies_FieldIds.person_responsible_for_client_6ba,
          Personnel_FieldIds.user_48c
        ],
        type: ">"
      }
    },
    inviteToDiscussionOnChange: false,
    label: "User responsible for client",
    required: false,
    type: "users"
  },
  {
    _id: Companies_FieldIds.shares_cd1,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Shares",
    required: false,
    type: "subheader"
  },
  {
    _id: Companies_FieldIds.shares_listing_d5f,
    data: [],
    editable: false,
    function: "@function:shares_listing_d5f",
    functionEnabled: true,
    functionVariables: {
      action: {
        data: [
          WorkflowIds.shares_transactions_c4c,
          Shares_transactions_FieldIds.action_0cc
        ],
        type: "<"
      },
      date: {
        data: [
          WorkflowIds.shares_transactions_c4c,
          Shares_transactions_FieldIds.date_fe1
        ],
        type: "<"
      },
      from_share_range: {
        data: [
          WorkflowIds.shares_transactions_c4c,
          Shares_transactions_FieldIds.from_share_range_eea
        ],
        type: "<"
      },
      from_shareholders: {
        data: [
          WorkflowIds.shares_transactions_c4c,
          Shares_transactions_FieldIds.from_shareholder_e5d
        ],
        type: "<"
      },
      shares_transactions_data: {
        data: [
          WorkflowIds.shares_transactions_c4c,
          "data"
        ],
        type: "<"
      },
      to_share_range: {
        data: [
          WorkflowIds.shares_transactions_c4c,
          Shares_transactions_FieldIds.to_share_range_f81
        ],
        type: "<"
      },
      to_shareholders: {
        data: [
          WorkflowIds.shares_transactions_c4c,
          Shares_transactions_FieldIds.to_shareholder_e0c
        ],
        type: "<"
      }
    },
    inviteToDiscussionOnChange: false,
    key: "shares_listing",
    label: "Shares listing",
    required: false,
    type: "textarea"
  },
  {
    _id: Companies_FieldIds.shares_metadata_f65,
    data: [],
    function: "@function:shares_metadata_f65",
    functionEnabled: true,
    functionVariables: {
      action: {
        data: [
          WorkflowIds.shares_transactions_c4c,
          Shares_transactions_FieldIds.action_0cc
        ],
        type: "<"
      },
      date: {
        data: [
          WorkflowIds.shares_transactions_c4c,
          Shares_transactions_FieldIds.date_fe1
        ],
        type: "<"
      },
      from_share_range: {
        data: [
          WorkflowIds.shares_transactions_c4c,
          Shares_transactions_FieldIds.from_share_range_eea
        ],
        type: "<"
      },
      from_shareholders: {
        data: [
          WorkflowIds.shares_transactions_c4c,
          Shares_transactions_FieldIds.from_shareholder_e5d
        ],
        type: "<"
      },
      shares_transactions_data: {
        data: [
          WorkflowIds.shares_transactions_c4c,
          "data"
        ],
        type: "<"
      },
      to_share_range: {
        data: [
          WorkflowIds.shares_transactions_c4c,
          Shares_transactions_FieldIds.to_share_range_f81
        ],
        type: "<"
      },
      to_shareholders: {
        data: [
          WorkflowIds.shares_transactions_c4c,
          Shares_transactions_FieldIds.to_shareholder_e0c
        ],
        type: "<"
      }
    },
    inviteToDiscussionOnChange: false,
    key: "shares_metadata",
    label: "Shares metadata",
    required: false,
    type: "textarea"
  },
  {
    _id: Companies_FieldIds.systems_9df,
    collapsedByDefault: true,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Systems",
    required: false,
    type: "subheader"
  },
  {
    _id: Companies_FieldIds.systems_in_use_a25,
    data: [
      WorkflowIds.systems_in_use_609
    ],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Systems in use",
    modifier: {
      quickAdd: {
        fieldIds: [
          Systems_in_use_FieldIds.system_in_use_66b
        ],
        targetFieldId: Systems_in_use_FieldIds.company_using_system_675
      }
    },
    required: false,
    type: "linkedfrom"
  },
  {
    _id: Companies_FieldIds.fiscal_year_updated_in_hailer_cdb,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Fiscal year updated in Hailer",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.vat_calculation_created_618,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "vatCalculationCreated",
    label: "VAT calculation created",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.vat_report_sent_61b,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "vatReportSent",
    label: "VAT report sent",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Companies_FieldIds.vat_paid_61f,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "vatPaid",
    label: "VAT paid",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  }
];
