
import { MateriaalitEsitykset_FieldIds } from "../enums";
      
// Fields for workflow: Materiaalit/Esitykset

// Note: Field functions are extracted to ./functions/ directory
      
// They are referenced here as "@function:functionName" strings
      
export const fields: HailerFieldGeneric[] = [
  {
    _id: MateriaalitEsitykset_FieldIds.linkki_2f5,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Linkki",
    required: false,
    type: "text"
  },
  {
    _id: MateriaalitEsitykset_FieldIds.kategoria_712,
    data: [
      "Tarjous",
      "Esitys"
    ],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Kategoria",
    required: false,
    type: "textpredefinedoptions"
  }
];
