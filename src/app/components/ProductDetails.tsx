import Image from 'next/image';
import { Product } from './ProductTypes';

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-2xl font-bold text-green-600">{product.price}</p>
          <p className="text-gray-600 text-lg">{product.description}</p>
          <div className="pt-6">
            <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200 text-lg font-semibold">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 