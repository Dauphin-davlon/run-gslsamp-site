import './globals.css'
import type { Metadata } from 'next'
{/**Change to Poppins font */}
import { Inter } from 'next/font/google'
import Nav from './components/nav'

const inter = Inter({ 
  subsets: ['latin'],
 })

export const metadata: Metadata = {
  title: 'RUN GSLSAMP',
  description: 'RUTGERS NEWARK GSLSAMP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/**applying font Inter to body element */}
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
