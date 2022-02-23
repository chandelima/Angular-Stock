import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { FormsModule } from '@angular/forms';
import { UpdateProductComponent } from './products/update-product/update-product.component';
import { DeleteProductComponent } from './products/delete-product/delete-product.component';
import { NavComponent } from './navigation/nav/nav.component';
import { FooterComponent } from './navigation/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    CreateProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
