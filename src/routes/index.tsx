import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
   <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800 space-y-2 text-center">
  <h1 className="text-3xl font-extrabold tracking-tight text-amber-500 sm:text-5xl">
    Welcome to Kissena Baked Goods
  </h1>
  <h2 className="text-xl font-medium text-amber-400">
    Financial Statements
  </h2>
</div>
  )
}
