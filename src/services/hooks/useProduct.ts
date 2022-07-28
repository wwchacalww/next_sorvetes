import { useQuery } from "react-query";
import { api } from "../apiClient";

type ProductResponse = {
  id: string;
  name: string;
  description: string;
  category: string;
  code: string;
  barcode: string;
  isActive: boolean;
};

export async function getProduct(id: string): Promise<ProductResponse> {
  const { data } = await api.get(`products/${id}`);

  console.log(data);

  return {
    id: data.id,
    name: data.name,
    description: data.description,
    category: data.category,
    code: data.code,
    barcode: data.barcode,
    isActive: data.isActive,
  };
}

export function useProduct(id: string) {
  return useQuery(["product", id], () => getProduct(id), {
    staleTime: 1000 * 60 * 10,
  });
}
