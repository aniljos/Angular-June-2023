import { Component } from '@angular/core';
import { Product } from '../../model/Product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  public product: Product = new Product;
  private url: string;

  constructor(private httpClinet: HttpClient){
    this.url = "http://localhost:9000/products";
  }

  save(){
      this.httpClinet.post(this.url, this.product)
              .subscribe({
                next: () => {

                  alert("Saved Product");
                  this.product = new Product();

                },
                error: () => {
                  alert("Failed to save");
                }
              });

    
  }

  cancel(){

    alert("Cancelling");
    this.product = new Product();
  }
}
