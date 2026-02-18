// Configuration for workflow: Contacts
      
import { Contacts_FieldIds, Contacts_PhaseIds, HailerMembers, WorkflowIds, WorkspaceTeams } from "../enums";
      
export const workflowConfig: HailerWorkflowUpdatePayload = {
  _id: WorkflowIds.contacts_ffb,
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
  enablePredefinedName: false,
  enablePreselectedTeam: true,
  enableUniqueName: false,
  enableUnlinkedMode: true,
  fieldsOrder: [
    Contacts_FieldIds.phone_number_0b0,
    Contacts_FieldIds.email_0d7,
    Contacts_FieldIds.address_9ad,
    Contacts_FieldIds.ytunnus_a43,
    Contacts_FieldIds.shareholder_997
  ],
  inviteActivityCreator: true,
  members: [
    {
      id: HailerMembers.stefan_atanasov_917,
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
  name: "Contacts",
  nameColumnText: "Name",
  nameEditable: false,
  nameFieldPlaceHolderText: "Give a title",
  nameFunctionEnabled: false,
  order: 7,
  phasesOrder: [
    Contacts_PhaseIds.new_phase_ffa
  ],
  preselectedTeam: {
    account: "675b24f48a5aeaa8084153e4",
    team: WorkspaceTeams.rekna_team_3e3
  }
};
      