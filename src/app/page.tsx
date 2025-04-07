import Link from 'next/link';
import ProductSection from './components/ProductSection';
import { fruits, vegetables, rice } from './data/products';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-4rem)] min-h-[500px] -mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/50 via-green-400/50 to-green-300/50">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-green-800/10 via-green-700/15 to-green-800/20" />
          <div className="absolute inset-0 bg-green-500/15 mix-blend-color" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Fresh & Organic{' '}
              <span className="text-green-100 drop-shadow-lg">Delights</span>
            </h1>
            <p className="text-lg sm:text-xl text-green-50 mb-8 max-w-lg">
              Discover the finest selection of fresh fruits, vegetables, and premium rice. Quality you can taste, delivered to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/categories"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-green-500/90 hover:bg-green-400/90 transition-all duration-300 shadow-lg hover:shadow-green-500/30 hover:scale-105"
              >
                Shop Now
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3 border border-green-200/40 text-base font-medium rounded-full text-green-50 bg-green-800/20 hover:bg-green-700/30 transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* Product Sections */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-800">Fresh Fruits</h2>
            <Link href="/categories/fruits" className="text-purple-600 hover:text-purple-700 font-semibold group flex items-center gap-1">
              View All Fruits 
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <ProductSection title="" products={fruits} />
        </div>

        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-800">Fresh Vegetables</h2>
            <Link href="/categories/vegetables" className="text-purple-600 hover:text-purple-700 font-semibold group flex items-center gap-1">
              View All Vegetables
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <ProductSection title="" products={vegetables} />
        </div>

        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-800">Premium Rice</h2>
            <Link href="/categories/rice" className="text-purple-600 hover:text-purple-700 font-semibold group flex items-center gap-1">
              View All Rice
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <ProductSection title="" products={rice} />
        </div>
      </div>
    </main>
  );
}


