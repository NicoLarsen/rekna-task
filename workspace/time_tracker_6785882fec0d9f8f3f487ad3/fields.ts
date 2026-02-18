
import { Time_tracker_FieldIds, WorkflowIds } from "../enums";
      
// Fields for workflow: Time tracker

// Note: Field functions are extracted to ./functions/ directory
      
// They are referenced here as "@function:functionName" strings
      
export const fields: HailerFieldGeneric[] = [
  {
    _id: Time_tracker_FieldIds.time_spent_c97,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Time spent",
    required: true,
    type: "numericunit",
    unit: "h"
  },
  {
    _id: Time_tracker_FieldIds.description_cc4,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Description",
    required: false,
    type: "textarea"
  },
  {
    _id: Time_tracker_FieldIds.related_to_cea,
    data: [
      WorkflowIds.companies_a51,
      WorkflowIds.tasks_274
    ],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Related to",
    required: true,
    type: "activitylink"
  },
  {
    _id: Time_tracker_FieldIds.reported_by_de5,
    data: [],
    defaultTo: true,
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Reported by",
    required: false,
    type: "users"
  },
  {
    _id: Time_tracker_FieldIds.project_564,
    data: [
      WorkflowIds.tasks_274
    ],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Project",
    required: false,
    type: "activitylink"
  },
  {
    _id: Time_tracker_FieldIds.metadata_798,
    collapsedByDefault: true,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Metadata",
    required: false,
    type: "subheader"
  },
  {
    _id: Time_tracker_FieldIds.archive_path_7f1,
    data: [],
    function: "@function:archive_path_7f1",
    functionEnabled: true,
    functionVariables: {
      name: {
        data: [
          Time_tracker_FieldIds.related_to_cea,
          WorkflowIds.companies_a51,
          "data",
          "name"
        ],
        type: ">"
      }
    },
    inviteToDiscussionOnChange: false,
    key: "archive_path",
    label: "Archive path",
    required: false,
    type: "text"
  },
  {
    _id: Time_tracker_FieldIds.archive_metadata_32b,
    data: [],
    function: "@function:archive_metadata_32b",
    functionEnabled: true,
    functionVariables: {
      "Archive metadata": {
        data: [
          Time_tracker_FieldIds.archive_metadata_32b
        ],
        type: "="
      },
      activity_metadata: {
        data: [
          Time_tracker_FieldIds.metadata_798
        ],
        type: "="
      },
      company_name: {
        data: [
          Time_tracker_FieldIds.related_to_cea,
          WorkflowIds.companies_a51,
          "data",
          "name"
        ],
        type: ">"
      }
    },
    inviteToDiscussionOnChange: false,
    key: "archive_metadata",
    label: "Archive metadata",
    required: false,
    type: "textarea"
  }
];
