// Phases for workflow: Notes / Rekna Monthly
      
import { Notes_Rekna_Monthly_FieldIds, Notes_Rekna_Monthly_PhaseIds } from "../enums";
      
export const phases: HailerPhaseUpdatePayload[] = [
  {
    _id: Notes_Rekna_Monthly_PhaseIds.new_phase_1f3,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    description: "",
    fields: [
      Notes_Rekna_Monthly_FieldIds.notes_ff8,
      Notes_Rekna_Monthly_FieldIds.date_01f
    ],
    followers: [],
    isEndpoint: false,
    name: "New Phase",
    possibleNextPhase: [],
    possibleNextPhaseSettings: {}
  }
];