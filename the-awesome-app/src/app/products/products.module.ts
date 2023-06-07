import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './product-filter.pipe';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthGuardService } from '../services/auth-guard.service';


const routes: Routes = [
  {path: "products", component: ListProductsComponent, canActivate:[AuthGuardService]},
  {path: "products/add", component: AddProductComponent, canActivate:[AuthGuardService]},
  {path: "products/:id", component: EditProductComponent, canActivate:[AuthGuardService]}
  
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
