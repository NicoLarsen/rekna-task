
import { Ohjausryhmt_FieldIds, WorkflowIds } from "../enums";
      
// Fields for workflow: Ohjausryhmät

// Note: Field functions are extracted to ./functions/ directory
      
// They are referenced here as "@function:functionName" strings
      
export const fields: HailerFieldGeneric[] = [
  {
    _id: Ohjausryhmt_FieldIds.loki_b43,
    data: [
      WorkflowIds.ohjausryhmt_2d4
    ],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Loki",
    required: false,
    type: "activitylink"
  }
];
