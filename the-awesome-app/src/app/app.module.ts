import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { DataBindingComponent } from './databinding/databinding.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { ProductsModule } from './products/products.module';

//map the routes to the view(components)
const routes: Routes = [
  {path: "home", component: HelloComponent},
  {path: "binding", component: DataBindingComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", component: RouteNotFoundComponent}
]


@NgModule({
  declarations: [
    AppComponent, HelloComponent, DataBindingComponent, RouteNotFoundComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot(routes),
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
