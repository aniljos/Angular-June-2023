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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenService } from './services/token-service';
import { TokenServiceImpl } from './services/token-service-impl';
import { SearchComponent } from './search/search.component';
import { TokenInterceptorService } from './services/token-interceptor.service';

//static import
//import { GadgetsModule } from './gadgets/gadgets.module';

//map the routes to the view(components)
const routes: Routes = [
  {path: "home", component: HelloComponent},
  {path: "binding", component: DataBindingComponent},
  {path: "login", component: LoginComponent},
  {path: "search", component: SearchComponent},
  {path: "gadgets", loadChildren: () => import('./gadgets/gadgets.module').then(m => m.GadgetsModule)},
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
    HttpClientModule,
    //GadgetsModule
  ],
  providers: [
    
    {provide: TokenService, useClass: TokenServiceImpl}, 
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
