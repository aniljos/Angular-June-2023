import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { DataBindingComponent } from './databinding/databinding.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { ProductsModule } from './products/products.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { TokenService } from './services/token-service';
import { TokenServiceImpl } from './services/token-service-impl';
import { SearchComponent } from './search/search.component';

//map the routes to the view(components)
const routes: Routes = [
  {path: "home", component: HelloComponent},
  {path: "binding", component: DataBindingComponent},
  {path: "login", component: LoginComponent},
  {path: "search", component: SearchComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", component: RouteNotFoundComponent}
]

// const service: TokenService = new TokenServiceImpl()
@NgModule({
  declarations: [
    AppComponent, HelloComponent, DataBindingComponent, RouteNotFoundComponent, LoginComponent, SearchComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot(routes),
    ProductsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: TokenService, useClass: TokenServiceImpl}],
  bootstrap: [AppComponent]
})
export class AppModule { }
