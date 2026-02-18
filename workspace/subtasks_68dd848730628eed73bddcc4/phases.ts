// Phases for workflow: Subtasks
      
import { Subtasks_FieldIds, Subtasks_PhaseIds } from "../enums";
      
export const phases: HailerPhaseUpdatePayload[] = [
  {
    _id: Subtasks_PhaseIds.to_do_cc3,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    description: "",
    fields: [
      Subtasks_FieldIds.main_task_d3a,
      Subtasks_FieldIds.status_d7f
    ],
    followers: [],
    isEndpoint: false,
    isInitial: true,
    name: "To do",
    possibleNextPhase: [],
    possibleNextPhaseSettings: {}
  }
];