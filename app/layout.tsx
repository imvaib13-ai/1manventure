import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: '1manventure',
  description: 'Course site - 1manventure',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cream text-dark">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
