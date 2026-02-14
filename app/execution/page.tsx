'use client'

import Link from 'next/link'
import { BookOpen, ArrowLeft, DollarSign, TrendingUp, AlertCircle, Shield } from 'lucide-react'

export default function Execution() {
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
              <Link href="/execution" className="text-primary-600 font-semibold">
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
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-purple-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-4">Budget Execution</h1>
          <p className="text-xl text-purple-100 max-w-3xl">
            The execution phase is when federal agencies implement programs, obligate funds, and 
            manage spending according to appropriations enacted by Congress.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Budget Execution?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Budget execution begins on October 1, the start of the federal fiscal year. This is when 
              agencies take appropriated funds and convert them into actual programs, services, contracts, 
              and personnel actions that serve the American people.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Agencies must execute their budgets in compliance with appropriations law, agency policies, 
              and OMB guidance. They must also track spending, report on performance, and demonstrate 
              accountability for taxpayer dollars.
            </p>
          </div>
        </div>
      </section>

      {/* Key Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Execution Process Steps</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Apportionment</h3>
              <p className="text-gray-700 mb-4">
                OMB approves the timing and amount of funds agencies can obligate, typically on a 
                quarterly basis. This ensures controlled spending throughout the fiscal year.
              </p>
              <div className="bg-gray-100 p-3 rounded text-sm text-gray-600">
                <strong>Document:</strong> SF-132 Apportionment and Reapportionment Schedule
              </div>
            </div>

            <div className="card">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Allotment</h3>
              <p className="text-gray-700 mb-4">
                Agency leadership distributes apportioned funds to internal offices and programs, 
                establishing spending authority for different organizational units.
              </p>
              <div className="bg-gray-100 p-3 rounded text-sm text-gray-600">
                <strong>Control:</strong> Internal agency allocation system
              </div>
            </div>

            <div className="card">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Obligation</h3>
              <p className="text-gray-700 mb-4">
                Agencies enter into binding agreements (contracts, grants, purchase orders) that 
                create legal commitments to spend funds. This is when budget authority is used.
              </p>
              <div className="bg-gray-100 p-3 rounded text-sm text-gray-600">
                <strong>Key Point:</strong> Must occur before funds expire
              </div>
            </div>

            <div className="card">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Outlays</h3>
              <p className="text-gray-700 mb-4">
                Actual payments are made to vendors, grantees, or employees. Outlays may occur in 
                different fiscal years than obligations, especially for multi-year contracts.
              </p>
              <div className="bg-gray-100 p-3 rounded text-sm text-gray-600">
                <strong>Tracking:</strong> Monitored through Treasury systems
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Management */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Financial Management & Controls</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Anti-Deficiency Act</h3>
              <p className="text-gray-700 text-sm">
                Prohibits agencies from spending more than appropriated or obligating funds before they 
                are available. Violations carry serious consequences.
              </p>
            </div>
            <div className="card text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Purpose Statute</h3>
              <p className="text-gray-700 text-sm">
                Requires that appropriated funds be used only for the purposes specified by Congress. 
                Agencies cannot redirect funds without authorization.
              </p>
            </div>
            <div className="card text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Time Restrictions</h3>
              <p className="text-gray-700 text-sm">
                Most appropriations are available for obligation only during specific time periods. 
                Agencies must use "current year" funds before they expire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting & Accountability */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Reporting & Accountability</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-3">SF-133: Report on Budget Execution</h3>
              <p className="text-gray-700">
                Agencies submit monthly or quarterly reports to OMB and Treasury showing budget authority, 
                obligations, and outlays. This provides transparency and enables oversight.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Monitoring</h3>
              <p className="text-gray-700">
                Agencies track progress toward strategic goals and performance metrics, reporting results 
                to OMB, Congress, and the public. This links spending to outcomes.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Audits</h3>
              <p className="text-gray-700">
                Agency financial statements are audited annually by Inspectors General or independent 
                auditors. The Government Accountability Office (GAO) also conducts reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Oversight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Oversight Mechanisms</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <AlertCircle className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Congressional Oversight</h3>
              <p className="text-gray-700 mb-4">
                Congress monitors agency spending through hearings, reports, and GAO reviews. 
                Appropriations committees pay particular attention to spending patterns and performance.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Budget justification hearings</li>
                <li>• Mid-year reviews</li>
                <li>• Investigative inquiries</li>
              </ul>
            </div>
            <div className="card">
              <Shield className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">OMB Oversight</h3>
              <p className="text-gray-700 mb-4">
                OMB monitors agency spending throughout the year, reviewing execution rates and 
                approving reprogramming requests. OMB can restrict funds if necessary.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Quarterly budget reviews</li>
                <li>• Apportionment modifications</li>
                <li>• Spending plan approvals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cycle Continues */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">The Cycle Continues</h2>
          <p className="text-xl text-purple-100 mb-8">
            Even as agencies execute the current year's budget, they're already planning and 
            formulating budgets for future years. The federal budget process is continuous.
          </p>
          <Link href="/formulation" className="btn-primary bg-white text-purple-900 hover:bg-purple-50">
            Return to Formulation →
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
