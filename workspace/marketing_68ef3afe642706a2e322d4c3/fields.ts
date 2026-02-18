
import { Marketing_FieldIds } from "../enums";
      
// Fields for workflow: Marketing

// Note: Field functions are extracted to ./functions/ directory
      
// They are referenced here as "@function:functionName" strings
      
export const fields: HailerFieldGeneric[] = [
  {
    _id: Marketing_FieldIds.description_e02,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Description",
    required: false,
    type: "textarea"
  },
  {
    _id: Marketing_FieldIds.publish_date_e80,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Publish date",
    required: false,
    type: "date"
  },
  {
    _id: Marketing_FieldIds.responsible_efe,
    data: [],
    defaultTo: false,
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Responsible",
    required: false,
    type: "users"
  },
  {
    _id: Marketing_FieldIds.instagram_205,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Instagram",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Marketing_FieldIds.tiktok_2a2,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "TikTok",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Marketing_FieldIds.reknafi_34e,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "rekna.fi",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Marketing_FieldIds.linkedin_3bf,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Linkedin",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Marketing_FieldIds.youtube_442,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Youtube",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  },
  {
    _id: Marketing_FieldIds.newsletter_4d6,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Newsletter",
    modifier: {
      checkbox: true,
      file: false
    },
    required: false,
    type: "numeric"
  }
];
