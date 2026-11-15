import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { isSupabaseConfigured } from '../lib/supabase'
import { Field, FormCard } from '../components/AuthForm'

export default function Register() {
  const { user, signUp } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const [busy, setBusy] = useState(false)

  if (user) return <Navigate to="/foods" replace />

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (!isSupabaseConfigured) return setError('Supabase is not configured yet (see client/.env.example).')
    if (password.length < 6) return setError('Password must be at least 6 characters.')
    if (password !== confirm) return setError('Passwords do not match.')

    setBusy(true)
    const { data, error: err } = await signUp(email, password)
    setBusy(false)

    if (err) return setError(err.message)
    if (data.session) return navigate('/foods')
    // Email confirmation is enabled in Supabase: no session until the link is clicked
    setNotice('Account created. Check your email to confirm your address, then log in.')
  }

  return (
    <FormCard title="Create account" error={error} notice={notice}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field label="Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
        <Field label="Password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" />
        <Field label="Confirm password" type="password" required value={confirm} onChange={(e) => setConfirm(e.target.value)} autoComplete="new-password" />
        <button disabled={busy} className="w-full rounded-md bg-green-700 py-2 font-medium text-white hover:bg-green-800 disabled:opacity-60">
          {busy ? 'Creating…' : 'Register'}
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        Already have an account? <Link to="/login" className="text-green-700 hover:underline">Log in</Link>
      </p>
    </FormCard>
  )
}
