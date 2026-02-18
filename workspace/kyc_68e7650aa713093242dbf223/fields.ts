
import { Companies_FieldIds, KYC_FieldIds, WorkflowIds } from "../enums";
      
// Fields for workflow: KYC

// Note: Field functions are extracted to ./functions/ directory
      
// They are referenced here as "@function:functionName" strings
      
export const fields: HailerFieldGeneric[] = [
  {
    _id: KYC_FieldIds.request_creator_33c,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "creatorHandle",
    label: "Request creator",
    required: false,
    type: "text"
  },
  {
    _id: KYC_FieldIds.participants_3b3,
    data: [],
    function: "@function:participants_3b3",
    functionEnabled: true,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    key: "participants",
    label: "Participants",
    required: false,
    type: "textarea"
  },
  {
    _id: KYC_FieldIds.taskid_43b,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "taskId",
    label: "taskId",
    required: false,
    type: "text"
  },
  {
    _id: KYC_FieldIds.fileid_49d,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "fileId",
    label: "fileId",
    required: false,
    type: "text"
  },
  {
    _id: KYC_FieldIds.use_attachment_4df,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "useAttachments",
    label: "Use attachment",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: KYC_FieldIds.language_6f0,
    data: [
      "fi",
      "sv",
      "en"
    ],
    defaultTo: true,
    defaultValue: "en",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "recipientLanguage",
    label: "Language",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: KYC_FieldIds.error_message_7e6,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "errorMessage",
    label: "Error message",
    required: false,
    type: "textarea"
  },
  {
    _id: KYC_FieldIds.integration_fields_bb6,
    collapsedByDefault: true,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Integration fields",
    required: false,
    type: "subheader"
  },
  {
    _id: KYC_FieldIds.financical_sanctions_deb,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Financical sanctions",
    required: false,
    type: "subheader"
  },
  {
    _id: KYC_FieldIds.company_info_78c,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Company info",
    required: false,
    type: "subheader"
  },
  {
    _id: KYC_FieldIds.company_name_80b,
    data: [],
    editable: true,
    function: "@function:company_name_80b",
    functionEnabled: true,
    functionVariables: {
      name: {
        data: [
          KYC_FieldIds.company_531,
          WorkflowIds.companies_a51,
          "data",
          "name"
        ],
        type: ">"
      }
    },
    inviteToDiscussionOnChange: false,
    key: "company_name",
    label: "Company name",
    required: false,
    type: "text"
  },
  {
    _id: KYC_FieldIds.ytunnus_885,
    data: [],
    editable: true,
    function: "@function:ytunnus_885",
    functionEnabled: true,
    functionVariables: {
      company_ytunnus: {
        data: [
          KYC_FieldIds.company_531,
          Companies_FieldIds.ytunnus_b80
        ],
        type: ">"
      },
      old_kyc_ytunnus: {
        data: [
          KYC_FieldIds.previous_kyc_469,
          KYC_FieldIds.ytunnus_885
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
    _id: KYC_FieldIds.address_8d4,
    data: [],
    editable: true,
    function: "@function:address_8d4",
    functionEnabled: true,
    functionVariables: {
      address: {
        data: [
          KYC_FieldIds.previous_kyc_469,
          KYC_FieldIds.address_8d4
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
    _id: KYC_FieldIds.postal_code_911,
    data: [],
    editable: true,
    function: "@function:postal_code_911",
    functionEnabled: true,
    functionVariables: {
      postal_code: {
        data: [
          KYC_FieldIds.previous_kyc_469,
          KYC_FieldIds.postal_code_911
        ],
        type: ">"
      }
    },
    inviteToDiscussionOnChange: false,
    key: "postal_code",
    label: "Postal code",
    required: false,
    type: "text"
  },
  {
    _id: KYC_FieldIds.city_9a6,
    data: [],
    editable: true,
    function: "@function:city_9a6",
    functionEnabled: true,
    functionVariables: {
      city: {
        data: [
          KYC_FieldIds.previous_kyc_469,
          KYC_FieldIds.city_9a6
        ],
        type: ">"
      }
    },
    inviteToDiscussionOnChange: false,
    key: "city",
    label: "City",
    required: false,
    type: "text"
  },
  {
    _id: KYC_FieldIds.line_of_business_a1e,
    data: [],
    editable: true,
    function: "@function:line_of_business_a1e",
    functionEnabled: true,
    functionVariables: {
      line_if_business: {
        data: [
          KYC_FieldIds.previous_kyc_469,
          KYC_FieldIds.line_of_business_a1e
        ],
        type: ">"
      }
    },
    inviteToDiscussionOnChange: false,
    key: "line_of_business",
    label: "Line of business",
    required: false,
    type: "text"
  },
  {
    _id: KYC_FieldIds.representative_a75,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Representative",
    required: false,
    type: "subheader"
  },
  {
    _id: KYC_FieldIds.representative_name_acb,
    data: [],
    editable: true,
    function: "@function:representative_name_acb",
    functionEnabled: true,
    functionVariables: {
      representative_name: {
        data: [
          KYC_FieldIds.previous_kyc_469,
          KYC_FieldIds.representative_name_acb
        ],
        type: ">"
      }
    },
    inviteToDiscussionOnChange: false,
    key: "representative_name",
    label: "Representative name",
    required: false,
    type: "text"
  },
  {
    _id: KYC_FieldIds.representative_title_b70,
    data: [],
    editable: true,
    function: "@function:representative_title_b70",
    functionEnabled: true,
    functionVariables: {
      representative_title: {
        data: [
          KYC_FieldIds.previous_kyc_469,
          KYC_FieldIds.representative_title_b70
        ],
        type: ">"
      }
    },
    inviteToDiscussionOnChange: false,
    key: "representative_title",
    label: "Representative title",
    required: false,
    type: "text"
  },
  {
    _id: KYC_FieldIds.representative_phone_number_c04,
    data: [],
    editable: true,
    function: "@function:representative_phone_number_c04",
    functionEnabled: true,
    functionVariables: {
      representative_phone_number: {
        data: [
          KYC_FieldIds.previous_kyc_469,
          KYC_FieldIds.representative_phone_number_c04
        ],
        type: ">"
      }
    },
    inviteToDiscussionOnChange: false,
    key: "representative_phone_number",
    label: "Representative phone number",
    required: false,
    type: "text"
  },
  {
    _id: KYC_FieldIds.representative_email_c89,
    data: [],
    editable: true,
    function: "@function:representative_email_c89",
    functionEnabled: true,
    functionVariables: {
      representative_email: {
        data: [
          KYC_FieldIds.previous_kyc_469,
          KYC_FieldIds.representative_email_c89
        ],
        type: ">"
      }
    },
    inviteToDiscussionOnChange: false,
    key: "representative_email",
    label: "Representative email",
    required: false,
    type: "text"
  },
  {
    _id: KYC_FieldIds.representative_ytunnus_d11,
    data: [],
    editable: true,
    function: "@function:representative_ytunnus_d11",
    functionEnabled: true,
    functionVariables: {
      representative_y_tunnus: {
        data: [
          KYC_FieldIds.previous_kyc_469,
          KYC_FieldIds.representative_ytunnus_d11
        ],
        type: ">"
      }
    },
    inviteToDiscussionOnChange: false,
    key: "representative_y_tunnus",
    label: "Representative Y-tunnus",
    required: false,
    type: "text"
  },
  {
    _id: KYC_FieldIds.business_activities_dbb,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Business activities ",
    required: false,
    type: "subheader"
  },
  {
    _id: KYC_FieldIds.financial_period_e19,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "financial_period",
    label: "Financial period",
    reminderEnabled: false,
    required: false,
    type: "daterange"
  },
  {
    _id: KYC_FieldIds.share_capital_eb9,
    data: [],
    editable: true,
    function: "@function:share_capital_eb9",
    functionEnabled: true,
    functionVariables: {
      share_capital: {
        data: [
          KYC_FieldIds.previous_kyc_469,
          KYC_FieldIds.share_capital_eb9
        ],
        type: ">"
      }
    },
    inviteToDiscussionOnChange: false,
    key: "share_capital",
    label: "Share capital",
    required: false,
    type: "numericunit",
    unit: "€"
  },
  {
    _id: KYC_FieldIds.estimated_revenue_f33,
    data: [],
    editable: true,
    function: "@function:estimated_revenue_f33",
    functionEnabled: true,
    functionVariables: {
      estimated_revenue: {
        data: [
          KYC_FieldIds.previous_kyc_469,
          KYC_FieldIds.estimated_revenue_f33
        ],
        type: ">"
      }
    },
    inviteToDiscussionOnChange: false,
    key: "estimated_revenue",
    label: "Estimated revenue",
    required: false,
    type: "numericunit",
    unit: "€"
  },
  {
    _id: KYC_FieldIds.balance_sheet_total_amount_f91,
    data: [],
    editable: true,
    function: "@function:balance_sheet_total_amount_f91",
    functionEnabled: true,
    functionVariables: {
      balance_sheet_total: {
        data: [
          KYC_FieldIds.previous_kyc_469,
          KYC_FieldIds.balance_sheet_total_amount_f91
        ],
        type: ">"
      }
    },
    inviteToDiscussionOnChange: false,
    key: "balance_sheet_total",
    label: "Balance sheet, total amount",
    required: false,
    type: "numericunit"
  },
  {
    _id: KYC_FieldIds.number_of_personnel_013,
    data: [],
    editable: true,
    function: "@function:number_of_personnel_013",
    functionEnabled: true,
    functionVariables: {
      number_of_personnel: {
        data: [
          KYC_FieldIds.number_of_personnel_013
        ],
        type: "="
      }
    },
    inviteToDiscussionOnChange: false,
    key: "number_of_personnel",
    label: "Number of personnel",
    required: false,
    type: "numeric"
  },
  {
    _id: KYC_FieldIds.places_of_business_0a7,
    data: [],
    editable: true,
    function: "@function:places_of_business_0a7",
    functionEnabled: true,
    functionVariables: {
      places_of_business: {
        data: [
          KYC_FieldIds.previous_kyc_469,
          KYC_FieldIds.places_of_business_0a7
        ],
        type: ">"
      }
    },
    inviteToDiscussionOnChange: false,
    key: "places_of_business",
    label: "Places of business",
    placeholder: "Number of places of business",
    required: false,
    type: "numeric"
  },
  {
    _id: KYC_FieldIds.is_the_company_subject_to_sanctions_1c0,
    data: [],
    editable: true,
    function: "@function:is_the_company_subject_to_sanctions_1c0",
    functionEnabled: true,
    functionVariables: {
      is_subject_to_sanctions: {
        data: [
          KYC_FieldIds.previous_kyc_469,
          KYC_FieldIds.is_the_company_subject_to_sanctions_1c0
        ],
        type: ">"
      }
    },
    inviteToDiscussionOnChange: false,
    key: "is_sanctioned",
    label: "Is the company subject to sanctions?",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: KYC_FieldIds.if_anyone_involved_in_the_company_under_sanctions_specify_2b2,
    data: [],
    editable: true,
    function: "@function:if_anyone_involved_in_the_company_under_sanctions_specify_2b2",
    functionEnabled: false,
    functionVariables: {
      sanctions_details: {
        data: [
          KYC_FieldIds.previous_kyc_469,
          KYC_FieldIds.if_anyone_involved_in_the_company_under_sanctions_specify_2b2
        ],
        type: ">"
      }
    },
    inviteToDiscussionOnChange: false,
    key: "sanctions_details",
    label: "If anyone involved in the company under sanctions, specify",
    required: false,
    type: "textarea"
  },
  {
    _id: KYC_FieldIds.metadata_2f7,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Metadata",
    required: false,
    type: "subheader"
  },
  {
    _id: KYC_FieldIds.unique_id_348,
    data: [],
    function: "@function:unique_id_348",
    functionEnabled: true,
    functionVariables: {
      activity_data: {
        data: [
          "data"
        ],
        type: "="
      }
    },
    inviteToDiscussionOnChange: false,
    key: "uid",
    label: "Unique ID",
    required: false,
    type: "text"
  },
  {
    _id: KYC_FieldIds.previous_kyc_469,
    data: [
      WorkflowIds.kyc_223
    ],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Previous KYC",
    required: false,
    type: "activitylink"
  },
  {
    _id: KYC_FieldIds.company_531,
    data: [
      WorkflowIds.companies_a51
    ],
    editable: true,
    function: "@function:company_531",
    functionEnabled: true,
    functionVariables: {
      company: {
        data: [
          KYC_FieldIds.previous_kyc_469,
          KYC_FieldIds.company_531
        ],
        type: ">"
      }
    },
    inviteToDiscussionOnChange: false,
    label: "Company",
    required: true,
    type: "activitylink"
  },
  {
    _id: KYC_FieldIds.sanctions_search_result_35d,
    data: [],
    description: "If the sanction search system have any match, the raw search data will be added here",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "sanctions_search_result",
    label: "Sanctions search result",
    required: false,
    type: "textarea"
  }
];
