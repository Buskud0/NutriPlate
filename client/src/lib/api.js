import { supabase } from './supabase'

/** fetch() wrapper that sends the Supabase access token to the Express API. */
export async function apiFetch(path, options = {}) {
  const headers = { 'Content-Type': 'application/json', ...options.headers }

  if (supabase) {
    const { data } = await supabase.auth.getSession()
    if (data.session) headers.Authorization = `Bearer ${data.session.access_token}`
  }

  const res = await fetch(`/api${path}`, { ...options, headers })
  const body = await res.json().catch(() => null)
  if (!res.ok) throw new Error(body?.error || `Request failed (${res.status})`)
  return body
}
