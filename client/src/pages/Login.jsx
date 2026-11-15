import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { isSupabaseConfigured } from '../lib/supabase'
import { Field, FormCard } from '../components/AuthForm'

export default function Login() {
  const { user, signIn } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/foods'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  if (user) return <Navigate to={from} replace />

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (!isSupabaseConfigured) return setError('Supabase is not configured yet (see client/.env.example).')

    setBusy(true)
    const { error: err } = await signIn(email, password)
    setBusy(false)

    if (err) return setError(err.message)
    navigate(from, { replace: true })
  }

  return (
    <FormCard title="Log in" error={error}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field label="Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
        <Field label="Password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
        <button disabled={busy} className="w-full rounded-md bg-green-700 py-2 font-medium text-white hover:bg-green-800 disabled:opacity-60">
          {busy ? 'Logging in…' : 'Log in'}
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        No account yet? <Link to="/register" className="text-green-700 hover:underline">Register</Link>
      </p>
    </FormCard>
  )
}
