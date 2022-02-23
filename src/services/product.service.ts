import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import { Product, ProductsResponse } from 'src/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "http://localhost:8080/products";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(this.url);
  }

  getProduct(id: number): Observable<ProductsResponse> {
    const _url = `${this.url}/${id}`;
    return this.http.get<ProductsResponse>(_url);
  }

  createProduct(request: Product): Observable<ProductsResponse> {
    return this.http.post<ProductsResponse>(this.url, request);
  }

  updateProduct(request: Product): Observable<ProductsResponse> {
    return this.http.put<ProductsResponse>(this.url, request);
  }

  deleteProduct(id: number, request: Product): Observable<any> {
    // return this.http.delete<ProductsResponse>(this.url);       --> beauty way

    // delete from here after Daniel fix on backend (backend is requiring body and URL parameter for delete requests)
    const _url = `${this.url}/${id}`;
    return this.http.request("DELETE", _url, { body: request })
  }
}
