
import { Personnel_FieldIds, WorkflowIds } from "../enums";
      
// Fields for workflow: Personnel

// Note: Field functions are extracted to ./functions/ directory
      
// They are referenced here as "@function:functionName" strings
      
export const fields: HailerFieldGeneric[] = [
  {
    _id: Personnel_FieldIds.phone_number_a53,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "phone_number",
    label: "☎️ Phone number",
    required: false,
    type: "text"
  },
  {
    _id: Personnel_FieldIds.email_a5d,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "email",
    label: "✉️ Email ",
    required: false,
    type: "text"
  },
  {
    _id: Personnel_FieldIds.yritys_cd0,
    data: [
      WorkflowIds.companies_a51
    ],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Yritys",
    required: false,
    type: "activitylink"
  },
  {
    _id: Personnel_FieldIds.user_48c,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "user",
    label: "User",
    required: true,
    type: "users"
  }
];
