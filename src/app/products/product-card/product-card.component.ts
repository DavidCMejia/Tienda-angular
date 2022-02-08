import {Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ViewChild} from '@angular/core'
import { Subject,debounceTime } from 'rxjs';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

import { Product } from '../../core/models/product.model'
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component ({ //se declara app-product como mini app para ahorrar codigo y luego citar en una sola linea con <app-product/>
  selector: 'app-product',
  templateUrl:'./product-card.component.html',
  styleUrls: ['./product-card.component.css']

})

export class ProductComponent implements OnInit { // al poner la palabra export se puede usar en cualquier lado
  @Input() product!: Product; //cuando se deja product sin el !, bota error xq no se ha inicializado al poner product! le decimos a typescript que no va a tomar null or undefined
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  @ViewChild('staticAlert', {static: false}) staticAlert!: NgbAlert;
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert!: NgbAlert;

  private _success = new Subject<string>(); //variables 'Añadito al carrito!'
  staticAlertClosed = false;
  successMessage = '';

  constructor(

    private cartService: CartService

  ){  }

  ngOnInit(): void {
     this.SelfCloseCartAlertTimeout();
  }

  SelfCloseCartAlertTimeout(){ //tiempo para que 'agregado al carrito' se cierre debouncetime 2 segundos
    setTimeout(() => this.staticAlert.close(), 20000);
    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(2000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });

  }

  addCart() {
    //this.productClicked.emit(this.product.id);
    this.cartService.addCart(this.product);

  }

  AddedtoCart() {
    this._success.next("Producto añadido al carrito!");

  }

}

