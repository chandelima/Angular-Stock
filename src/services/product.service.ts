import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import { Product, ProductsResponse } from 'src/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "/api/products";

  constructor(private http: HttpClient) { }

  listProducts(): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(this.url);
  }

  getProduct(id: number): Observable<ProductsResponse> {
    const _url = `${this.url}/${id}`;
    return this.http.get<ProductsResponse>(_url);
  }

  searchProduct(query: string): Observable<ProductsResponse> {
    const _url = `${this.url}/search?name=${query}`;
    return this.http.get<ProductsResponse>(_url);
  }

  createProduct(request: Product): Observable<ProductsResponse> {
    return this.http.post<ProductsResponse>(this.url, request);
  }

  updateProduct(request: Product): Observable<ProductsResponse> {
    return this.http.put<ProductsResponse>(this.url, request);
  }

  deleteProduct(id: number): Observable<any> {
    const _url = `${this.url}/${id}`;
    return this.http.delete(_url);
  }
}
