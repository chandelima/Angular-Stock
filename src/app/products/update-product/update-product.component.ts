import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, ProductsResponse } from 'src/models/product.model';

import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id: number;
  request: Product;
  response: ProductsResponse;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(this.id).subscribe(
      response => this.request = {
          id: response.result[0].id,
          name: response.result[0].name
        }
    );
  }

  Update() {
    this.productService.updateProduct(this.request).subscribe(
      _response => this.response = _response
    );
  }

}
