
import { Companies_FieldIds, KYC_SignSpace_Form_FieldIds, WorkflowIds } from "../enums";
      
// Fields for workflow: KYC (SignSpace) - Form

// Note: Field functions are extracted to ./functions/ directory
      
// They are referenced here as "@function:functionName" strings
      
export const fields: HailerFieldGeneric[] = [
  {
    _id: KYC_SignSpace_Form_FieldIds.request_creator_6cc,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "creatorHandle",
    label: "Request creator",
    required: false,
    type: "text"
  },
  {
    _id: KYC_SignSpace_Form_FieldIds.participants_6cd,
    data: [],
    function: "@function:participants_6cd",
    functionEnabled: true,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    key: "participants",
    label: "Participants",
    required: false,
    type: "textarea"
  },
  {
    _id: KYC_SignSpace_Form_FieldIds.taskid_6ce,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "taskId",
    label: "taskId",
    required: false,
    type: "text"
  },
  {
    _id: KYC_SignSpace_Form_FieldIds.fileid_6cf,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "fileId",
    label: "fileId",
    required: false,
    type: "text"
  },
  {
    _id: KYC_SignSpace_Form_FieldIds.use_attachment_6d0,
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
    _id: KYC_SignSpace_Form_FieldIds.language_6d1,
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
    _id: KYC_SignSpace_Form_FieldIds.error_message_6d2,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "errorMessage",
    label: "Error message",
    required: false,
    type: "textarea"
  },
  {
    _id: KYC_SignSpace_Form_FieldIds.integration_fields_6d3,
    collapsedByDefault: true,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Integration fields",
    required: false,
    type: "subheader"
  },
  {
    _id: KYC_SignSpace_Form_FieldIds.financical_sanctions_6d4,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Financical sanctions",
    required: false,
    type: "subheader"
  },
  {
    _id: KYC_SignSpace_Form_FieldIds.company_info_6d5,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Company info",
    required: false,
    type: "subheader"
  },
  {
    _id: KYC_SignSpace_Form_FieldIds.company_name_6d6,
    data: [],
    editable: true,
    function: "@function:company_name_6d6",
    functionEnabled: false,
    functionVariables: {
      name: {
        data: [
          KYC_SignSpace_Form_FieldIds.company_6ee,
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
    _id: KYC_SignSpace_Form_FieldIds.ytunnus_6d7,
    data: [],
    editable: true,
    function: "@function:ytunnus_6d7",
    functionEnabled: false,
    functionVariables: {
      company_ytunnus: {
        data: [
          KYC_SignSpace_Form_FieldIds.company_6ee,
          Companies_FieldIds.ytunnus_b80
        ],
        type: ">"
      },
      old_kyc_ytunnus: {
        data: [
          KYC_SignSpace_Form_FieldIds.previous_kyc_6ed,
          KYC_SignSpace_Form_FieldIds.ytunnus_6d7
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
    _id: KYC_SignSpace_Form_FieldIds.address_6d8,
    data: [],
    editable: true,
    function: "@function:address_6d8",
    functionEnabled: false,
    functionVariables: {
      address: {
        data: [
          KYC_SignSpace_Form_FieldIds.previous_kyc_6ed,
          KYC_SignSpace_Form_FieldIds.address_6d8
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
    _id: KYC_SignSpace_Form_FieldIds.postal_code_6d9,
    data: [],
    editable: true,
    function: "@function:postal_code_6d9",
    functionEnabled: false,
    functionVariables: {
      postal_code: {
        data: [
          KYC_SignSpace_Form_FieldIds.previous_kyc_6ed,
          KYC_SignSpace_Form_FieldIds.postal_code_6d9
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
    _id: KYC_SignSpace_Form_FieldIds.city_6da,
    data: [],
    editable: true,
    function: "@function:city_6da",
    functionEnabled: false,
    functionVariables: {
      city: {
        data: [
          KYC_SignSpace_Form_FieldIds.previous_kyc_6ed,
          KYC_SignSpace_Form_FieldIds.city_6da
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
    _id: KYC_SignSpace_Form_FieldIds.line_of_business_6db,
    data: [],
    editable: true,
    function: "@function:line_of_business_6db",
    functionEnabled: false,
    functionVariables: {
      line_if_business: {
        data: [
          KYC_SignSpace_Form_FieldIds.previous_kyc_6ed,
          KYC_SignSpace_Form_FieldIds.line_of_business_6db
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
    _id: KYC_SignSpace_Form_FieldIds.representative_6dc,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Representative",
    required: false,
    type: "subheader"
  },
  {
    _id: KYC_SignSpace_Form_FieldIds.representative_name_6dd,
    data: [],
    editable: true,
    function: "@function:representative_name_6dd",
    functionEnabled: false,
    functionVariables: {
      representative_name: {
        data: [
          KYC_SignSpace_Form_FieldIds.previous_kyc_6ed,
          KYC_SignSpace_Form_FieldIds.representative_name_6dd
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
    _id: KYC_SignSpace_Form_FieldIds.representative_title_6de,
    data: [],
    editable: true,
    function: "@function:representative_title_6de",
    functionEnabled: false,
    functionVariables: {
      representative_title: {
        data: [
          KYC_SignSpace_Form_FieldIds.previous_kyc_6ed,
          KYC_SignSpace_Form_FieldIds.representative_title_6de
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
    _id: KYC_SignSpace_Form_FieldIds.representative_phone_number_6df,
    data: [],
    editable: true,
    function: "@function:representative_phone_number_6df",
    functionEnabled: false,
    functionVariables: {
      representative_phone_number: {
        data: [
          KYC_SignSpace_Form_FieldIds.previous_kyc_6ed,
          KYC_SignSpace_Form_FieldIds.representative_phone_number_6df
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
    _id: KYC_SignSpace_Form_FieldIds.representative_email_6e0,
    data: [],
    editable: true,
    function: "@function:representative_email_6e0",
    functionEnabled: false,
    functionVariables: {
      representative_email: {
        data: [
          KYC_SignSpace_Form_FieldIds.previous_kyc_6ed,
          KYC_SignSpace_Form_FieldIds.representative_email_6e0
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
    _id: KYC_SignSpace_Form_FieldIds.representative_ytunnus_6e1,
    data: [],
    editable: true,
    function: "@function:representative_ytunnus_6e1",
    functionEnabled: false,
    functionVariables: {
      representative_y_tunnus: {
        data: [
          KYC_SignSpace_Form_FieldIds.previous_kyc_6ed,
          KYC_SignSpace_Form_FieldIds.representative_ytunnus_6e1
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
    _id: KYC_SignSpace_Form_FieldIds.business_activities_6e2,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Business activities ",
    required: false,
    type: "subheader"
  },
  {
    _id: KYC_SignSpace_Form_FieldIds.financial_period_6e3,
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
    _id: KYC_SignSpace_Form_FieldIds.share_capital_6e4,
    data: [],
    editable: true,
    function: "@function:share_capital_6e4",
    functionEnabled: false,
    functionVariables: {
      share_capital: {
        data: [
          KYC_SignSpace_Form_FieldIds.previous_kyc_6ed,
          KYC_SignSpace_Form_FieldIds.share_capital_6e4
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
    _id: KYC_SignSpace_Form_FieldIds.estimated_revenue_6e5,
    data: [],
    editable: true,
    function: "@function:estimated_revenue_6e5",
    functionEnabled: false,
    functionVariables: {
      estimated_revenue: {
        data: [
          KYC_SignSpace_Form_FieldIds.previous_kyc_6ed,
          KYC_SignSpace_Form_FieldIds.estimated_revenue_6e5
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
    _id: KYC_SignSpace_Form_FieldIds.balance_sheet_total_amount_6e6,
    data: [],
    editable: true,
    function: "@function:balance_sheet_total_amount_6e6",
    functionEnabled: false,
    functionVariables: {
      balance_sheet_total: {
        data: [
          KYC_SignSpace_Form_FieldIds.previous_kyc_6ed,
          KYC_SignSpace_Form_FieldIds.balance_sheet_total_amount_6e6
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
    _id: KYC_SignSpace_Form_FieldIds.number_of_personnel_6e7,
    data: [],
    editable: true,
    function: "@function:number_of_personnel_6e7",
    functionEnabled: false,
    functionVariables: {
      number_of_personnel: {
        data: [
          KYC_SignSpace_Form_FieldIds.number_of_personnel_6e7
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
    _id: KYC_SignSpace_Form_FieldIds.places_of_business_6e8,
    data: [],
    editable: true,
    function: "@function:places_of_business_6e8",
    functionEnabled: false,
    functionVariables: {
      places_of_business: {
        data: [
          KYC_SignSpace_Form_FieldIds.previous_kyc_6ed,
          KYC_SignSpace_Form_FieldIds.places_of_business_6e8
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
    _id: KYC_SignSpace_Form_FieldIds.is_the_company_subject_to_sanctions_6e9,
    data: [],
    editable: true,
    function: "@function:is_the_company_subject_to_sanctions_6e9",
    functionEnabled: true,
    functionVariables: {
      is_subject_to_sanctions: {
        data: [
          KYC_SignSpace_Form_FieldIds.previous_kyc_6ed,
          KYC_SignSpace_Form_FieldIds.is_the_company_subject_to_sanctions_6e9
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
    _id: KYC_SignSpace_Form_FieldIds.if_anyone_involved_in_the_company_under_sanctions_specify_6ea,
    data: [],
    editable: true,
    function: "@function:if_anyone_involved_in_the_company_under_sanctions_specify_6ea",
    functionEnabled: false,
    functionVariables: {
      sanctions_details: {
        data: [
          KYC_SignSpace_Form_FieldIds.previous_kyc_6ed,
          KYC_SignSpace_Form_FieldIds.if_anyone_involved_in_the_company_under_sanctions_specify_6ea
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
    _id: KYC_SignSpace_Form_FieldIds.metadata_6eb,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Metadata",
    required: false,
    type: "subheader"
  },
  {
    _id: KYC_SignSpace_Form_FieldIds.unique_id_6ec,
    data: [],
    function: "@function:unique_id_6ec",
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
    _id: KYC_SignSpace_Form_FieldIds.previous_kyc_6ed,
    data: [
      WorkflowIds.kyc_signspace_form_6ad
    ],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Previous KYC",
    required: false,
    type: "activitylink"
  },
  {
    _id: KYC_SignSpace_Form_FieldIds.company_6ee,
    data: [
      WorkflowIds.companies_a51
    ],
    editable: true,
    function: "@function:company_6ee",
    functionEnabled: false,
    functionVariables: {
      company: {
        data: [
          KYC_SignSpace_Form_FieldIds.previous_kyc_6ed,
          KYC_SignSpace_Form_FieldIds.company_6ee
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
    _id: KYC_SignSpace_Form_FieldIds.sanctions_search_result_6ef,
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
