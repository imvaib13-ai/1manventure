'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-cream border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-xl font-bold">1manventure</Link>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/course/finance-foundations" className="hover:underline">Courses</Link>
            <Link href="/contact" className="hover:underline">Contact us</Link>
            <Link href="/login" className="ml-4 px-4 py-2 border rounded-md">Sign in</Link>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setOpen(v => !v)} className="p-2 rounded-md border">
              Menu
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t">
          <div className="px-4 py-3 space-y-2">
            <Link href="/" className="block">Home</Link>
            <Link href="/course/finance-foundations" className="block">Courses</Link>
            <Link href="/contact" className="block">Contact us</Link>
            <Link href="/login" className="block">Sign in</Link>
          </div>
        </div>
      )}
    </header>
)
}
