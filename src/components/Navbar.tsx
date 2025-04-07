'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return pathname === path ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600 hover:text-green-600 transform hover:scale-110 transition-all duration-300';
  };

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-green-600 transform hover:scale-105 transition-all duration-300" onClick={closeMenu}>
              Mega Foods
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden sm:flex sm:space-x-8">
            <Link href="/" className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/')}`}>
              Home
            </Link>
            <Link href="/about" className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/about')}`}>
              About
            </Link>
            <Link href="/products" className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/products')}`}>
              Products
            </Link>
            <Link href="/contact" className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/contact')}`}>
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div 
        className={`fixed inset-0 bg-opacity-90 transition-opacity duration-300 sm:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      />

      {/* Mobile menu */}
      <div 
        className={`fixed top-0 left-0 w-64 z-30 h-full opacity-95 bg-white/100 shadow-[2px_0_12px_rgba(0,0,0,0.12)] transform transition-transform duration-300 ease-in-out sm:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        id="mobile-menu"
      >
        <div className="h-16 flex items-center justify-between px-4 border-b">
          <span className="text-xl font-bold text-green-600">Menu</span>
          {/* <button
            onClick={closeMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
          >
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button> */}
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50/80 ${isActive('/')}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50/80 ${isActive('/about')}`}
          >
            About
          </Link>
          <Link
            href="/products"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50/80 ${isActive('/products')}`}
          >
            Products
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50/80 ${isActive('/contact')}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 