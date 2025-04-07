'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'text-green-400 font-medium underline underline-offset-4' : 'text-gray-400 hover:text-white hover:underline hover:underline-offset-4';
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Mega Foods</h3>
            <p className="text-gray-400">
              Your trusted destination for fresh, organic produce and premium groceries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className={`${isActive('/')} transition-colors`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className={`${isActive('/products')} transition-colors`}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className={`${isActive('/about')} transition-colors`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className={`${isActive('/contact')} transition-colors`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contact@megafoods.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Foods Street</li>
              <li>Business City, ST 12345</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe for weekly updates on fresh arrivals and seasonal offers.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mega Foods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 