// Phases for workflow: Shares transactions
      
import { Shares_transactions_FieldIds, Shares_transactions_PhaseIds } from "../enums";
      
export const phases: HailerPhaseUpdatePayload[] = [
  {
    _id: Shares_transactions_PhaseIds.draft_c4b,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    description: "",
    fields: [
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
    followers: [],
    isEndpoint: false,
    isInitial: true,
    name: "Draft",
    possibleNextPhase: [
      Shares_transactions_PhaseIds.pending_627
    ],
    possibleNextPhaseSettings: {}
  },
  {
    _id: Shares_transactions_PhaseIds.pending_627,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    description: "",
    fields: [
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
    followers: [],
    isEndpoint: false,
    isInitial: false,
    name: "Pending",
    possibleNextPhase: [
      Shares_transactions_PhaseIds.realized_703
    ],
    possibleNextPhaseSettings: {}
  },
  {
    _id: Shares_transactions_PhaseIds.realized_703,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    description: "",
    fields: [
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
    followers: [],
    isEndpoint: true,
    isInitial: false,
    name: "Realized",
    possibleNextPhase: [],
    possibleNextPhaseSettings: {}
  }
];