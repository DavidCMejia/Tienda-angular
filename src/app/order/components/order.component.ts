import { Component, OnInit } from '@angular/core';
import { Product } from './../../core/models/product.model';
import { CartService } from './../../core/services/cart/cart.service';


import { Observable, map } from 'rxjs';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

   products$: Observable<Product[]> //no es necesario el products$! con el ! porque SI se uso en el constructor

  constructor(
    private cartService: CartService
  ) {

    this.products$ = this.cartService.cart$;


   }

  ngOnInit(): void {
  }

}
