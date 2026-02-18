// Configuration for workflow: Tasks
      
import { HailerMembers, Tasks_FieldIds, Tasks_PhaseIds, WorkflowIds, WorkspaceTeams } from "../enums";
      
export const workflowConfig: HailerWorkflowUpdatePayload = {
  _id: WorkflowIds.tasks_274,
  coverImage: "68dcc8526111cf8a3e3796c5",
  createNewLabel: "Add a new task",
  defaultView: "kanban",
  discussionPermissions: [
    "discussion.message.add",
    "discussion.message.add.attachment",
    "discussion.read.history",
    "discussion.message.remove.own",
    "discussion.leave"
  ],
  enableAddedField: true,
  enableAttachments: true,
  enableLinkedAnnouncements: true,
  enableMapLocation: false,
  enableMessenger: true,
  enableModifiedField: false,
  enablePredefinedName: false,
  enablePreselectedTeam: true,
  enableUniqueName: false,
  enableUnlinkedMode: false,
  fieldsOrder: [
    Tasks_FieldIds.description_275,
    Tasks_FieldIds.assigned_to_5cc,
    Tasks_FieldIds.assigned_to_user_276,
    Tasks_FieldIds.deadline_277,
    Tasks_FieldIds.company_d68,
    Tasks_FieldIds.time_spent_278,
    Tasks_FieldIds.priority_524,
    Tasks_FieldIds.unique_id_729,
    Tasks_FieldIds.admin_5a5,
    Tasks_FieldIds.ohjausryhm_544,
    Tasks_FieldIds.source_890,
    Tasks_FieldIds.metadata_89c,
    Tasks_FieldIds.additional_raw_info_920,
    Tasks_FieldIds.subtasks_f47,
    Tasks_FieldIds.subtasks_e83
  ],
  inviteActivityCreator: false,
  members: [
    {
      id: HailerMembers.johan_borgstrm_776,
      info: {},
      permissions: [
        "admin"
      ]
    },
    {
      id: HailerMembers.workspace,
      info: {},
      permissions: [
        "any"
      ]
    }
  ],
  name: "Tasks",
  nameColumnText: "Task title",
  nameFieldPlaceHolderText: "Enter a task title",
  order: 2,
  personInChargeLabel: "",
  phasesOrder: [
    Tasks_PhaseIds.to_do_279,
    Tasks_PhaseIds.accounting_fe7,
    Tasks_PhaseIds.payroll_07d,
    Tasks_PhaseIds.financial_statement_47a,
    Tasks_PhaseIds.doing_27a,
    Tasks_PhaseIds.done_27b
  ],
  preselectedTeam: {
    account: "675b24f48a5aeaa8084153e4",
    team: WorkspaceTeams.rekna_team_3e3
  }
};
      