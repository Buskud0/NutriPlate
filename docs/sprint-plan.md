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

**Goal:** a running skeleton with a working login/register flow connected to Supabase, plus the first diagrams.

- Initialize repository structure
- React client (Vite + Tailwind)
- Express API skeleton
- Supabase project and local setup
- Prisma schema from the class diagram
- Registration, login/logout, protected routes
- API authentication middleware
- Jest setup and first tests
- Sprint plan, architecture diagram, class diagrams (domain + backend design)

**Status (15 Nov):** repo structure, client, API skeleton, Prisma schema, login/register, protected routes, API auth middleware, Jest tests, architecture and class diagrams are done. Still open: creating the Supabase project (online + local), running the first migration, and testing login end to end against real Supabase keys.

## Sprint 2 (22 Nov to 29 Nov): Foods and nutrition core

**Goal:** users can browse and search real food data, and the nutrition calculation is in place.

- Food data source decision and import script
- Foods API: list/search/filter and detail
- Foods page and food detail view
- Nutrition service (totals and per portion) with tests
- Recipes API: create and list, transactional
- Users only see their own data
- Recipe creation form (stretch)
- Sprint review, diagram and report update

## Later sprints (rough)

- Sprint 3: edit and delete recipes, tags (FR-2, FR-4)
- Sprint 4: nutrition profile (FR-5)
- Sprint 5: daily meal planner, allergen flagging (FR-6)
- Sprint 6: replace recipes, adjust portions, daily overview (FR-7, FR-8)
- Sprint 7: testing, polish, documentation

## Open questions / difficulties

(Add during the sprint and bring to class.)
