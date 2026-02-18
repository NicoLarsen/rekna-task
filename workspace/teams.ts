// Configuration for teams
    
// Properties that can be set when updating or creating a new team: name, description, public, defaultView, members
      
import { WorkspaceMembers, WorkspaceTeams } from "./enums";
      
export const teams: HailerTeamUpdatePayload[] = [
  {
    _id: WorkspaceTeams.rekna_team_3e3,
    defaultView: {
      type: "app",
      value: "684faada1fadbeb57568f4b2"
    },
    description: "Core team that has access to all activities",
    members: [
      WorkspaceMembers.nico_larsen_74e,
      WorkspaceMembers.johan_borgstrm_776,
      WorkspaceMembers.jonathan_wollsten_87f,
      WorkspaceMembers.philip_ahlgren_98c,
      WorkspaceMembers.malin_engblom_637,
      WorkspaceMembers.oliver_nylander_289,
      WorkspaceMembers.heidi_kuhlberg_662,
      WorkspaceMembers.stefan_atanasov_917,
      WorkspaceMembers.critix_development_766,
      WorkspaceMembers.janne_rtknen_6cd,
      WorkspaceMembers.susanna_salomaa_d62
    ],
    name: "Rekna Team",
    public: false
  },
  {
    _id: WorkspaceTeams.customer_test_team_a1c,
    description: "Sees only customer test team activities",
    members: [
      WorkspaceMembers.stefan_atanasov_917,
      WorkspaceMembers.darya_petrasheuskaya_dff
    ],
    name: "Customer test team",
    public: false
  },
  {
    _id: WorkspaceTeams.bots_032,
    description: "Team bots",
    members: [
      WorkspaceMembers.bot_botinen_03f
    ],
    name: "🤖 Bots"
  }
];
      