// Configuration for workflow: Time tracker
      
import { HailerMembers, Time_tracker_FieldIds, Time_tracker_PhaseIds, WorkflowIds, WorkspaceTeams } from "../enums";
      
export const workflowConfig: HailerWorkflowUpdatePayload = {
  _id: WorkflowIds.time_tracker_ad3,
  allowGuests: false,
  coverImage: "68dcc8d80805b59ac3abf372",
  createNewLabel: "Record work hours",
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
  enableGuestEditing: false,
  enableLinkedAnnouncements: false,
  enableMapLocation: false,
  enableMessenger: false,
  enableModifiedField: true,
  enablePredefinedName: false,
  enablePreselectedTeam: true,
  enableUniqueName: false,
  enableUnlinkedMode: false,
  fieldsOrder: [
    Time_tracker_FieldIds.time_spent_c97,
    Time_tracker_FieldIds.description_cc4,
    Time_tracker_FieldIds.related_to_cea,
    Time_tracker_FieldIds.reported_by_de5,
    Time_tracker_FieldIds.project_564,
    Time_tracker_FieldIds.metadata_798,
    Time_tracker_FieldIds.archive_path_7f1,
    Time_tracker_FieldIds.archive_metadata_32b
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
  name: "Time tracker",
  nameEditable: false,
  nameFieldPlaceHolderText: "Give a title",
  nameFunction: "const time = dep.timeSpent || '';\nconst related = dep.relatedTo || '';\n\nif (time && related) {\n    return time + 'h on ' + related;\n}\n\nreturn '';",
  nameFunctionEnabled: true,
  nameFunctionVariables: {
    relatedTo: {
      data: [
        Time_tracker_FieldIds.related_to_cea,
        WorkflowIds.companies_a51,
        "data",
        "name"
      ],
      type: ">"
    },
    timeSpent: {
      data: [
        Time_tracker_FieldIds.time_spent_c97
      ],
      type: "="
    }
  },
  order: 1,
  personInChargeLabel: "",
  phasesOrder: [
    Time_tracker_PhaseIds.reported_aeb,
    Time_tracker_PhaseIds.invoiced_ad2,
    Time_tracker_PhaseIds.archived_b92
  ],
  preselectedTeam: {
    account: "675b24f48a5aeaa8084153e4",
    team: WorkspaceTeams.rekna_team_3e3
  }
};
      