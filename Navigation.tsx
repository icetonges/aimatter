'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [processOpen, setProcessOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-blue-700 font-bold text-lg">Budget Matter</span>
            <span className="text-gray-500 text-xs">How Federal Budget Works</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            {/* Budget Process dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProcessOpen(true)}
              onMouseLeave={() => setProcessOpen(false)}
            >
              <button className="hover:text-blue-700 flex items-center gap-1 transition-colors">
                Budget Process
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {processOpen && (
                <div className="absolute left-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg w-52 py-1">
                  <Link href="/process" className="block px-4 py-2 hover:bg-gray-50 hover:text-blue-700">Overview</Link>
                  <Link href="/formulation" className="block px-4 py-2 hover:bg-gray-50 hover:text-blue-700">Budget Formulation</Link>
                  <Link href="/enactment" className="block px-4 py-2 hover:bg-gray-50 hover:text-blue-700">Budget Enactment</Link>
                  <Link href="/execution" className="block px-4 py-2 hover:bg-gray-50 hover:text-blue-700">Budget Execution</Link>
                </div>
              )}
            </div>

            <Link href="/policy" className="hover:text-blue-700 transition-colors">Budget Laws</Link>
            <Link href="/portfolio" className="hover:text-blue-700 transition-colors">Portfolio</Link>
            <Link href="/about" className="hover:text-blue-700 transition-colors">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
