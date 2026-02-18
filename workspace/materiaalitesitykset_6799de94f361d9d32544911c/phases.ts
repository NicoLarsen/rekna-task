// Phases for workflow: Materiaalit/Esitykset
      
import { MateriaalitEsitykset_FieldIds, MateriaalitEsitykset_PhaseIds } from "../enums";
      
export const phases: HailerPhaseUpdatePayload[] = [
  {
    _id: MateriaalitEsitykset_PhaseIds.new_phase_11b,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    description: "",
    fields: [
      MateriaalitEsitykset_FieldIds.linkki_2f5,
      MateriaalitEsitykset_FieldIds.kategoria_712
    ],
    followers: [],
    isEndpoint: false,
    name: "New Phase",
    possibleNextPhase: [],
    possibleNextPhaseSettings: {}
  }
];