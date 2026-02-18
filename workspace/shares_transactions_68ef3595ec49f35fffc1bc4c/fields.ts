
import { Shareholders_FieldIds, Shares_transactions_FieldIds, WorkflowIds } from "../enums";
      
// Fields for workflow: Shares transactions

// Note: Field functions are extracted to ./functions/ directory
      
// They are referenced here as "@function:functionName" strings
      
export const fields: HailerFieldGeneric[] = [
  {
    _id: Shares_transactions_FieldIds.company_d92,
    data: [
      WorkflowIds.companies_a51
    ],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "company",
    label: "Company",
    required: true,
    type: "activitylink"
  },
  {
    _id: Shares_transactions_FieldIds.to_shareholder_e0c,
    data: [
      WorkflowIds.shareholders_13f
    ],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "to_shareholder",
    label: "To shareholder",
    required: true,
    type: "activitylink"
  },
  {
    _id: Shares_transactions_FieldIds.from_shareholder_e5d,
    data: [
      WorkflowIds.shareholders_13f
    ],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "from_shareholder",
    label: "From shareholder",
    required: false,
    type: "activitylink"
  },
  {
    _id: Shares_transactions_FieldIds.number_of_shares_f45,
    data: [],
    editable: false,
    function: "@function:number_of_shares_f45",
    functionEnabled: true,
    functionVariables: {
      end_shares_range: {
        data: [
          Shares_transactions_FieldIds.to_share_range_f81
        ],
        type: "="
      },
      start_shares_range: {
        data: [
          Shares_transactions_FieldIds.from_share_range_eea
        ],
        type: "="
      }
    },
    inviteToDiscussionOnChange: false,
    key: "number_of_shares",
    label: "Number of shares",
    required: false,
    type: "numeric"
  },
  {
    _id: Shares_transactions_FieldIds.date_fe1,
    data: [],
    defaultTo: true,
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "date",
    label: "Date",
    required: false,
    type: "date"
  },
  {
    _id: Shares_transactions_FieldIds.notes_ff1,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "notes",
    label: "Notes",
    required: false,
    type: "textarea"
  },
  {
    _id: Shares_transactions_FieldIds.from_share_range_eea,
    data: [],
    editable: true,
    function: "@function:from_share_range_eea",
    functionEnabled: false,
    functionVariables: {
      action: {
        data: [
          Shares_transactions_FieldIds.action_0cc
        ],
        type: "="
      },
      active_position: {
        data: [
          Shares_transactions_FieldIds.from_shareholder_e5d,
          Shareholders_FieldIds.active_positions_68f
        ],
        type: ">"
      },
      company: {
        data: [
          Shares_transactions_FieldIds.company_d92
        ],
        type: "="
      },
      number_of_shares: {
        data: [
          Shares_transactions_FieldIds.number_of_shares_f45
        ],
        type: "="
      }
    },
    inviteToDiscussionOnChange: false,
    key: "from_share_range",
    label: "From share range",
    required: false,
    type: "numeric"
  },
  {
    _id: Shares_transactions_FieldIds.to_share_range_f81,
    data: [],
    editable: true,
    function: "@function:to_share_range_f81",
    functionEnabled: false,
    functionVariables: {
      action: {
        data: [
          Shares_transactions_FieldIds.action_0cc
        ],
        type: "="
      },
      active_position: {
        data: [
          Shares_transactions_FieldIds.from_shareholder_e5d,
          Shareholders_FieldIds.active_positions_68f
        ],
        type: ">"
      },
      company: {
        data: [
          Shares_transactions_FieldIds.company_d92
        ],
        type: "="
      },
      number_of_shares: {
        data: [
          Shares_transactions_FieldIds.number_of_shares_f45
        ],
        type: "="
      }
    },
    inviteToDiscussionOnChange: false,
    key: "to_share_range",
    label: "To share range",
    required: false,
    type: "numeric"
  },
  {
    _id: Shares_transactions_FieldIds.action_0cc,
    data: [
      "transfer",
      "issuing"
    ],
    defaultTo: true,
    defaultValue: "transfer",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "action",
    label: "Action",
    required: true,
    type: "textpredefinedoptions"
  },
  {
    _id: Shares_transactions_FieldIds.is_transaction_valid_627,
    data: [],
    editable: true,
    function: "@function:is_transaction_valid_627",
    functionEnabled: true,
    functionVariables: {
      action: {
        data: [
          Shares_transactions_FieldIds.action_0cc
        ],
        type: "="
      },
      active_position: {
        data: [
          Shares_transactions_FieldIds.from_shareholder_e5d,
          Shareholders_FieldIds.active_positions_68f
        ],
        type: ">"
      },
      company: {
        data: [
          Shares_transactions_FieldIds.company_d92
        ],
        type: "="
      },
      from_share_range: {
        data: [
          Shares_transactions_FieldIds.from_share_range_eea
        ],
        type: "="
      },
      number_of_shares: {
        data: [
          Shares_transactions_FieldIds.number_of_shares_f45
        ],
        type: "="
      },
      to_share_range: {
        data: [
          Shares_transactions_FieldIds.to_share_range_f81
        ],
        type: "="
      }
    },
    inviteToDiscussionOnChange: false,
    key: "is_transaction_valid",
    label: "Is transaction valid",
    required: false,
    type: "text"
  }
];
