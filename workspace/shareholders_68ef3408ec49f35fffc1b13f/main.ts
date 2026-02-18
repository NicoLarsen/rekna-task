// Configuration for workflow: Shareholders
      
import { HailerMembers, Shareholders_FieldIds, Shareholders_PhaseIds, WorkflowIds, WorkspaceTeams } from "../enums";
      
export const workflowConfig: HailerWorkflowUpdatePayload = {
  _id: WorkflowIds.shareholders_13f,
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
    Shareholders_FieldIds.informations_874,
    Shareholders_FieldIds.type_2e3,
    Shareholders_FieldIds.email_bd2,
    Shareholders_FieldIds.phone_number_c0d,
    Shareholders_FieldIds.address_99a,
    Shareholders_FieldIds.ytunnus_920,
    Shareholders_FieldIds.contact_280,
    Shareholders_FieldIds.shares_ac9,
    Shareholders_FieldIds.shares_transactions_045,
    Shareholders_FieldIds.positons_0d1,
    Shareholders_FieldIds.metadata_6bb,
    Shareholders_FieldIds.active_positions_68f
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
  name: "Shareholders",
  nameColumnText: "Name",
  nameEditable: true,
  nameFieldPlaceHolderText: "Give a title",
  nameFunction: "return dep.name",
  nameFunctionEnabled: true,
  nameFunctionVariables: {
    name: {
      data: [
        Shareholders_FieldIds.contact_280,
        WorkflowIds.contacts_ffb,
        "data",
        "name"
      ],
      type: ">"
    }
  },
  order: 8,
  phasesOrder: [
    Shareholders_PhaseIds.new_phase_13e
  ],
  preselectedTeam: {
    account: "675b24f48a5aeaa8084153e4",
    team: WorkspaceTeams.rekna_team_3e3
  }
};
      