import { Component } from '@angular/core';
import { CartItem } from 'src/app/model/CartItem';
import { GadgetService } from '../gadget.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent {

  public cart: Array<CartItem> = [];

  constructor(private service: GadgetService){

    //this.cart = service.getCart();

    service.subject.subscribe((data) => {
        this.cart = data;
    });

  }

}
