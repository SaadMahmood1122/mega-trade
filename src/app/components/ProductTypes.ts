export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  category: "fruits" | "vegetables" | "rice";
};

export type ProductSectionProps = {
  title: string;
  products: Product[];
};
