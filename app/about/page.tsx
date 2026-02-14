'use client'

import Link from 'next/link'
import { BookOpen, ArrowLeft, Info, ExternalLink } from 'lucide-react'

export default function About() {
  const resources = [
    {
      title: 'Office of Management and Budget (OMB)',
      url: 'https://www.whitehouse.gov/omb/',
      description: 'The executive office that assists the President in budget preparation and execution oversight',
    },
    {
      title: 'Congressional Budget Office (CBO)',
      url: 'https://www.cbo.gov/',
      description: 'Nonpartisan agency providing budget and economic analysis to Congress',
    },
    {
      title: 'Government Accountability Office (GAO)',
      url: 'https://www.gao.gov/',
      description: 'Independent agency that audits and evaluates government programs and spending',
    },
    {
      title: 'USA.gov Budget Information',
      url: 'https://www.usa.gov/budget',
      description: 'Official government resource for understanding the federal budget',
    },
    {
      title: 'House Committee on Appropriations',
      url: 'https://appropriations.house.gov/',
      description: 'House committee responsible for funding decisions',
    },
    {
      title: 'Senate Committee on Appropriations',
      url: 'https://www.appropriations.senate.gov/',
      description: 'Senate committee responsible for funding decisions',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <BookOpen className="w-8 h-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">AI Matter</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">
                Home
              </Link>
              <Link href="/formulation" className="text-gray-700 hover:text-primary-600 transition-colors">
                Formulation
              </Link>
              <Link href="/enactment" className="text-gray-700 hover:text-primary-600 transition-colors">
                Enactment
              </Link>
              <Link href="/execution" className="text-gray-700 hover:text-primary-600 transition-colors">
                Execution
              </Link>
              <Link href="/about" className="text-primary-600 font-semibold">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-4">About AI Matter</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Your comprehensive guide to understanding how the U.S. federal government creates, 
            approves, and manages its budget.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start mb-8">
            <Info className="w-8 h-8 text-primary-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AI Matter was created to demystify the federal budget process and make this critical 
                aspect of government more accessible to students, professionals, and interested citizens.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The federal budget process affects every American, yet it can be complex and difficult 
                to understand. We aim to break down the three main phases—Formulation, Enactment, and 
                Execution—into clear, digestible information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What You'll Learn</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Budget Formulation</h3>
              <p className="text-gray-700 text-sm mb-4">
                How federal agencies develop budget requests and how the President creates the annual 
                budget proposal submitted to Congress.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• OMB guidance and timelines</li>
                <li>• Agency budget development</li>
                <li>• Presidential budget submission</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Budget Enactment</h3>
              <p className="text-gray-700 text-sm mb-4">
                How Congress reviews the President's proposal, conducts hearings, and passes the 
                appropriation bills that become law.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Congressional budget process</li>
                <li>• The 12 appropriation bills</li>
                <li>• Authorization vs. appropriation</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Budget Execution</h3>
              <p className="text-gray-700 text-sm mb-4">
                How agencies implement programs, obligate funds, and manage spending according to 
                congressional appropriations.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Apportionment and allotment</li>
                <li>• Obligations and outlays</li>
                <li>• Financial controls and oversight</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Official Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card hover:scale-105 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {resource.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors flex-shrink-0" />
                </div>
                <p className="text-gray-700 text-sm">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Built with Modern Technology</h2>
          <div className="card">
            <p className="text-gray-700 mb-4">
              This site is built using the latest 2026 web development technologies:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Next.js 15 with App Router</li>
                  <li>• React 19 with Server Components</li>
                  <li>• TypeScript for type safety</li>
                  <li>• Tailwind CSS for styling</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Deployment</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Static site generation</li>
                  <li>• GitHub Pages hosting</li>
                  <li>• Optimized for performance</li>
                  <li>• Mobile-responsive design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card bg-blue-50 border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Disclaimer</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              This website provides educational information about the federal budget process. 
              While we strive for accuracy, budget processes and procedures can change. For official 
              guidance, please consult the resources linked above or contact the relevant federal agency. 
              This site is not affiliated with any government agency.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Learning Today</h2>
          <p className="text-xl text-blue-100 mb-8">
            Explore the three phases of the federal budget process
          </p>
          <Link href="/" className="btn-primary bg-white text-primary-900 hover:bg-blue-50">
            Back to Home
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 AI Matter. Built with Next.js 15 and React 19.</p>
        </div>
      </footer>
    </div>
  )
}
