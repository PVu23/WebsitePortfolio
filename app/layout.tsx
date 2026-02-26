import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Phillip Lam Vu | Full Stack Developer',
  description: 'Portfolio of Phillip Lam Vu, a full stack developer building reliable and scalable web applications.',
  keywords: ['portfolio', 'developer', 'full stack', 'react', 'nodejs', 'web development'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
