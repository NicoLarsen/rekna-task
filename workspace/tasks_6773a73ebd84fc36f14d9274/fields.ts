
import { Personnel_FieldIds, Subtasks_FieldIds, Tasks_FieldIds, Tasks_PhaseIds, WorkflowIds } from "../enums";
      
// Fields for workflow: Tasks

// Note: Field functions are extracted to ./functions/ directory
      
// They are referenced here as "@function:functionName" strings
      
export const fields: HailerFieldGeneric[] = [
  {
    _id: Tasks_FieldIds.description_275,
    data: [],
    key: "description",
    label: "Description",
    type: "textarea"
  },
  {
    _id: Tasks_FieldIds.assigned_to_user_276,
    data: [],
    defaultTo: true,
    function: "@function:assigned_to_user_276",
    functionEnabled: true,
    functionVariables: {
      user: {
        data: [
          Tasks_FieldIds.assigned_to_5cc,
          Personnel_FieldIds.user_48c
        ],
        type: ">"
      }
    },
    key: "user",
    label: "Assigned to user",
    required: false,
    type: "users"
  },
  {
    _id: Tasks_FieldIds.deadline_277,
    data: [],
    key: "deadline",
    label: "Deadline",
    reminderEnabled: true,
    reminderSettings: {
      activityOwner: false,
      activityOwnerTeam: false,
      activityParticipants: false,
      fieldOffset: {
        beforeOrAfter: "before",
        days: 1,
        milliseconds: 0,
        months: 0
      },
      fields: [],
      phases: [
        "6773b578a5c5354cba8d6b0d",
        Tasks_PhaseIds.to_do_279,
        Tasks_PhaseIds.doing_27a,
        Tasks_PhaseIds.done_27b
      ],
      reminderText: "((field-name)) in ((activity-name)) is approaching it's deadline (((relative-time)))",
      teams: [],
      users: []
    },
    type: "date"
  },
  {
    _id: Tasks_FieldIds.time_spent_278,
    data: [],
    key: "time_spent",
    label: "Time spent",
    type: "numericunit",
    unit: "hrs"
  },
  {
    _id: Tasks_FieldIds.company_d68,
    data: [
      WorkflowIds.companies_a51
    ],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "company",
    label: "Company",
    required: false,
    type: "activitylink"
  },
  {
    _id: Tasks_FieldIds.ohjausryhm_544,
    data: [
      WorkflowIds.ohjausryhmt_2d4
    ],
    function: "@function:ohjausryhm_544",
    functionEnabled: false,
    functionVariables: {},
    inviteToDiscussionOnChange: false,
    label: "Ohjausryhmä",
    required: false,
    type: "activitylink"
  },
  {
    _id: Tasks_FieldIds.admin_5a5,
    collapsedByDefault: true,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Admin",
    required: false,
    type: "subheader"
  },
  {
    _id: Tasks_FieldIds.source_890,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "source",
    label: "Source",
    required: false,
    type: "text"
  },
  {
    _id: Tasks_FieldIds.assigned_to_5cc,
    data: [
      WorkflowIds.personnel_815
    ],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "assigned_to",
    label: "Assigned to",
    required: false,
    type: "activitylink"
  },
  {
    _id: Tasks_FieldIds.priority_524,
    data: [
      "🔴 High",
      "🟡 Medium",
      "🟢 Low"
    ],
    defaultTo: true,
    defaultValue: "🟡 Medium",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "priority",
    label: "Priority",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Tasks_FieldIds.unique_id_729,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "uid",
    label: "Unique ID",
    required: false,
    type: "text"
  },
  {
    _id: Tasks_FieldIds.metadata_89c,
    collapsedByDefault: true,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Metadata",
    required: false,
    type: "subheader"
  },
  {
    _id: Tasks_FieldIds.additional_raw_info_920,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "additional_raw_info",
    label: "Additional raw info",
    required: false,
    type: "textarea"
  },
  {
    _id: Tasks_FieldIds.subtasks_e83,
    data: [
      WorkflowIds.subtasks_cc4
    ],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Subtasks",
    modifier: {
      quickAdd: {
        fieldIds: [
          "68dd84bd30628eed73bddd93",
          Subtasks_FieldIds.status_d7f
        ],
        targetFieldId: Subtasks_FieldIds.main_task_d3a
      }
    },
    required: false,
    type: "linkedfrom"
  },
  {
    _id: Tasks_FieldIds.subtasks_f47,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Subtasks",
    required: false,
    type: "subheader"
  }
];
