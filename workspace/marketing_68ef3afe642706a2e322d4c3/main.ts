// Configuration for workflow: Marketing
      
import { HailerMembers, Marketing_FieldIds, Marketing_PhaseIds, WorkflowIds, WorkspaceMembers, WorkspaceTeams } from "../enums";
      
export const workflowConfig: HailerWorkflowUpdatePayload = {
  _id: WorkflowIds.marketing_4c3,
  allowGuests: true,
  coverImage: "68ef42f609715dfae0c1d160",
  createNewLabel: "",
  defaultView: "kanban",
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
  enableUnlinkedMode: false,
  fieldsOrder: [
    Marketing_FieldIds.description_e02,
    Marketing_FieldIds.responsible_efe,
    Marketing_FieldIds.instagram_205,
    Marketing_FieldIds.tiktok_2a2,
    Marketing_FieldIds.reknafi_34e,
    Marketing_FieldIds.linkedin_3bf,
    Marketing_FieldIds.youtube_442,
    Marketing_FieldIds.newsletter_4d6,
    Marketing_FieldIds.publish_date_e80
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
  name: "Marketing",
  nameFieldPlaceHolderText: "Give a title",
  order: 5,
  personInCharge: WorkspaceMembers.johan_borgstrm_776,
  personInChargeLabel: "",
  phasesOrder: [
    Marketing_PhaseIds.ideas_4c2,
    Marketing_PhaseIds.pipeline_6b4,
    Marketing_PhaseIds.done_a2d
  ],
  preselectedTeam: {
    account: "675b24f48a5aeaa8084153e4",
    team: WorkspaceTeams.rekna_team_3e3
  }
};
      