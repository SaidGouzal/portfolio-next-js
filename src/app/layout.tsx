import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Said Gouzal',
  description: "Said Gouzal's Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">{children}</body>
    </html>
  )
}
