import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { apiFetch } from '../lib/api'

/** For now: proves the token flow works end to end (browser -> Express -> Supabase). */
export default function Profile() {
  const { user } = useAuth()
  const [apiUser, setApiUser] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    apiFetch('/me').then(setApiUser).catch((e) => setError(e.message))
  }, [])

  return (
    <section>
      <h1 className="mb-2 text-2xl font-bold text-green-700">Profile</h1>
      <p className="mb-4 text-gray-700">Logged in as {user.email}</p>
      <div className="rounded-md border border-gray-200 bg-white p-4 text-sm">
        <h2 className="mb-1 font-semibold">API connection check</h2>
        {error && <p className="text-red-700">API error: {error}</p>}
        {apiUser && <p className="text-green-800">API recognised you (id {apiUser.id}).</p>}
        {!error && !apiUser && <p className="text-gray-500">Checking…</p>}
      </div>
      <p className="mt-4 text-gray-500">The nutrition profile form (targets, allergies) comes in a later sprint.</p>
    </section>
  )
}
