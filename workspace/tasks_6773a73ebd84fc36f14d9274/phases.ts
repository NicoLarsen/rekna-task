// Phases for workflow: Tasks
      
import { Tasks_FieldIds, Tasks_PhaseIds, WorkspaceMembers } from "../enums";
      
export const phases: HailerPhaseUpdatePayload[] = [
  {
    _id: Tasks_PhaseIds.to_do_279,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    color: "#FF0501",
    fields: [
      Tasks_FieldIds.description_275,
      Tasks_FieldIds.deadline_277,
      Tasks_FieldIds.company_d68,
      Tasks_FieldIds.ohjausryhm_544,
      Tasks_FieldIds.admin_5a5,
      Tasks_FieldIds.source_890,
      Tasks_FieldIds.assigned_to_5cc,
      Tasks_FieldIds.priority_524,
      Tasks_FieldIds.metadata_89c,
      Tasks_FieldIds.additional_raw_info_920,
      Tasks_FieldIds.subtasks_f47,
      Tasks_FieldIds.subtasks_e83
    ],
    followers: [
      WorkspaceMembers.nico_larsen_74e
    ],
    isInitial: true,
    name: " 🗒 To Do",
    possibleNextPhase: [
      Tasks_PhaseIds.doing_27a,
      Tasks_PhaseIds.done_27b,
      Tasks_PhaseIds.accounting_fe7,
      Tasks_PhaseIds.payroll_07d,
      Tasks_PhaseIds.financial_statement_47a
    ],
    possibleNextPhaseSettings: {
      [Tasks_PhaseIds.done_27b]: {
        text: "Task completed!"
      }
    },
    primaryDateField: Tasks_FieldIds.deadline_277,
    webhooksEnabled: false
  },
  {
    _id: Tasks_PhaseIds.doing_27a,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    color: "#a6862b",
    fields: [
      Tasks_FieldIds.description_275,
      Tasks_FieldIds.deadline_277,
      Tasks_FieldIds.company_d68,
      Tasks_FieldIds.ohjausryhm_544,
      Tasks_FieldIds.admin_5a5,
      Tasks_FieldIds.source_890,
      Tasks_FieldIds.assigned_to_5cc,
      Tasks_FieldIds.priority_524,
      Tasks_FieldIds.metadata_89c,
      Tasks_FieldIds.additional_raw_info_920,
      Tasks_FieldIds.subtasks_e83,
      Tasks_FieldIds.subtasks_f47
    ],
    followers: [],
    isInitial: false,
    name: "🚦 Doing",
    possibleNextPhase: [
      Tasks_PhaseIds.to_do_279,
      Tasks_PhaseIds.done_27b
    ],
    possibleNextPhaseSettings: {
      [Tasks_PhaseIds.done_27b]: {
        text: "Task completed!"
      }
    },
    primaryDateField: Tasks_FieldIds.deadline_277
  },
  {
    _id: Tasks_PhaseIds.done_27b,
    announcementFields: [
      Tasks_FieldIds.assigned_to_user_276
    ],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    color: "#306506",
    enableAnnouncement: false,
    fields: [
      Tasks_FieldIds.description_275,
      Tasks_FieldIds.deadline_277,
      Tasks_FieldIds.time_spent_278,
      Tasks_FieldIds.company_d68,
      Tasks_FieldIds.ohjausryhm_544,
      Tasks_FieldIds.admin_5a5,
      Tasks_FieldIds.source_890,
      Tasks_FieldIds.assigned_to_5cc,
      Tasks_FieldIds.priority_524,
      Tasks_FieldIds.metadata_89c,
      Tasks_FieldIds.additional_raw_info_920,
      Tasks_FieldIds.subtasks_e83,
      Tasks_FieldIds.subtasks_f47
    ],
    followers: [],
    isInitial: false,
    name: "✅ Done",
    possibleNextPhase: [
      Tasks_PhaseIds.to_do_279,
      Tasks_PhaseIds.doing_27a
    ],
    possibleNextPhaseSettings: {},
    primaryNumericField: Tasks_FieldIds.time_spent_278
  },
  {
    _id: Tasks_PhaseIds.accounting_fe7,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    color: "#d0021b",
    description: "",
    fields: [
      Tasks_FieldIds.description_275,
      Tasks_FieldIds.assigned_to_user_276,
      Tasks_FieldIds.deadline_277,
      Tasks_FieldIds.time_spent_278,
      Tasks_FieldIds.company_d68,
      Tasks_FieldIds.ohjausryhm_544,
      Tasks_FieldIds.admin_5a5,
      Tasks_FieldIds.source_890,
      Tasks_FieldIds.assigned_to_5cc,
      Tasks_FieldIds.priority_524,
      Tasks_FieldIds.unique_id_729,
      Tasks_FieldIds.metadata_89c,
      Tasks_FieldIds.additional_raw_info_920,
      Tasks_FieldIds.subtasks_e83,
      Tasks_FieldIds.subtasks_f47
    ],
    followers: [],
    isEndpoint: false,
    isInitial: false,
    name: "📒 Accounting",
    possibleNextPhase: [
      Tasks_PhaseIds.doing_27a,
      Tasks_PhaseIds.done_27b,
      Tasks_PhaseIds.to_do_279
    ],
    possibleNextPhaseSettings: {}
  },
  {
    _id: Tasks_PhaseIds.payroll_07d,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    color: "#d0021b",
    description: "",
    fields: [
      Tasks_FieldIds.description_275,
      Tasks_FieldIds.assigned_to_user_276,
      Tasks_FieldIds.deadline_277,
      Tasks_FieldIds.time_spent_278,
      Tasks_FieldIds.company_d68,
      Tasks_FieldIds.ohjausryhm_544,
      Tasks_FieldIds.admin_5a5,
      Tasks_FieldIds.source_890,
      Tasks_FieldIds.assigned_to_5cc,
      Tasks_FieldIds.priority_524,
      Tasks_FieldIds.unique_id_729,
      Tasks_FieldIds.metadata_89c,
      Tasks_FieldIds.additional_raw_info_920,
      Tasks_FieldIds.subtasks_e83,
      Tasks_FieldIds.subtasks_f47
    ],
    followers: [],
    isEndpoint: false,
    isInitial: false,
    name: "💰 Payroll",
    possibleNextPhase: [
      Tasks_PhaseIds.doing_27a,
      Tasks_PhaseIds.done_27b
    ],
    possibleNextPhaseSettings: {}
  },
  {
    _id: Tasks_PhaseIds.financial_statement_47a,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    description: "",
    fields: [
      Tasks_FieldIds.description_275,
      Tasks_FieldIds.assigned_to_user_276,
      Tasks_FieldIds.deadline_277,
      Tasks_FieldIds.time_spent_278,
      Tasks_FieldIds.company_d68,
      Tasks_FieldIds.ohjausryhm_544,
      Tasks_FieldIds.admin_5a5,
      Tasks_FieldIds.source_890,
      Tasks_FieldIds.assigned_to_5cc,
      Tasks_FieldIds.priority_524,
      Tasks_FieldIds.unique_id_729,
      Tasks_FieldIds.metadata_89c,
      Tasks_FieldIds.additional_raw_info_920,
      Tasks_FieldIds.subtasks_e83,
      Tasks_FieldIds.subtasks_f47
    ],
    followers: [],
    isEndpoint: false,
    isInitial: false,
    name: "📊 Financial statement",
    possibleNextPhase: [
      Tasks_PhaseIds.done_27b
    ],
    possibleNextPhaseSettings: {}
  }
];