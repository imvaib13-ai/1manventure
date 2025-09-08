'use client';
import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import Link from 'next/link'

export default function Home() {
  const [email, setEmail] = useState('')
  const [sending, setSending] = useState(false)

  const join = async (e: React.FormEvent) => {
    e.preventDefault()
    if(!email) return
    setSending(true)
    await supabase.from('waitlist').insert({ email }).catch(()=>{})
    setSending(false)
    alert('Thanks — you are added to the waitlist!')
    setEmail('')
  }

  return (
    <section className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-extrabold">1manventure</h1>
            <p className="mt-4 text-soft text-lg">Master practical finance and trading — step-by-step lessons and templates.</p>
            <form onSubmit={join} className="mt-6 flex gap-3">
              <input
                className="px-4 py-3 border border-border rounded-md w-72 bg-white"
                placeholder="Your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
              <button className="px-5 py-3 bg-dark text-white rounded-md" disabled={sending}>
                {sending ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
            <div className="mt-6 text-sm text-soft">
              <p>Trusted by learners across India — start with a free preview lesson.</p>
            </div>
          </div>

          <div className="rounded-xl border border-border p-6 bg-white">
            <h3 className="font-bold">Course Preview</h3>
            <p className="mt-3 text-soft">Finance Foundations — 3 modules to get you started quickly.</p>
            <Link href="/course/finance-foundations" className="inline-block mt-4 px-4 py-2 border rounded-md">Preview course</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
