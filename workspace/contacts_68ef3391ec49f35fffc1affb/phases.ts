// Phases for workflow: Contacts
      
import { Contacts_FieldIds, Contacts_PhaseIds } from "../enums";
      
export const phases: HailerPhaseUpdatePayload[] = [
  {
    _id: Contacts_PhaseIds.new_phase_ffa,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    description: "",
    fields: [
      Contacts_FieldIds.phone_number_0b0,
      Contacts_FieldIds.email_0d7,
      Contacts_FieldIds.address_9ad,
      Contacts_FieldIds.ytunnus_a43,
      Contacts_FieldIds.shareholder_997
    ],
    followers: [],
    isEndpoint: false,
    name: "New Phase",
    possibleNextPhase: [],
    possibleNextPhaseSettings: {}
  }
];