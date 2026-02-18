// Phases for workflow: Time tracker
      
import { Time_tracker_FieldIds, Time_tracker_PhaseIds } from "../enums";
      
export const phases: HailerPhaseUpdatePayload[] = [
  {
    _id: Time_tracker_PhaseIds.invoiced_ad2,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    description: "",
    fields: [
      Time_tracker_FieldIds.time_spent_c97,
      Time_tracker_FieldIds.description_cc4,
      Time_tracker_FieldIds.related_to_cea,
      Time_tracker_FieldIds.reported_by_de5,
      Time_tracker_FieldIds.project_564,
      Time_tracker_FieldIds.metadata_798,
      Time_tracker_FieldIds.archive_path_7f1,
      Time_tracker_FieldIds.archive_metadata_32b
    ],
    followers: [],
    isEndpoint: false,
    isInitial: false,
    name: "Invoiced",
    possibleNextPhase: [
      Time_tracker_PhaseIds.reported_aeb
    ],
    possibleNextPhaseSettings: {},
    primaryNumericField: Time_tracker_FieldIds.time_spent_c97,
    webhookUrl: "https://rekna.critixlabs.fi/api/v1/archive/hailer/Time tracker?secret=444d906b04cb5ffb49208a678991194fb15a36768d10c4d6cd46f2136c2246b896a01eb226e49d750600f14f2c906ebde51abe36c174e668bca6d0307573f5ea",
    webhooksEnabled: true
  },
  {
    _id: Time_tracker_PhaseIds.reported_aeb,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    description: "",
    fields: [
      Time_tracker_FieldIds.time_spent_c97,
      Time_tracker_FieldIds.description_cc4,
      Time_tracker_FieldIds.related_to_cea,
      Time_tracker_FieldIds.reported_by_de5,
      Time_tracker_FieldIds.project_564,
      Time_tracker_FieldIds.metadata_798,
      Time_tracker_FieldIds.archive_path_7f1,
      Time_tracker_FieldIds.archive_metadata_32b
    ],
    followers: [],
    isEndpoint: false,
    isInitial: true,
    name: "Reported",
    possibleNextPhase: [
      Time_tracker_PhaseIds.invoiced_ad2
    ],
    possibleNextPhaseSettings: {},
    primaryNumericField: Time_tracker_FieldIds.time_spent_c97,
    webhookUrl: "https://www.rekna.critixlabs.fi/api/v1/archive/hailer",
    webhooksEnabled: false
  },
  {
    _id: Time_tracker_PhaseIds.archived_b92,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    description: "",
    fields: [
      Time_tracker_FieldIds.time_spent_c97,
      Time_tracker_FieldIds.description_cc4,
      Time_tracker_FieldIds.related_to_cea,
      Time_tracker_FieldIds.reported_by_de5,
      Time_tracker_FieldIds.project_564,
      Time_tracker_FieldIds.metadata_798,
      Time_tracker_FieldIds.archive_path_7f1,
      Time_tracker_FieldIds.archive_metadata_32b
    ],
    followers: [],
    isEndpoint: false,
    isInitial: false,
    name: "Archived",
    possibleNextPhase: [],
    possibleNextPhaseSettings: {}
  }
];