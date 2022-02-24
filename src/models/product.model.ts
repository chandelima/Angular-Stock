export interface Product {
  id?: number;
  name: string;
}

export interface ProductsResponse {
  message: string;
  result: Product[];
}
