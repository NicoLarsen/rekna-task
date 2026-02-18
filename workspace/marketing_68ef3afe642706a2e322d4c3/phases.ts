// Phases for workflow: Marketing
      
import { Marketing_FieldIds, Marketing_PhaseIds } from "../enums";
      
export const phases: HailerPhaseUpdatePayload[] = [
  {
    _id: Marketing_PhaseIds.ideas_4c2,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    description: "",
    enableAnnouncement: false,
    fields: [
      Marketing_FieldIds.description_e02,
      Marketing_FieldIds.publish_date_e80,
      Marketing_FieldIds.responsible_efe,
      Marketing_FieldIds.instagram_205,
      Marketing_FieldIds.tiktok_2a2,
      Marketing_FieldIds.reknafi_34e,
      Marketing_FieldIds.linkedin_3bf,
      Marketing_FieldIds.youtube_442,
      Marketing_FieldIds.newsletter_4d6
    ],
    followers: [],
    isEndpoint: false,
    isInitial: true,
    name: "💭 Ideas ",
    possibleNextPhase: [
      Marketing_PhaseIds.done_a2d,
      Marketing_PhaseIds.pipeline_6b4
    ],
    possibleNextPhaseSettings: {},
    primaryDateField: Marketing_FieldIds.publish_date_e80
  },
  {
    _id: Marketing_PhaseIds.pipeline_6b4,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    description: "",
    fields: [
      Marketing_FieldIds.description_e02,
      Marketing_FieldIds.publish_date_e80,
      Marketing_FieldIds.responsible_efe,
      Marketing_FieldIds.instagram_205,
      Marketing_FieldIds.tiktok_2a2,
      Marketing_FieldIds.reknafi_34e,
      Marketing_FieldIds.linkedin_3bf,
      Marketing_FieldIds.youtube_442,
      Marketing_FieldIds.newsletter_4d6
    ],
    followers: [],
    isEndpoint: false,
    isInitial: false,
    name: "🎬 Pipeline",
    possibleNextPhase: [
      Marketing_PhaseIds.ideas_4c2,
      Marketing_PhaseIds.done_a2d
    ],
    possibleNextPhaseSettings: {}
  },
  {
    _id: Marketing_PhaseIds.done_a2d,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    description: "",
    fields: [
      Marketing_FieldIds.description_e02,
      Marketing_FieldIds.publish_date_e80,
      Marketing_FieldIds.responsible_efe,
      Marketing_FieldIds.instagram_205,
      Marketing_FieldIds.tiktok_2a2,
      Marketing_FieldIds.reknafi_34e,
      Marketing_FieldIds.linkedin_3bf,
      Marketing_FieldIds.youtube_442,
      Marketing_FieldIds.newsletter_4d6
    ],
    followers: [],
    isEndpoint: false,
    isInitial: false,
    name: "▶️ Done",
    possibleNextPhase: [
      Marketing_PhaseIds.pipeline_6b4,
      Marketing_PhaseIds.ideas_4c2
    ],
    possibleNextPhaseSettings: {}
  }
];