// Configuration for workflow: Notes / Rekna Monthly
      
import { HailerMembers, Notes_Rekna_Monthly_FieldIds, Notes_Rekna_Monthly_PhaseIds, WorkflowIds, WorkspaceTeams } from "../enums";
      
export const workflowConfig: HailerWorkflowUpdatePayload = {
  _id: WorkflowIds.notes_rekna_monthly_1f4,
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
  enableMessenger: true,
  enableModifiedField: true,
  enablePreselectedTeam: true,
  enableUniqueName: false,
  enableUnlinkedMode: true,
  fieldsOrder: [
    Notes_Rekna_Monthly_FieldIds.date_01f,
    Notes_Rekna_Monthly_FieldIds.notes_ff8
  ],
  inviteActivityCreator: true,
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
  name: "Notes / Rekna Monthly",
  nameFieldPlaceHolderText: "Give a title",
  order: 9,
  phasesOrder: [
    Notes_Rekna_Monthly_PhaseIds.new_phase_1f3
  ],
  preselectedTeam: {
    account: "675b24f48a5aeaa8084153e4",
    team: WorkspaceTeams.rekna_team_3e3
  }
};
      