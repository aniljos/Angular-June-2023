import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../model/Product';
import { CartItem } from '../../model/CartItem';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent implements OnChanges, OnInit{

  @Input()
  public product!: Product;

  @Input()
  public even!: boolean;

  @Output()
  public addToCart: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  constructor(){
    console.log("[ProductItemComponent] constructor", this.product)
  }


  add(product: Product, quantity: string){

    //publish the event;
    this.addToCart.emit(new CartItem(product, Number(quantity)));
  }

  ngOnInit(): void {
    console.log("[ProductItemComponent] ngOnInit", this.product)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("[ProductItemComponent] ngOnChanges", changes)
  }
  
}
