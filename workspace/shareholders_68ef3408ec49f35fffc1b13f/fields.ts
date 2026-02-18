
import { Contacts_FieldIds, Shareholders_FieldIds, Shares_transactions_FieldIds, WorkflowIds } from "../enums";
      
// Fields for workflow: Shareholders

// Note: Field functions are extracted to ./functions/ directory
      
// They are referenced here as "@function:functionName" strings
      
export const fields: HailerFieldGeneric[] = [
  {
    _id: Shareholders_FieldIds.contact_280,
    data: [
      WorkflowIds.contacts_ffb
    ],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Contact",
    required: false,
    type: "activitylink"
  },
  {
    _id: Shareholders_FieldIds.type_2e3,
    data: [
      "individual",
      "company"
    ],
    defaultTo: false,
    defaultValue: "individual",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "shareholder_type",
    label: "Type",
    required: true,
    type: "textpredefinedoptions"
  },
  {
    _id: Shareholders_FieldIds.shares_transactions_045,
    data: [
      WorkflowIds.shares_transactions_c4c
    ],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "shares_transactions",
    label: "Shares transactions",
    required: false,
    type: "linkedfrom"
  },
  {
    _id: Shareholders_FieldIds.email_bd2,
    data: [],
    editable: true,
    function: "@function:email_bd2",
    functionEnabled: true,
    functionVariables: {
      email: {
        data: [
          Shareholders_FieldIds.contact_280,
          Contacts_FieldIds.email_0d7
        ],
        type: ">"
      }
    },
    inviteToDiscussionOnChange: false,
    key: "email",
    label: "Email",
    required: false,
    type: "text"
  },
  {
    _id: Shareholders_FieldIds.phone_number_c0d,
    data: [],
    editable: true,
    function: "@function:phone_number_c0d",
    functionEnabled: true,
    functionVariables: {
      phone_number: {
        data: [
          Shareholders_FieldIds.contact_280,
          Contacts_FieldIds.phone_number_0b0
        ],
        type: ">"
      }
    },
    inviteToDiscussionOnChange: false,
    key: "phone_number",
    label: "Phone number",
    required: false,
    type: "text"
  },
  {
    _id: Shareholders_FieldIds.positons_0d1,
    data: [],
    function: "@function:positons_0d1",
    functionEnabled: true,
    functionVariables: {
      action: {
        data: [
          WorkflowIds.shares_transactions_c4c,
          Shares_transactions_FieldIds.action_0cc
        ],
        type: "<"
      },
      company: {
        data: [
          WorkflowIds.shares_transactions_c4c,
          Shares_transactions_FieldIds.company_d92
        ],
        type: "<"
      },
      data: {
        data: [
          "data"
        ],
        type: "="
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
      to_shareholder: {
        data: [
          WorkflowIds.shares_transactions_c4c,
          Shares_transactions_FieldIds.to_shareholder_e0c
        ],
        type: "<"
      }
    },
    inviteToDiscussionOnChange: false,
    key: "positions",
    label: "Positons",
    required: false,
    type: "textarea"
  },
  {
    _id: Shareholders_FieldIds.active_positions_68f,
    data: [],
    function: "@function:active_positions_68f",
    functionEnabled: true,
    functionVariables: {
      action: {
        data: [
          WorkflowIds.shares_transactions_c4c,
          Shares_transactions_FieldIds.action_0cc
        ],
        type: "<"
      },
      company: {
        data: [
          WorkflowIds.shares_transactions_c4c,
          Shares_transactions_FieldIds.company_d92
        ],
        type: "<"
      },
      data: {
        data: [
          "data"
        ],
        type: "="
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
      to_shareholder: {
        data: [
          WorkflowIds.shares_transactions_c4c,
          Shares_transactions_FieldIds.to_shareholder_e0c
        ],
        type: "<"
      }
    },
    inviteToDiscussionOnChange: false,
    key: "active_positions",
    label: "Active positions",
    required: false,
    type: "textarea"
  },
  {
    _id: Shareholders_FieldIds.metadata_6bb,
    collapsedByDefault: true,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Metadata",
    required: false,
    type: "subheader"
  },
  {
    _id: Shareholders_FieldIds.informations_874,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Informations",
    required: false,
    type: "subheader"
  },
  {
    _id: Shareholders_FieldIds.ytunnus_920,
    data: [],
    editable: true,
    function: "@function:ytunnus_920",
    functionEnabled: true,
    functionVariables: {
      ytunnus: {
        data: [
          Shareholders_FieldIds.contact_280,
          Contacts_FieldIds.ytunnus_a43
        ],
        type: ">"
      }
    },
    inviteToDiscussionOnChange: false,
    key: "y_tunnus",
    label: "Y-tunnus",
    required: false,
    type: "text"
  },
  {
    _id: Shareholders_FieldIds.address_99a,
    data: [],
    editable: true,
    function: "@function:address_99a",
    functionEnabled: true,
    functionVariables: {
      address: {
        data: [
          Shareholders_FieldIds.contact_280,
          Contacts_FieldIds.address_9ad
        ],
        type: ">"
      }
    },
    inviteToDiscussionOnChange: false,
    key: "address",
    label: "Address",
    required: false,
    type: "text"
  },
  {
    _id: Shareholders_FieldIds.shares_ac9,
    collapsedByDefault: true,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Shares",
    required: false,
    type: "subheader"
  }
];
