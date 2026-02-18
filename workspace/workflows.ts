// Workflows registry - single source of truth for all workflows
// When creating a new workflow, only 'name' and 'enabledUnlinkedMode' can be set
// 'folder' property indicates the folder where the workflow configuration is stored and it's auto-generated on 'hailer-sdk ws-config pull'

export const workflows: WorkflowEntry[] = [
  {
    _id: "677393544e9c3c0478e35a51",
    name: "Companies",
    enableUnlinkedMode: false,
    folder: "companies_677393544e9c3c0478e35a51",
  },
  {
    _id: "6773a73ebd84fc36f14d9274",
    name: "Tasks",
    enableUnlinkedMode: false,
    folder: "tasks_6773a73ebd84fc36f14d9274",
  },
  {
    _id: "6785882fec0d9f8f3f487ad3",
    name: "Time tracker",
    enableUnlinkedMode: false,
    folder: "time_tracker_6785882fec0d9f8f3f487ad3",
  },
  {
    _id: "678a1ce0c5ab52aefeaae815",
    name: "Personnel",
    enableUnlinkedMode: true,
    folder: "personnel_678a1ce0c5ab52aefeaae815",
  },
  {
    _id: "6799de94f361d9d32544911c",
    name: "Materiaalit/Esitykset",
    enableUnlinkedMode: true,
    folder: "materiaalitesitykset_6799de94f361d9d32544911c",
  },
  {
    _id: "67b63ada3188de27bde4e2d4",
    name: "Ohjausryhmät",
    enableUnlinkedMode: true,
    folder: "ohjausryhmt_67b63ada3188de27bde4e2d4",
  },
  {
    _id: "68c004aa097b8b294325c81f",
    name: "Reoccurring tasks",
    enableUnlinkedMode: false,
    folder: "reoccurring_tasks_68c004aa097b8b294325c81f",
  },
  {
    _id: "68dd848730628eed73bddcc4",
    name: "Subtasks",
    enableUnlinkedMode: true,
    folder: "subtasks_68dd848730628eed73bddcc4",
  },
  {
    _id: "68e7650aa713093242dbf223",
    name: "KYC",
    enableUnlinkedMode: false,
    folder: "kyc_68e7650aa713093242dbf223",
  },
  {
    _id: "68ef3391ec49f35fffc1affb",
    name: "Contacts",
    enableUnlinkedMode: true,
    folder: "contacts_68ef3391ec49f35fffc1affb",
  },
  {
    _id: "68ef3408ec49f35fffc1b13f",
    name: "Shareholders",
    enableUnlinkedMode: true,
    folder: "shareholders_68ef3408ec49f35fffc1b13f",
  },
  {
    _id: "68ef3595ec49f35fffc1bc4c",
    name: "Shares transactions",
    enableUnlinkedMode: false,
    folder: "shares_transactions_68ef3595ec49f35fffc1bc4c",
  },
  {
    _id: "68ef3afe642706a2e322d4c3",
    name: "Marketing",
    enableUnlinkedMode: false,
    folder: "marketing_68ef3afe642706a2e322d4c3",
  },
  {
    _id: "68f74c6bda248873fd8896ad",
    name: "KYC (SignSpace) - Form",
    enableUnlinkedMode: false,
    folder: "kyc_signspace_form_68f74c6bda248873fd8896ad",
  },
  {
    _id: "690776634ee2003ee256f519",
    name: "Systems",
    enableUnlinkedMode: true,
    folder: "systems_690776634ee2003ee256f519",
  },
  {
    _id: "6907769c4ee2003ee256f609",
    name: "Systems in use",
    enableUnlinkedMode: true,
    folder: "systems_in_use_6907769c4ee2003ee256f609",
  },
  {
    _id: "69689a250af694ce3738d1f4",
    name: "Notes / Rekna Monthly",
    enableUnlinkedMode: true,
    folder: "notes_rekna_monthly_69689a250af694ce3738d1f4",
  }
];
