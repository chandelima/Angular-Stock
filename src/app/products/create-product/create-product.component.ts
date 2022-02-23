import { Component, OnInit } from '@angular/core';
import { Product, ProductsResponse } from 'src/models/product.model';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  request: Product = {
    name: ''
  };
  response: ProductsResponse;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  Save(){
    this.productService.createProduct(this.request).subscribe(
      res => this.response = res
    );
  }

}
