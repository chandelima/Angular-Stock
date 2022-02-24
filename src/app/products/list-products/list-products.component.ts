import { Component, OnInit } from '@angular/core';
import { Product, ProductsResponse } from 'src/models/product.model';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  response: ProductsResponse;
  searchQuery: string;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.listProducts()
    .subscribe(
      res => this.response = res
    );
  }

  public searchProduct(){
    if(this.searchQuery) {
      this.productService.searchProduct(this.searchQuery)
      .subscribe(
        res => {
          this.response = res
        },
        err => {
          if(err.status == 404) {
            this.response.result = [];
          }
        }
      );
    } else {
      this.getProducts()
    }
  }
}
