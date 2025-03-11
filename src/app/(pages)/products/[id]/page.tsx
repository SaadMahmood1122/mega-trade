'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

// Mock product data (same as in products page)
const products = [
  {
    id: 1,
    name: 'Fresh Organic Apples',
    description: 'Sweet and crispy red apples, perfect for healthy snacking',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800&auto=format&fit=crop',
    details: 'Our organic apples are handpicked from local orchards, ensuring the highest quality and freshness. Rich in fiber and antioxidants, these apples are perfect for healthy snacking, baking, or adding to your favorite recipes.'
  },
  {
    id: 2,
    name: 'Premium Basmati Rice',
    description: 'Long-grain aromatic rice, ideal for biryanis and pilafs',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format&fit=crop',
    details: 'Premium aged basmati rice with an exceptional aroma and taste. Each grain cooks up fluffy and separate, making it perfect for Indian and Middle Eastern cuisines. Sourced from the finest rice fields.'
  },
  {
    id: 3,
    name: 'Fresh Broccoli',
    description: 'Farm-fresh green broccoli, packed with nutrients',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=800&auto=format&fit=crop',
    details: 'Fresh, crisp broccoli florets harvested at peak ripeness. Rich in vitamins C and K, fiber, and antioxidants. Perfect for stir-fries, steaming, or enjoying raw in salads.'
  },
  {
    id: 4,
    name: 'Organic Bananas',
    description: 'Sweet and ripe bananas, perfect for smoothies',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=800&auto=format&fit=crop',
    details: 'Naturally ripened organic bananas, sourced from sustainable farms. Rich in potassium and perfect for smoothies, baking, or as a healthy snack. Each bunch is carefully selected for quality.'
  },
  {
    id: 5,
    name: 'Fresh Carrots Bundle',
    description: 'Crispy orange carrots, great for salads and cooking',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?w=800&auto=format&fit=crop',
    details: 'Fresh, crunchy carrots with vibrant color and sweet taste. Excellent source of beta carotene and fiber. Perfect for snacking, cooking, or juicing. Locally sourced from trusted farmers.'
  },
  {
    id: 6,
    name: 'Brown Rice',
    description: 'Healthy whole grain brown rice, rich in fiber',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800&auto=format&fit=crop',
    details: 'Nutritious whole grain brown rice that retains its bran layer and germ. High in fiber and essential nutrients. Perfect for health-conscious individuals looking for a wholesome alternative to white rice.'
  }
];

export default function ProductPage() {
  const params = useParams();
  const productId = Number(params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link href="/products" className="text-green-600 hover:underline">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="h-64 w-full object-cover md:h-full md:w-96"
            />
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-3xl font-bold text-green-600 mb-6">
              ${product.price}
            </p>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Product Details</h2>
              <p className="text-gray-700">{product.details}</p>
            </div>
            <button className="bg-green-600 text-white py-3 px-8 rounded-full hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Link href="/products" className="text-green-600 hover:text-green-800 transition-colors duration-300 flex items-center gap-2">
          <span>←</span> Back to Products
        </Link>
      </div>
    </div>
  );
} 