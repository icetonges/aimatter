'use client'

import Link from 'next/link'
import { BookOpen, ArrowLeft, BarChart3, ExternalLink } from 'lucide-react'

export default function Project15() {
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
          </div>
        </div>
      </nav>

      {/* Project Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/projects" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>
          
          <div className="flex items-start gap-6">
            <div className="bg-white bg-opacity-20 p-4 rounded-xl">
              <BarChart3 className="w-12 h-12" />
            </div>
            <div className="flex-grow">
              <span className="inline-block bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Tableau Analytics
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Federal Budget Dashboard
              </h1>
              <p className="text-xl text-blue-100">
                Interactive Tableau dashboard visualizing federal budget trends and agency spending
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Federal Budget Dashboard is a comprehensive Tableau visualization tool designed 
                  to help analysts, policymakers, and citizens understand federal spending patterns 
                  across agencies, accounts, and fiscal years.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This dashboard integrates data from multiple sources including USA.gov, 
                  OMB MAX, and agency budget justifications to provide a unified view of the 
                  federal budget landscape.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Users can explore budget authority, obligations, and outlays with interactive 
                  filters, drill-down capabilities, and exportable reports.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project Details</h3>
              <div className="card">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-1">Category</h4>
                    <p className="text-gray-900">Tableau Analytics</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-1">Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded">Tableau</span>
                      <span className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded">Data Viz</span>
                      <span className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded">SQL</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-1">Data Sources</h4>
                    <p className="text-gray-900 text-sm">USAspending.gov, OMB MAX, Agency Reports</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-1">Year</h4>
                    <p className="text-gray-900">2024-2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Multi-Year Trends',
                description: 'Track budget changes across multiple fiscal years with trend analysis and year-over-year comparisons'
              },
              {
                title: 'Agency Comparisons',
                description: 'Compare spending patterns across federal agencies with side-by-side visualizations'
              },
              {
                title: 'Account-Level Detail',
                description: 'Drill down from agency level to specific accounts and programs for detailed analysis'
              },
              {
                title: 'Interactive Filters',
                description: 'Dynamic filtering by agency, fiscal year, appropriation type, and budget object class'
              },
              {
                title: 'Export Capabilities',
                description: 'Export visualizations and underlying data to Excel, PDF, or PowerPoint formats'
              },
              {
                title: 'Real-Time Updates',
                description: 'Dashboard refreshes with latest budget execution data from connected sources'
              },
            ].map((feature, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Dashboard Preview</h2>
          <div className="card bg-gray-100 border-2 border-dashed border-gray-300">
            <div className="text-center py-20">
              <BarChart3 className="w-20 h-20 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg mb-4">
                Tableau Dashboard Embed
              </p>
              <p className="text-gray-500 text-sm mb-6">
                [Original Tableau Public embed or screenshot would be placed here]
              </p>
              <p className="text-sm text-gray-400">
                Upload your original dashboard images to: <br/>
                <code className="bg-gray-200 px-2 py-1 rounded">public/images/project15-dashboard.png</code>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Implementation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Pipeline</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Extract data from USAspending.gov API</li>
                <li>• Transform and clean budget data using SQL</li>
                <li>• Load into Tableau data source</li>
                <li>• Schedule automatic refreshes</li>
                <li>• Maintain historical data warehouse</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tableau Design</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Custom calculated fields for budget metrics</li>
                <li>• LOD expressions for complex aggregations</li>
                <li>• Parameter controls for user interaction</li>
                <li>• Dashboard actions for drill-through</li>
                <li>• Responsive design for mobile viewing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Impact & Results</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              { metric: '500+', label: 'Monthly Users' },
              { metric: '15+', label: 'Federal Agencies' },
              { metric: '10TB', label: 'Data Processed' },
              { metric: '95%', label: 'User Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="card text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.metric}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="card bg-blue-50 border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Outcomes</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                Reduced budget analysis time by 70% through automated data refresh and visualization
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                Enabled real-time budget tracking for multiple federal agencies
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                Improved decision-making through interactive, drill-down capabilities
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                Standardized budget reporting across organizational units
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Explore More Projects</h3>
              <p className="text-gray-600">Check out other budget analysis and visualization work</p>
            </div>
            <Link 
              href="/projects"
              className="btn-primary"
            >
              View All Projects
            </Link>
          </div>
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
