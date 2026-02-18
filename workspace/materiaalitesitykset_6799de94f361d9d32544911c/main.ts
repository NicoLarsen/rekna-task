// Configuration for workflow: Materiaalit/Esitykset
      
import { HailerMembers, MateriaalitEsitykset_FieldIds, MateriaalitEsitykset_PhaseIds, WorkflowIds, WorkspaceMembers, WorkspaceTeams } from "../enums";
      
export const workflowConfig: HailerWorkflowUpdatePayload = {
  _id: WorkflowIds.materiaalitesitykset_11c,
  allowGuests: true,
  coverImage: "6799e9e66e5e9672c73baf9d",
  createNewLabel: "Add Material",
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
    MateriaalitEsitykset_FieldIds.linkki_2f5,
    MateriaalitEsitykset_FieldIds.kategoria_712
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
  name: "Materiaalit/Esitykset",
  nameFieldPlaceHolderText: "Give a title",
  order: 6,
  personInCharge: WorkspaceMembers.johan_borgstrm_776,
  personInChargeLabel: "",
  phasesOrder: [
    MateriaalitEsitykset_PhaseIds.new_phase_11b
  ],
  preselectedTeam: {
    account: "675b24f48a5aeaa8084153e4",
    team: WorkspaceTeams.rekna_team_3e3
  }
};
      