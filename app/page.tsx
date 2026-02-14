'use client'

import Link from 'next/link'
import { FileText, Users, DollarSign, TrendingUp, BookOpen, Building2, Scale, CircleDollarSign } from 'lucide-react'

export default function Home() {
  const budgetPhases = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Formulation',
      description: 'Federal agencies develop budget requests with OMB guidance',
      link: '/formulation',
      color: 'bg-blue-500',
      delay: '0',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Enactment',
      description: 'Congress reviews, debates, and passes appropriation bills',
      link: '/enactment',
      color: 'bg-green-500',
      delay: '100',
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Execution',
      description: 'Agencies spend appropriated funds and manage programs',
      link: '/execution',
      color: 'bg-purple-500',
      delay: '200',
    },
  ]

  const keyTopics = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Federal Agencies',
      description: 'Learn about the role of executive departments',
      link: '/agencies',
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: 'Budget Laws',
      description: 'Key legislation governing the budget process',
      link: '/laws',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Budget Types',
      description: 'Understanding different budget categories',
      link: '/budget-types',
    },
    {
      icon: <CircleDollarSign className="w-6 h-6" />,
      title: 'Appropriations',
      description: 'How Congress allocates federal spending',
      link: '/appropriations',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <BookOpen className="w-8 h-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">AI Matter</span>
            </div>
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
              <Link href="/projects" className="text-gray-700 hover:text-primary-600 transition-colors">
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
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Understanding the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                Federal Budget Process
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              A comprehensive guide to how the U.S. government plans, approves, and manages the federal budget
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/formulation" className="btn-primary bg-white text-primary-700 hover:bg-blue-50">
                Explore the Process
              </Link>
              <Link href="/about" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-700">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Three Phases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">The Three Phases of the Budget Process</h2>
            <p className="section-subtitle">
              Understanding how federal budgets move from planning to execution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {budgetPhases.map((phase, index) => (
              <Link
                key={index}
                href={phase.link}
                className="group"
                style={{ animationDelay: `${phase.delay}ms` }}
              >
                <div className="card hover:scale-105 transform transition-all duration-300 h-full">
                  <div className={`${phase.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                    {phase.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {phase.description}
                  </p>
                  <div className="text-primary-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                    Learn More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Budget Cycle Timeline</h2>
            <p className="section-subtitle">
              The federal budget process typically spans 18-24 months
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 hidden md:block"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              <TimelineItem
                position="left"
                title="Spring (Year 1)"
                subtitle="Planning Begins"
                description="Federal agencies begin developing budget requests based on OMB guidance"
              />
              <TimelineItem
                position="right"
                title="Fall (Year 1)"
                subtitle="Budget Submission"
                description="Agencies submit budget proposals to OMB for review and approval"
              />
              <TimelineItem
                position="left"
                title="February (Year 2)"
                subtitle="Presidential Budget"
                description="President submits budget request to Congress for consideration"
              />
              <TimelineItem
                position="right"
                title="Spring-Summer (Year 2)"
                subtitle="Congressional Action"
                description="Congress reviews, debates, and passes appropriation bills"
              />
              <TimelineItem
                position="left"
                title="October 1 (Year 2)"
                subtitle="Fiscal Year Begins"
                description="New fiscal year starts; agencies begin executing approved budgets"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Topics Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Explore Key Topics</h2>
            <p className="section-subtitle">
              Deep dive into specific aspects of the federal budget process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyTopics.map((topic, index) => (
              <Link key={index} href={topic.link} className="group">
                <div className="card hover:scale-105 transform transition-all h-full">
                  <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    {topic.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {topic.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Explore detailed information about each phase of the federal budget process
          </p>
          <Link href="/formulation" className="btn-primary bg-white text-primary-700 hover:bg-blue-50">
            Start with Formulation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-primary-400" />
                <span className="ml-2 text-lg font-bold text-white">AI Matter</span>
              </div>
              <p className="text-sm">
                Your comprehensive guide to understanding the federal budget process
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/formulation" className="hover:text-primary-400 transition-colors">Formulation</Link></li>
                <li><Link href="/enactment" className="hover:text-primary-400 transition-colors">Enactment</Link></li>
                <li><Link href="/execution" className="hover:text-primary-400 transition-colors">Execution</Link></li>
                <li><Link href="/about" className="hover:text-primary-400 transition-colors">About</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.whitehouse.gov/omb/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">OMB Website</a></li>
                <li><a href="https://www.gao.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">GAO Resources</a></li>
                <li><a href="https://www.congress.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">Congress.gov</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2026 AI Matter. Built with Next.js 15 and React 19.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function TimelineItem({ position, title, subtitle, description }: {
  position: 'left' | 'right'
  title: string
  subtitle: string
  description: string
}) {
  return (
    <div className={`flex items-center ${position === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div className={`w-full md:w-5/12 ${position === 'left' ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
        <div className="card">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
          <h4 className="text-primary-600 font-semibold mb-2">{subtitle}</h4>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
      <div className="hidden md:block w-2/12 flex justify-center">
        <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
      </div>
      <div className="hidden md:block w-5/12"></div>
    </div>
  )
}
