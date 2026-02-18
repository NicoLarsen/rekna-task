// Phases for workflow: Ohjausryhmät
      
import { Ohjausryhmt_FieldIds, Ohjausryhmt_PhaseIds } from "../enums";
      
export const phases: HailerPhaseUpdatePayload[] = [
  {
    _id: Ohjausryhmt_PhaseIds.loki_2d3,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    description: "",
    fields: [],
    followers: [],
    isEndpoint: false,
    isInitial: true,
    name: "Loki",
    possibleNextPhase: [],
    possibleNextPhaseSettings: {}
  },
  {
    _id: Ohjausryhmt_PhaseIds.keskustelut_c09,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    description: "",
    fields: [
      Ohjausryhmt_FieldIds.loki_b43
    ],
    followers: [],
    isEndpoint: false,
    isInitial: true,
    name: "Keskustelut",
    possibleNextPhase: [],
    possibleNextPhaseSettings: {}
  }
];