import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from '../../model/Product';
import { Router } from '@angular/router';
import {environment} from '../../../environments/environment'
import { TokenService } from 'src/app/services/token-service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {


  public products: Array<Product> = [];
  public searchKey: string = "";
  private url: string;

  //dependency injection of HttpClient(import the HttpClinetModule)
  constructor(private httpClient: HttpClient, private router: Router, private tokenService: TokenService) {

    this.url = environment.productsUrl;
    this.fetchProducts();
  }

  fetchProducts() {

    //const accessToken = this.tokenService.getAccessToken();
    //const headers = {"Authorization": `Bearer ${accessToken}`};

    this.httpClient.get<Array<Product>>(this.url)
      .subscribe({
        next: (data) => {
          console.log("success", data)
          this.products = data;
        },
        error: (resp) => {
          console.log("error", resp);
        }
      });
  }



  deleteProduct(product: Product) {

      const url = this.url + "/" + product.id;
      this.httpClient.delete(url)
            .subscribe({
              next: () => {

                  alert("Product deleted");
                  //this.fetchProducts();
              },
              error: () => {

                  alert("Product deletion failed");
                  //this.fetchProducts();
              },
              complete: () => {
                  this.fetchProducts();
              }
            });

  }

  editProduct(product: Product){
      this.router.navigate(["/products", product.id])
  }
}
