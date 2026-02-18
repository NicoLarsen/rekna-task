// Insights configuration
    
 // When adding new members, use the "HailerMembers" enum from "./enums", the members IDs shall be with prefixes like "user_", "team_", "group_".
    
import { Companies_FieldIds, HailerMembers, Personnel_FieldIds, Tasks_FieldIds, WorkflowIds } from "./enums";
    
export const insights: HailerInsightPayload[] = [
  {
    _id: "68da4746b0988db31d470fa8",
    name: "companies",
    members: [
      {
        id: HailerMembers.stefan_atanasov_917,
        info: {},
        permissions: []
      }
    ],
    public: true,
    query: "SELECT \n    activityName as name,\n    personResponsibleForClient as responsiblePerson,\n    yTunnus,\n    activityId,\n    veroLettersCheckedAt,\n    veroInfoRequestsCheckedAt\nFROM companies;",
    sources: [
      {
        workflowId: WorkflowIds.companies_a51,
        name: "companies",
        fields: [
          {
            name: "activityName",
            meta: "name"
          },
          {
            name: "activityId",
            meta: "_id"
          },
          {
            name: "yTunnus",
            fieldId: Companies_FieldIds.ytunnus_b80
          },
          {
            name: "veroInfoRequestsCheckedAt",
            fieldId: "68da7a7ef083e53a8a1c20ed"
          },
          {
            name: "veroLettersCheckedAt",
            fieldId: "68da7a9ef083e53a8a1c21f9"
          },
          {
            name: "personResponsibleForClient",
            fieldId: Companies_FieldIds.person_responsible_for_client_6ba
          }
        ]
      }
    ]
  },
  {
    _id: "68da47f1b0988db31d471510",
    name: "tasks_uids",
    members: [
      {
        id: HailerMembers.stefan_atanasov_917,
        info: {},
        permissions: []
      }
    ],
    public: true,
    query: "SELECT uniqueID as uid FROM tasks WHERE uniqueID IS NOT NULL;",
    sources: [
      {
        workflowId: WorkflowIds.tasks_274,
        name: "tasks",
        fields: [
          {
            name: "uniqueID",
            fieldId: Tasks_FieldIds.unique_id_729
          }
        ]
      }
    ]
  },
  {
    _id: "68da48768698ae4af1b3b2b5",
    name: "personnel",
    members: [
      {
        id: HailerMembers.stefan_atanasov_917,
        info: {},
        permissions: []
      }
    ],
    public: true,
    query: "SELECT \n    activityId,\n    activityName AS name\nFROM personnel;",
    sources: [
      {
        workflowId: WorkflowIds.personnel_815,
        name: "personnel",
        fields: [
          {
            name: "activityId",
            meta: "_id"
          },
          {
            name: "activityName",
            meta: "name"
          }
        ]
      }
    ]
  },
  {
    _id: "68da7b32f083e53a8a1c269a",
    name: "customer_companies",
    members: [
      {
        id: HailerMembers.stefan_atanasov_917,
        info: {},
        permissions: []
      }
    ],
    public: true,
    query: "SELECT \n    activityName as name,\n    personResponsibleForClient as responsiblePerson,\n    yTunnus,\n    activityId,\n    veroLettersCheckedAt,\n    veroInfoRequestsCheckedAt\n    FROM companies\nWHERE phaseName = '🐤 Customers'\nAND yTunnus IS NOT NULL;",
    sources: [
      {
        workflowId: WorkflowIds.companies_a51,
        name: "companies",
        fields: [
          {
            name: "activityId",
            meta: "_id"
          },
          {
            name: "activityName",
            meta: "name"
          },
          {
            name: "phaseName",
            meta: "phaseName"
          },
          {
            name: "veroLettersCheckedAt",
            fieldId: "68da7a9ef083e53a8a1c21f9"
          },
          {
            name: "veroInfoRequestsCheckedAt",
            fieldId: "68da7a7ef083e53a8a1c20ed"
          },
          {
            name: "yTunnus",
            fieldId: Companies_FieldIds.ytunnus_b80
          },
          {
            name: "personResponsibleForClient",
            fieldId: Companies_FieldIds.person_responsible_for_client_6ba
          }
        ]
      }
    ]
  },
  {
    _id: "68db93234a49cff295ce6e25",
    name: "accounting_services_tasks",
    members: [
      {
        id: HailerMembers.stefan_atanasov_917,
        info: {},
        permissions: []
      }
    ],
    public: true,
    query: "SELECT * FROM companies WHERE accountingTasksToBeCreatedAt IS NOT NULL;",
    sources: [
      {
        workflowId: WorkflowIds.companies_a51,
        name: "companies",
        fields: [
          {
            name: "activityId",
            meta: "_id"
          },
          {
            name: "activityName",
            meta: "name"
          },
          {
            name: "closingOfTheSettlementAccount",
            fieldId: Companies_FieldIds.closing_of_the_settlement_account_80c
          },
          {
            name: "accountingForBankStatementsReferencePayments",
            fieldId: Companies_FieldIds.accounting_for_bank_statements_reference_payments_6e6
          },
          {
            name: "depreciation",
            fieldId: Companies_FieldIds.depreciation_7dc
          },
          {
            name: "recordingOfPurchaseInvoices",
            fieldId: Companies_FieldIds.recording_of_purchase_invoices_7ac
          },
          {
            name: "recordingOfInventoryValues",
            fieldId: Companies_FieldIds.recording_of_inventory_values_83c
          },
          {
            name: "recordingOfSalesFromAnotherSystem",
            fieldId: Companies_FieldIds.recording_of_sales_from_another_system_886
          },
          {
            name: "deferredTaxes",
            fieldId: Companies_FieldIds.deferred_taxes_8b7
          },
          {
            name: "checkingTheAccountsReceivableLedger",
            fieldId: Companies_FieldIds.checking_the_accounts_receivable_ledger_8f8
          },
          {
            name: "accountingTasksToBeCreatedAt",
            fieldId: "68db8e774a49cff295ce3f07"
          },
          {
            name: "accountingDeadline",
            fieldId: Companies_FieldIds.accounting_deadline_434
          },
          {
            name: "personResponsibleForAccounting",
            fieldId: Companies_FieldIds.person_responsible_for_accounting_ba4
          }
        ]
      }
    ]
  },
  {
    _id: "68dbc8be25199ef682e124cc",
    name: "payroll_services_tasks",
    members: [
      {
        id: HailerMembers.stefan_atanasov_917,
        info: {},
        permissions: []
      }
    ],
    public: true,
    query: "SELECT * FROM companies WHERE payrollTasksToBeCreatedAt IS NOT NULL;",
    sources: [
      {
        workflowId: WorkflowIds.companies_a51,
        name: "companies",
        fields: [
          {
            name: "activityName",
            meta: "name"
          },
          {
            name: "activityId",
            meta: "_id"
          },
          {
            name: "hourlyEntries",
            fieldId: Companies_FieldIds.hourly_entries_9df
          },
          {
            name: "salariesSentForApproval",
            fieldId: Companies_FieldIds.salaries_sent_for_approval_a45
          },
          {
            name: "payrollAccounting",
            fieldId: Companies_FieldIds.payroll_accounting_a10
          },
          {
            name: "holidayPayReserveVacationDays",
            fieldId: Companies_FieldIds.holiday_pay_reserve_vacation_days_aea
          },
          {
            name: "salariesPaid",
            fieldId: Companies_FieldIds.salaries_paid_a97
          },
          {
            name: "separateReport",
            fieldId: Companies_FieldIds.separate_report_bbd
          },
          {
            name: "separateReportPayment",
            fieldId: Companies_FieldIds.separate_report_payment_c04
          },
          {
            name: "obligationsNetvisorTerm",
            fieldId: Companies_FieldIds.obligations_netvisor_term_b76
          },
          {
            name: "travelExpenses",
            fieldId: Companies_FieldIds.travel_expenses_c65
          },
          {
            name: "payrollTasksToBeCreatedAt",
            fieldId: "68db8ed74a49cff295ce43ea"
          },
          {
            name: "payrollDeadline",
            fieldId: Companies_FieldIds.payroll_deadline_463
          },
          {
            name: "personResponsibleForPayroll",
            fieldId: Companies_FieldIds.person_responsible_for_payroll_c04
          }
        ]
      }
    ]
  },
  {
    _id: "68dcc0900968aad0c761408d",
    name: "financial_statements_tasks",
    members: [
      {
        id: HailerMembers.stefan_atanasov_917,
        info: {},
        permissions: []
      }
    ],
    public: true,
    query: "SELECT * FROM companies WHERE fiscalYearEnd IS NOT NULL;",
    sources: [
      {
        workflowId: WorkflowIds.companies_a51,
        name: "companies",
        fields: [
          {
            name: "activityId",
            meta: "_id"
          },
          {
            name: "activityName",
            meta: "name"
          },
          {
            name: "adjustmentsToDepreciation",
            fieldId: Companies_FieldIds.adjustments_to_depreciation_d59
          },
          {
            name: "taxAccrual",
            fieldId: Companies_FieldIds.tax_accrual_d70
          },
          {
            name: "advanceTax",
            fieldId: Companies_FieldIds.advance_tax_e2c
          },
          {
            name: "allBalanceSheetAccountsChecked",
            fieldId: Companies_FieldIds.all_balance_sheet_accounts_checked_df4
          },
          {
            name: "audited",
            fieldId: Companies_FieldIds.audited_ee3
          },
          {
            name: "financialStatementSigned",
            fieldId: Companies_FieldIds.financial_statement_signed_eaf
          },
          {
            name: "taxReturnFiled",
            fieldId: Companies_FieldIds.tax_return_filed_f2c
          },
          {
            name: "financialStatementReady",
            fieldId: Companies_FieldIds.financial_statement_ready_e7f
          },
          {
            name: "annualGeneralMeeting",
            fieldId: Companies_FieldIds.annual_general_meeting_f5b
          },
          {
            name: "financialStatementRegistered",
            fieldId: Companies_FieldIds.financial_statement_registered_f90
          },
          {
            name: "dividendTaxPaid",
            fieldId: Companies_FieldIds.dividend_tax_paid_ff5
          },
          {
            name: "annualDividendReport",
            fieldId: Companies_FieldIds.annual_dividend_report_024
          },
          {
            name: "dividendRecorded",
            fieldId: Companies_FieldIds.dividend_recorded_05e
          },
          {
            name: "fiscalYear",
            fieldId: Companies_FieldIds.fiscal_year_03b
          },
          {
            name: "dividendReport",
            fieldId: Companies_FieldIds.dividend_report_fc6
          },
          {
            name: "personResponsibleForFinancialStatements",
            fieldId: Companies_FieldIds.person_responsible_for_financial_statements_66c
          },
          {
            name: "deadlineForFinancialStatement",
            fieldId: Companies_FieldIds.deadline_for_financial_statement_16d
          }
        ]
      }
    ]
  },
  {
    _id: "6978641d8fae685fe0c23102",
    name: "ToDos",
    members: [
      {
        id: HailerMembers.johan_borgstrm_776,
        info: {},
        permissions: []
      }
    ],
    public: true,
    query: "SELECT \n    t.uniqueID,\n    t.activityName as title,\n    t.description,\n    t.priority,\n    u.name as assigned_to,\n    datetime(t.deadline / 1000, 'unixepoch') as due_date,\n    t.phaseName as status,\n    datetime(t.createdTime / 1000, 'unixepoch') as created_at\nFROM tasks t\nLEFT JOIN user u ON t.assignedToUser = u._id\nWHERE t.phaseName != 'completed' OR t.phaseName IS NULL\nORDER BY\n    CASE t.priority\n        WHEN 'high' THEN 1\n        WHEN 'medium' THEN 2\n        ELSE 3\n    END,\n    t.deadline ASC NULLS LAST,\n    t.createdTime DESC\nLIMIT 50",
    sources: [
      {
        workflowId: WorkflowIds.tasks_274,
        name: "tasks",
        fields: [
          {
            name: "uniqueID",
            fieldId: Tasks_FieldIds.unique_id_729
          },
          {
            name: "subtasks",
            fieldId: Tasks_FieldIds.subtasks_f47
          },
          {
            name: "priority",
            fieldId: Tasks_FieldIds.priority_524
          },
          {
            name: "ohjausryhmä",
            fieldId: Tasks_FieldIds.ohjausryhm_544
          },
          {
            name: "description",
            fieldId: Tasks_FieldIds.description_275
          },
          {
            name: "deadline",
            fieldId: Tasks_FieldIds.deadline_277
          },
          {
            name: "company",
            fieldId: Tasks_FieldIds.company_d68
          },
          {
            name: "assignedToUser",
            fieldId: Tasks_FieldIds.assigned_to_user_276
          },
          {
            name: "assignedTo",
            fieldId: Tasks_FieldIds.assigned_to_5cc
          },
          {
            name: "admin",
            fieldId: Tasks_FieldIds.admin_5a5
          },
          {
            name: "additionalRawInfo",
            fieldId: Tasks_FieldIds.additional_raw_info_920
          },
          {
            name: "phaseName",
            meta: "phaseName"
          },
          {
            name: "updatedTime",
            meta: "updated"
          },
          {
            name: "createdTime",
            meta: "created"
          },
          {
            name: "createdByUserId",
            meta: "createdBy"
          },
          {
            name: "activityName",
            meta: "name"
          },
          {
            name: "activityId",
            meta: "_id"
          }
        ]
      },
      {
        workflowId: WorkflowIds.personnel_815,
        name: "personnel",
        fields: [
          {
            name: "activityId",
            meta: "_id"
          },
          {
            name: "activityName",
            meta: "name"
          },
          {
            name: "user",
            fieldId: Personnel_FieldIds.user_48c
          }
        ]
      }
    ]
  }
];
    