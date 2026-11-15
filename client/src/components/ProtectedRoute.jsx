import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

/** Renders the nested routes only for logged-in users; others go to /login. */
export default function ProtectedRoute() {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) return <p className="p-8 text-gray-500">Loading…</p>
  if (!user) return <Navigate to="/login" replace state={{ from: location }} />
  return <Outlet />
}
