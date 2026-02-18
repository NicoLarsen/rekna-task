// Configuration for workflow: Shares transactions
      
import { HailerMembers, Shares_transactions_FieldIds, Shares_transactions_PhaseIds, WorkflowIds, WorkspaceTeams } from "../enums";
      
export const workflowConfig: HailerWorkflowUpdatePayload = {
  _id: WorkflowIds.shares_transactions_c4c,
  allowGuests: true,
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
  enablePredefinedName: false,
  enablePreselectedTeam: true,
  enableUniqueName: false,
  enableUnlinkedMode: false,
  fieldsOrder: [
    Shares_transactions_FieldIds.company_d92,
    Shares_transactions_FieldIds.to_shareholder_e0c,
    Shares_transactions_FieldIds.from_shareholder_e5d,
    Shares_transactions_FieldIds.number_of_shares_f45,
    Shares_transactions_FieldIds.date_fe1,
    Shares_transactions_FieldIds.notes_ff1,
    Shares_transactions_FieldIds.from_share_range_eea,
    Shares_transactions_FieldIds.to_share_range_f81,
    Shares_transactions_FieldIds.action_0cc,
    Shares_transactions_FieldIds.is_transaction_valid_627
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
  name: "Shares transactions",
  nameEditable: false,
  nameFieldPlaceHolderText: "Give a title",
  nameFunction: "return `${dep.data.sequence.toString()} - ${dep.number_of_shares} / ${dep.from_shareholder?.name || \"created\"}-${dep.to_shareholder.name} / ${dep.company.name}`",
  nameFunctionEnabled: true,
  nameFunctionVariables: {
    company: {
      data: [
        Shares_transactions_FieldIds.company_d92
      ],
      type: "="
    },
    data: {
      data: [
        "data"
      ],
      type: "="
    },
    from_shareholder: {
      data: [
        Shares_transactions_FieldIds.from_shareholder_e5d
      ],
      type: "="
    },
    number_of_shares: {
      data: [
        Shares_transactions_FieldIds.number_of_shares_f45
      ],
      type: "="
    },
    to_shareholder: {
      data: [
        Shares_transactions_FieldIds.to_shareholder_e0c
      ],
      type: "="
    }
  },
  order: 9,
  phasesOrder: [
    Shares_transactions_PhaseIds.draft_c4b,
    Shares_transactions_PhaseIds.pending_627,
    Shares_transactions_PhaseIds.realized_703
  ],
  preselectedTeam: {
    account: "675b24f48a5aeaa8084153e4",
    team: WorkspaceTeams.rekna_team_3e3
  }
};
      