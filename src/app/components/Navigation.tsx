'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/categories') {
      return pathname.startsWith('/categories/') 
        ? 'text-white bg-green-500' 
        : isScrolled 
          ? 'text-white hover:text-green-300 hover:bg-white/10' 
          : 'text-gray-700 hover:text-green-600 hover:bg-green-50';
    }
    return pathname === path 
      ? 'text-white bg-green-500' 
      : isScrolled 
        ? 'text-white hover:text-green-300 hover:bg-white/10' 
        : 'text-gray-700 hover:text-green-600 hover:bg-green-50';
  };

  const isCategoryActive = (category: string) => {
    return pathname.startsWith(`/categories/${category}`) 
      ? 'bg-green-500 text-white' 
      : 'text-gray-700 hover:text-green-500 hover:bg-green-50';
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-green-900/90 backdrop-blur-lg shadow-lg' 
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className={`text-2xl font-bold transition-all transform hover:scale-105 duration-300 ${
              isScrolled ? 'text-white hover:text-green-300' : 'text-green-600 hover:text-green-700'
            }`}
          >
            <span className={`${
              isScrolled 
                ? 'bg-gradient-to-r from-green-400 to-green-200' 
                : 'bg-gradient-to-r from-green-600 to-green-400'
              } bg-clip-text text-transparent`}
            >
              Mega Foods
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive('/')}`}
            >
              Home
            </Link>
            <div className="relative group">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${isActive('/categories')}`}
              >
                Products
                <svg
                  className={`ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180 ${
                    isScrolled ? 'stroke-current' : 'stroke-gray-700'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 w-56 pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                <div className="bg-white rounded-2xl shadow-xl ring-1 ring-black/5 overflow-hidden backdrop-blur-lg">
                  <div className="py-2">
                    <Link
                      href="/categories/fruits"
                      className={`block px-5 py-3 text-sm transition-all duration-200 hover:pl-7 ${isCategoryActive('fruits')}`}
                    >
                      Fresh Fruits
                    </Link>
                    <Link
                      href="/categories/vegetables"
                      className={`block px-5 py-3 text-sm transition-all duration-200 hover:pl-7 ${isCategoryActive('vegetables')}`}
                    >
                      Fresh Vegetables
                    </Link>
                    <Link
                      href="/categories/rice"
                      className={`block px-5 py-3 text-sm transition-all duration-200 hover:pl-7 ${isCategoryActive('rice')}`}
                    >
                      Premium Rice
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link 
              href="/about" 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive('/about')}`}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive('/contact')}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden inline-flex items-center justify-center p-2 rounded-full transition-all duration-300 ${
              isScrolled
                ? 'text-white hover:text-green-300 hover:bg-white/10'
                : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
            }`}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {!isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-[400px] opacity-100' 
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="py-3 space-y-1">
            <Link
              href="/"
              className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-all duration-300 ${
                pathname === '/' 
                  ? 'bg-green-500 text-white' 
                  : isScrolled
                    ? 'text-white hover:bg-white/10'
                    : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div>
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className={`flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-base font-medium transition-all duration-300 ${
                  pathname.startsWith('/categories')
                    ? 'bg-green-500 text-white'
                    : isScrolled
                      ? 'text-white hover:bg-white/10'
                      : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                <span>Products</span>
                <svg
                  className={`h-4 w-4 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`transition-all duration-300 ${
                  isProductsOpen 
                    ? 'max-h-48 opacity-100' 
                    : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                <Link
                  href="/categories/fruits"
                  className={`block px-8 py-2.5 text-base font-medium transition-all duration-300 rounded-xl mt-1 ${
                    isScrolled
                      ? 'text-white/80 hover:text-white hover:bg-white/10'
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Fresh Fruits
                </Link>
                <Link
                  href="/categories/vegetables"
                  className={`block px-8 py-2.5 text-base font-medium transition-all duration-300 rounded-xl ${
                    isScrolled
                      ? 'text-white/80 hover:text-white hover:bg-white/10'
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Fresh Vegetables
                </Link>
                <Link
                  href="/categories/rice"
                  className={`block px-8 py-2.5 text-base font-medium transition-all duration-300 rounded-xl ${
                    isScrolled
                      ? 'text-white/80 hover:text-white hover:bg-white/10'
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Premium Rice
                </Link>
              </div>
            </div>
            <Link
              href="/about"
              className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-all duration-300 ${
                pathname === '/about'
                  ? 'bg-green-500 text-white'
                  : isScrolled
                    ? 'text-white hover:bg-white/10'
                    : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-all duration-300 ${
                pathname === '/contact'
                  ? 'bg-green-500 text-white'
                  : isScrolled
                    ? 'text-white hover:bg-white/10'
                    : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 