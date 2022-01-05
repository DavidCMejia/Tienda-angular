import { Component } from '@angular/core';
import { Product } from './core/models/product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tienda-angular';
  items = ['camisa', 'pantalon', 'zapatos'];

  addItem(){
    this.items.push("Nuevo item");

  }
  deleteItem (index:number){
    this.items.splice(index, 1);
  }
}
