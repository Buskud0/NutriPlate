# NutriPlate: Web App

Web version of the NutriPlate food, recipe and daily meal planning system (university software engineering project).
Desktop (.NET MAUI) and mobile (Android) versions are developed in separate repositories by teammates; all three platforms share the same Supabase data model.

**Stack:** React (Vite) + Tailwind CSS, Node.js + Express REST API, Prisma, Supabase (PostgreSQL + Auth), Jest.

```
client/   React frontend (Vite, Tailwind, React Router, Supabase Auth)
server/   Express API (routes, controllers, services, middleware) + Prisma schema
docs/     sprint plan, architecture and class diagrams
```

## Getting started

Requirements: Node.js 20+ and npm. Supabase keys are only needed for login/registration and database access (see [docs/supabase-setup.md](docs/supabase-setup.md)).

```bash
# API (http://localhost:3001)
cd server
cp .env.example .env      # fill in Supabase values when available
npm install
npm run dev
npm test

# Client (http://localhost:5173), in a second terminal
cd client
cp .env.example .env
npm install
npm run dev
```

The client proxies `/api` to the Express server during development. Without Supabase keys the app still starts; the login and register forms show a "not configured" message.

## Documentation

- [Sprint plan](docs/sprint-plan.md)
- [System architecture](docs/architecture.md)
- [Class diagrams](docs/class-diagrams.md)
- Backlog: GitHub Issues, one milestone per weekly sprint
