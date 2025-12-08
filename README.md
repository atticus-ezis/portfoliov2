# Portfolio Website

A modern, interactive portfolio website built with React, TypeScript, and Vite. Features WebGL-powered background animations, smooth transitions, and a responsive design.

## Features

- **Interactive WebGL Background** - Custom animated threads with mouse interaction
- **Responsive Design** - Fully responsive layout that works on all devices
- **Dark/Light Theme** - Theme toggle with persistent preferences
- **Smooth Animations** - Framer Motion powered transitions and scroll animations
- **Modern UI Components** - Built with shadcn/ui and Tailwind CSS
- **Sections**:
  - Hero section with profile
  - Skills showcase
  - Work experience timeline
  - Featured projects with links
  - Blog section
  - Contact form

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Animations**: Framer Motion
- **WebGL**: OGL
- **Routing**: React Router
- **Icons**: Lucide React, React Icons

## Getting Started

### Prerequisites

- Node.js 18+ (or Bun)
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# or with bun
bun install
```

### Development

```bash
# Start development server
npm run dev

# or with bun
bun run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/     # React components
│   ├── ui/        # shadcn/ui components
│   └── ...        # Feature components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── assets/        # Static assets
```

## License

Private project - All rights reserved
