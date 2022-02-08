import { Injectable } from '@angular/core';

import { Product } from '../../models/product.model';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  addCart (product: Product){
    this.products = [...this.products, product];
    this.cart.next(this.products);

  }

  remove(productId: String): void { // individual si tiene 3, se reduce a 2
    let i: number = this.products.length - 1;
    let productFound: Boolean = false;
    let aux: Product[] = [];

    while (i >= 0) {
      if (!productFound && this.products[i].id === productId) {
        productFound = true;
      } else {
        aux.unshift(this.products[i]);
      }
      i--;
    }

    this.products = aux;
    this.cart.next(aux);
  }

  removeFromCart(productId: String) {// remueve la fila entera del product
    this.products = this.products.filter(product => product.id !== productId);
    this.cart.next(this.products);
  }



  constructor() { }
}
