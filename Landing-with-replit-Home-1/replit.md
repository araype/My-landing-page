# Overview

This is a modern full-stack web application built with React (Vite), Express.js, and PostgreSQL. The project appears to be for "La Mezcladora home" - a platform for modular home construction planning that helps users design and visualize expandable housing solutions. The application features a multi-section landing page with 3D visualizations, partner information, and an interactive workflow for home planning.

The stack is configured with shadcn/ui components for the frontend, Drizzle ORM for database operations, and a clean separation between client and server code.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework Choice: React with Vite**
- **Problem**: Need for fast development with modern tooling and hot module replacement
- **Solution**: Vite + React for instant server start and lightning-fast HMR
- **Pros**: Excellent DX, fast builds, native ESM support
- **Cons**: Requires modern browser support

**UI Component System: shadcn/ui with Radix UI**
- **Problem**: Need for accessible, customizable components without bloat
- **Solution**: shadcn/ui (copy-paste components) built on Radix UI primitives
- **Rationale**: Full control over component code, no package lock-in, excellent accessibility
- **Style**: "new-york" variant with CSS variables for theming

**Styling: Tailwind CSS**
- **Configuration**: Custom design tokens using HSL color system
- **Prefix**: None (default Tailwind classes)
- **CSS Variables**: Enabled for dynamic theming
- **Base Color**: Neutral

**State Management: TanStack Query (React Query)**
- **Problem**: Server state synchronization and caching
- **Solution**: React Query v5 for data fetching and cache management
- **Configuration**: Infinite stale time, no automatic refetching, credential-based requests

**Routing: Wouter**
- **Problem**: Need lightweight client-side routing
- **Solution**: Wouter (minimalist alternative to React Router)
- **Rationale**: Simple API, small bundle size

**Animation: Framer Motion**
- **Usage**: Page section animations (fade-in, slide-in effects)
- **Implementation**: Motion components with viewport-based triggers for scroll animations

## Backend Architecture

**Framework: Express.js**
- **Runtime**: Node.js with native ESM modules
- **Entry Point**: `server/index.ts`
- **Middleware Stack**:
  - JSON body parser
  - URL-encoded form parser
  - Request logging middleware with timing
  - Global error handler

**Development Setup**
- **Hot Reload**: tsx for TypeScript execution in development
- **Production Build**: esbuild for bundling server code
- **Vite Integration**: Development middleware mode for SSR-style serving

**API Design Pattern**
- **Convention**: All API routes prefixed with `/api`
- **Logging**: Automatic request/response logging with duration tracking
- **Error Handling**: Centralized error middleware with status code normalization

**Storage Layer Abstraction**
- **Pattern**: Storage interface (`IStorage`) with swappable implementations
- **Current Implementation**: `MemStorage` (in-memory)
- **Design**: Prepared for database migration (Drizzle ORM configured)
- **Methods**: User CRUD operations (getUser, getUserByUsername, createUser)

## Data Storage

**ORM: Drizzle**
- **Dialect**: PostgreSQL
- **Driver**: @neondatabase/serverless (prepared for Neon/serverless Postgres)
- **Schema Location**: `shared/schema.ts` (accessible to both client and server)
- **Migration Strategy**: Push-based (`db:push` script)

**Database Schema**
- **Users Table**:
  - `id`: UUID primary key with auto-generation
  - `username`: Unique text field
  - `password`: Text field (hashed storage assumed)
  
**Type Safety**
- **Schema Validation**: drizzle-zod for runtime type checking
- **Type Inference**: Automatic TypeScript types from schema
- **Shared Types**: InsertUser and User types available across stack

**Session Management**
- **Package**: connect-pg-simple (PostgreSQL session store)
- **Implication**: Cookie-based sessions with server-side storage

## Path Aliases

**TypeScript Configuration**
- `@/*` → `client/src/*` (frontend code)
- `@shared/*` → `shared/*` (shared types/schemas)
- **Vite Aliases**: Also includes `@assets` for attached assets

## Build & Deployment

**Development**
- Command: `npm run dev`
- Uses tsx for TypeScript execution
- Vite dev server with middleware mode

**Production Build**
- Frontend: Vite build → `dist/public`
- Backend: esbuild bundle → `dist/index.js`
- Output: ESM format, external packages, Node platform target

**Type Checking**
- Separate `npm run check` command
- No emit (type checking only)
- Incremental compilation with build info cache

# External Dependencies

## Database
- **PostgreSQL**: Primary database (via Neon serverless driver)
- **Connection**: Environment variable `DATABASE_URL` required
- **ORM**: Drizzle ORM v0.39.1
- **Schema Validation**: drizzle-zod

## UI Component Libraries
- **Radix UI**: Complete suite of accessible primitives (accordion, dialog, dropdown, select, tabs, toast, etc.)
- **shadcn/ui**: Component architecture and theming system
- **Icons**: lucide-react for iconography

## Styling & Animation
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: With autoprefixer
- **Framer Motion**: Animation library for React
- **class-variance-authority**: Component variant management
- **clsx** & **tailwind-merge**: Conditional class handling

## Form Handling
- **React Hook Form**: Implicit dependency via @hookform/resolvers
- **Zod**: Schema validation (via drizzle-zod)

## Development Tools
- **Replit Plugins**: 
  - Runtime error modal overlay
  - Cartographer (development mode only)
  - Dev banner (development mode only)
- **Source Maps**: @jridgewell/trace-mapping for debugging

## Carousel
- **embla-carousel-react**: Touch-friendly carousel component

## Utilities
- **date-fns**: Date manipulation
- **nanoid**: Unique ID generation
- **cmdk**: Command menu component (⌘K pattern)

## Fonts
- **Google Fonts**: 
  - Architects Daughter
  - DM Sans
  - Fira Code
  - Geist Mono
  - Instrument Sans
  - Inter