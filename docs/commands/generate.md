# `hailer-sdk generate`

Generate TypeScript enums and types from your Hailer workspace.

## Usage

```bash
hailer-sdk generate [options]
```

**Alias:** `gen`

## Description

The `generate` command creates TypeScript enums and types from your Hailer workspace. It generates a single `hailer-types.ts` file containing:

- **Workflow enums** - All workflows in the workspace
- **Phase enums** - Phases for each workflow
- **Field enums** - Fields for each workflow (excludes subheaders and fields without labels)
- **Insight types** (optional) - TypeScript types inferred from insight data

## Options

| Option | Alias | Required | Description |
|--------|-------|----------|-------------|
| `--output <path>` | `-o` | ✅ | Output directory for generated files |
| `--email <email>` | `-e` | * | Hailer account email |
| `--password <password>` | `-p` | * | Hailer account password |
| `--workspace <id>` | `-w` | * | Workspace ID |
| `--api-url <url>` | `-a` | | API URL (defaults to https://api.hailer.com) |
| `--insights <file>` | `-i` | | Path to JSON file with insights array (optional) |
| `--ids` | | | Use IDs instead of names/keys as enum values |
| `--verbose` | | | Show detailed logging |
| `--user-api-key <key>` | | * | User API key for authentication (alternative to email/password) |

\* Credentials can be provided via CLI options or `config.json` file. Use either `--user-api-key` OR `--email` + `--password`.

## Understanding the `--ids` Flag

The `--ids` flag controls what values are used in the generated enums:

### Without `--ids` (default)

Uses human-readable names and keys:

```typescript
export enum MyWorkspace_Workflows {
  SalesPipeline = "Sales Pipeline",
  CustomerSupport = "Customer Support",
}

export enum MyWorkspace_SalesPipeline_Fields {
  customer_name = "customer_name",  // Uses field.key
  deal_value = "deal_value",
}

export enum MyWorkspace_SalesPipeline_Phases {
  Lead = "Lead",            // Uses phase.name
  Negotiation = "Negotiation",
}
```

### With `--ids`

Uses Hailer internal IDs:

```typescript
export enum MyWorkspace_Workflows {
  SalesPipeline = "507f1f77bcf86cd799439011",
  CustomerSupport = "507f191e810c19729de860ea",
}

export enum MyWorkspace_SalesPipeline_Fields {
  customer_name = "507f1f77bcf86cd799439012",  // Uses field._id
  deal_value = "507f1f77bcf86cd799439013",
}

export enum MyWorkspace_SalesPipeline_Phases {
  Lead = "507f1f77bcf86cd799439014",    // Uses phase._id
  Negotiation = "507f1f77bcf86cd799439015",
}
```


## Field Filtering

The generator automatically **excludes** certain fields:

1. **Subheaders** - Fields with `type: "subheader"` (visual separators, not data fields)
2. **Fields without keys** - When `--ids` is not used, fields must have a `key` property
3. **Fields without labels** - All fields must have a `label` property

## How Insights Work

- If you provide `--insights <file>`, the generator will include insight types in the output
- If you don't provide `--insights`, only workflow/phase/field enums are generated
- The types of the each individual insight's property is decided based on the value returned when fetched the insight. It can be a `string`, `number`, `boolean`, `null`, `any` or an array of each of previously mentioned types.

## Examples

### Basic usage - Generate workflow enums only

```bash
hailer-sdk generate -e email@example.com -p password -w workspace-id -o ./src/types
```

**Generates:** Workflow, phase, and field enums

### Generate with IDs instead of names

```bash
hailer-sdk generate -e email@example.com -p password -w workspace-id -o ./src/types --ids
```

**Generates:** Same enums but with internal IDs as values

### Generate workflows + insights types

```bash
hailer-sdk generate -e email@example.com -p password -w workspace-id -o ./output --insights ./insights.json
```

**Generates:** Workflow enums + insight types (both included)

### Using config.json for credentials

```bash
# Reads credentials from config.json in current directory
hailer-sdk generate -o ./types
```

### Verbose output

```bash
hailer-sdk generate -o ./types --verbose
```

**Shows:** Detailed information about each workflow being processed

### Using user API key authentication

```bash
hailer-sdk generate -o ./types --user-api-key "your-api-key" -w workspace-id
```

**Uses:** User API key instead of email/password for authentication

## Insights File Format

If you want to generate insight types, provide a JSON file with this format:

```json
[
  {
    "id": "insight-id-1",
    "name": "My Insight"
  },
  {
    "id": "insight-id-2",
    "name": "Another Insight"
  }
]
```

## Generated Files

The command generates TypeScript file in your specified output directory:

- `hailer-types.ts` - Contains all generated enums and types

## Credentials Resolution

Credentials are resolved in this order (highest priority first):

1. CLI options (`--user-api-key` OR `--email` + `--password`, `--workspace`, `--api-url`)
2. `config.json` file in current directory (`userApiKey` OR `email` + `password`)
3. Default API URL (`https://api.hailer.com`) if not specified

**Authentication Methods:**
- **User API key**: Use `--user-api-key` flag or `userApiKey` in config.json
- **Email/password**: Use `--email` + `--password` flags or `email` + `password` in config.json

**API URL Note:** If `--api-url` is not provided via CLI and doesn't exist in `config.json`, the SDK will use the default production API (`https://api.hailer.com`). This is useful for local development when you need to point to a different Hailer instance.

## Generated Output Structure

The command generates a single `hailer-types.ts` file with this structure:

```typescript
/**
 * All workflows/datasets in the MyWorkspace workspace
 * @generated This enum is auto-generated. Do not edit manually.
 */
export enum MyWorkspace_Workflows {
  SalesPipeline = "Sales Pipeline",
  // ... more workflows
}

/**
 * Phases for Sales Pipeline workflow
 * @generated This enum is auto-generated. Do not edit manually.
 */
export enum MyWorkspace_SalesPipeline_Phases {
  Lead = "Lead",
  Qualified = "Qualified",
  // ... more phases
}

/**
 * Fields for Sales Pipeline workflow
 * Values are names of the fields
 * @generated This enum is auto-generated. Do not edit manually.
 */
export enum MyWorkspace_SalesPipeline_Fields {
  customer_name = "customer_name",
  deal_value = "deal_value",
  // ... more fields
}

// Insight types (if --insights provided)
export type MyInsight = {
  "Column1": string;
  "Column2": number;
  // ... inferred from data
};
```

## Notes

- The generated enums provide type-safe references to workflow, field, and phase IDs
- Insights are optional - simply omit `--insights` to generate only workflows
- All generated types include `@generated` JSDoc comments indicating they're auto-generated
- Enum keys are sanitized (special characters removed, spaces replaced with underscores)
- Generated file is always named `hailer-types.ts` in the output directory
- Re-run the command anytime to regenerate types with latest workspace data
