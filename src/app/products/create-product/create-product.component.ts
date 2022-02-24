import { Component, OnInit } from '@angular/core';
import { Product, ProductsResponse } from 'src/models/product.model';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  initialProduct: Product = {
    id: undefined,
    name: ''
  };
  product: Product = this.initialProduct;
  response: ProductsResponse;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  Save(){
    this.productService.createProduct(this.product).subscribe(
      res => {
        this.response = res;
        this.product = this.initialProduct;
      }

    );
  }

}
