import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(url && anonKey)

// null until keys are added to client/.env, so the app still loads without Supabase
export const supabase = isSupabaseConfigured ? createClient(url, anonKey) : null
