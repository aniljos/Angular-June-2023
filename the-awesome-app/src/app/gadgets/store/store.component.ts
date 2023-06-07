import { Component } from '@angular/core';
import { Product } from '../../model/Product';
import { GadgetService } from '../gadget.service';
import { CartItem } from 'src/app/model/CartItem';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  public products: Array<Product> = [];

  constructor(private service: GadgetService){

    service.fetchProducts().subscribe((data) => {
      this.products = data
    });

  }

  add(item:Product, quantity: string){

    debugger;
    this.service.addToCart(new CartItem(item, Number(quantity)));
  }

}
