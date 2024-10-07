import { Component } from '@angular/core';
import { URLService } from '../URL/url.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {


  ngOnInit() { this.get(); }

  constructor(private _ser: URLService) { }

  arrayOfData: any
  get() {
    this._ser.GetAllProducts().subscribe((data) => {
      this.arrayOfData = data
      console.log(data)
    })
  }
  object = {
    cartID : 0,
    productId: 0,
    UserID : 0,
    quantity: 0
  }

  addToCartFunction(id: any) {
    debugger
    this.object.productId = id;

    this._ser.addToCart({ ...this.object });
  }
}
