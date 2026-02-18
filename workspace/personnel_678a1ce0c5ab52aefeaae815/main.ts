// Configuration for workflow: Personnel
      
import { HailerMembers, Personnel_FieldIds, Personnel_PhaseIds, WorkflowIds, WorkspaceTeams } from "../enums";
      
export const workflowConfig: HailerWorkflowUpdatePayload = {
  _id: WorkflowIds.personnel_815,
  allowGuests: true,
  defaultView: "table",
  discussionPermissions: [
    "discussion.message.add",
    "discussion.message.add.attachment",
    "discussion.read.history",
    "discussion.message.remove.own",
    "discussion.leave"
  ],
  enableAddedField: true,
  enableAttachments: true,
  enableGuestEditing: true,
  enableLinkedAnnouncements: true,
  enableMapLocation: false,
  enableMessenger: true,
  enableModifiedField: true,
  enablePredefinedName: false,
  enablePreselectedTeam: true,
  enableUniqueName: false,
  enableUnlinkedMode: true,
  fieldsOrder: [
    Personnel_FieldIds.phone_number_a53,
    Personnel_FieldIds.email_a5d,
    Personnel_FieldIds.yritys_cd0,
    Personnel_FieldIds.user_48c
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
  name: "Personnel",
  nameColumnText: "Nimi",
  nameEditable: false,
  nameFieldPlaceHolderText: "Etunimi sukunimi",
  order: 3,
  phasesOrder: [
    Personnel_PhaseIds.new_phase_814
  ],
  predefinedNamePrefix: "PREFIX",
  preselectedTeam: {
    account: "675b24f48a5aeaa8084153e4",
    team: WorkspaceTeams.rekna_team_3e3
  }
};
      