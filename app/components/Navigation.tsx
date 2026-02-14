'use client'

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
}