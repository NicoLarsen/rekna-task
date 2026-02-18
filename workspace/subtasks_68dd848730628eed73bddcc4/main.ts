// Configuration for workflow: Subtasks
      
import { HailerMembers, Subtasks_FieldIds, Subtasks_PhaseIds, WorkflowIds, WorkspaceTeams } from "../enums";
      
export const workflowConfig: HailerWorkflowUpdatePayload = {
  _id: WorkflowIds.subtasks_cc4,
  allowGuests: true,
  defaultView: "table",
  discussionPermissions: [
    "discussion.message.add",
    "discussion.message.add.attachment",
    "discussion.message.remove.own",
    "discussion.read.history"
  ],
  enableAddedField: true,
  enableAttachments: true,
  enableGuestEditing: true,
  enableLinkedAnnouncements: true,
  enableMapLocation: false,
  enableMessenger: false,
  enableModifiedField: true,
  enablePredefinedName: false,
  enablePreselectedTeam: true,
  enableUniqueName: false,
  enableUnlinkedMode: true,
  fieldsOrder: [
    Subtasks_FieldIds.status_d7f,
    Subtasks_FieldIds.main_task_d3a
  ],
  inviteActivityCreator: true,
  members: [
    {
      id: HailerMembers.nico_larsen_74e,
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
  name: "Subtasks",
  nameColumnText: "Subtask",
  nameEditable: false,
  nameFieldPlaceHolderText: "",
  order: 9,
  phasesOrder: [
    Subtasks_PhaseIds.to_do_cc3
  ],
  preselectedTeam: {
    account: "675b24f48a5aeaa8084153e4",
    team: WorkspaceTeams.rekna_team_3e3
  }
};
      