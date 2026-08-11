# Architecture Overview — Todo List App

## Scope and shape

Todo List App is a fullstack single-page web app. The product needs a browser UI, an HTTP API, and PostgreSQL persistence because todos must survive refreshes and new browser sessions without login.

This document covers the foundation only: stack, repository layout, runtime conventions, environment variables, and build gates. Detailed table design and API contracts are intentionally deferred to the ERD and service design tasks.

## Tech stack

- Frontend: Next.js 15 App Router, React 19, TypeScript, Tailwind CSS v3, ESLint.
- Backend: Go 1.22 HTTP server.
- Database: PostgreSQL 16.
- Local runtime: `docker compose --profile local up --build` from the repository root.
- CI: GitHub Actions in `.github/workflows/ci.yml` for backend build/vet/test, frontend lint/build/test, and Compose config validation.

## Repository layout

```text
code/
  backend/
    cmd/api/main.go          # one Go main package and HTTP server entry point
    migrations/              # ordered SQL migrations applied on boot
    go.mod                   # backend module
    .env.example             # backend environment contract
    Dockerfile               # committed container build contract
  frontend/
    app/                     # Next.js App Router routes and global CSS
    public/                  # optional static assets
    package.json             # pinned frontend dependencies and scripts
    package-lock.json        # npm ci lock file
    .env.example             # frontend public environment contract
    Dockerfile               # committed standalone Next.js container build contract
docs/
  architecture/overview.md   # this document
```

The frontend must remain at `code/frontend/` and the backend at `code/backend/` because the committed container and Compose files build those exact contexts.

## Runtime and data flow

1. The browser loads the Next.js app from the frontend container.
2. Client-side todo components call the backend API through `NEXT_PUBLIC_API_URL`.
3. The Go backend reads `DATABASE_URL`, applies pending migrations from `code/backend/migrations/`, verifies PostgreSQL with `SELECT 1`, and then reports healthy at `/healthz`.
4. PostgreSQL stores todo data. With no login, all visitors share the same todo list.

The scaffold does not implement product endpoints yet. Later stories add todo handlers behind the same server, database connection, migration mechanism, and environment contract.

## Environment variables

### Root `.env.example`

- `POSTGRES_USER`: local Compose PostgreSQL user.
- `POSTGRES_PASSWORD`: local Compose PostgreSQL password.
- `POSTGRES_DB`: local Compose PostgreSQL database name.
- `BACKEND_PORT`: host port for the backend container.
- `FRONTEND_PORT`: host port for the frontend container.
- `NEXT_PUBLIC_API_URL`: browser-visible backend URL used by the frontend build.

### Backend `code/backend/.env.example`

- `DATABASE_URL`: PostgreSQL connection string injected by runtime or Compose.
- `PORT`: preferred HTTP port.
- `APP_PORT`: fallback HTTP port when `PORT` is unset.

### Frontend `code/frontend/.env.example`

- `NEXT_PUBLIC_API_URL`: browser-visible backend base URL.

No secrets are committed. Example files list key names and comments only.

## Naming and coding conventions

- Go packages use lowercase names. The backend module contains exactly one `main` package under `cmd/api`.
- Backend startup must fail fast if `DATABASE_URL` is missing or migrations cannot complete.
- Migration files are timestamped and applied in lexicographic order. Each `.up.sql` has a matching `.down.sql`.
- React component files use `export default function ComponentName()`.
- `app/page.tsx` stays a Server Component. Any component using events, state, effects, refs, or browser APIs must begin with the literal first line `"use client"`.
- Shared visual tokens and reusable utility classes live in `app/globals.css`; story-specific components should not redefine global design tokens.
- Tailwind uses the approved design colors: primary `#2563EB`, background `#F9FAFB`, surface `#FFFFFF`, accent `#10B981`, danger `#EF4444`.

## Build and run

Local development with containers:

```bash
docker compose --profile local up --build
```

Backend checks:

```bash
cd code/backend
go build ./...
go vet ./...
go test ./...
```

Frontend checks:

```bash
cd code/frontend
npm ci
npm run lint
npm run build
npm test --if-present
```

## Key decisions and tradeoffs

### Fullstack shape with PostgreSQL

Decision: Build frontend, backend, and database from the start.

Rejected alternative: Store todos only in browser local storage. That would be simpler, but it would not meet the SRS requirement that tasks persist across sessions as database-backed persisted data.

Tradeoff: PostgreSQL and a backend add operational overhead, but they satisfy the explicit persistence requirement and create a stable foundation for later API contracts.

### Self-migrating backend startup

Decision: The Go server applies pending SQL migrations before listening and only reports `/healthz` after migration success and a live `SELECT 1`.

Rejected alternative: Apply migrations manually outside the app. That is fragile in this runtime because the project database starts empty and no separate migration runner is guaranteed.

Tradeoff: Startup is slightly more complex, but deployment and local boot become deterministic.

### Next.js App Router with strict server/client boundaries

Decision: Use Next.js App Router and keep `app/page.tsx` server-rendered while interactive todo UI is added later in explicit client components.

Rejected alternative: Make every page a client component. That would avoid boundary mistakes but lose the default server rendering model and encourage unnecessary browser-side code.

Tradeoff: Developers must respect the `"use client"` rule, but the structure remains aligned with Next.js conventions.

### Keep committed container files compatible

Decision: Preserve the established `code/backend/` and `code/frontend/` build contexts and standalone Next.js output.

Rejected alternative: Move services or rewrite Docker/Compose conventions for this project. That would risk breaking the orchestrator-provided runtime assumptions.

Tradeoff: The layout is fixed, but predictable CI and deployment are more valuable than project-specific container preferences.

## Risks and unknowns

- The SRS assumes all visitors share the same todo list because there is no login. Private lists require new authentication and ownership scope.
- Delete confirmation remains an open product question with the current default of no confirmation.
- Detailed indexes, endpoint names, and todo table columns belong in the ERD and service design tasks.
