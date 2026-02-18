
import { Systems_in_use_FieldIds, WorkflowIds } from "../enums";
      
// Fields for workflow: Systems in use

// Note: Field functions are extracted to ./functions/ directory
      
// They are referenced here as "@function:functionName" strings
      
export const fields: HailerFieldGeneric[] = [
  {
    _id: Systems_in_use_FieldIds.system_in_use_66b,
    data: [
      WorkflowIds.systems_519
    ],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "System in use",
    required: false,
    type: "activitylink"
  },
  {
    _id: Systems_in_use_FieldIds.company_using_system_675,
    data: [
      WorkflowIds.companies_a51
    ],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Company using system",
    required: false,
    type: "activitylink"
  }
];
