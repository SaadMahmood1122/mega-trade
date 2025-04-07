import Link from 'next/link';
import Image from 'next/image';
import { fruits } from '../../data/products';

export default function FruitsPage() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Fresh Fruits</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fruits.map((fruit) => (
          <Link 
            key={fruit.id} 
            href={`/categories/fruits/${fruit.id}`}
            className="block"
          >
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="relative h-48">
                <Image
                  src={fruit.imageUrl}
                  alt={fruit.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{fruit.name}</h2>
                <p className="text-gray-600 mb-2">{fruit.description}</p>
                <p className="text-lg font-bold text-green-600">{fruit.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 