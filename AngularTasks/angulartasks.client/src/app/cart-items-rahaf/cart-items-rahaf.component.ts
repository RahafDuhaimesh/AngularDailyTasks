import { Component } from '@angular/core';
import { URLService } from '../URL/url.service';

@Component({
  selector: 'app-cart-items-rahaf',
  templateUrl: './cart-items-rahaf.component.html',
  styleUrl: './cart-items-rahaf.component.css'
})
export class CartItemsRAHAFComponent {
  ngOnInit() { this.cartITEMS() }

  constructor(private _ser: URLService) { }
  arrayOfData: any
  cartITEMS() {
    this._ser.cartItemObser.subscribe((data) => {
    this.arrayOfData = data
    })
  }

  incrementQuantity(id : any) {
    this._ser.increaseQuantity(id);
  }
  decrementQuantity(id: any) {
    this._ser.decreaseQuantity(id);
  }
}
