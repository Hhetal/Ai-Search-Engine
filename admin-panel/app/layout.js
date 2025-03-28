import { Inter } from 'next/font/google'
import './ui/globals.css'

const inter = Inter({ subsets: ['cyrillic'] })

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
