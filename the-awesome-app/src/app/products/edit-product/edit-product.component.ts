import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  public id: number = 0;

  constructor(private activatedRoute: ActivatedRoute) {

    activatedRoute.params.subscribe((data: any) => {
        
        this.id = data.id;
    });

    //this.id = activatedRoute.snapshot.params["id"]

  }
}
