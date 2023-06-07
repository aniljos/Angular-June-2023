import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Product } from '../model/Product';
import { CartItem } from '../model/CartItem';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class GadgetService {

  private url: string= "";
  private cart: Array<CartItem> = []
  public subject: BehaviorSubject<Array<CartItem>> = new BehaviorSubject<Array<CartItem>>([]);

  constructor(private httpClient: HttpClient) {

    this.url = environment.productsUrl;
   }

   //invoking and async method
   // fetchProduct is itself async
   // async methods: Observable, Callbacks, Promises
   fetchProducts(){

      return this.httpClient.get<Array<Product>>(this.url, {observe: 'body'});
   }

   addToCart(item: CartItem): void{

      debugger;
      this.cart.push(item);

      this.subject.next([...this.cart]);
   }

   getCart(): Array<CartItem>{

    //return a copy of the cart
    // ... : spread operator(ES6)
      return [...this.cart]
   }



}
