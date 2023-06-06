import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from '../../model/Product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {


  public products: Array<Product> = [];

  //dependency injection of HttpClient(import the HttpClinetModule)
  constructor(private httpClient: HttpClient){

      const url = "http://localhost:9000/products";

      httpClient.get<Array<Product>>(url)
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
}
