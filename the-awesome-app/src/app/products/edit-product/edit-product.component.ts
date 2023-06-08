import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/Product';
import { Location } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  public product: Product = new Product();
  public id: number = 0;
  private url: string = "";


  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient, 
            private location: Location) {

    activatedRoute.params.subscribe((data: any) => {
        
        this.id = data.id;
        //this.url = "http://localhost:9000/products/" + this.id;
        this.url = environment.productsUrl + "/" +  this.id;

        this.httpClient.get<Product>(this.url)
                  .subscribe({
                    next: (data) => {
                        this.product = data;
                    }
                  })
    });

    //this.id = activatedRoute.snapshot.params["id"]

  }


  save(){
    this.httpClient
          .put(this.url, this.product)
          .subscribe({
            next: () => {
                this.location.back();
            },
            error: () => {
                alert("Failed to update..")
            }

          })
  }

  cancel(){
    this.location.back();
  }
}
