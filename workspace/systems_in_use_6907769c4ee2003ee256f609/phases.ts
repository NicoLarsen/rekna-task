// Phases for workflow: Systems in use
      
import { Systems_in_use_FieldIds, Systems_in_use_PhaseIds } from "../enums";
      
export const phases: HailerPhaseUpdatePayload[] = [
  {
    _id: Systems_in_use_PhaseIds.all_608,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    description: "",
    fields: [
      Systems_in_use_FieldIds.system_in_use_66b,
      Systems_in_use_FieldIds.company_using_system_675
    ],
    followers: [],
    isEndpoint: false,
    isInitial: true,
    name: "All",
    possibleNextPhase: [],
    possibleNextPhaseSettings: {}
  }
];