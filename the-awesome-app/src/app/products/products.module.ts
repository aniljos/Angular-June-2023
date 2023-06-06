import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {path: "products", component: ListProductsComponent}
]

@NgModule({
  declarations: [
    ListProductsComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), HttpClientModule
  ]
})
export class ProductsModule { }
