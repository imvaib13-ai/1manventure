import Link from 'next/link'

export default function CoursePage({ params }: { params: { slug: string } }) {
  const lessons = [
    { id: '1', title: 'Intro to Markets' },
    { id: '2', title: 'Intraday Trading Basics' },
    { id: '3', title: 'Risk Psychology' },
  ]

  return (
    <section className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold">Finance Foundations</h1>
        <p className="mt-3 text-soft">A short, focused course to learn the essentials quickly.</p>

        <div className="mt-8 space-y-4">
          {lessons.map(l => (
            <div key={l.id} className="p-4 border border-border rounded-md flex items-center justify-between bg-white">
              <div>
                <div className="font-medium">{l.title}</div>
                <div className="text-sm text-soft">10–20 minute lesson</div>
              </div>
              <Link href={`/lesson/${l.id}`} className="px-3 py-2 border rounded-md">Open</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
