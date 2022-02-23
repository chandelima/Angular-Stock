export interface Product {
  id?: number;
  name: string;
}

export interface ProductsResponse {
  status: number;
  message: string;
  result: Product[];
}
