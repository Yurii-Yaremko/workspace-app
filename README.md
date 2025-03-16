# Workspace App

A modern React application built with Next.js that includes a workspace for managing draggable blocks and a real-time Bitcoin transaction tracker.

## Features

- **Workspace Module**: Interactive workspace with draggable and resizable blocks
- **Bitcoin Tracker**: Real-time Bitcoin transaction monitoring
- **Modern UI**: Clean and responsive design with SCSS modules
- **Type Safety**: Full TypeScript support
- **Global Imports**: Using TypeScript path aliases for clean and maintainable imports

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Bitcoin/
│   │   │   ├── BitcoinTracker.tsx
│   │   │   ├── Controls.tsx
│   │   │   ├── TransactionList.tsx
│   │   │   ├── useWebSocket.ts
│   │   │   └── BitcoinTracker.module.scss
│   │   └── WorkSpace/
│   │       ├── Block.tsx
│   │       ├── WorkspaceClient.tsx
│   │       ├── useBlocks.ts
│   │       └── WorkspaceClient.module.scss
│   ├── hooks/
│   │   ├── useBlocksPosition.ts
│   │   └── useBlocksState.ts
│   ├── services/
│   │   └── storage.ts
│   ├── styles/
│   │   ├── base/
│   │   │   └── _reset.scss
│   │   └── variables.scss
│   ├── utils/
│   │   ├── bitcoin.ts
│   │   └── workspace.ts
│   └── types.ts
```

## Code Organization

### Utilities
- `bitcoin.ts`: Bitcoin-related helper functions and constants
  - `formatBTCAmount`: Formats BTC amounts with 8 decimal places
  - `calculateTotalAmount`: Calculates total BTC from transaction outputs
  - `formatAddress`: Formats Bitcoin addresses with ellipsis
  
- `workspace.ts`: Workspace-related utilities
  - `snapToGrid`: Ensures blocks snap to grid
  - `getMaxZIndex`: Manages block layering
  - `WORKSPACE_CONSTANTS`: Configuration constants

### Hooks
- `useBlocksPosition`: Manages block positioning and resizing
- `useBlocksState`: Handles block state (visibility, z-index)
- `useWebSocket`: WebSocket connection management for Bitcoin tracking

### Services
- `storage.ts`: Local storage management for workspace blocks

## Recent Improvements

1. **Code Modularization**
   - Separated business logic into dedicated hooks
   - Extracted reusable utilities
   - Implemented service layer for data persistence

2. **Bitcoin Module Enhancements**
   - Added formatting utilities for BTC amounts and addresses
   - Improved WebSocket connection management
   - Enhanced transaction display

3. **Workspace Module Updates**
   - Improved block positioning with grid snapping
   - Enhanced state management for blocks
   - Added persistence layer for workspace state

4. **Type Safety**
   - Added comprehensive TypeScript interfaces
   - Improved type checking across components

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Technical Stack

- Next.js
- React
- TypeScript
- SCSS Modules
- WebSocket API
- Local Storage API

## Path Aliases

To improve code maintainability and readability, this project uses global imports through TypeScript path aliases instead of relative paths. This approach eliminates the need for complex relative paths (../../) and makes the codebase more maintainable.
