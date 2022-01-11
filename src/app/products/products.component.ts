import { Component, OnInit } from '@angular/core';
import { Product } from '../core/models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
//convirtiendo Products.components tomando el array de products desde el servicio
  products!: Product[]; // se declara products
  constructor(private productsService: ProductsService) {} // se construye el servicio

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts(); // se aplica la funcion getAllProducts para llamarlos
  }

  clickProduct(id:number){
    console.log(id+'product')
  }
}
