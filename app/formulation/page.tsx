/*
 * UNIVERSAL PAGE TEMPLATE
 * Copy this for each page you need to create
 * 
 * HOW TO USE:
 * 1. Copy this file to app/[pagename]/page.tsx
 * 2. Change "PageName" to your page name
 * 3. Update the hero image path
 * 4. Paste your HTML content in the marked section
 * 5. Convert HTML to JSX (class → className, etc.)
 */

'use client'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function PageName() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div className="hero-section" style={{backgroundImage: 'url(/aimatter/images/YOUR_IMAGE.jpg)'}}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold mb-4">Page Title</h1>
            <p className="text-xl">Page subtitle or description</p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* ============================================
              PASTE YOUR CONTENT HERE
              ============================================ */}
          
          <h2 className="text-4xl font-bold mb-8">Section Title</h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Your content goes here. Copy from your original HTML file.
            </p>
          </div>

          {/* Images example */}
          <div className="my-8">
            <img 
              src="/aimatter/images/your-diagram.png" 
              alt="Description" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Cards/Grid example */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="card">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Card Title</h3>
                <p className="text-gray-600">Card content</p>
              </div>
            </div>
            {/* Add more cards as needed */}
          </div>

          {/* ============================================
              END CONTENT SECTION
              ============================================ */}
          
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
