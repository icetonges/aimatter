import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/react'; // Added import

export const metadata: Metadata = {
  title: 'Budget Matter | How Federal Budget Works',
  description: 'How Federal budget is planned, formulated, executed, and reported.',
  keywords: 'federal budget, budget process, budget laws, portfolio, projects, tableau, data analysis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics /> {/* Added component */}
      </body>
    </html>
  )
}