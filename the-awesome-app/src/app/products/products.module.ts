import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './product-filter.pipe';
import { AddProductComponent } from './add-product/add-product.component';


const routes: Routes = [
  {path: "products", component: ListProductsComponent},
  {path: "products/add", component: AddProductComponent},
  {path: "products/:id", component: EditProductComponent}
  
]

@NgModule({
  declarations: [
    ListProductsComponent,
    EditProductComponent,
    ProductFilterPipe,
    AddProductComponent,

  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), HttpClientModule, FormsModule
  ]
})
export class ProductsModule { }
