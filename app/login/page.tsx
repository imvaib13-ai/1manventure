'use client';
import { supabase } from '../../lib/supabaseClient'

export default function LoginPage() {
  const gotoAuth = () => {
    // Link to Supabase hosted sign-in (or implement client-side)
    window.location.href = '/auth'
  }

  return (
    <section className="min-h-screen">
      <div className="max-w-md mx-auto px-4 py-20">
        <h1 className="text-2xl font-bold">Sign in</h1>
        <p className="mt-3 text-soft">Sign in with Email or continue with Google</p>
        <div className="mt-6">
          <button onClick={gotoAuth} className="px-4 py-2 border rounded-md">Go to sign-in</button>
        </div>
      </div>
    </section>
  )
}
