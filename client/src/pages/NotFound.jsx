import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-bold text-green-700">Page not found</h1>
      <Link to="/" className="text-green-700 hover:underline">Back to home</Link>
    </section>
  )
}
