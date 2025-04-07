import { fruits, vegetables, rice } from "./products";
import { Product } from "../components/ProductTypes";

export function findProductById(id: number): Product | undefined {
  const allProducts = [...fruits, ...vegetables, ...rice];
  return allProducts.find((product) => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  switch (category) {
    case "fruits":
      return fruits;
    case "vegetables":
      return vegetables;
    case "rice":
      return rice;
    default:
      return [];
  }
}
