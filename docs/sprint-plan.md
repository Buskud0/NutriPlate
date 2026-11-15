# NutriPlate Web App: Sprint Plan

Web app (React + Express + Prisma + Supabase), developed by Augustas.
Weekly sprints. Backlog: GitHub Issues, board: GitHub Projects, one Milestone per sprint.

## Collaboration decision

Each team member keeps their own repository and stays individually responsible for their own platform (web, desktop, mobile). During a sprint we work together only on the parts all three platforms share:

- the Supabase database schema (Food, Recipe, Ingredient, Tag, NutritionProfile, DailyMealPlan, PlannedRecipe)
- the one-time import of the food data

**Rationale:** all three apps use the same food database and the same domain model. Designing and importing them once avoids three different schemas and three separate imports, and the saved time goes into each platform's own features.

## Priorities

1. Foundation: project, database, authentication (everything else depends on it)
2. Foods: import, browse, search, filter (FR-1)
3. Recipes and nutrition calculation (FR-2, FR-3)
4. Tags (FR-4), nutrition profile (FR-5)
5. Daily meal planner and overview (FR-6, FR-7, FR-8)
6. Persistence and polish throughout (FR-9)

## Sprint 1 (15 Nov to 22 Nov): Setup and authentication

**Goal:** a running skeleton with working login/register connected to Supabase, plus the first diagrams.

| # | Task | Status |
|---|---|---|
| 1 | Project setup: repository, React client and Express API | Done |
| 2 | Supabase and database (Prisma schema) | Schema written; Supabase project and migration open |
| 3 | User authentication: register, login and protected pages | Code written; test with real Supabase open |
| 4 | Architecture and class diagrams (first versions) | Done |
| 5 | Sprint plan and backlog | Done |

## Sprint 2 (22 Nov to 29 Nov): Foods and nutrition core

**Goal:** users can browse and search real food data, and the nutrition calculation is in place.

| # | Task |
|---|---|
| 6 | Food database: choose a data source and import foods |
| 7 | Browse, search and view foods (FR-1) |
| 8 | Nutrition calculation for recipes (FR-3) |
| 9 | Create and view recipes (FR-2, first part) |
| 10 | Sprint review and report |

## Later sprints (rough)

- Sprint 3: edit and delete recipes, tags (FR-2, FR-4)
- Sprint 4: nutrition profile (FR-5)
- Sprint 5: daily meal planner, allergen flagging (FR-6)
- Sprint 6: replace recipes, adjust portions, daily overview (FR-7, FR-8)
- Sprint 7: testing, polish, documentation

## Open questions / difficulties

- Which kind of class diagram does the lecturer expect: the domain (conceptual) diagram, the design (implementation) diagram, or both? Both are in `docs/class-diagrams.md`.
- Prisma schema is not validated yet (needs `npx prisma validate` on a machine with network access to Prisma's engines).
