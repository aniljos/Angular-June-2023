import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  {path: "products", component: ListProductsComponent},
  {path: "products/:id", component: EditProductComponent}
]

@NgModule({
  declarations: [
    ListProductsComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), HttpClientModule
  ]
})
export class ProductsModule { }
