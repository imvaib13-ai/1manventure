export default function LessonPage({ params }: { params: { id: string } }) {
  // Simple gated placeholder. For real gating, check Supabase session.
  return (
    <section className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Lesson {params.id}</h1>
        <p className="mt-4 text-soft">This is a gated lesson. Sign in to view full content.</p>

        <div className="mt-6 bg-white p-4 border border-border rounded-md">
          <iframe
            width="100%"
            height="360"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&modestbranding=1&rel=0"
            title="Lesson video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
