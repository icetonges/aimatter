'use client'

import Link from 'next/link'
import { BookOpen, ArrowLeft, Mail, Linkedin, Github, FileText } from 'lucide-react'

export default function Contact() {
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
              <Link href="/projects" className="text-gray-700 hover:text-primary-600 transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="text-primary-600 font-semibold">
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
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Interested in collaborating on budget analysis projects, data visualization, 
            or discussing federal budget topics? Let's connect!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Connect</h2>
              <p className="text-gray-700 mb-8">
                I'm always interested in discussing budget analysis, data visualization projects, 
                Tableau development, or federal financial management topics.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a 
                      href="mailto:peter@aimatter.com" 
                      className="text-primary-600 hover:text-primary-800"
                    >
                      peter@aimatter.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <Linkedin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-800"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <Github className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">GitHub</h3>
                    <a 
                      href="https://github.com/icetonges" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-800"
                    >
                      View Projects on GitHub
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <FileText className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Portfolio</h3>
                    <Link 
                      href="/projects"
                      className="text-primary-600 hover:text-primary-800"
                    >
                      View All Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Areas of Interest */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Areas of Interest</h2>
              <div className="space-y-4">
                <div className="card">
                  <h3 className="font-bold text-gray-900 mb-2">Budget Analysis</h3>
                  <p className="text-gray-600 text-sm">
                    Federal budget formulation, execution tracking, and financial management consulting
                  </p>
                </div>

                <div className="card">
                  <h3 className="font-bold text-gray-900 mb-2">Data Visualization</h3>
                  <p className="text-gray-600 text-sm">
                    Tableau dashboard development, custom visualizations, and interactive reporting
                  </p>
                </div>

                <div className="card">
                  <h3 className="font-bold text-gray-900 mb-2">Training & Education</h3>
                  <p className="text-gray-600 text-sm">
                    Budget process training, Tableau workshops, and federal financial management courses
                  </p>
                </div>

                <div className="card">
                  <h3 className="font-bold text-gray-900 mb-2">Consulting</h3>
                  <p className="text-gray-600 text-sm">
                    Strategic budget planning, process improvement, and financial system implementation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                What services do you offer?
              </h3>
              <p className="text-gray-700">
                I specialize in federal budget analysis, Tableau dashboard development, data visualization, 
                and training on the federal budget process. I work with government agencies, contractors, 
                and organizations that need budget expertise.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Do you provide Tableau training?
              </h3>
              <p className="text-gray-700">
                Yes! I offer Tableau training workshops ranging from beginner to advanced levels, with 
                a focus on budget and financial data visualization. Custom workshops can be tailored 
                to your organization's needs.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Can you help with budget process consulting?
              </h3>
              <p className="text-gray-700">
                Absolutely. I provide consulting services for budget formulation, execution tracking, 
                process improvement, and financial management system implementation.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                How can I view your work?
              </h3>
              <p className="text-gray-700">
                Visit the <Link href="/projects" className="text-primary-600 hover:underline">Projects page</Link> to 
                see portfolio examples, Tableau dashboards, and case studies from previous work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start a Conversation?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Whether you have a project in mind or just want to discuss budget topics, 
            I'd love to hear from you.
          </p>
          <a 
            href="mailto:peter@aimatter.com"
            className="btn-primary bg-white text-primary-900 hover:bg-blue-50"
          >
            Send an Email
          </a>
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
