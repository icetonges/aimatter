'use client'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="hero-section" style={{backgroundImage: 'url(/aimatter/images/portfolio.jpg)'}}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold mb-4">Project Portfolio</h1>
            <p className="text-xl">Real-world applications and analysis</p>
          </div>
        </div>
      </div>

      <main className="flex-grow bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              This page contains information about project portfolio in the federal budget process.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4">Key Information</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Important point about this process
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Key stakeholders involved
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Timeline and deadlines
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Required documentation
                  </li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4">Resources</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    OMB guidance documents
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Congressional procedures
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Historical budget data
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Training materials
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <p className="text-gray-600">
                  Diagram: portfolio-process.png
                  <br />
                  <span className="text-sm">(Add your image to public/images/)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}