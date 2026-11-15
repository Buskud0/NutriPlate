export function Field({ label, ...props }) {
  return (
    <label className="block text-sm font-medium text-gray-700">
      {label}
      <input
        {...props}
        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
      />
    </label>
  )
}

export function FormCard({ title, error, notice, children }) {
  return (
    <div className="mx-auto max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h1 className="mb-4 text-2xl font-bold text-green-700">{title}</h1>
      {error && <p role="alert" className="mb-4 rounded bg-red-50 p-3 text-sm text-red-700">{error}</p>}
      {notice && <p className="mb-4 rounded bg-green-50 p-3 text-sm text-green-800">{notice}</p>}
      {children}
    </div>
  )
}
