import { Component, OnInit } from '@angular/core';
import { Product } from './../../core/models/product.model';
import { CartService } from './../../core/services/cart/cart.service';


import { Observable } from 'rxjs';


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
    //this.products$ = this.cartService.cart$.pipe(map((products:[]) => {
    //  const distintos = [...new Set(products)];
    //  return distintos;
   // }));



   }

  ngOnInit(): void {
  }

}
