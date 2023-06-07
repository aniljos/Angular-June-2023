import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { StoreComponent } from './store/store.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GadgetService } from './gadget.service';

const routes: Routes = [
  {path: "gadgets", component: MainComponent, children: [

    {path: "store", component: StoreComponent},
    {path: "cart", component: ViewCartComponent},
  ]}
]

@NgModule({
  declarations: [
    MainComponent,
    StoreComponent,
    ViewCartComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), HttpClientModule
  ],
  providers: [{provide: GadgetService, useClass: GadgetService}]
})
export class GadgetsModule { }
