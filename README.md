# Workspace App

A Next.js web application that combines an interactive workspace with a real-time Bitcoin transaction tracker.

## Features

### Workspace
- Interactive workspace with block creation functionality
- Drag and resize capabilities for blocks
- Block state persistence
- Responsive design for various screen sizes

### Bitcoin Tracker
- Real-time Bitcoin transaction monitoring
- Transaction details display (sender, receiver, amount)
- Start/Stop tracking controls
- Automatic conversion from satoshi to BTC

## Technologies

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: SCSS Modules
- **WebSocket**: Blockchain.info API
- **State Management**: React Hooks
- **Components**: Server & Client Components

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Bitcoin/       # Bitcoin tracker components
│   │   └── WorkSpace/     # Workspace components
│   ├── bitcoin/          # Bitcoin tracker page
│   ├── workspace/        # Workspace page
│   ├── styles/          # Global styles and variables
│   └── layout.tsx       # Main app layout
```

## Installation and Setup

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Implementation Details

- Utilization of Next.js Server and Client Components
- WebSocket implementation for Bitcoin transactions
- Responsive design using SCSS variables
- SEO optimization through metadata

