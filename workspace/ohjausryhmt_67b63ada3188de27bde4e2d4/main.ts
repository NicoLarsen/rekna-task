// Configuration for workflow: Ohjausryhmät
      
import { HailerMembers, Ohjausryhmt_FieldIds, Ohjausryhmt_PhaseIds, WorkflowIds, WorkspaceTeams } from "../enums";
      
export const workflowConfig: HailerWorkflowUpdatePayload = {
  _id: WorkflowIds.ohjausryhmt_2d4,
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
    Ohjausryhmt_FieldIds.loki_b43
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
      id: HailerMembers.johan_borgstrm_776,
      info: {},
      permissions: [
        "any"
      ]
    },
    {
      id: HailerMembers.jonathan_wollsten_87f,
      info: {},
      permissions: [
        "any"
      ]
    },
    {
      id: HailerMembers.philip_ahlgren_98c,
      info: {},
      permissions: [
        "any"
      ]
    }
  ],
  name: "Ohjausryhmät",
  nameFieldPlaceHolderText: "Give a title",
  order: 4,
  phasesOrder: [
    Ohjausryhmt_PhaseIds.loki_2d3,
    Ohjausryhmt_PhaseIds.keskustelut_c09
  ],
  preselectedTeam: {
    account: "675b24f48a5aeaa8084153e4",
    team: WorkspaceTeams.rekna_team_3e3
  }
};
      