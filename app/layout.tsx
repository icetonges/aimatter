import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Matter - Federal Budget Process',
  description: 'Understanding the Federal Budget Process: Formulation, Enactment, and Execution',
  keywords: 'federal budget, budget process, government, appropriations, congress, OMB',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
