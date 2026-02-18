# Rekna Recurring Matrix

A React-based web application for managing and tracking monthly recurring accounting tasks across multiple companies. Built as a Hailer App for Rekna, it displays companies as rows and task categories as columns in an interactive matrix view.

## Features

- **Monthly Task Matrix**: Companies as rows, recurring tasks organized into three categories (Accounting, Payroll, Financial Statements) as columns
- **Status Tracking**: Three-state workflow per task: To Do, Doing, Done (plus N/A for non-applicable tasks)
- **Bulk Task Creation**: Automatically creates recurring task activities for all companies in a given month
- **Batch Updates**: Queue multiple status changes and save them all at once
- **Multi-language Support**: English and Finnish (EN/FI)
- **Progress Tracking**: Completion percentage and missing task count per category

## Tech Stack

- **React 18** + **TypeScript**
- **Vite 4** (build tool)
- **Chakra UI v2** (component library)
- **@hailer/app-sdk** (Hailer platform integration)
- **Chart.js** + react-chartjs-2
- **Framer Motion** (animations)

## Project Structure

```
src/
├── App.tsx                    # Main app component & state management
├── components/
│   ├── MatrixGrid.tsx         # Core matrix rendering
│   ├── Header.tsx             # Month navigation & language selector
│   ├── StatusCell.tsx         # Individual cell with status icon
│   ├── ActionFABs.tsx         # Floating action buttons
│   ├── CategoryPopup.tsx      # Category details popup
│   ├── CompletionButton.tsx   # Task completion trigger
│   └── LanguageSelector.tsx   # Language switcher
├── services/
│   └── dataService.ts         # Hailer API calls
├── config/
│   └── taskMappings.ts        # 31 task definitions across 3 categories
├── types/
│   └── index.ts               # TypeScript interfaces
├── i18n/
│   ├── LanguageContext.tsx     # Language state management
│   └── translations.ts        # EN/FI translations
├── utils/
│   ├── dateUtils.ts           # Month formatting & date calculations
│   └── fieldUtils.ts          # Hailer field value extraction
└── hailer/
    ├── use-hailer.tsx          # SDK initialization & store
    └── util.ts
```

## Task Categories

| Category               | Tasks |
|------------------------|-------|
| **Accounting**         | 8 tasks (bank statements, purchase invoices, depreciation, etc.) |
| **Payroll**            | 9 tasks (hourly entries, payroll accounting, obligations, etc.) |
| **Financial Statements** | 15 tasks (balance sheet, tax return, audit, dividends, etc.) |

## Getting Started

### Prerequisites

- Node.js
- npm
- Access to a Hailer workspace with the required workflows configured

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build & Publish

```bash
# Build for production
npm run build-production

# Publish to Hailer marketplace
npm run publish-production
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start local development server |
| `npm run build` | TypeScript check + production build |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build locally |
| `npm run build-production` | Build for production environment |
| `npm run publish-production` | Build and publish to Hailer production |
| `npm run publish-development` | Build and publish to Hailer development |
| `npm run publish-staging` | Build and publish to Hailer staging |
