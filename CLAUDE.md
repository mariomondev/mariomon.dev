# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. It's a single-page application with a section-based layout.

## Architecture

### Component Structure

The application follows a clear component hierarchy:

- `components/ui/` - shadcn/ui components (Button, Card, DropdownMenu, etc.)
- `components/sections/` - Page sections (Header, Hero, About, TechStack, Highlights, Projects, Contact, Footer)
- `components/theme/` - Theme management (ThemeProvider, ModeToggle)
- `lib/` - Utility functions (mainly `cn()` for class merging)

### Page Structure

The homepage ([app/page.tsx](app/page.tsx)) is composed of section components in this order:
1. Header (sticky navigation with theme toggle)
2. HeroSection
3. AboutSection
4. TechStackSection
5. HighlightsSection
6. ProjectsSection
7. ContactSection
8. Footer

### Theme System

**IMPORTANT**: This project uses `next-themes` for theme management. DO NOT implement custom dark mode solutions with localStorage or manual DOM manipulation.

- ThemeProvider wraps the app in [app/layout.tsx](app/layout.tsx)
- ModeToggle component ([components/theme/theme-toggle.tsx](components/theme/theme-toggle.tsx)) provides Light/Dark/System theme options
- Always use the existing `next-themes` implementation when working with themes

### shadcn/ui Configuration

- Style: **New York** (not Default)
- Base color: **neutral**
- CSS variables: enabled
- Icon library: **lucide-react**
- Components are configured in [components.json](components.json)

When adding new shadcn/ui components, they should follow the existing New York style configuration.

### Path Aliases

The project uses `@/` as an alias for the root directory:
- `@/components` → `components/`
- `@/lib` → `lib/`
- `@/app` → `app/`

Always use these aliases for imports instead of relative paths.

### Styling

- Tailwind CSS v4 with CSS variables for theming
- Use the `cn()` utility from `@/lib/utils` to merge Tailwind classes
- Design system uses CSS variables defined in [app/globals.css](app/globals.css) (e.g., `bg-background`, `text-foreground`, `border-border`)

## Development Workflow

### Running the Development Server

The dev server runs on http://localhost:3000 and supports hot reload for instant updates.

### Building for Production

Build command creates an optimized production bundle.

### Linting

ESLint is configured with Next.js recommended settings.
