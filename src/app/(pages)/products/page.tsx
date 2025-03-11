import Link from 'next/link';
import Image from 'next/image';

// Mock product data
const products = [
  {
    id: 1,
    name: 'Fresh Organic Apples',
    description: 'Sweet and crispy red apples, perfect for healthy snacking',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Premium Basmati Rice',
    description: 'Long-grain aromatic rice, ideal for biryanis and pilafs',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Fresh Broccoli',
    description: 'Farm-fresh green broccoli, packed with nutrients',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Organic Bananas',
    description: 'Sweet and ripe bananas, perfect for smoothies',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Fresh Carrots Bundle',
    description: 'Crispy orange carrots, great for salads and cooking',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Brown Rice',
    description: 'Healthy whole grain brown rice, rich in fiber',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800&auto=format&fit=crop'
  }
];

export default function Products() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Our Fresh Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link 
            href={`/products/${product.id}`} 
            key={product.id}
            className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300 overflow-hidden group"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transform group-hover:scale-125 transition-transform duration-700 ease-in-out"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-2xl font-bold text-green-600">${product.price}/kg</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 