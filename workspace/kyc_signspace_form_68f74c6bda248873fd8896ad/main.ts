// Configuration for workflow: KYC (SignSpace) - Form
      
import { HailerMembers, KYC_SignSpace_Form_FieldIds, KYC_SignSpace_Form_PhaseIds, WorkflowIds, WorkspaceTeams } from "../enums";
      
export const workflowConfig: HailerWorkflowUpdatePayload = {
  _id: WorkflowIds.kyc_signspace_form_6ad,
  allowGuests: true,
  defaultView: "table",
  description: "Feel free to change the name of process",
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
  enablePreselectedTeam: true,
  enableUniqueName: false,
  enableUnlinkedMode: false,
  fieldsOrder: [
    KYC_SignSpace_Form_FieldIds.company_info_6d5,
    KYC_SignSpace_Form_FieldIds.previous_kyc_6ed,
    KYC_SignSpace_Form_FieldIds.company_6ee,
    KYC_SignSpace_Form_FieldIds.company_name_6d6,
    KYC_SignSpace_Form_FieldIds.ytunnus_6d7,
    KYC_SignSpace_Form_FieldIds.address_6d8,
    KYC_SignSpace_Form_FieldIds.postal_code_6d9,
    KYC_SignSpace_Form_FieldIds.city_6da,
    KYC_SignSpace_Form_FieldIds.line_of_business_6db,
    KYC_SignSpace_Form_FieldIds.representative_6dc,
    KYC_SignSpace_Form_FieldIds.representative_name_6dd,
    KYC_SignSpace_Form_FieldIds.representative_title_6de,
    KYC_SignSpace_Form_FieldIds.representative_phone_number_6df,
    KYC_SignSpace_Form_FieldIds.representative_email_6e0,
    KYC_SignSpace_Form_FieldIds.representative_ytunnus_6e1,
    KYC_SignSpace_Form_FieldIds.business_activities_6e2,
    KYC_SignSpace_Form_FieldIds.financial_period_6e3,
    KYC_SignSpace_Form_FieldIds.share_capital_6e4,
    KYC_SignSpace_Form_FieldIds.estimated_revenue_6e5,
    KYC_SignSpace_Form_FieldIds.balance_sheet_total_amount_6e6,
    KYC_SignSpace_Form_FieldIds.number_of_personnel_6e7,
    KYC_SignSpace_Form_FieldIds.places_of_business_6e8,
    KYC_SignSpace_Form_FieldIds.financical_sanctions_6d4,
    KYC_SignSpace_Form_FieldIds.is_the_company_subject_to_sanctions_6e9,
    KYC_SignSpace_Form_FieldIds.if_anyone_involved_in_the_company_under_sanctions_specify_6ea,
    KYC_SignSpace_Form_FieldIds.sanctions_search_result_6ef,
    KYC_SignSpace_Form_FieldIds.integration_fields_6d3,
    KYC_SignSpace_Form_FieldIds.request_creator_6cc,
    KYC_SignSpace_Form_FieldIds.participants_6cd,
    KYC_SignSpace_Form_FieldIds.taskid_6ce,
    KYC_SignSpace_Form_FieldIds.fileid_6cf,
    KYC_SignSpace_Form_FieldIds.use_attachment_6d0,
    KYC_SignSpace_Form_FieldIds.language_6d1,
    KYC_SignSpace_Form_FieldIds.error_message_6d2,
    KYC_SignSpace_Form_FieldIds.metadata_6eb,
    KYC_SignSpace_Form_FieldIds.unique_id_6ec
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
  name: "KYC (SignSpace) - Form",
  nameFieldPlaceHolderText: "Give a title",
  nameFunction: "return `KYC - ${dep.company_name}`",
  nameFunctionEnabled: true,
  nameFunctionVariables: {
    company_name: {
      data: [
        KYC_SignSpace_Form_FieldIds.company_6ee,
        WorkflowIds.companies_a51,
        "data",
        "name"
      ],
      type: ">"
    }
  },
  order: 6,
  phasesOrder: [
    KYC_SignSpace_Form_PhaseIds.draft_6c2,
    KYC_SignSpace_Form_PhaseIds.sent_to_client_6c9,
    KYC_SignSpace_Form_PhaseIds.flagged_6ca,
    KYC_SignSpace_Form_PhaseIds.ready_for_signing_6cb,
    KYC_SignSpace_Form_PhaseIds.send_document_to_signspace_6c3,
    KYC_SignSpace_Form_PhaseIds.needs_attention_6c4,
    KYC_SignSpace_Form_PhaseIds.sent_to_signspace_6c5,
    KYC_SignSpace_Form_PhaseIds.signed_6c6,
    KYC_SignSpace_Form_PhaseIds.cancel_signing_request_6c7,
    KYC_SignSpace_Form_PhaseIds.error_6c8
  ],
  preselectedTeam: {
    account: "675b24f48a5aeaa8084153e4",
    team: WorkspaceTeams.rekna_team_3e3
  }
};
      