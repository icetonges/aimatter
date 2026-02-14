'use client'

import Link from 'next/link'
import { BookOpen, ArrowLeft, Scale, FileCheck, Gavel, Calendar } from 'lucide-react'

export default function Enactment() {
  const congressionalSteps = [
    {
      title: 'Budget Resolution',
      description: 'Congress develops a budget resolution setting overall spending and revenue targets',
      timeline: 'April-May',
    },
    {
      title: 'Authorization',
      description: 'Authorizing committees establish programs and set maximum funding levels',
      timeline: 'Throughout the year',
    },
    {
      title: 'Appropriations',
      description: 'Appropriations committees draft and consider 12 annual appropriation bills',
      timeline: 'May-September',
    },
    {
      title: 'Committee Markup',
      description: 'Committees review, amend, and vote on appropriation bills',
      timeline: 'Summer',
    },
    {
      title: 'Floor Debate',
      description: 'Full House and Senate debate and vote on appropriation bills',
      timeline: 'Summer-Fall',
    },
    {
      title: 'Conference Committee',
      description: 'House and Senate reconcile differences in their versions of bills',
      timeline: 'Fall',
    },
    {
      title: 'Presidential Action',
      description: 'President signs or vetoes the final appropriation bills',
      timeline: 'Before October 1',
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
              <Link href="/enactment" className="text-primary-600 font-semibold">
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
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-green-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-4">Budget Enactment</h1>
          <p className="text-xl text-green-100 max-w-3xl">
            The enactment phase is when Congress reviews the President's budget proposal, conducts hearings, 
            and passes appropriation bills that become law.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Budget Enactment?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Budget enactment is the legislative phase where Congress exercises its constitutional power 
              of the purse. After receiving the President's budget proposal in February, Congress conducts 
              its own budget process, which may result in significantly different funding priorities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Constitution requires that all appropriation bills originate in the House of Representatives. 
              Both chambers must pass identical versions of each appropriation bill, which are then sent to 
              the President for signature. The goal is to complete this process before October 1, the start 
              of the new fiscal year.
            </p>
          </div>
        </div>
      </section>

      {/* Congressional Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Congressional Budget Process</h2>
          <div className="space-y-6">
            {congressionalSteps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow card">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {step.timeline}
                    </span>
                  </div>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 Appropriation Bills */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">The 12 Appropriation Bills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Agriculture',
              'Commerce-Justice-Science',
              'Defense',
              'Energy-Water',
              'Financial Services',
              'Homeland Security',
              'Interior-Environment',
              'Labor-HHS-Education',
              'Legislative Branch',
              'Military Construction-VA',
              'State-Foreign Operations',
              'Transportation-HUD',
            ].map((bill, index) => (
              <div key={index} className="card hover:scale-105 transition-transform">
                <div className="flex items-center mb-2">
                  <FileCheck className="w-5 h-5 text-green-600 mr-2" />
                  <h3 className="font-bold text-gray-900">{bill}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 card bg-yellow-50 border-yellow-200">
            <div className="flex items-start">
              <Calendar className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Continuing Resolutions (CRs)</h4>
                <p className="text-gray-700 text-sm">
                  If Congress cannot pass all 12 bills by October 1, it may pass a Continuing Resolution 
                  to temporarily fund the government at prior year levels until final appropriations are enacted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Committees */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Congressional Committees</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <Scale className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Budget Committees</h3>
              <p className="text-gray-700 mb-4">
                House and Senate Budget Committees develop the budget resolution, which sets overall spending 
                and revenue targets but does not become law.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Set discretionary spending limits</li>
                <li>• Establish revenue assumptions</li>
                <li>• Provide reconciliation instructions</li>
              </ul>
            </div>
            <div className="card">
              <Gavel className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Appropriations Committees</h3>
              <p className="text-gray-700 mb-4">
                House and Senate Appropriations Committees draft and consider the 12 annual appropriation 
                bills that provide specific funding for federal agencies.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Allocate specific dollar amounts</li>
                <li>• Conduct oversight hearings</li>
                <li>• Add report language and directives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">What Happens Next?</h2>
          <p className="text-xl text-green-100 mb-8">
            Once appropriation bills are enacted, federal agencies begin the execution phase, 
            implementing programs and spending the appropriated funds.
          </p>
          <Link href="/execution" className="btn-primary bg-white text-green-900 hover:bg-green-50">
            Explore Execution Phase →
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
