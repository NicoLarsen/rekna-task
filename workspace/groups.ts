// Configuration for groups
      
// When creating a new group, "teams" property cannot be set, it can be updated later after group creation.
      
// Properties that can be set when creating a new group: name, description, public, users, groups
      
import { WorkspaceGroups, WorkspaceTeams } from "./enums";
      
export const groups: HailerGroupUpdatePayload[] = [
  {
    _id: WorkspaceGroups.customers_767,
    description: "Sees their own activities",
    groups: [],
    name: "Customers",
    teams: [
      WorkspaceTeams.customer_test_team_a1c
    ],
    users: []
  }
];
      