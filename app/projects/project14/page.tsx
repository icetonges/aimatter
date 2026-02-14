'use client'

import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function project14() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/portfolio" className="text-blue-600 hover:underline mb-8 inline-block">
            ← Back to Portfolio
          </Link>
          
          <h1 className="text-4xl font-bold mb-4">Budget Execution Tracking</h1>
          <p className="text-xl text-gray-600 mb-8">Tableau dashboard for execution comparison</p>

          <div className="mb-12">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center p-4">
                <p className="text-gray-500 mb-2">Project Screenshot</p>
                <p className="text-sm text-gray-400">Add to: public/images/project14/</p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Detailed project information, methodology, and results will be displayed here.
              Copy content from your original project14 project page.
            </p>

            <h3 className="text-xl font-bold mb-4 mt-8">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Tool 1</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Tool 2</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Tool 3</span>
            </div>

            <h3 className="text-xl font-bold mb-4">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold mb-2">Feature 1</h4>
                <p className="text-gray-600 text-sm">Description of main feature</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold mb-2">Feature 2</h4>
                <p className="text-gray-600 text-sm">Description of key capability</p>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4">Results & Impact</h3>
            <p className="text-gray-700 mb-4">
              Project outcomes and insights gained from this analysis.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}