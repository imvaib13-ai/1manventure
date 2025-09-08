export default function Contact() {
  return (
    <section className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Contact us</h1>
        <p className="mt-3 text-soft">Jalandhar, Mohali, Chandigarh & all India • Online</p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div>
            <p className="font-medium">Phone</p>
            <p className="mt-1"><a href="tel:8558000800" className="underline">8558000800</a></p>
          </div>
          <div>
            <p className="font-medium">Email</p>
            <p className="mt-1"><a href="mailto:contact@1manventure.com" className="underline">contact@1manventure.com</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}
