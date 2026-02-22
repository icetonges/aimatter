import type { Metadata } from 'next';
import './globals.css';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: {
    default: 'Budget Matter | How Federal Budget Works',
    template: '%s | Budget Matter',
  },
  description: 'Learn how the U.S. Federal Budget process works — from formulation to execution.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
          <p>Budget Matter &copy; {new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  );
}
