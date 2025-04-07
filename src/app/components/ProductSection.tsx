import Image from 'next/image';
import Link from 'next/link';
import { ProductSectionProps } from './ProductTypes';

export default function ProductSection({ title, products }: ProductSectionProps) {
  return (
    <section className="bg-white p-4 md:p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center tracking-tight">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.25)] transition-all duration-200 overflow-hidden transform hover:scale-[1.03]"
          >
            <Link href={`/products/${product.id}`} className="block">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-green-600 transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 group-hover:text-gray-900 transition-colors duration-200">
                  {product.description}
                </p>
                <p className="text-xl md:text-2xl font-bold text-green-600">
                  {product.price}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
} 