import {
  Component,
  Input,
  Output,
  EventEmitter,

} from '@angular/core'

import { Product } from '../../core/models/product.model'

import { CartService } from 'src/app/core/services/cart/cart.service';


@Component ({ //se declara app-product como mini app para ahorrar codigo y luego citar en una sola linea con <app-product/>
  selector: 'app-product',
  templateUrl:'./product-card.component.html',
  styleUrls: ['./product-card.component.css']

})

export class ProductComponent { // al poner la palabra export se puede usar en cualquier lado
  @Input() product!: Product; //cuando se deja product sin el !, bota error xq no se ha inicializado al poner product! le decimos a typescript que no va a tomar null or undefined
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor(

    private cartService: CartService

  ){  }

  addCart() {

    //this.productClicked.emit(this.product.id);
    this.cartService.addCart(this.product);

  }

}
