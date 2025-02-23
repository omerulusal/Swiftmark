import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import KartProvider from '@/provider/KartProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SwiftMarket',
  description: 'SwiftMarket',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <KartProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className='flex-grow'>
              {children}
            </main>
            <Footer />
          </div>
        </KartProvider>
      </body>
    </html>
  )
}

/**
 * 
 * 
 */