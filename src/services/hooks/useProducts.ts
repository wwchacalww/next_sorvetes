import { useQuery } from "react-query";
import { api } from "../api";

interface ProductProps {
  id: number;
  name: string;
  description: string;
  category: string;
  barcode?: string;
  code: string;
}

type GetProductsResponse = {
  products: ProductProps[];
  totalCount: number;
};

export async function getProducts(page: number): Promise<GetProductsResponse> {
  const { data, headers } = await api.get("products", {
    params: {
      page,
    },
  });

  const totalCount = Number(headers["x-total-count"]);

  const products = data.products.map((product: ProductProps) => {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      category: product.category,
      barcode: product.barcode,
      code: product.code,
    };
  });

  return {
    products,
    totalCount,
  };
}

export function useProducts(page: number) {
  return useQuery(["products", page], () => getProducts(page), {
    staleTime: 1000 * 60 * 10,
  });
}
