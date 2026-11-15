const { createClient } = require('@supabase/supabase-js');
const config = require('../config');

let client;

/** Lazily created so the app (and tests) can start without Supabase keys. */
function getSupabase() {
  if (!client) {
    if (!config.supabaseUrl || !config.supabaseAnonKey) {
      throw new Error('SUPABASE_URL and SUPABASE_ANON_KEY must be set in .env');
    }
    client = createClient(config.supabaseUrl, config.supabaseAnonKey);
  }
  return client;
}

/**
 * Checks an access token with Supabase Auth.
 * Returns { id, email } for a valid token, or null.
 */
async function verifySupabaseToken(token) {
  const { data, error } = await getSupabase().auth.getUser(token);
  if (error || !data?.user) return null;
  return { id: data.user.id, email: data.user.email };
}

module.exports = { getSupabase, verifySupabaseToken };
