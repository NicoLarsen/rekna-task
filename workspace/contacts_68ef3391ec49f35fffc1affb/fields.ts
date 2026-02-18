
import { Contacts_FieldIds, WorkflowIds } from "../enums";
      
// Fields for workflow: Contacts

// Note: Field functions are extracted to ./functions/ directory
      
// They are referenced here as "@function:functionName" strings
      
export const fields: HailerFieldGeneric[] = [
  {
    _id: Contacts_FieldIds.phone_number_0b0,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "phone_number",
    label: "Phone number",
    required: false,
    type: "text"
  },
  {
    _id: Contacts_FieldIds.email_0d7,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "email",
    label: "Email",
    required: false,
    type: "text"
  },
  {
    _id: Contacts_FieldIds.address_9ad,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "address",
    label: "Address",
    required: false,
    type: "text"
  },
  {
    _id: Contacts_FieldIds.ytunnus_a43,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "y_tunnus",
    label: "Y-tunnus",
    required: false,
    type: "text"
  },
  {
    _id: Contacts_FieldIds.shareholder_997,
    data: [
      WorkflowIds.shareholders_13f
    ],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Shareholder",
    required: false,
    type: "activitylink"
  }
];
