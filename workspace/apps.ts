// Configuration for apps.
     
//- When creating a new app, don't set the "_id" property, it will be assigned by Hailer.
     
//- Configuration fields can be added and edited only via app's "manifest.json" file
     
//- In order to remove all the members from an app, set the "members" property to an empty array []
      
import { HailerMembers } from "./enums";
      
export const apps: HailerAppUpdatePayload[] = [
  {
    _id: "684faada1fadbeb57568f4b2",
    description: "Reknalyze",
    members: [
      {
        id: HailerMembers.johan_borgstrm_776,
        info: {},
        permissions: []
      },
      {
        id: HailerMembers.rekna_team_3e3,
        info: {},
        permissions: []
      }
    ],
    name: "old",
    url: "https://apps.hailer.com/675b24f38a5aeaa8084153e2/684faada1fadbeb57568f4b2/"
  },
  {
    _id: "685156c0f860aeb4f1c8c5bc",
    description: "Insights",
    image: "68493a47f1d6b687ddb6c39f",
    members: [
      {
        id: HailerMembers.workspace,
        info: {},
        permissions: []
      }
    ],
    name: "Insights",
    url: "https://apps.hailer.com/675b24f38a5aeaa8084153e2/685156c0f860aeb4f1c8c5bc/"
  },
  {
    _id: "68d2452299e8c72b572dfb5d",
    description: "Birds Eye",
    image: "6847d57a3f3cf3e54c4bdc04",
    members: [
      {
        id: HailerMembers.workspace,
        info: {},
        permissions: []
      }
    ],
    name: "Birds Eye",
    url: "https://apps.hailer.com/675b24f38a5aeaa8084153e2/68d2452299e8c72b572dfb5d/"
  },
  {
    _id: "68ee5f6d34e23f80cc2a643b",
    description: "Reknalyze Oy",
    members: [
      {
        id: HailerMembers.johan_borgstrm_776,
        info: {},
        permissions: []
      },
      {
        id: HailerMembers.workspace,
        info: {},
        permissions: []
      }
    ],
    name: "Tasks",
    url: "https://apps.hailer.com/675b24f38a5aeaa8084153e2/68ee5f6d34e23f80cc2a643b/"
  },
  {
    _id: "68efdafa0913901a401c32cb",
    description: "Reknalyze",
    members: [
      {
        id: HailerMembers.johan_borgstrm_776,
        info: {},
        permissions: []
      },
      {
        id: HailerMembers.workspace,
        info: {},
        permissions: []
      }
    ],
    name: "AccessMatrix",
    url: "https://apps.hailer.com/675b24f38a5aeaa8084153e2/68efdafa0913901a401c32cb/"
  },
  {
    _id: "68f6192e290bb0c98722ea39",
    description: "CSV To Hailer",
    image: "67c15c63a82f9761aaea37ac",
    members: [
      {
        id: HailerMembers.workspace,
        info: {},
        permissions: []
      }
    ],
    name: "CSV To Hailer",
    url: "https://apps.hailer.com/675b24f38a5aeaa8084153e2/68f6192e290bb0c98722ea39/"
  },
  {
    _id: "68f7d2f3f9f8f3ea37050918",
    description: "",
    members: [
      {
        id: HailerMembers.johan_borgstrm_776,
        info: {},
        permissions: []
      }
    ],
    name: "App Template",
    url: "https://apps.hailer.com/675b24f38a5aeaa8084153e2/68f7d2f3f9f8f3ea37050918/"
  },
  {
    _id: "698ef97b4d059aefcd3f5af8",
    description: "Monthly recurring task matrix - track accounting, payroll, and financial statement tasks across companies",
    image: "698efa21a5b1dc6c111cbf0d",
    members: [
      {
        id: HailerMembers.bot_botinen_03f,
        info: {},
        permissions: []
      },
      {
        id: HailerMembers.workspace,
        info: {},
        permissions: []
      }
    ],
    name: "Test App (localhost:3000)",
    url: "http://localhost:3000/"
  },
  {
    _id: "698f233672963b5d5fec67f9",
    description: "Monthly recurring tasks matrix - companies vs tasks with status tracking",
    image: "698f2336e51763655d5c2eae",
    members: [
      {
        id: HailerMembers.bot_botinen_03f,
        info: {},
        permissions: []
      },
      {
        id: HailerMembers.workspace,
        info: {},
        permissions: []
      }
    ],
    name: "Recurring Tasks Matrix",
    url: "https://apps.hailer.com/675b24f38a5aeaa8084153e2/698f233672963b5d5fec67f9/"
  }
];
      