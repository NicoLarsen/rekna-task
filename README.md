# ReknaTasks

Hailer workspace configuration for **Rekna**.


## What is This?

This project contains TypeScript definitions for your Hailer workspace workflows. After pulling, you'll have:

- Type-safe workflow configurations
- Enums for all workflow, field, phase, and member IDs
- Local files that can be edited and pushed back to Hailer

## Available Commands

### Workspace Management

| Command | Description |
|---------|-------------|
| `npm run pull` | Pull workflows from Hailer to local files |
| `npm run push` | Push all configurations (workflows + fields + phases + groups + teams + insights) |
| `npm run workflows-push` | Push only workflow configurations |
| `npm run fields-push` | Push only field configurations |
| `npm run phases-push` | Push only phase configurations |
| `npm run templates-push` | Push only document template configurations |
| `npm run groups-push` | Push only group configurations |
| `npm run teams-push` | Push only team configurations |
| `npm run insights-push` | Push only insights configurations |
| `npm run workflows-sync` | Add/remove workflows in Hailer, executing the changes in `workflows.ts` file |
| `npm run templates-sync` | Add/remove document templates in Hailer, executing the changes in `templates.ts` file |

**Force Mode (Skip Confirmations)**

All push/sync commands support a `:force` variant that skips confirmation prompts:

| Command | Description |
|---------|-------------|
| `npm run push:force` | Push all without confirmations |
| `npm run fields-push:force` | Push fields without delete confirmations |
| `npm run phases-push:force` | Push phases without delete confirmations |
| `npm run groups-push:force` | Push groups without delete confirmations |
| `npm run teams-push:force` | Push teams without delete confirmations |
| `npm run insights-push:force` | Push insights without delete confirmations |
| `npm run workflows-sync:force` | Sync workflows without delete confirmations |
| `npm run templates-sync:force` | Sync templates without delete confirmations |

### Testing

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests once (CI/CD mode) |
| `npm run test:watch` | Run tests in watch mode (reruns on file changes) |
| `npm run test:ui` | Open interactive test UI in browser |


## Typical Workflow

### 1. Pull Latest Configuration

Before making changes, pull the latest configuration from Hailer:

```bash
npm run pull
```

### 2. Make Changes

Edit the TypeScript files in `workspace/`:

- **`main.ts`** - Workflow settings (name, permissions, form settings)
- **`fields.ts`** - Field definitions
- **`phases.ts`** - Phase definitions

### 3. Push Changes

Push your changes back to Hailer:

```bash
# Push everything at once
npm run push

# Or push specific components
npm run workflows-push
npm run fields-push
npm run phases-push
npm run templates-push
```

### 4. Sync Local Files

After pushing, always pull to keep your local files in sync:

```bash
npm run pull
```

## Project Structure

It's important to keep the project structure as it is, as the CLI relies on it. Don't rename or move files/folders, it should be done exclusively via the CLI commands.

```
ReknaTasks/
├── workspace/
│   ├── workflows.ts          # Registry of all workflows
│   ├── enums.ts               # All enums (workflows, fields, phases, members)
│   ├── WorkflowName_id/       # Individual workflow folders
│   │   ├── main.ts            # Workflow configuration
│   │   ├── fields.ts          # Field definitions
│   │   ├── phases.ts          # Phase definitions
│   │   ├── templates.ts          # Document templates registry (if workflow has templates)
│   │   ├── functions/          # Field functions (if workflow has function fields)
│   │   │   ├── index.ts       # Exports all functions
│   │   │   ├── function1.ts   # Individual function files
│   │   │   └── function2.ts
│   │   ├── templates/          # Document templates (if workflow has templates)
│   │   │   └── TemplateName_id/
│   │   │       ├── template.config.ts   # Template field mappings
│   │   │       └── template.code.ts  # Template generation code
│   │   ├── main.test.ts          # Test file (generated template, editable)
│   │   └── __tests__/         # Optional: Additional test files
│   └── hailer.d.ts            # Type definitions
├── .env                       # Environment variables (git-ignored)
├── config.json                # Workspace configuration
├── package.json               # npm scripts
├── tsconfig.json              # TypeScript configuration
└── vitest.config.ts           # Test configuration
```

## Generated Enums

After pulling, `enums.ts` contains type-safe enums for:

- **WorkflowIds** - All workflow IDs
- **[Workflow]_FieldIds** - Field IDs for each workflow
- **[Workflow]_PhaseIds** - Phase IDs for each workflow
- **WorkspaceMembers** - Workspace member IDs mapped to names

### Example Usage

```typescript
import { WorkflowIds, MyWorkflow_FieldIds, WorkspaceMembers } from "./enums";

// Use enums instead of hardcoded IDs
const workflowId = WorkflowIds.SalesPipeline;
const fieldId = MyWorkflow_FieldIds.CustomerName;
const assignee = WorkspaceMembers.John_Doe;
```

## Configuration

**Workspace ID:** `675b24f38a5aeaa8084153e2`
**Email:** jonathan@rekna.fi
**Password:** Stored in `.env` as `HAILER_PASSWORD`

## Direct CLI Usage

You can also use `hailer-sdk` commands directly:

```bash
hailer-sdk ws-config pull              # Pull workflows
hailer-sdk ws-config push              # Push all configurations
hailer-sdk ws-config workflows push    # Push only workflows
hailer-sdk ws-config fields push       # Push only fields
hailer-sdk ws-config phases push       # Push only phases
hailer-sdk ws-config templates push    # Push only templates
hailer-sdk generate -o ./types         # Generate types
hailer-sdk --help                      # Show all commands
```

## Testing Field Functions

When workflows contain **function fields** (calculated fields), the SDK automatically:

1. **Extracts functions** to `functions/` directory during `npm run pull`
2. **Generates a test template** (`main.test.ts`) if it doesn't exist

### Writing Tests

The generated `main.test.ts` provides an example test pattern:

```typescript
import { describe, it, expect } from 'vitest';
import * as functions from './functions';

describe('My Function Field', () => {
  const testFunction = functions.myFunction_abc;

  it('should calculate correctly', () => {
    const result = testFunction({
      dependency1: 10,
      dependency2: 20
    } as any);
    expect(result).toBe(30);
  });
});
```

### Test File Organization

You can write tests:

1. **In `main.test.ts`** - Main test file (recommended for most tests)

Both patterns are detected by Vitest automatically.

### Running Tests

```bash
# Run all tests once
npm test

# Watch mode (reruns on file changes)
npm run test:watch

# Interactive UI in browser
npm run test:ui
```



## Important Notes

- **Always pull before making changes** to avoid conflicts
- **Always pull after pushing** to sync your local repository
- **Never commit `.env`** to version control (already in `.gitignore`)
- **Test in a development workspace** before pushing to production
- **Test files are never overwritten** - The SDK only creates `main.test.ts` once

## Tips

1. **Use enums everywhere** - Provides type safety and better refactoring
2. **Commit your workspace folder** - Track configuration changes in git
3. **Push incrementally** - Push specific components instead of everything
4. **Use verbose mode** - Add `--verbose` flag for detailed logging
5. **Write tests for function fields** - Catch calculation errors before deploying
6. **Use test:watch during development** - Get instant feedback on changes

## Need Help?

Run any command with `--help` to see available options:

```bash
hailer-sdk --help
hailer-sdk ws-config --help
hailer-sdk generate --help
```


## MCP Server

This project includes an MCP (Multi-Client Proxy) server setup in the `hailer-mcp/` directory.

### Available MCP Commands

| Command | Description |
|---------|-------------|
| `npm run mcp-start` | Start the MCP server |
| `npm run mcp-update` | Update the MCP server to the latest version |

### Configuration

The MCP server is pre-configured to work with this project. Make sure to check the `.env.local` file in the root directory for client configurations.

### Notes

- The MCP server allows Claude Code agent to interact with the Hailer-SDK and Hailer API on behalf of this project via the setup user.
- Ensure the MCP server is running when using Claude Code agents that need to access Hailer resources.

### Tips

- Every time you update the MCP server, remember to restart it if it's running, also restart any Claude Code agents that depend on it.

  
##Git

One of the intention of this SDK is to keep all workflow configurations in code and under version control. If you would like to setup git for your project you should create a new repository on GitHub or GitLab and then follow the instructions to push an existing repository from the command line.

You can also keep track of your changes without a remote repository by initializing a local git repository:

```bash
cd ReknaTasks
git init
git add .
git commit -m "Initial commit"
```

Every time you make changes to your workflows, remember to commit them:

```bash
git add .
git commit -m "Describe your changes here"
```

