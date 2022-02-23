import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product.model';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  responseProducts: Product[];

  constructor(private produtService: ProductService) { }

  ngOnInit(): void {
    this.produtService.getProducts()
      .subscribe(
        response => this.responseProducts = response.result
      );
  }

}
