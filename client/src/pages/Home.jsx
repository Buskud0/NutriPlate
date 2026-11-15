import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Home() {
  const { user } = useAuth()
  return (
    <section className="text-center">
      <h1 className="mb-3 text-4xl font-bold text-green-700">NutriPlate</h1>
      <p className="mx-auto mb-6 max-w-xl text-gray-600">
        Browse foods, build recipes with automatic nutrition values and plan balanced daily meals that fit your goals.
      </p>
      {user ? (
        <Link to="/foods" className="rounded-md bg-green-700 px-5 py-2.5 font-medium text-white hover:bg-green-800">Browse foods</Link>
      ) : (
        <Link to="/register" className="rounded-md bg-green-700 px-5 py-2.5 font-medium text-white hover:bg-green-800">Get started</Link>
      )}
    </section>
  )
}
