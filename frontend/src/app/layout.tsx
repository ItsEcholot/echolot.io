import type { Metadata } from 'next'
import Navbar from '@/components/navbar/navbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Echolot.io',
  description: 'Personal webpage of Marc Berchtold',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
