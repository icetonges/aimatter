'use client'

import Link from 'next/link'
import { BookOpen, ArrowLeft, FileText, Calendar, Users, CheckCircle } from 'lucide-react'

export default function Formulation() {
  const steps = [
    {
      title: 'Planning & Guidance',
      description: 'OMB issues budget guidance to federal agencies with strategic priorities and fiscal constraints',
      icon: <FileText className="w-6 h-6" />,
      timeline: 'Spring (18 months before fiscal year)',
    },
    {
      title: 'Agency Budget Development',
      description: 'Federal agencies develop detailed budget requests aligned with OMB guidance and agency priorities',
      icon: <Users className="w-6 h-6" />,
      timeline: 'Summer-Fall',
    },
    {
      title: 'Internal Review',
      description: 'Agency leadership reviews and approves internal budget submissions before OMB submission',
      icon: <CheckCircle className="w-6 h-6" />,
      timeline: 'Early Fall',
    },
    {
      title: 'OMB Review',
      description: 'OMB analyzes agency requests, conducts hearings, and makes recommendations to the President',
      icon: <Calendar className="w-6 h-6" />,
      timeline: 'Fall-Winter',
    },
    {
      title: 'Presidential Budget',
      description: 'President submits final budget proposal to Congress, typically in early February',
      icon: <FileText className="w-6 h-6" />,
      timeline: 'February (Year 2)',
    },
  ]

  const keyPlayers = [
    {
      role: 'Office of Management and Budget (OMB)',
      responsibilities: [
        'Issues budget guidance to agencies',
        'Reviews and analyzes agency budget requests',
        'Conducts budget hearings',
        'Prepares final budget for President',
      ],
    },
    {
      role: 'Federal Agencies',
      responsibilities: [
        'Develop detailed budget justifications',
        'Align requests with strategic goals',
        'Submit proposals to OMB',
        'Participate in OMB hearings',
      ],
    },
    {
      role: 'The President',
      responsibilities: [
        'Sets overall budget priorities',
        'Reviews OMB recommendations',
        'Approves final budget submission',
        'Submits budget to Congress',
      ],
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
              <Link href="/formulation" className="text-primary-600 font-semibold">
                Formulation
              </Link>
              <Link href="/enactment" className="text-gray-700 hover:text-primary-600 transition-colors">
                Enactment
              </Link>
              <Link href="/execution" className="text-gray-700 hover:text-primary-600 transition-colors">
                Execution
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-4">Budget Formulation</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            The formulation phase is where federal agencies develop their budget requests and the President 
            creates the annual budget proposal to submit to Congress.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Budget Formulation?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Budget formulation is the first phase of the federal budget process. It begins approximately 
              18 months before the start of the fiscal year and involves extensive planning, analysis, and 
              coordination between federal agencies and the Office of Management and Budget (OMB).
            </p>
            <p className="text-gray-700 leading-relaxed">
              During this phase, agencies must justify their funding requests, align with administration 
              priorities, and demonstrate how resources will achieve strategic objectives. The process 
              culminates in the President's budget submission to Congress, typically in early February.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Formulation Process Steps</h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow card">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {step.timeline}
                    </div>
                  </div>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Players Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Players in Formulation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {keyPlayers.map((player, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{player.role}</h3>
                <ul className="space-y-3">
                  {player.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Documents Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Important Documents</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-3">OMB Circular A-11</h3>
              <p className="text-gray-700 mb-4">
                The comprehensive guide that provides instructions for agencies on preparing and submitting 
                budget requests. It covers format, content, timing, and submission procedures.
              </p>
              <a 
                href="https://www.whitehouse.gov/omb/information-for-agencies/circulars/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Learn More →
              </a>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Budget Justification</h3>
              <p className="text-gray-700 mb-4">
                Detailed documents prepared by agencies explaining their budget requests, including program 
                descriptions, performance metrics, and justifications for funding levels.
              </p>
              <p className="text-gray-600 text-sm">
                These documents become public after the President submits the budget to Congress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">What Happens Next?</h2>
          <p className="text-xl text-blue-100 mb-8">
            After formulation is complete and the President submits the budget to Congress, 
            the process moves to the Enactment phase.
          </p>
          <Link href="/enactment" className="btn-primary bg-white text-blue-900 hover:bg-blue-50">
            Explore Enactment Phase →
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
