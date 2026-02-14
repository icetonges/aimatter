const fs = require('fs');
const path = require('path');

console.log('🚀 Generating ALL Budget Matter pages...\n');

// Create Navigation component content
const navigationContent = `'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <div className="text-xl font-bold">
              <span className="text-blue-400">Budget Matter</span>
              <div className="text-sm font-normal text-gray-300">How Federal Budget Works</div>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <div 
              className="relative group"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="text-white hover:text-blue-400 font-medium transition-colors py-2">
                Budget Process
              </button>
              {showDropdown && (
                <div className="absolute left-0 mt-0 bg-white text-gray-900 shadow-xl rounded-md py-2 w-56 z-50">
                  <Link href="/process" className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                    Overview
                  </Link>
                  <Link href="/formulation" className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                    Budget Formulation
                  </Link>
                  <Link href="/enactment" className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                    Budget Enactment
                  </Link>
                  <Link href="/execution" className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                    Budget Execution
                  </Link>
                </div>
              )}
            </div>
            <Link href="/policy" className="text-white hover:text-blue-400 font-medium transition-colors py-2">
              Budget Laws
            </Link>
            <Link href="/portfolio" className="text-white hover:text-blue-400 font-medium transition-colors py-2">
              Portfolio
            </Link>
            <Link href="/about" className="text-white hover:text-blue-400 font-medium transition-colors py-2">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}`;

// Create Footer component
const footerContent = `'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
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
  )
}`;

// Template for main pages
const createMainPage = (pageName, title, description) => `'use client'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function ${pageName}() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="hero-section" style={{backgroundImage: 'url(/aimatter/images/${pageName.toLowerCase()}.jpg)'}}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold mb-4">${title}</h1>
            <p className="text-xl">${description}</p>
          </div>
        </div>
      </div>

      <main className="flex-grow bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              This page contains information about ${title.toLowerCase()} in the federal budget process.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4">Key Information</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Important point about this process
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Key stakeholders involved
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Timeline and deadlines
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Required documentation
                  </li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4">Resources</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    OMB guidance documents
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Congressional procedures
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Historical budget data
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Training materials
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <p className="text-gray-600">
                  Diagram: ${pageName.toLowerCase()}-process.png
                  <br />
                  <span className="text-sm">(Add your image to public/images/)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}`;

// Template for project pages  
const createProjectPage = (projectName, title, description) => `'use client'

import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function ${projectName.replace(/-/g, '')}() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/portfolio" className="text-blue-600 hover:underline mb-8 inline-block">
            ← Back to Portfolio
          </Link>
          
          <h1 className="text-4xl font-bold mb-4">${title}</h1>
          <p className="text-xl text-gray-600 mb-8">${description}</p>

          <div className="mb-12">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center p-4">
                <p className="text-gray-500 mb-2">Project Screenshot</p>
                <p className="text-sm text-gray-400">Add to: public/images/${projectName}/</p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Detailed project information, methodology, and results will be displayed here.
              Copy content from your original ${projectName} project page.
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
}`;

// Main pages configuration
const mainPages = [
  { name: 'Formulation', title: 'Budget Formulation', desc: 'How federal agencies develop budget requests' },
  { name: 'Enactment', title: 'Budget Enactment', desc: 'Congressional review and appropriation process' },
  { name: 'Execution', title: 'Budget Execution', desc: 'Implementation and spending management' },
  { name: 'Process', title: 'Budget Process Overview', desc: 'Complete federal budget cycle' },
  { name: 'Policy', title: 'Budget Laws & Policy', desc: 'Legislative and regulatory requirements' },
  { name: 'Portfolio', title: 'Project Portfolio', desc: 'Real-world applications and analysis' },
  { name: 'About', title: 'About Budget Matter', desc: 'Understanding the federal budget process' }
];

// Project pages configuration
const projects = [
  { name: 'tableau-citibike', title: 'Tableau Citi Bike Analysis', desc: 'NYC Citi Bike Share Program analysis using Tableau' },
  { name: 'project4', title: 'Biodiversity Dashboard', desc: 'Interactive dashboard using JavaScript, D3, and Plotly' },
  { name: 'project5', title: 'The Power of Plots', desc: 'Python Matplotlib real-world application' },
  { name: 'project6', title: 'Machine Learning in Python', desc: 'Analyzing and exploring happiness with ML' },
  { name: 'project7', title: 'Budget Spend Plan Model', desc: 'Federal budget execution planning tool' },
  { name: 'project8', title: 'Python, JS D3, and Leaflet', desc: 'Data mining and interactive mapping' },
  { name: 'project9', title: 'Excel VBA Examples', desc: 'Data comparison, mining, and analysis with VBA' },
  { name: 'project10', title: 'Python - Office Excel 1', desc: 'Combine Excel workbooks and worksheets' },
  { name: 'project11', title: 'Python - Office Excel 2', desc: 'Compare data changes in Excel workbooks' },
  { name: 'project12', title: 'Python Text Analysis', desc: 'Sentiment analysis on text data' },
  { name: 'project13', title: 'Federal Spending Dashboard', desc: 'Tableau dashboard for budget tracking' },
  { name: 'project14', title: 'Budget Execution Tracking', desc: 'Tableau dashboard for execution comparison' },
  { name: 'project15', title: 'SQL Data & Python', desc: 'Data analysis and visualization' },
  { name: 'tableau-covid19', title: 'COVID-19 Dashboard', desc: 'Tableau visualization of COVID-19 spread' },
  { name: 'tableau-federal-employment', title: 'Federal Employment Analysis', desc: 'FY 2018 federal employment data' }
];

// Create directories and files
const baseDir = 'app';

// Ensure components directory exists
const componentsDir = path.join(baseDir, 'components');
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

// Write components
fs.writeFileSync(path.join(componentsDir, 'Navigation.tsx'), navigationContent);
fs.writeFileSync(path.join(componentsDir, 'Footer.tsx'), footerContent);
console.log('✓ Created Navigation and Footer components');

// Create main pages
let count = 0;
mainPages.forEach(page => {
  const pageDir = path.join(baseDir, page.name.toLowerCase());
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  const content = createMainPage(page.name, page.title, page.desc);
  fs.writeFileSync(path.join(pageDir, 'page.tsx'), content);
  console.log(`✓ Created ${page.name} page`);
  count++;
});

// Create project pages
const projectsDir = path.join(baseDir, 'projects');
projects.forEach(project => {
  const projectDir = path.join(projectsDir, project.name);
  if (!fs.existsSync(projectDir)) {
    fs.mkdirSync(projectDir, { recursive: true });
  }
  const content = createProjectPage(project.name, project.title, project.desc);
  fs.writeFileSync(path.join(projectDir, 'page.tsx'), content);
  console.log(`✓ Created ${project.name} project page`);
  count++;
});

console.log(`\n✅ Successfully created ${count + 2} pages!\n`);
console.log('📊 Summary:');
console.log(`   - Components: 2`);
console.log(`   - Main pages: ${mainPages.length}`);
console.log(`   - Project pages: ${projects.length}`);
console.log(`   - Total: ${count + 2} files\n`);
