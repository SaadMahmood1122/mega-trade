import { notFound } from 'next/navigation';
import ProductDetails from '../../../components/ProductDetails';
import { findProductById } from '../../../data/productUtils';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function VegetableDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = findProductById(parseInt(id));
  
  if (!product || product.category !== 'vegetables') {
    notFound();
  }

  return <ProductDetails product={product} />;
} 