export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-start justify-between gap-6">
        <div>
          <h3 className="font-bold">1manventure</h3>
          <p className="mt-2 text-sm text-soft">Jalandhar, Mohali, Chandigarh & all India • Online</p>
        </div>

        <div className="text-sm">
          <p>Phone: <a href="tel:8558000800" className="underline">8558000800</a></p>
          <p className="mt-1">Email: <a href="mailto:contact@1manventure.com" className="underline">contact@1manventure.com</a></p>
        </div>

        <div className="text-sm text-soft">
          <p>© {new Date().getFullYear()} 1manventure</p>
        </div>
      </div>
    </footer>
  )
}
