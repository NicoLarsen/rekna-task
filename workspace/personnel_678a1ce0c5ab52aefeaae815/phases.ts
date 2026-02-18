// Phases for workflow: Personnel
      
import { Personnel_FieldIds, Personnel_PhaseIds } from "../enums";
      
export const phases: HailerPhaseUpdatePayload[] = [
  {
    _id: Personnel_PhaseIds.new_phase_814,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    description: "",
    fields: [
      Personnel_FieldIds.phone_number_a53,
      Personnel_FieldIds.email_a5d,
      Personnel_FieldIds.yritys_cd0,
      Personnel_FieldIds.user_48c
    ],
    followers: [],
    isEndpoint: false,
    name: "New Phase",
    possibleNextPhase: [],
    possibleNextPhaseSettings: {}
  }
];