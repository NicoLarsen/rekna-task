# `hailer-sdk init`

Initialize a new Hailer project with proper structure and configuration.

## Usage

```bash
hailer-sdk init
```

## Description

The `init` command is an interactive wizard that guides you through setting up a new Hailer project. It handles authentication, workspace selection, optional bot account creation, optional MCP server setup, and creates all necessary project files and configurations.

## Interactive Steps

1. **Project name** - Choose a name for your project
2. **API URL** - Select which Hailer API to connect to (cloud or local development)
3. **Email** - Enter your Hailer account email *(skipped if `--user-api-key` provided)*
4. **Password** - Enter your Hailer account password *(skipped if `--user-api-key` provided)*
5. **Workspace selection** - Choose from your available workspaces or create a new one
6. **Bot account creation** - Optionally create a bot user for automated workspace operations
7. **MCP server setup** - Optionally set up the Model Context Protocol server for Claude Code integration *(skipped if no email/password credentials available)*

## What it Creates

The command generates a complete project structure:

```
my-project/
├── workspace/           # Workflow configurations will be generated here
├── .claude/            # Claude Code configuration (if MCP enabled)
├── .opencode/          # OpenCode configuration (if MCP enabled)
├── .mcp.json           # MCP configuration (if MCP enabled)
├── .env.local          # MCP server credentials (if MCP enabled)
├── docs/               # Copy of SDK documentation
├── .env                # Environment variables (password)
├── .gitignore          # Excludes .env and other sensitive files
├── config.json         # Workspace configuration
├── package.json        # Node.js project configuration with useful scripts
├── tsconfig.json       # TypeScript configuration
├── CLAUDE.md           # Claude Code instructions
└── README.md           # Project documentation
```

### Generated npm scripts

The `package.json` includes these helpful scripts:

**Workspace Management:**
- `npm run pull` - Pull workflows from Hailer
- `npm run push` - Push all configurations to Hailer
- `npm run workflows-push` - Push only workflow configurations
- `npm run workflows-sync` - Create/delete workflows
- `npm run fields-push` - Push only field configurations
- `npm run phases-push` - Push only phase configurations
- `npm run templates-push` - Push only template configurations
- `npm run templates-sync` - Create/delete document templates
- `npm run groups-push` - Push only group configurations
- `npm run teams-push` - Push only team configurations
- `npm run insights-push` - Push only insights configurations

**MCP Server (if enabled):**
- `npm run mcp-start` - Start the MCP server
- `npm run mcp-update` - Update @hailer/mcp package and refresh .claude and .opencode directories

## Bot Account (Optional)

During initialization, you can choose to create a bot account for your workspace. The bot account:

- Is created with email pattern: `{workspace}_{timestamp}@botinen.fi`
- Gets a randomly generated secure password (32 characters)
- Is added to a "Bots" team in your workspace (created if it doesn't exist)
- Has "owner" role for full workspace access
- Its credentials replace your personal credentials in the project's `.env` file

**This is useful for:**
- Separating bot actions from personal user actions

**Note:** The bot credentials are displayed once during initialization. But you can see the bot's email in the `config.json` file and the password in `.env` file.

## MCP Server Setup (Optional)

The MCP (Model Context Protocol) server enables Claude Code to interact with your Hailer workspace programmatically.

When enabled, the initialization:
- Installs `@hailer/mcp` npm package as a dev dependency
- Creates `.mcp.json` with MCP server connection configuration
- Creates `.env.local` with client credentials
- Adds a `postinstall` script that automatically copies `.claude/` and `.opencode/` directories from `@hailer/mcp` package
- Adds MCP-specific npm scripts to `package.json`

### Starting the MCP Server

After initialization and installing dependencies:

```bash
cd my-project
npm install
npm run mcp-start
```

The `npm install` step will automatically:
- Install all dependencies including `@hailer/mcp`
- Run the `postinstall` script to copy `.claude/` and `.opencode/` configuration

Then open a new terminal and start Claude Code to interact with your workspace through the MCP server.

### Updating the MCP Server

To get the latest version of the MCP server:

```bash
npm run mcp-update
```

This will:
- Update `@hailer/mcp` to the latest version
- Run the `postinstall` script to refresh `.claude/` and `.opencode/` configuration

**Note:** After updating, restart the MCP server and any running Claude Code agents that depend on it.

## Next Steps

After initialization:

1. Navigate to your project:
   ```bash
   cd my-project
   npm install
   ```

2. Pull your workspace configuration:
   ```bash
   npm run pull
   ```

3. (Optional) If you set up the MCP server, start it:
   ```bash
   npm run mcp-start
   ```

4. Start developing with type-safe workflow definitions!

## API URL Selection

During initialization, you'll be prompted to select an API URL:

- **Hailer cloud** (`https://api.hailer.com`) - Production Hailer API (default)
- **Hailer local** (`https://api.hailer.local.gd/`) - Local development environment

The selected API URL is saved to `config.json` and used for all subsequent SDK commands.

**For local development:**
- The SDK automatically detects local environments (URL contains "local")
- Self-signed SSL certificates are automatically accepted for local APIs
- Useful for testing changes before deploying to production

## User API Key Authentication

As an alternative to email/password authentication, you can use a user API key:

```bash
hailer-sdk init --user-api-key "your-api-key-here"
```

### How it Works

When `--user-api-key` is provided:
- Email and password prompts are **skipped**
- Authentication uses the user API key
- You can still create a bot account (recommended for MCP server)

### MCP Server Requirement

The MCP server requires email/password credentials. If you use user API key authentication:
- **With bot account**: Bot credentials are used for MCP server (recommended)
- **Without bot account**: MCP server setup is skipped automatically

### Generated Files

The `.env` and `config.json` files are configured based on your authentication method:

**With email/password (or bot account):**
```
# .env
HAILER_PASSWORD="your-password"

# config.json
{
  "email": "your-email@example.com",
  "password": "HAILER_PASSWORD",
  "workspaceId": "...",
  "apiUrl": "..."
}
```

**With user API key only (no bot):**
```
# .env
HAILER_USER_API_KEY="your-api-key"

# config.json
{
  "workspaceId": "...",
  "apiUrl": "...",
  "userApiKey": "HAILER_USER_API_KEY"
}
```

## Notes

- The `.env` file contains your credentials - **never commit this to version control**
- The `.env.local` file (if MCP enabled) contains MCP server credentials - also git-ignored
- The generated `.gitignore` automatically excludes `.env`, `.env.local`, `.claude/`, and `.opencode/` for safety
- Type definitions are copied to your project for IDE support
- Bot credentials are displayed only once during initialization - save them securely!
- The MCP server is installed as an npm package (`@hailer/mcp`) in your `node_modules/`
- The `apiUrl` field in `config.json` determines which API all commands will use

## Troubleshooting

### MCP Server Setup Fails

If the MCP server setup fails during initialization:
- Check your network connection (npm package must be downloaded)
- Ensure you have Node.js 18+ installed
- Verify that `@hailer/mcp` package is available on npm
- Try running `npm install` manually after initialization to trigger the `postinstall` script

### Bot Account Creation Fails

If bot account creation fails:
- You can continue with your personal credentials
- The project will still be initialized successfully
- You can manually create a bot account later through the Hailer UI

### Workspace Creation Fails

If creating a new workspace fails:
- Select an existing workspace instead
- Check your account permissions
- Verify your network connection
