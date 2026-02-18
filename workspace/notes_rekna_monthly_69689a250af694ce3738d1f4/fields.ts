
import { Notes_Rekna_Monthly_FieldIds } from "../enums";
      
// Fields for workflow: Notes / Rekna Monthly

// Note: Field functions are extracted to ./functions/ directory
      
// They are referenced here as "@function:functionName" strings
      
export const fields: HailerFieldGeneric[] = [
  {
    _id: Notes_Rekna_Monthly_FieldIds.notes_ff8,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Notes",
    required: false,
    type: "textarea"
  },
  {
    _id: Notes_Rekna_Monthly_FieldIds.date_01f,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Date",
    required: false,
    type: "date"
  }
];
