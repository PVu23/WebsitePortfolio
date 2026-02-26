'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center group-hover:bg-gray-700">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="font-semibold text-gray-900 hidden sm:inline">Phillip Vu</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-gray-900"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in">
            <Link
              href="/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
