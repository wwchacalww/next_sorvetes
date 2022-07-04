import { useQuery } from "react-query";
import { api } from "../api";

interface ProductProps {
  id: string;
  name: string;
  description: string;
  category: string;
  barcode?: string;
  code: string;
}

export async function getProducts(): Promise<ProductProps[]> {
  const { data } = await api.get("products");
  return data.products.map((product: ProductProps) => {
    return {
      name: product.name,
      description: product.description,
      category: product.category,
      barcode: product.barcode,
      code: product.code,
    };
  });
}

export function useProducts() {
  return useQuery("products", getProducts, {
    staleTime: 1000 * 10,
  });
}
