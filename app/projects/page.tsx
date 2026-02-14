'use client'

import Link from 'next/link'
import { BookOpen, ArrowLeft, ExternalLink, BarChart3, Database, TrendingUp, FileSpreadsheet } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      id: '15',
      title: 'Federal Budget Dashboard',
      description: 'Interactive Tableau dashboard visualizing federal budget trends, agency spending, and appropriations data across multiple fiscal years.',
      category: 'Tableau Analytics',
      tools: ['Tableau', 'Data Visualization', 'Budget Analysis'],
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'bg-blue-500',
    },
    {
      id: '14',
      title: 'DoD Budget Process Analysis',
      description: 'Comprehensive analysis of Department of Defense budget formulation and execution cycles with timeline visualizations.',
      category: 'Data Analysis',
      tools: ['Excel', 'PowerPoint', 'Budget Data'],
      icon: <Database className="w-6 h-6" />,
      color: 'bg-green-500',
    },
    {
      id: '13',
      title: 'Appropriations Tracking System',
      description: 'Database system for tracking congressional appropriations bills through the legislative process.',
      category: 'Database',
      tools: ['SQL', 'Database Design', 'Reporting'],
      icon: <FileSpreadsheet className="w-6 h-6" />,
      color: 'bg-purple-500',
    },
    {
      id: '12',
      title: 'OMB Circular A-11 Guide',
      description: 'Interactive guide to OMB Circular A-11 budget formulation requirements and submission procedures.',
      category: 'Documentation',
      tools: ['Technical Writing', 'Web Development'],
      icon: <BookOpen className="w-6 h-6" />,
      color: 'bg-orange-500',
    },
    {
      id: '11',
      title: 'Budget Execution Metrics',
      description: 'Real-time metrics dashboard for monitoring budget execution rates, obligations, and outlays.',
      category: 'Analytics',
      tools: ['Tableau', 'Excel', 'Data Analysis'],
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'bg-red-500',
    },
    {
      id: '10',
      title: 'Federal Agencies Overview',
      description: 'Comprehensive directory of federal agencies with budget authority and organizational structure.',
      category: 'Research',
      tools: ['Research', 'Data Collection', 'Visualization'],
      icon: <Database className="w-6 h-6" />,
      color: 'bg-indigo-500',
    },
    {
      id: '9',
      title: 'Congressional Budget Timeline',
      description: 'Interactive timeline showing the congressional budget process from resolution to appropriations.',
      category: 'Visualization',
      tools: ['JavaScript', 'D3.js', 'Web Development'],
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'bg-pink-500',
    },
    {
      id: '8',
      title: 'Budget Law Reference Guide',
      description: 'Searchable database of federal budget laws, regulations, and key legal precedents.',
      category: 'Legal Research',
      tools: ['Legal Research', 'Documentation'],
      icon: <BookOpen className="w-6 h-6" />,
      color: 'bg-teal-500',
    },
    {
      id: '7',
      title: 'Fiscal Year Planning Tool',
      description: 'Planning tool for federal agencies to develop multi-year budget strategies.',
      category: 'Tool Development',
      tools: ['Excel VBA', 'Automation', 'Planning'],
      icon: <FileSpreadsheet className="w-6 h-6" />,
      color: 'bg-yellow-500',
    },
    {
      id: '6',
      title: 'Budget Types Classification',
      description: 'Educational resource explaining different budget types: discretionary, mandatory, supplemental.',
      category: 'Education',
      tools: ['Content Creation', 'Instructional Design'],
      icon: <BookOpen className="w-6 h-6" />,
      color: 'bg-cyan-500',
    },
    {
      id: '5',
      title: 'Apportionment Tracker',
      description: 'System for tracking OMB apportionments and agency spending authority throughout the fiscal year.',
      category: 'Financial Management',
      tools: ['Excel', 'Database', 'Reporting'],
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'bg-lime-500',
    },
    {
      id: '4',
      title: 'Budget Process Flowcharts',
      description: 'Comprehensive set of flowcharts documenting each phase of the federal budget process.',
      category: 'Documentation',
      tools: ['Visio', 'Process Mapping', 'Documentation'],
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'bg-violet-500',
    },
  ]

  const categories = [...new Set(projects.map(p => p.category))]

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
              <Link href="/projects" className="text-primary-600 font-semibold">
                Projects
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">
                Contact
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-4">Portfolio & Projects</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            A showcase of budget analysis projects, data visualizations, Tableau dashboards, 
            and tools developed to improve understanding of the federal budget process.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">{projects.length}</div>
              <div className="text-gray-600">Total Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">{categories.length}</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-gray-600">Tableau Dashboards</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Federal Budget Focus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">
              Explore interactive dashboards, analysis tools, and educational resources
            </p>
          </div>

          {/* Category Filter Info */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Categories:</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <span
                  key={index}
                  className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="card hover:scale-105 transform transition-all h-full group"
              >
                <div className={`${project.color} w-14 h-14 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {project.icon}
                </div>
                
                <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {project.category}
                </span>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Tools Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto">
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-800 transition-colors"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tableau Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tableau Dashboards</h2>
            <p className="text-xl text-gray-600">
              Interactive data visualizations built with Tableau
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card bg-gradient-to-br from-blue-50 to-blue-100">
              <BarChart3 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Federal Budget Trends Dashboard
              </h3>
              <p className="text-gray-700 mb-4">
                Visualize budget authority, obligations, and outlays across federal agencies 
                with interactive filters and drill-down capabilities.
              </p>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-600">
                  <strong>Features:</strong> Multi-year trends, agency comparisons, account-level detail
                </p>
              </div>
              <Link
                href="/projects/15"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
              >
                View Dashboard
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="card bg-gradient-to-br from-green-50 to-green-100">
              <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Budget Execution Tracker
              </h3>
              <p className="text-gray-700 mb-4">
                Real-time tracking of budget execution rates, spending patterns, and 
                performance metrics with automated alerts.
              </p>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-600">
                  <strong>Features:</strong> Execution rates, trend analysis, predictive forecasting
                </p>
              </div>
              <Link
                href="/projects/11"
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-800"
              >
                View Dashboard
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-600">
              Tools and technologies used across projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Visualization</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Tableau Desktop & Server</li>
                <li>Microsoft Power BI</li>
                <li>D3.js & Chart.js</li>
                <li>Excel Advanced Charts</li>
              </ul>
            </div>

            <div className="card text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Analysis</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Microsoft Excel (Advanced)</li>
                <li>SQL & Database Query</li>
                <li>Statistical Analysis</li>
                <li>Budget Modeling</li>
              </ul>
            </div>

            <div className="card text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Development</h3>
              <ul className="text-gray-600 space-y-2">
                <li>HTML/CSS/JavaScript</li>
                <li>React & Next.js</li>
                <li>Python for Data Science</li>
                <li>VBA Automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Collaboration?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss budget analysis projects, data visualization needs, or Tableau development
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-900 hover:bg-blue-50">
            Get in Touch
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
