
import { Subtasks_FieldIds, WorkflowIds } from "../enums";
      
// Fields for workflow: Subtasks

// Note: Field functions are extracted to ./functions/ directory
      
// They are referenced here as "@function:functionName" strings
      
export const fields: HailerFieldGeneric[] = [
  {
    _id: Subtasks_FieldIds.main_task_d3a,
    data: [
      WorkflowIds.tasks_274
    ],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Main task",
    required: false,
    type: "activitylink"
  },
  {
    _id: Subtasks_FieldIds.status_d7f,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Status",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  }
];
