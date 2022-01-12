import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'tienda-angular';
  items = ['camisa', 'pantalon', 'zapatos'];

  addItem(){
    this.items.push("Nuevo item");

  }
  deleteItem (index:number){
    this.items.splice(index, 1);
  }
  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }
}
