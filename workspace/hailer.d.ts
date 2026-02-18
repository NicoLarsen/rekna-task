/**
 * Hailer API types and interfaces
 */

type HailerCredentials = {
  email?: string;
  password?: string;
  userApiKey?: string;
};

// Core User Types
type HailerCurrentUser = {
  _id: string;
  created: number;
  calendars?: string[];
  default_company?: string;
  default_profilepic: string;
  display_name?: string;
  email?: string;
  firstname: string;
  lastname: string;
  profilepics?: string[];
  emailVerified?: boolean;
  settings?: Record<string, unknown>;
  globalSettings?: {
    feedPostEmail: boolean;
    discussionMessageEmail: boolean;
  };
  preferredLanguages?: string[];
  lastSeen: number;
  localauth?: boolean;
};

type HailerUser = {
  _id: string;
  firstname: string;
  lastname: string;
  default_profilepic: string;
  companies: string[];
  lastLocation?: {
    lat: number;
    lng: number;
    name: string;
    time: number;
  };
  status?: string;
  lastSeen: number;
};

// Workspace (Network) Types
type HailerWorkspace = {
  _id: string;
  name: string;
  uid: string;
  created: number;
  updated: number;
  members: Array<{
    uid: string;
    title?: string;
    owner?: boolean;
    admin?: boolean;
    joined?: number;
    inviter?: string;
  }>;
  settings: {
    defaultView?: string;
    allowPublicCopy?: boolean;
    languages?: string[];
    [key: string]: unknown;
  };
  license: {
    type: string;
    activated: number;
    override?: Record<string, unknown>;
    payment?: Record<string, unknown>;
    tokens?: {
      balance?: number;
      lastUpdated?: number;
    };
  };
  description?: string;
  version?: number;
  invoicing?: {
    fixedMonthlyFee: number;
    perUserMonthlyFee: number;
    externalUserCount: number;
    paymentMethod: string;
    paymentStructure: string;
    trialUsed: boolean;
  };
};

// Workflow (Process) Types which is recieved from Hailer API when core.init is called
type HailerWorkflow = {
  _id: string;
  name: string;
  description?: string;
  defaultView?: "table" | "kanban" | "wall" | "calendar";
  cid: string; // workspace/network id
  uid: string; // user id who created it
  created?: number;
  updated?: number;

  // Fields
  fields?: Record<string, HailerField>;
  fieldsOrder: string[];

  // Phases
  phases?: Record<string, HailerPhase>;
  phasesOrder: string[];
  phasesRemoved?: string[];

  // Members - can be user or network members
  members: Array<HailerMember>;

  // Settings flags
  enableAddedField?: boolean;
  enableLinkedAnnouncements?: boolean;
  enableMapLocation?: boolean;
  enableUnlinkedMode?: boolean;
  enableMessenger?: boolean;
  enableModifiedField?: boolean;
  enableUniqueName?: boolean;
  enablePreselectedTeam?: boolean;
  enableAttachments?: boolean;
  enableOwnerField?: boolean;
  enableOwnerTeamField?: boolean;
  enableGuestEditing?: boolean;
  enablePredefinedName?: boolean;
  enableActivityTagging?: boolean;

  // Guest settings
  allowGuests?: boolean;

  // Team settings
  preselectedTeam?: {
    team: string;
    account: string;
  };
  autoPickPreselectedTeam?: boolean;

  // Name settings
  nameFieldPlaceHolderText?: string;
  nameColumnText?: string;
  nameEditable?: boolean;
  nameFunctionEnabled?: boolean;
  nameFunction?: string;
  nameFunctionVariables?: {
    [variableName: string]: HailerFieldFunctionVariable | HailerFieldFunctionVariable[];
  };
  predefinedNamePrefix?: string;

  // UI settings
  order?: number;
  coverImage?: string;
  createNewLabel?: string;
  initPhaseDescription?: string;
  personInChargeLabel?: string;
  personInCharge?: string;
  ownerTeamFieldTitle?: string;

  // Other settings
  translations?: HailerTranslations;
  createdActivities?: number;
  inviteActivityCreator?: boolean;
  discussionPermissions?: DiscussionPermission[];
  publicForm?: HailerPublicForm;
  groupNames?: string[];
  documentTemplates?: Record<string, DocumentTemplate>;
  isStarred?: boolean;
  version?: number;

  /** To know what is installed via market place */
  workflowSuite?: {
    productId: string;
    name: string;
    packageHash: string;
    created: number;
  };
};

type HailerWorkflowImmutableFields
  = | "_id"
    | "cid"
    | "uid"
    | "created"
    | "updated"
    | "isStarred"
    | "version"
    | "publicForm"
    | "documentTemplates"
    | "workflowSuite";

// Fields that the process.set_info endpoint is expecting
type HailerWorkflowUpdatePayload = Omit<
  HailerWorkflow,
  HailerWorkflowImmutableFields
> & {
  _id?: string;
  locationRequired?: boolean;
  tags?: string[];
  allowMultipleTags?: boolean | null;
  allowCustomTags?: boolean | null;
  requireFileTag?: boolean | null;
  defaultGroupByField?: string | null;
  color?: string | null;
  activityTaggingPhaseIds?: string[];
};

type HailerFieldFunctionVariable = {
  type: "<" | ">" | "=" | "?";
  data: string[];

};

type HailerField = {
  _id: string;
  type: HailerFieldType;
  key?: string;
  label?: string;
  required?: boolean;
  data?: unknown[];
  description?: string;
  placeholder?: string;

  // Function-related properties
  functionEnabled?: boolean;
  function?: string;
  functionVariables?: {
    [variableName: string]: HailerFieldFunctionVariable | HailerFieldFunctionVariable[];
  };
  // Default values
  defaultTo?: boolean;
  defaultValue?: unknown;

  // Metadata
  created?: number;
  updated?: number;
  uid?: string;

  unit?: string;
  inviteToDiscussionOnChange?: boolean;
  editable?: boolean;
  collapsedByDefault?: boolean;

  reminderEnabled?: boolean;
  reminderSettings?: {
    fieldOffset: {
      milliseconds: number;
      days: number;
      months: number;
      beforeOrAfter: "before" | "after";
    };
    users: string[];
    teams: string[];
    fields: string[];
    phases: string[];
    activityOwner: boolean;
    activityOwnerTeam: boolean;
    activityParticipants: boolean;
    reminderText: string;
  };
  modifier?: {
    checkbox?: boolean;
    file?: boolean;
    matchAllFieldFilters?: boolean;
    quickAdd?: {
      targetFieldId: string;
      fieldIds?: string[];
    };
    activityFieldFilters?: Array<{
      targetWorkflowId: string;
      sourceFieldId: string;
      targetFieldId: string;
    }>;
  };
};

type HailerFieldImmutableFields = "uid" | "created" | "updated" | "_id" | "type";

type HailerFieldGeneric = Omit<
  HailerField,
  HailerFieldImmutableFields
> & {
  _id?: string;
  type?: HailerFieldType;
};

type HailerFieldCreatePayload = Omit<
  HailerField,
  HailerFieldImmutableFields
> & {
  type: HailerFieldType;
};

type HailerFieldUpdatePayload = Omit<
  HailerField,
  HailerFieldImmutableFields
> & {};

type HailerPhaseMember = Omit<HailerMember, "permissions"> & {
  permissions: Array<"edit">;
};

type HailerPhase = {
  _id: string;
  name: string;
  description?: string;

  // Metadata
  uid?: string;
  created?: number;

  // UI properties
  color?: string;
  order?: number;

  // Field configuration
  fields?: string[]; // Array of field IDs
  announcementFields?: string[];
  announcementRecipients?: string[];
  announcementFieldsOrder?: string[];

  // Phase behavior
  isInitial?: boolean;
  isEndpoint?: boolean;
  possibleNextPhase?: string[];
  possibleNextPhaseSettings?: Record<
    string,
    {
      text?: string;
      name?: string;
      description?: string;
      [key: string]: unknown;
    }
  >;

  // Primary fields
  primaryDateField?: "created" | "updated" | "completedOn";
  primaryNumericField?: string;

  // Announcement settings
  enableAnnouncement?: boolean;

  // Members and followers
  members?: HailerPhaseMember[];
  followers?: string[];

  // Webhook configuration
  webhooksEnabled?: boolean;
  webhookUrl?: string;
  webhookAdded?: boolean;
  webhookUpdated?: boolean;
};

type HailerPhaseImmutableFields
  = | "uid"
    | "created"
    | "order"
    | "members"
    | "webhookAdded"
    | "webhookUpdated"
    | "_id";

type HailerPhaseUpdatePayload = Omit<
  HailerPhase,
  HailerPhaseImmutableFields
> & {
  announcementToOwner?: boolean;
  announcementToOwnerTeam?: boolean;
  announcementAllowPrivateReply?: boolean;
  fieldOptions?: {
    eventDateField?: string;
    dueDateField?: string;
  };
  _id?: string;
};

type HailerTranslations = {
  en?: TranslationContent;
  fi?: TranslationContent;
  [locale: string]: TranslationContent | undefined;
};

type TranslationContent = {
  name: string;
  nameColumnText?: string;
  nameFieldPlaceHolderText?: string;
  personInChargeLabel?: string;

  predefinedNamePrefix?: string;
  createNewLabel?: string;
  description?: string;
  fields: {
    [fieldId: string]: {
      defaultValue?: string;
      placeholder?: string;
      label?: string;
      unit?: string;
      description?: string;
    };
  };
  phases?: {
    [phaseId: string]: {
      name: string;
      description?: string;
      possibleNextPhaseSettings?: {
        [nextPhaseId: string]: {
          text: string;
        };
      };
    };
  };
};

type DiscussionPermission
  = | "discussion.message.add"
    | "discussion.message.add.attachment"
    | "discussion.read.history"
    | "discussion.message.remove.own"
    | "discussion.leave";

type HailerPublicForm = {
  active: boolean;
  allowRead: boolean;
  creator: string;
  enableMessaging: boolean;
  followers: string;
  key: string;
  team_account: {
    account: string;
    team: string;
  };
  theme: {
    backgroundColor: string;
    complementaryColor: string;
    foregroundColor: string;
    headerColor: string;
    logoId: string;
    textColor: string;
  };
};

// Team and Account Types
type HailerTeam = {
  _id: string;
  name: string;
  public: boolean;
  uid: string;
  members: string[];
  description?: string;
  cid: string;
  accounts?: string[];
  created: number;
  updated: number;
  defaultView?: {
    type: "app" | "hailer" | "custom";
    value: "discussions" | "feed" | "events" | "activities" | string;
  };
};

type HailerTeamImmutableFields
  = | "_id"
    | "cid"
    | "uid"
    | "created"
    | "updated"
    | "accounts"
    | "members"
    | "public";

type HailerTeamUpdatePayload = Omit<
  HailerTeam,
  HailerTeamImmutableFields
> & {
  _id?: string;
  members?: string[];
  public?: boolean;
};

type HailerAccount = {
  _id: string;
  cid: string;
  color?: string;
  created: number;
  name: string;
  team_id: string;
  uid: string;
};

type HailerGroup = {
  _id: string;
  name: string;
  description?: string;
  cid: string;
  uid: string;
  created: number;
  updated: number;
  groups: string[];
  teams: string[];
  users: string[];
  public?: boolean;
};

type HailerGroupImmutableFields
  = | "_id"
    | "cid"
    | "uid"
    | "created"
    | "updated"
    | "teams"
    | "groups"
    | "users";

type HailerGroupUpdatePayload = Omit<
  HailerGroup,
  HailerGroupImmutableFields
> & {
  _id?: string;
  teams?: string[];
  groups?: string[];
  users?: string[];
};

type HailerTag = {
  _id: string;
  value: string;
  cid: string;
  uid: string;
  created: number;
};

// App Types
type HailerApp = {
  _id: string;
  uid: string;
  name: string;
  description?: string;
  cid: string; // workspace/network id

  created: number;
  updated: number;

  members: Array<HailerMember>;

  // App URLs
  url: string;
  allowedUrls: string[];

  // Configuration
  config: Record<string, unknown> | null;

  // Optional app metadata
  image?: string;
  packageHash?: string;
  isProductVersionAvailable?: boolean;
  type?: string;
  enabled?: boolean;

  // Allow additional properties for flexibility
  // [key: string]: unknown;
};

type HailerAppImmutableFields
  = | "_id"
    | "cid"
    | "uid"
    | "created"
    | "updated"
    | "packageHash"
    | "config"
    | "enabled"
    | "allowedUrls"
    | "isProductVersionAvailable"
    | "type";

type HailerAppUpdatePayload = Omit<HailerApp, HailerAppImmutableFields> & {
  _id?: string;
};

// Member ID format enforced by template literal type
type HailerMemberId = `user_${string}` | `team_${string}` | `group_${string}` | `network_${string}`;

type HailerMember = {
  id: HailerMemberId;
  info: Record<string, unknown>;
  permissions: Array<"any" | "own" | "ownteam" | "admin">;
};

// Main Response Types
type HailerTimestamps = {
  users: number;
  networks: number;
  processes: number;
  teams: number;
};

type HailerCoreDataResponse = {
  timestamp: HailerTimestamps;
  user: HailerCurrentUser;
  users: Record<string, HailerUser>;
  network: HailerWorkspace;
  networks: Record<string, HailerWorkspace>;
  processes: HailerWorkflow[];
  teams: Record<string, Record<string, HailerTeam>>;
  accounts: Record<string, Record<string, HailerAccount>>;
  groups?: Record<string, Record<string, HailerGroup>>;
  tags?: Record<string, Record<string, HailerTag>>;
  apps?: Record<string, Record<string, HailerApp>>;
};

type HailerInsightData = {
  headers: string[];
  // eslint-disable-next-line ts/no-explicit-any
  rows: any[][];
};

type GenerateOptions = {
  email?: string;
  password?: string;
  workspaceId: string;
  outputDir: string;
  insights?: GenerateHailerInsightTypesConfig[];
  verbose?: boolean;
  ids?: boolean;
  apiUrl?: string;
  userApiKey?: string;
};

type HailerFieldType
  = | "activitylink"
    | "country"
    | "date"
    | "daterange"
    | "datetime"
    | "datetimerange"
    | "numeric"
    | "numericunit"
    | "teams"
    | "text"
    | "textarea"
    | "textunit"
    | "textpredefinedoptions"
    | "time"
    | "timerange"
    | "users"
    | "linkedfrom"
    | "subheader";

type HailerNetworksResponse = {
  networks: Record<string, HailerWorkspace>;
};

type WorkflowEntry = {
  _id?: string;
  name: string;
  folder?: string;
  enableUnlinkedMode?: boolean;
};

type CreateWorkflowPayload = {
  name: string;
  description?: string;
  defaultView?: string;
  workspaceId: string;
  enableMapLocation?: boolean;
  enableUnlinkedMode?: boolean;
  enableUniqueName?: boolean;
  defaultGroupByField?: string;
};

type HailerErrorResponse = {
  code: number;
  msg: string;
  debug: {
    op: string;
    args: string[];
  };
};

type HailerInsight = {
  _id: string;
  created: number;
  updated: number;
  name: string;
  members: Array<{
    id: string;
    info: Record<string, unknown>;
    permissions: ["edit"] | [];
  }>;
  public: boolean;
  publicKey: string;
  uid: string;
  cid: string;
  query: string;
  sources: [
    {
      workflowId: string;
      name: string;
      fields: Array<{
        name: string;
        meta?: "_id"
          | "uid"
          | "team"
          | "createdBy"
          | "name"
          | "created"
          | "updated"
          | "phaseId"
          | "phaseName"
          | "phaseLastMove"
          | "workflowId"
          | "workflowName"
          | "priority";
        fieldId?: string;
        phaseId?: string;
      }>;
    },
    ...Array<{
      workflowId: string;
      name: string;
      fields: Array<{
        name: string;
        meta?: "_id"
          | "uid"
          | "team"
          | "createdBy"
          | "name"
          | "created"
          | "updated"
          | "phaseId"
          | "phaseName"
          | "phaseLastMove"
          | "workflowId"
          | "workflowName"
          | "priority";
        fieldId?: string;
        phaseId?: string;
      }>;
    }>
  ];
  presets?: unknown[];
};

type HailerInsightImmutableFields
  = | "_id"
    | "created"
    | "updated"
    | "publicKey"
    | "uid"
    | "cid";

type HailerInsightPayload = Omit<
  HailerInsight,
  HailerInsightImmutableFields
> & {
  _id?: string;
};

type GenerateHailerInsightTypesConfig = {
  id: string;
  name: string;
};

type HailerTeamUserRole = "user" | "inviter" | "guest" | "admin" | "owner";

type SendWorkspaceInvitationResponse = {
  email: string;
  role: HailerTeamUserRole;
  title: string;
  teams: string[];
  created: number;
  invited_by: string;
  invite_key: string;
  _id: string;
};

// Document template
type DocumentTemplateFieldMapItem = {
  value?: string;
  label?: string;
  description?: string;
};

type DocumentTemplateImageMapItem = {
  value?: string;
  description?: string;
};

type DocumentTemplateActivityLinkItem = {
  field?: string;
  label?: string;
  process?: string;
  description?: string;
};

type DocumentTemplateFieldMap = {
  staticActivityIds: string;
  images: {
    [key: string]: DocumentTemplateImageMapItem;
  };
  activityLinks: {
    [key: string]: DocumentTemplateActivityLinkItem;
  };
  fields: {
    [key: string]: DocumentTemplateFieldMapItem;
  };
};

type DocumentTemplateOptions = {
  formatFieldValue: boolean;
  thousandSeparator?: "" | " " | ",";
  decimalSeparator?: "." | ",";
  toFixedDigits?: "" | "0" | "1" | "2" | "3";
  toFixedIds?: string;
  linkedActivitiesFilteredPhases?: string;
};

type DocumentTemplate = {
  name: string;
  order?: number;
  opts?: DocumentTemplateOptions;
  fieldMap?: DocumentTemplateFieldMap;
  templateId: string;
};

type UpdateWorkflowTemplatesPayload = {
  name: string;
  order?: number;
  opts?: DocumentTemplateOptions;
  fieldMap?: DocumentTemplateFieldMap;
  templateId?: string;
};

type GetDocumentTemplateResponse = {
  _id: string;
  description: string;
  global: boolean;
  fileType: "csv" | "pdf";
  content: string;
  ownerCids: string[];
  configuration: DocumentTemplate;
  created: number;
  updated: number;
  uid: string;
};

type DocumentTemplateUpdatePayload = DocumentTemplate
  & Pick<GetDocumentTemplateResponse, "global" | "fileType" | "content" | "description">;

type DocumentTemplateCodeUpdatePayload = Pick<DocumentTemplate, "templateId"> & Pick<GetDocumentTemplateResponse, "global" | "fileType" | "content" | "description">;

type DocumentTemplateEntry = {
  templateId?: string;
  name: string;
  fileType: "csv" | "pdf";
  folder?: string;
};

type CreateDocumentTemplatePayload = Omit<GetDocumentTemplateResponse, "_id" | "created" | "updated" | "uid" | "configuration"> & {
  procesId?: string;
  cid?: string;
};

// TYPES FROM HAILER BACKEND - THESE TYPES ARE COPIED DIRECTLY FROM THE HAILER BACKEND RELATED TO VAROIUS FEATURES. SOMEWHERE INSTEAD OF COPYING EVERYTHING THERE IS USED TYPE "unknown" WITH A COMMENT THAT THE CORRECT TYPE CAN BE FOUND IN THE BACKEND.

type Syncable = {
  /** Document Id */
  _id: string;
  /** Document store hash */
  // eslint-disable-next-line node/prefer-global/buffer
  hash?: Buffer;
  /** User Id */
  uid: string;
  /** Network Id */
  cid?: string;
  /** Creation timestamp (milliseconds since Jan 1st 1970) */
  created: number;
  /** Updated timestamp (rendered if updated) */
  updated?: number;
  /** Removed timestamp (rendered if removed) */
  removed?: number;
};

type NumericFieldType = (
    "numeric"
    | "numericunit"
    | "date"
    | "time"
    | "datetime"
);

type RangeFieldType = (
    "daterange"
    | "timerange"
    | "datetimerange"
);

type FieldType = (
    "activitylink"
    | "country"
    | "teams"
    | "text"
    | "textarea"
    | "textunit"
    | "textpredefinedoptions"
    | "users"
    | NumericFieldType
    | RangeFieldType
);

type ActivityLinkField = {
  _id: string;
  name: string;
};

type ActivityFieldRange = {
  start: number;
  end: number;
};

type ActivityField = {
  /** FieldId */
  id: string;
  /** Named field (used for integrations etc) */
  name?: string;
  /** Field value */
  value: string | number | boolean | { "country-code": string; "code": string; "name": string } | ActivityFieldRange | ActivityLinkField;
  /** Type of field,  */
  type: FieldType;
  /** Evaluation error */
  error?: string;
};

type ActivityDoc = {
  /** Name of activity */
  name: string;
  /** Not in db, determined by checking if in an endpoint phase */
  active?: boolean;
  /** Process Id to which this activity belongs */
  process: string;
  /** Network Id */
  cid: string;
  /** List of files attached to this activity */
  files: string[];
  /** Follower userIds */
  followers: string[];
  /** List of field changes and phases */
  history?: {
    phase: string;
    uid: string;
    updated: number;
    name: string;
    files: string[];
    fields: ActivityField[];
    [fieldId: string]: {
      value: string | number | boolean | { "country-code": string; "code": string; "name": string } | { start: number; end: number } | ActivityLinkField;
    } | string | string[] | number | ActivityField[];
  }[];
  /** Owning team and account */
  team_account: TeamAccount;
  /** PhaseId of current phase  */
  currentPhase: string;
  /**  */
  completePhases?: [];
  /** DiscussionId */
  discussion: string;
  /** Custom field values */
  fields: ActivityField[];
  /** Priority of activity, used for kanban view */
  priority?: number;
  /** Timestamp from completion */
  completedOn?: number;
  /** Activity location info */
  location?: ActivityLocation;
  sequence?: number;
} & Syncable;

type TeamAccount = {
  /** Team Id */
  team: string;
  /** Account Id */
  account: string;
};
type ActivityLocation = {
  data: {
    lat: number;
    lng: number;
  }[];
  label?: string;
  type: "area" | "point" | "polyline";
};

type ProcessTranslations = {
  name?: string;
  fields?: FieldTranslationsMap;
  nameFieldPlaceHolderText?: string;
  phases?: PhaseTranslationsMap;
  description?: string;
  nameColumnText?: string;
  predefinedNamePrefix?: string;
  createNewLabel?: string;
  personInChargeLabel?: string;
  initPhaseDescription?: string;
  ownerTeamFieldTitle?: string;
};
type FieldTranslations = {
  label?: string;
  unit?: string;
  placeholder?: string;
  description?: string;
  defaultValue?: string;
  data?: string[];
};

type ProcessTranslationsMap = {
  [language: string]: ProcessTranslations;
};
type FieldTranslationsMap = {
  [fieldId: string]: FieldTranslations;
};
type PhaseTranslations = {
  name?: string;
  description?: string;
  possibleNextPhaseSettings?: { [phaseId: string]: { text: string } };
};

type PhaseTranslationsMap = {
  [phaseId: string]: PhaseTranslations;
};

type MemberDoc = {
  id: string;
  info: { [key: string]: string | number | boolean | null };
  permissions: PermissionType[];
};

type PermissionType = "admin" | "own" | "ownteam" | "any" | "edit";
type ProcessFieldDoc = { } & ProcessField & Syncable;
type ProcessField = {
  label: string;
  required?: boolean;
  editable?: boolean;
  placeholder?: string;
  description?: string;
  type: HailerFieldType;
  /**
   * Depends on type:
   *
   * ```ts
   * activitylink: ProcessId[]
   * ```
   *
   * ```ts
   * textpredefinedoptions: string[]
   * ```
   */
  data?: string[];
  unit?: string;
  defaultTo?: boolean;
  defaultValue?: string;
  /** Javascript code to run on this field */
  function?: string;
  /** Depencencies and variables declared for this function */
  functionVariables?: FunctionDependencies;
  /** Function enabled, use code from `function` */
  functionEnabled?: boolean;
  /** Invite user selected in this field the the related discussion */
  inviteToDiscussionOnChange?: boolean;
  collapsedByDefault?: boolean;
  reminderEnabled?: boolean;
  // Correct type is ReminderSettings (check backend types in hailer-api)
  reminderSettings?: unknown;
  // Correct type is WorkflowFieldModifier (check backend types in hailer-api)
  modifier?: unknown;
  key?: string;
};
type FunctionDependencies = {
  [name: string]: Dependency | Dependency[];
};

type Dependency = {
  /**
   * Dependency type
   *
   * `>` Linked to
   * `<` Linked from
   * `=` Activity field
   * `?` Workflow/Phase static fields
   */
  type: "<" | ">" | "=" | "?";
  data: string[];
};

type ProcessDoc = {
  _id: string;
  cid: string;
  name: string;
  description?: string;
  defaultView: "table" | "kanban" | "map" | "calendar";
  /** Translations */
  translations?: ProcessTranslationsMap;
  /** Fields in process */
  fields: { [fieldId: string]: ProcessFieldDoc };
  fieldsOrder: string[];
  phasesRemoved: string[];
  members: MemberDoc[];
  updated: number;
  /** FileId, valid object id */
  coverImage?: string;
  /** Custom label text for activity name */
  createNewLabel?: string;
  enableAddedField: boolean;
  /** Enables receiving linked announcements when activities linking to activities in this workflow are created or moved */
  enableLinkedAnnouncements?: boolean;
  enableMapLocation?: boolean;
  /** Determines if a workflow is an dataset. */
  enableUnlinkedMode?: boolean;
  enableMessenger?: boolean;
  allowGuests?: boolean;
  enableGuestEditing?: boolean;
  enableModifiedField?: boolean;
  enableOwnerField?: boolean;
  enableOwnerTeamField?: boolean;
  ownerTeamFieldTitle?: string;
  enableUniqueName?: boolean;
  enablePredefinedName?: boolean;
  enablePreselectedTeam?: boolean;
  /** Used as title for feed post announcements generated for new activities */
  initPhaseDescription?: string;
  locationRequired?: boolean;
  /** Custom label for activity name column */
  nameColumnText?: string;
  /** Javascript code for generating activity name */
  nameFunction?: string;
  /** Enable activity name to be generated by the code given in `nameFunction` */
  nameFunctionEnabled?: boolean;
  nameFunctionVariables?: FunctionDependencies;
  nameEditable?: boolean;
  /** UserId, valid object id */
  personInCharge?: string;
  /** Custom title / label for person in charge */
  personInChargeLabel?: string;
  publicForm?: {
    /** unique key for public form, used to access via url */
    key: string;
    active: boolean;
    /** Creator Uid */
    creator: string;
    team_account: TeamAccount;
    /** Single follower uid contrary to the field name */
    followers: string;
    /** If true, show activitylink fields and allow search activities  */
    allowRead: boolean;
    /** If true, enables form messaging endpoints  */
    enableMessaging?: boolean;
    theme?: {
      foregroundColor: string;
      backgroundColor: string;
      complementaryColor: string;
      textColor: string;
      logoId: string | null;
      headerColor: string;
    };
  };
  predefinedNamePrefix?: string;
  preselectedTeam?: TeamAccount;
  enableAttachments: boolean;
  /** Custom placeholder text for activity name field */
  nameFieldPlaceHolderText: string;
  // Correct type is ProcessPhaseDoc (check backend types in hailer-api)
  phases: { [phase_id: string]: unknown };
  phasesOrder: string[];
  order?: number;
  allowMultipleTags?: boolean;
  allowCustomTags?: boolean;
  requireFileTag?: boolean;
  documentTemplates?: DocumentTemplate[];
  color?: string;
  starred?: string[];
  // Correct type is PermitKeys[] (check backend types in hailer-api)
  discussionPermissions?: unknown[];
  isStarred?: boolean;
  inviteActivityCreator?: boolean;
  key?: string;

  /** Used for sequencing activities in a process */
  createdActivities?: number;
  /** To know what is installed via market place */
  workflowSuite?: {
    productId: string;
    name: string;
    packageHash: string;
    created: number;
  };
  groupNames?: string[];
  enableActivityTagging?: boolean;
  activityTaggingPhaseIds?: string[];
} & Syncable;

type FieldMap = {
  staticActivityIds: string;
  images: {
    [key: string]: Image;
  };
  activityLinks: {
    [key: string]: LinkedField;
  };
  fields: {
    [key: string]: Field;
  };
  // eslint-disable-next-line ts/no-explicit-any
  itemTable: any;
  hailerFooterImage: string;
};

type RenderedActivity = {
  id: string;
  label: string;
  type: string;
  unit: string | undefined;
  // eslint-disable-next-line ts/no-explicit-any
  value: any;
  // eslint-disable-next-line ts/no-explicit-any
  data?: any;
  processId: string;
  activityId: string;
  modifier?: {
    checkbox: boolean;
    file: boolean;
  };
};

type Field = {
  label: string;
  value: string;
  description: string;
};

type LinkedField = {
  label: string;
  process: string;
  field: string;
  description: string;
};

type Image = {
  value: string;
  description: string;
};
