// Configuration for workflow: Systems in use
      
import { HailerMembers, Systems_in_use_FieldIds, Systems_in_use_PhaseIds, WorkflowIds, WorkspaceTeams } from "../enums";
      
export const workflowConfig: HailerWorkflowUpdatePayload = {
  _id: WorkflowIds.systems_in_use_609,
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
    Systems_in_use_FieldIds.system_in_use_66b,
    Systems_in_use_FieldIds.company_using_system_675
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
  name: "Systems in use",
  nameEditable: false,
  nameFieldPlaceHolderText: "Give a title",
  nameFunction: "const system = dep.system || 'missing data';\nconst company = dep.company || 'missing data';\n\nreturn company + ' uses ' + system;",
  nameFunctionEnabled: true,
  nameFunctionVariables: {
    company: {
      data: [
        Systems_in_use_FieldIds.company_using_system_675,
        WorkflowIds.companies_a51,
        "data",
        "name"
      ],
      type: ">"
    },
    system: {
      data: [
        Systems_in_use_FieldIds.system_in_use_66b,
        WorkflowIds.systems_519,
        "data",
        "name"
      ],
      type: ">"
    }
  },
  order: 8,
  phasesOrder: [
    Systems_in_use_PhaseIds.all_608
  ],
  preselectedTeam: {
    account: "675b24f48a5aeaa8084153e4",
    team: WorkspaceTeams.rekna_team_3e3
  }
};
      