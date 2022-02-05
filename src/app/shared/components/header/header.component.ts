import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CartService } from 'src/app/core/services/cart/cart.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  total$ = new Observable<number>();

  constructor(
    private cartService: CartService
  )
   {
    ///this.cartService.cart$ MODO SIN PIPE para contar el carrito
    ///.subscribe(products=>{
    ///this.total = products.length;
    ///})

    this.total$ = this.cartService.cart$
    .pipe(
      map(products=>products.length)
    );

   }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {

  }

}
