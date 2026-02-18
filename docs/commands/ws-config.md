# `hailer-sdk ws-config`

Manage workspace configuration - pull and push workflow configurations between Hailer and your local repository.

**Alias:** `workspace-config`

## Commands Overview

| Command | Purpose | Creates | Deletes | Updates |
|---------|---------|---------|---------|---------|
| [`pull`](#pull) | Fetch workflows from Hailer | - | - | - |
| [`push`](#push) | Sync all configurations | ✅ | ✅ | ✅ |
| [`workflows push`](#workflows-push) | Update workflow configs only | ❌ | ❌ | ✅ |
| [`workflows sync`](#workflows-sync) | Manage workflow lifecycle | ✅ | ✅ | ❌ |
| [`phases push`](#phases-push) | Manage phase configs | ✅ | ✅ | ✅ |
| [`fields push`](#fields-push) | Manage field configs | ✅ | ✅ | ✅ |
| [`templates push`](#templates-push) | Update template configs | ❌ | ❌ | ✅ |
| [`templates sync`](#templates-sync) | Manage template lifecycle | ✅ | ✅ | ❌ |
| [`groups push`](#groups-push) | Manage group configs | ✅ | ✅ | ✅ |
| [`teams push`](#teams-push) | Manage team configs | ✅ | ✅ | ✅ |
| [`insights push`](#insights-push) | Manage insights configs | ✅ | ✅ | ✅ |
| [`apps push`](#apps-push) | Manage app configs | ✅ | ✅ | ✅ |

## Common Options

All subcommands support these options:

| Option | Alias | Description |
|--------|-------|-------------|
| `--email <email>` | `-e` | Hailer account email |
| `--password <password>` | `-p` | Hailer account password |
| `--user-api-key <key>` | | User API key for authentication (alternative to email/password) |
| `--workspace <id>` | `-w` | Workspace ID |
| `--verbose` | | Show detailed logging |
| `--force` | | Skip delete confirmation prompts |

**Note:** Use either `--user-api-key` OR `--email` + `--password` for authentication.

---

## `pull`

Pull workflows from Hailer workspace to local files.

### Usage

```bash
hailer-sdk ws-config pull -e <email> -p <password> -w <workspace-id>
```

### What it Does

Fetches all workflows from your Hailer workspace and generates local TypeScript files:

```
workspace/
├── workflows.ts                    # Registry of all workflows
├── groups.ts                       # Group definitions
├── teams.ts                        # Team definitions
├── insights.ts                     # Insights configuration
├── apps.ts                         # Apps configuration
├── enums.ts                        # All enums (workflows, fields, phases, members)
├── hailer.d.ts                     # Hailer SDK types
└── WorkflowName_id/                # Individual workflow folders
    ├── main.ts                     # Workflow configuration
    ├── fields.ts                   # Field definitions
    ├── phases.ts                   # Phase definitions
    ├── templates.ts                # Document templates registry (if workflow has templates)
    └── templates/                  # Document templates directory (if workflow has templates)
        └── TemplateName_id/        # Individual template folders
            ├── template.config.ts  # Template field mappings and configuration
            └── template.code.ts    # Template PDF/CSV generation function
```

### Generated Enums

The `enums.ts` file includes:

- **WorkflowIds** - All workflow IDs mapped to workflow names
- **[Workflow]_FieldIds** - Field IDs for each workflow
- **[Workflow]_PhaseIds** - Phase IDs for each workflow
- **WorkspaceMembers** - Workspace member IDs mapped to user names
- **WorkspaceTeams** - Workspace team IDs mapped to team names
- **WorkspaceGroups** - Workspace group IDs mapped to group names
- **HailerMembers** - All member types in Hailer ID format ex. user_${id}, team_${id}, group_${id}

### ID Replacement

The pull command automatically replaces hardcoded IDs with enum references:

```typescript
// Instead of:
assignedTo: "681b0ef24d80238fd472cc19"

// You get:
assignedTo: WorkspaceMembers.Jari_Jarkov_c19
```

### Notes

- Enum keys contain the sanitized names of fields, phases, workflows, members, teams, groups plus `_id` 3 characters suffixed to avoid name collisions
- Cleans up old workflow directories that no longer exist remotely
- IDs are automatically replaced with readable enum references
- Multiline strings are formatted with template literals

---

## `push`

Push ALL local configurations to Hailer workspace (workflows + fields + phases).

### Usage

```bash
hailer-sdk ws-config push -e <email> -p <password> -w <workspace-id>

# Skip all confirmation prompts
hailer-sdk ws-config push --force
```

### What it Does

Syncs all local configurations with Hailer:

1. **Workflows** - Updates workflow configurations
2. **Fields** - Creates, updates, or deletes fields
3. **Phases** - Creates, updates, or deletes phases
4. **Templates** - Updates template configurations
5. **Groups** - Creates, updates, or deletes groups
6. **Teams** - Creates, updates, or deletes teams
7. **Insights** - Creates, updates, or deletes insights
8. **Apps** - Creates, updates, or deletes apps

### Force Mode

Use `--force` to skip all confirmation prompts:

```bash
# Will prompt for confirmations
hailer-sdk ws-config push

# Skips all confirmations
hailer-sdk ws-config push --force
```

### Important

After pushing, **always pull** to sync your local repository:

```bash
hailer-sdk ws-config pull
```

### When to Use

Use `push` when you've made changes to:
- Workflow configurations in `main.ts`
- Field definitions in `fields.ts`
- Phase definitions in `phases.ts`
- Template configurations in `templates.ts` or template files
- Group definitions in `groups.ts`
- Team definitions in `teams.ts`
- Insight configurations in `insights.ts`
- App configurations in `apps.ts`

---

## `workflows push`

Update workflow configurations only (does not create or delete workflows).

### Usage

```bash
hailer-sdk ws-config workflows push -e <email> -p <password> -w <workspace-id>
```

### What it Does

Updates existing workflow configurations from `main.ts` files without:
- Creating new workflows
- Deleting workflows
- Modifying fields or phases

### When to Use

Use when you've only changed workflow-level settings like:
- Workflow name
- Phases or fields order
- Permissions
- Default

---

## `workflows sync`

Manage workflow lifecycle - create and delete workflows.

### Usage

```bash
hailer-sdk ws-config workflows sync -e <email> -p <password> -w <workspace-id>

# Skip all confirmation prompts
hailer-sdk ws-config workflows sync --force
```

### What it Does

- **Creates** new workflows that exist locally but not remotely
- **Deletes** workflows that exist remotely but not locally
- **Does NOT update** existing workflow configurations

### Force Mode

Use `--force` to skip all confirmation prompts:

```bash
# Will prompt for confirmations
hailer-sdk ws-config workflows sync

# Skips all confirmations
hailer-sdk ws-config workflows sync --force
```

### When to Use

Use when you:
- Added new workflow directories locally
- Removed workflow directories you want deleted remotely

### Important

This command performs destructive operations. Always:
1. Review what will be created/deleted
2. Pull after syncing: `hailer-sdk ws-config pull`

---

## `phases push`

Push phase configurations to Hailer workspace.

### Usage

```bash
hailer-sdk ws-config phases push -e <email> -p <password> -w <workspace-id>

# Skip all confirmation prompts
hailer-sdk ws-config phases push --force
```

### What it Does

For each workflow:
- **Creates** new phases defined in `phases.ts`
- **Updates** existing phase configurations
- **Deletes** phases that exist remotely but not in `phases.ts` (with confirmation)

### User Confirmation

When phases exist remotely but not locally, you'll be prompted:

```
Delete 2 phase(s) from workflow 'Sales Pipeline'? (Y/n)
```

Use `--force` to skip this confirmation.

### When to Use

Use when you've:
- Added new phases
- Modified phase configurations
- Removed phases from `phases.ts`

---

## `fields push`

Push field configurations to Hailer workspace.

### Usage

```bash
hailer-sdk ws-config fields push -e <email> -p <password> -w <workspace-id>

# Skip all confirmation prompts
hailer-sdk ws-config fields push --force
```

### What it Does

For each workflow:
- **Creates** new fields defined in `fields.ts`
- **Updates** existing field configurations
- **Deletes** fields that exist remotely but not in `fields.ts` (with confirmation)

### Important Notes

- Field `key` cannot be updated via API (read-only)
- Changes to field types may require data migration
- Always test in a non-production workspace first
- Use `--force` to skip delete confirmations

**⚠️ NOTE:** Fields shouldn't have same name, `label`, if they do one field will be removed during push
### When to Use

Use when you've:
- Added new fields
- Modified field configurations
- Removed fields from `fields.ts`

---

## `templates push`

Push document template configurations to Hailer workspace.

### Usage

```bash
hailer-sdk ws-config templates push -e <email> -p <password> -w <workspace-id>
```

### What it Does

For each workflow with templates:
- **Updates** existing template metadata (name, description, field mappings)
- **Updates** template function code (PDF/CSV generation logic)
- Compares local vs remote templates and only pushes changes
- Does NOT create or delete templates (use `templates sync` for that)

### How it Works

The command processes templates in two phases:
1. **Metadata update**: Updates template name, description, field mappings from `template.config.ts`
2. **Code update**: Updates the PDF/CSV generation function from `template.code.ts`

### Template Structure

Each template consists of two files:

**`template.config.ts`** - Configuration and field mappings:
```typescript
export const template: DocumentTemplateUpdatePayload = {
  content: "@function:template_name_id",  // References template.code.ts
  name: "Invoice Template",
  fileType: "pdf",
  description: "Invoice generation template",
  fieldMap: {
    fields: {
      field1: {
        label: "Invoice Number",
        value: `::${Invoice_FieldIds.invoice_number_abc}`  // Uses enum
      },
      field2: {
        label: "Customer Name",
        value: `::${Invoice_FieldIds.customer_name_def}/::${Company_FieldIds.name_xyz}`  // Linked activity
      }
    },
    images: {
      image1: {
        description: "Company logo",
        value: "67640282d1346d04eacf4b05"  // Image ID
      }
    }
  },
  templateId: "abc123..."
};
```

**`template.code.ts`** - PDF/CSV generation function:
```typescript
export class template_name_id {
  async setPdfDefinition() {
    const doc = this.getEmptyPdfDoc(this.fieldMap);
    const fields = this.fieldMap.fields;

    doc.content.push({
      text: fields.field1.value,
      style: 'header'
    });

    this.setDocument(doc, 'invoice');
  }
}
```

### Field Mapping Patterns

- **`"::fieldId"`** - References a field from the current activity
- **`"::{FieldEnum.field}"`** - Uses enum from enums.ts (recommended)
- **`"::fieldId/::otherFieldId"`** - Linked activity field reference (gets value from linked activity)
- **`::\${FieldEnum.field}`** - Template literal for dynamic enum usage

### When to Use

Use when you've:
- Modified template field mappings in `template.config.ts`
- Updated PDF/CSV generation logic in `template.code.ts`
- Changed template metadata (name, description, options)

### Important Notes

- Only updates **existing** templates
- Skips templates that haven't changed (using deep equality check)
- Always pull after pushing: `hailer-sdk ws-config pull`
- Template IDs and fileType cannot be changed

---

## `templates sync`

Manage document template lifecycle - create and delete templates.

### Usage

```bash
hailer-sdk ws-config templates sync -e <email> -p <password> -w <workspace-id>

# Skip all confirmation prompts
hailer-sdk ws-config templates sync --force
```

### What it Does

- **Creates** new templates defined in `templates.ts` but not existing remotely
- **Deletes** templates that exist remotely but not in `templates.ts` (with confirmation)
- **Does NOT update** existing template configurations (use `templates push` for that)

### How to Create a New Template

1. **Add template entry to `templates.ts`**:
```typescript
export const templates: DocumentTemplateEntry[] = [
  {
    templateId: "",  // Leave empty for new templates
    name: "New Invoice Template",
    fileType: "pdf",  // "pdf" or "csv"
    folder: ""  // Leave empty, will be auto-generated
  }
];
```

2. **Run templates sync**:
```bash
hailer-sdk ws-config templates sync
```

This creates the template remotely and assigns a templateId.

3. **Pull to get the template structure**:
```bash
hailer-sdk ws-config pull
```

This generates:
- Updated `templates.ts` with templateId and folder
- `templates/TemplateName_id/template.config.ts` - Configure field mappings here
- `templates/TemplateName_id/template.code.ts` - Implement PDF/CSV generation here

4. **Configure and update**:
- Edit `template.config.ts` to add field mappings
- Edit `template.code.ts` to implement generation logic
- Run `hailer-sdk ws-config templates push` to update

### Workflow Example

```bash
# 1. Pull current state
hailer-sdk ws-config pull

# 2. Add new template entry to templates.ts
# (set name and fileType only)

# 3. Sync to create template remotely
hailer-sdk ws-config templates sync

# 4. Pull to get template structure
hailer-sdk ws-config pull

# 5. Edit template.config.ts and template.code.ts

# 6. Push changes
hailer-sdk ws-config templates push
```

### User Confirmation

When templates exist remotely but not locally, you'll be prompted:

```
Delete 2 template(s) from workflow 'Sales Pipeline'? (Y/n)
```

Use `--force` to skip this confirmation.

### When to Use

Use when you:
- Want to create new document templates
- Need to delete templates (remove from `templates.ts` first)
- Are setting up templates for the first time

### Important Notes

- **Only** `name` and `fileType` can be set when creating templates
- Template IDs are auto-generated by Hailer
- Always pull after sync to get the generated structure
- This command performs destructive operations (deletions)
- Use `--force` to skip confirmations

---

## `groups push`

Push group configurations to Hailer workspace.

### Usage

```bash
hailer-sdk ws-config groups push -e <email> -p <password> -w <workspace-id>

# Skip all confirmation prompts
hailer-sdk ws-config groups push --force
```

### What it Does

For the workspace:
- **Creates** new groups defined in `groups.ts`
- **Updates** existing group configurations
- **Deletes** groups that exist remotely but not in `groups.ts` (with confirmation)

### User Confirmation

When groups exist remotely but not locally, you'll be prompted:

```
Delete 2 group(s) from workspace? (Y/n)
```

Use `--force` to skip this confirmation.

### When to Use

Use when you've:
- Added new groups
- Modified group configurations (name, members, permissions)
- Removed groups from `groups.ts`

---

## `teams push`

Push team configurations to Hailer workspace.

### Usage

```bash
hailer-sdk ws-config teams push -e <email> -p <password> -w <workspace-id>

# Skip all confirmation prompts
hailer-sdk ws-config teams push --force
```

### What it Does

For the workspace:
- **Creates** new teams defined in `teams.ts`
- **Updates** existing team configurations
- **Deletes** teams that exist remotely but not in `teams.ts` (with confirmation)

### User Confirmation

When teams exist remotely but not locally, you'll be prompted:

```
Delete 2 team(s) from workspace? (Y/n)
```

Use `--force` to skip this confirmation.

### When to Use

Use when you've:
- Added new teams
- Modified team configurations (name, members, permissions)
- Removed teams from `teams.ts`

---

## `insights push`

Push insights configurations to Hailer workspace.

### Usage

```bash
hailer-sdk ws-config insights push -e <email> -p <password> -w <workspace-id>

# Skip all confirmation prompts
hailer-sdk ws-config insights push --force
```

### What it Does

For the workspace:
- **Creates** new insights defined in `insights.ts`
- **Updates** existing insight configurations (query, sources, members, permissions)
- **Deletes** insights that exist remotely but not in `insights.ts` (with confirmation)

### User Confirmation

When insights exist remotely but not locally, you'll be prompted:

```
Delete 2 insight(s) from workspace? (Y/n)
```

Use `--force` to skip this confirmation.

### When to Use

Use when you've:
- Added new insights
- Modified insight queries or data sources
- Changed insight members or permissions
- Removed insights from `insights.ts`

### Notes

- Insights are workspace-level resources
- Members are managed separately from insight properties
- Insight queries use SQLite3 syntax

---

## `apps push`

Push app configurations to Hailer workspace.

### Usage

```bash
hailer-sdk ws-config apps push -e <email> -p <password> -w <workspace-id>

# Skip all confirmation prompts
hailer-sdk ws-config apps push --force
```

### What it Does

For the workspace:
- **Creates** new apps defined in `apps.ts`
- **Updates** existing app configurations (name, description, url, image, members)
- **Deletes** apps that exist remotely but not in `apps.ts` (with confirmation)

### App Configuration Structure

Apps in `apps.ts` follow this structure:

```typescript
export const apps: HailerAppUpdatePayload[] = [
  {
    _id: "abc123...",              // Leave empty for new apps
    name: "My Custom App",
    description: "App description",
    url: "https://app.example.com",
    image: "image_asset_id",       // Optional app icon/image
    members: [                     // Users/teams/groups with access
      {
        id: WorkspaceMembers.John_Doe_xyz,
        type: "user"
      },
      {
        id: WorkspaceTeams.Engineering_abc,
        type: "team"
      }
    ],
    enabled: true,                 // Whether the app is active
    config: {},                    // App-specific configuration (read-only, managed via manifest.json)
  }
];
```

### User Confirmation

When apps exist remotely but not locally, you'll be prompted:

```
Delete 2 app(s) from workspace? (Y/n)
```

Use `--force` to skip this confirmation.

### When to Use

Use when you've:
- Added new apps
- Modified app configurations (name, description, url)
- Changed app members or access permissions
- Removed apps from `apps.ts`

### Important Notes

- **App creation**: Leave `_id` empty when creating new apps - it will be auto-assigned by Hailer
- **App config**: The `config` field is read-only and managed through the app's `manifest.json` file
- **Members management**: Members are managed separately via add/remove operations
- **Clean member removal**: To remove all members from an app, set `members: []`
- Apps are workspace-level resources

### Workflow Example

```bash
# 1. Pull current apps
hailer-sdk ws-config pull

# 2. Edit apps.ts to add/modify/remove apps

# 3. Push changes
hailer-sdk ws-config apps push

# 4. Pull to sync local state
hailer-sdk ws-config pull
```

---

## Typical Workflow

Here's the recommended workflow for managing configurations:

### 1. Initial Setup

```bash
# Pull existing configuration
hailer-sdk ws-config pull
```

### 2. Make Changes

Edit the TypeScript files in `workspace/`:
- Modify `main.ts` for workflow settings
- Edit `fields.ts` to add/update fields
- Edit `phases.ts` to add/update phases

### 3. Push Changes

```bash
# Push all changes at once
hailer-sdk ws-config push

# Or push specific components
hailer-sdk ws-config workflows push
hailer-sdk ws-config fields push
hailer-sdk ws-config phases push
hailer-sdk ws-config templates push
hailer-sdk ws-config groups push
hailer-sdk ws-config teams push
hailer-sdk ws-config apps push
```

### 4. Sync Local Repository

```bash
# Always pull after pushing to stay in sync
hailer-sdk ws-config pull
```

## Tips

- **Use enums** - Reference IDs using the generated enums for type safety
- **Version control** - Commit your `workspace/` directory to git
- **Test first** - Test changes in a development workspace before production
- **Pull often** - Pull before making changes to avoid conflicts
- **Push incrementally** - Push specific components instead of everything at once
