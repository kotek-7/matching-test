# Project Overview

This project uses the following stack:

## Core Technologies
- **Language**: TypeScript 5+
- **Package Manager**: bun 1.2.21 (for development)
- **Module System**: ESM modules

## Runtime Environments
- **Backend**: Cloudflare Workers (via Hono framework)
- **Frontend**: Next.js 15.4.6 with React 19.1.0 (deployed on Cloudflare via OpenNext)

## Build Configuration
- **TypeScript**: Version 5+ with strict configuration
- **Output**: ESM modules with `.ts` extensions for deno compatibility
- **Deployment**: Cloudflare Workers for backend, Cloudflare for frontend

## Project Structure
- **Workspace**: Monorepo with packages/backend (Hono) and packages/frontend (Next.js)
- **Architecture**: Function-based approach over classes
- **Naming**: lowerCamelCase for file naming

## Frameworks & Libraries
- **Backend**: Hono 4.9.5 for Cloudflare Workers
- **Frontend**: Next.js 15.4.6 + React 19.1.0 + Tailwind CSS 4
- **Deployment**: OpenNext for Cloudflare, Wrangler for Workers

## Code Quality
- **Linter**: oxlint with strict rules (max depth: 10, max lines per function: 20)
- **Formatter**: Biome with 2-space indentation, 120 character line width
- **Import Organization**: Automated via Biome
- **Type Checking**: TypeScript strict mode across all packages

## Error Handling
- **Strategy**: neverthrow for Result types (no exceptions policy)
- **Implementation**: Used across backend and frontend packages

## Testing
- **Framework**: Vitest 3.2.3 with V8 coverage
- **Location**: `src/*.test.ts` for `src/*.ts` or `test/*.test.ts`
- **Coverage**: V8 coverage reports available

## Development Rules
- Use functions and function scope instead of classes
- Add `.ts` extension to imports for deno compatibility
- Export function matching filename, keep everything else private
- No exceptions - use Result types for error handling

---

*This project was bootstrapped from [ts-guide](https://github.com/mizchi/ts-guide) and ejected on 2025-09-02.*