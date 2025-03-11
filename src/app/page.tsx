'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* Hero Section */}
      <section 
        className="relative py-16 md:py-24 px-4 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&auto=format&fit=crop")',
          minHeight: '500px'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 to-green-800/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white tracking-tight">
            Welcome to Mega Trade
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-100 max-w-2xl mx-auto mb-6 md:mb-8 font-medium">
            Your one-stop destination for fresh, organic produce and premium groceries. 
            Discover our wide range of high-quality products sourced from local farmers.
          </p>
          <div className="transform transition-transform duration-200 hover:scale-105 active:scale-95">
            <Link 
              href="/products" 
              className="inline-block bg-green-600 text-white py-2.5 md:py-3 px-6 md:px-8 rounded-full hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl text-sm md:text-base font-semibold"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="bg-white p-6 md:p-8 rounded-lg shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center tracking-tight">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.25)] transition-all duration-200 overflow-hidden transform hover:scale-[1.03]"
            >
              <Link href={`/products/${id}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={[
                      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=800&auto=format&fit=crop"
                    ][id - 1]} 
                    alt={["Fresh Organic Apples", "Premium Basmati Rice", "Fresh Broccoli"][id - 1]}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-green-600 transition-colors duration-200">
                    {["Fresh Organic Apples", "Premium Basmati Rice", "Fresh Broccoli"][id - 1]}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 group-hover:text-gray-900 transition-colors duration-200">
                    {[
                      "Sweet and crispy red apples, perfect for healthy snacking",
                      "Long-grain aromatic rice, ideal for biryanis and pilafs",
                      "Farm-fresh green broccoli, packed with nutrients"
                    ][id - 1]}
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-green-600">
                    {["$4.99/kg", "$12.99/kg", "$2.99/kg"][id - 1]}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-6 md:mt-8">
          <div className="transform transition-transform duration-200 hover:scale-105 active:scale-95">
            <Link href="/products" className="inline-block bg-green-600 text-white py-2.5 md:py-3 px-6 md:px-8 rounded-full hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl text-sm md:text-base font-semibold">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[
          {
            href: "/products",
            title: "Products",
            description: "Explore our fresh produce, grains, and organic products sourced from local farmers."
          },
          {
            href: "/about",
            title: "About Us",
            description: "Learn about our commitment to providing fresh, organic, and sustainable products."
          },
          {
            href: "/contact",
            title: "Contact",
            description: "Get in touch with us for bulk orders, special requests, or any inquiries."
          }
        ].map((link) => (
          <div
            key={link.title}
            className="transform transition-transform duration-200 hover:scale-[1.03]"
          >
            <Link 
              href={link.href}
              className="block bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group h-full"
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-green-600 group-hover:text-green-700">{link.title}</h2>
              <p className="text-sm md:text-base text-gray-600">{link.description}</p>
            </Link>
          </div>
        ))}

        <div className="transform transition-transform duration-200 hover:scale-[1.03]">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md group hover:shadow-lg transition-all duration-200">
            <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-green-600">Newsletter</h2>
            <p className="text-sm md:text-base text-gray-600">Subscribe for weekly updates on fresh arrivals and seasonal offers.</p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base transition-transform duration-200 focus:scale-[1.02]"
              />
              <button
                type="submit"
                className="w-full mt-2 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-all duration-200 text-sm md:text-base font-semibold transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="bg-gradient-to-r from-green-50 to-indigo-50 p-6 md:p-8 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center tracking-tight">
          Get in Touch
        </h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
            Have questions? We&apos;re here to help! Contact us for any inquiries about our products or services.
          </p>
          <div className="transform transition-transform duration-200 hover:scale-105 active:scale-95">
            <Link href="/contact" className="inline-block bg-green-600 text-white py-2 px-4 md:py-2.5 md:px-6 rounded-md hover:bg-green-700 transition-colors duration-200 text-sm md:text-base font-semibold">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


