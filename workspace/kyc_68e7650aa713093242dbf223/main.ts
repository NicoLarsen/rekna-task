// Configuration for workflow: KYC
      
import { HailerMembers, KYC_FieldIds, KYC_PhaseIds, WorkflowIds, WorkspaceTeams } from "../enums";
      
export const workflowConfig: HailerWorkflowUpdatePayload = {
  _id: WorkflowIds.kyc_223,
  allowGuests: true,
  defaultView: "kanban",
  discussionPermissions: [
    "discussion.message.add",
    "discussion.message.add.attachment",
    "discussion.read.history",
    "discussion.message.remove.own"
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
  enableUnlinkedMode: false,
  fieldsOrder: [
    KYC_FieldIds.company_info_78c,
    KYC_FieldIds.previous_kyc_469,
    KYC_FieldIds.company_531,
    KYC_FieldIds.company_name_80b,
    KYC_FieldIds.ytunnus_885,
    KYC_FieldIds.address_8d4,
    KYC_FieldIds.postal_code_911,
    KYC_FieldIds.city_9a6,
    KYC_FieldIds.line_of_business_a1e,
    KYC_FieldIds.representative_a75,
    KYC_FieldIds.representative_name_acb,
    KYC_FieldIds.representative_title_b70,
    KYC_FieldIds.representative_phone_number_c04,
    KYC_FieldIds.representative_email_c89,
    KYC_FieldIds.representative_ytunnus_d11,
    KYC_FieldIds.business_activities_dbb,
    KYC_FieldIds.financial_period_e19,
    KYC_FieldIds.share_capital_eb9,
    KYC_FieldIds.estimated_revenue_f33,
    KYC_FieldIds.balance_sheet_total_amount_f91,
    KYC_FieldIds.number_of_personnel_013,
    KYC_FieldIds.places_of_business_0a7,
    KYC_FieldIds.financical_sanctions_deb,
    KYC_FieldIds.is_the_company_subject_to_sanctions_1c0,
    KYC_FieldIds.if_anyone_involved_in_the_company_under_sanctions_specify_2b2,
    KYC_FieldIds.sanctions_search_result_35d,
    KYC_FieldIds.integration_fields_bb6,
    KYC_FieldIds.request_creator_33c,
    KYC_FieldIds.participants_3b3,
    KYC_FieldIds.taskid_43b,
    KYC_FieldIds.fileid_49d,
    KYC_FieldIds.use_attachment_4df,
    KYC_FieldIds.language_6f0,
    KYC_FieldIds.error_message_7e6,
    KYC_FieldIds.metadata_2f7,
    KYC_FieldIds.unique_id_348
  ],
  inviteActivityCreator: true,
  members: [
    {
      id: HailerMembers.janne_rtknen_6cd,
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
  name: "KYC",
  nameEditable: false,
  nameFieldPlaceHolderText: "Give a title",
  nameFunction: "return `KYC - ${dep.company_name}`",
  nameFunctionEnabled: true,
  nameFunctionVariables: {
    company_name: {
      data: [
        KYC_FieldIds.company_531,
        WorkflowIds.companies_a51,
        "data",
        "name"
      ],
      type: ">"
    }
  },
  order: 3,
  phasesOrder: [
    KYC_PhaseIds.draft_222,
    KYC_PhaseIds.sent_to_client_acb,
    KYC_PhaseIds.flagged_c21,
    KYC_PhaseIds.ready_for_signing_444,
    KYC_PhaseIds.send_document_to_signspace_395,
    KYC_PhaseIds.needs_attention_3c5,
    KYC_PhaseIds.sent_to_signspace_5fa,
    KYC_PhaseIds.signed_67b,
    KYC_PhaseIds.cancel_signing_request_6db,
    KYC_PhaseIds.error_769
  ],
  preselectedTeam: {
    account: "675b24f48a5aeaa8084153e4",
    team: WorkspaceTeams.rekna_team_3e3
  }
};
      