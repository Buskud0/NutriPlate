/** Temporary page for features planned in later sprints. */
export default function Placeholder({ title, sprint }) {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-bold text-green-700">{title}</h1>
      <p className="text-gray-600">Coming in {sprint}.</p>
    </section>
  )
}
