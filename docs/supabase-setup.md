# Supabase setup (to do once the project exists)

1. Create a project at supabase.com. Copy the **Project URL**, **anon key** and the database connection strings (Project Settings -> Database).
2. Fill in `server/.env` (`SUPABASE_URL`, `SUPABASE_ANON_KEY`, `DATABASE_URL`, `DIRECT_URL`) and `client/.env` (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`).
3. Create the tables: `cd server && npx prisma migrate dev --name init` (this also generates the Prisma client).
4. In Supabase -> Authentication, decide whether "Confirm email" is on. With it on, newly registered users must click the email link before they can log in (the register page shows a message for this case).
5. Test the whole flow: register, log in, open **Profile**. It should say "API recognised you".

## Local Supabase (optional, no shared online database needed)

```bash
npm install supabase --save-dev   # or install the Supabase CLI globally
npx supabase init                 # creates the supabase/ folder, commit it
npx supabase start                # prints the local URL, anon key and DB URL
```

Switch between local and online by changing only the keys in the `.env` files.
