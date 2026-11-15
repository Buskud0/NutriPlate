import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const links = [
  { to: '/foods', label: 'Foods' },
  { to: '/recipes', label: 'Recipes' },
  { to: '/planner', label: 'Planner' },
  { to: '/profile', label: 'Profile' },
]

export default function Layout() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    await signOut()
    navigate('/login')
  }

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      isActive ? 'bg-green-700 text-white' : 'text-green-900 hover:bg-green-100'
    }`

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b border-green-200 bg-white">
        <nav className="mx-auto flex max-w-5xl items-center gap-2 px-4 py-3">
          <Link to="/" className="mr-4 text-xl font-bold text-green-700">
            NutriPlate
          </Link>
          {user && links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <div className="ml-auto flex items-center gap-3 text-sm">
            {user ? (
              <>
                <span className="hidden text-gray-600 sm:inline">{user.email}</span>
                <button onClick={handleLogout} className="rounded-md border border-green-700 px-3 py-1.5 text-green-700 hover:bg-green-50">
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-green-700 hover:underline">Log in</Link>
                <Link to="/register" className="rounded-md bg-green-700 px-3 py-1.5 text-white hover:bg-green-800">Register</Link>
              </>
            )}
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}
