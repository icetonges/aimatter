'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const projects = [
    {
      title: "Tableau Citi Bike Analysis",
      description: "Use Tableau to conduct NYC's Citi Bike Share Program Usage analysis.",
      image: "img/tableau-1-citibike.JPG",
      link: "/projects/tableau-citibike"
    },
    {
      title: "Budget Spend Plan Model",
      description: "Scenario-driven self-balance tool to plan and monitor Federal budget execution.",
      image: "project7/Spend Plan Demo.gif",
      link: "/projects/project7"
    },
    {
      title: "Python - Office Excel 1",
      description: "Use Python to Combine Excel Workbooks and/or Worksheets",
      image: "project10/book.gif",
      link: "/projects/project10"
    },
    {
      title: "Python - Office Excel 2",
      description: "Use Python to Compare Data and Changes in Excel Workbook.",
      image: "project11/compare.gif",
      link: "/projects/project11"
    },
    {
      title: "Machine Learning in Python",
      description: "Use Python Machine Learning to analyze and explore happiness.",
      image: "project6/project6.PNG",
      link: "/projects/project6"
    },
    {
      title: "Excel VBA Examples",
      description: "Use VBA functionalities to conduct data comparison, mining, analysis.",
      image: "project9/vba.jpg",
      link: "/projects/project9"
    },
    {
      title: "Federal Spending Dashboard",
      description: "Tableau based dashboard to track federal budget and spending.",
      image: "project13/project13.PNG",
      link: "/projects/project13"
    },
    {
      title: "Budget Execution",
      description: "Tableau based dashboard to track and compare budget execution.",
      image: "project14/project14.PNG",
      link: "/projects/project14"
    },
    {
      title: "SQL Data, Python",
      description: "SQL Data, Python Data Analysis & Visualization",
      image: "project15/sqlalchemy.png",
      link: "/projects/project15"
    },
    {
      title: "Python, JS D3, and Leaflet",
      description: "Conduct data mining, create map, add interactivity to the webpage.",
      image: "project8/project8.PNG",
      link: "/projects/project8"
    },
    {
      title: "COVID-19 Dashboard",
      description: "Use Tableau to visualize the COVID-19 spread over last four months.",
      image: "img/tableau-3-covid19.JPG",
      link: "/projects/tableau-covid19"
    },
    {
      title: "About Federal Employment",
      description: "Based on released FY 2018 data that is available to public.",
      image: "img/tableau-2-fed-avg-salary.JPG",
      link: "/projects/tableau-federal-employment"
    },
    {
      title: "The Power of Plots",
      description: "Apply Python Matplotlib to a real-world situation",
      image: "img/project5.PNG",
      link: "/projects/project5"
    },
    {
      title: "Biodiversity Dashboard",
      description: "Use JavaScript, CSS, D3, Plotly to build interactive dashboard",
      image: "img/project4.PNG",
      link: "/projects/project4"
    },
    {
      title: "Use Python to Analyze Text",
      description: "Perform Sentiment Analysis on Text.",
      image: "project12/text.gif",
      link: "/projects/project12"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-dark-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <div className="text-xl font-bold">
                <span className="text-blue-400">Budget Matter</span>
                <div className="text-sm font-normal text-gray-300">How Federal Budget Works</div>
              </div>
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <div className="relative group">
                <button className="nav-link text-white hover:text-blue-400">
                  Budget Process
                </button>
                <div className="absolute hidden group-hover:block bg-white text-gray-900 shadow-lg rounded-md mt-2 py-2 w-48 z-50">
                  <Link href="/process" className="block px-4 py-2 hover:bg-gray-100">Overview</Link>
                  <Link href="/formulation" className="block px-4 py-2 hover:bg-gray-100">Budget Formulation</Link>
                  <Link href="/enactment" className="block px-4 py-2 hover:bg-gray-100">Budget Enactment</Link>
                  <Link href="/execution" className="block px-4 py-2 hover:bg-gray-100">Budget Execution</Link>
                </div>
              </div>
              <Link href="/policy" className="nav-link text-white hover:text-blue-400">
                Budget Laws
              </Link>
              <Link href="/portfolio" className="nav-link text-white hover:text-blue-400">
                Portfolio
              </Link>
              <Link href="/about" className="nav-link text-white hover:text-blue-400">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Carousel Section */}
      <div className="hero-section" style={{backgroundImage: 'url(/aimatter/images/Congress.jpg)'}}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold mb-4">Budget Laws</h1>
            <p className="text-xl">Information pertaining to budget and finance policy</p>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Welcome to Budget Matter</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="card">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Budget Process</h3>
                <p className="text-gray-700 mb-6">
                  How Federal budget is planned, formulated, executed, and reported.
                </p>
                <Link href="/process" className="btn-primary">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="card">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Budget Laws</h3>
                <p className="text-gray-700 mb-6">
                  Legislative and regulatory requirements set forth for financial management function.
                </p>
                <Link href="/policy" className="btn-primary">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="card">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
                <p className="text-gray-700 mb-6">
                  Real-world applications
                </p>
                <Link href="/portfolio" className="btn-primary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Personal Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link key={index} href={project.link} className="card group">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <span className="text-sm">Image: {project.image}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4">
            <span>Budget Matter 2022</span>
            <a 
              href="https://github.com/budgetmatter/budgetmatter.github.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
