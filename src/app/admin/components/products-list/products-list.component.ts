import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/core/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products!: Product[];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService
  ) { }


  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe(products =>{
    this.products=products;
    }); // se aplica la funcion getAllProducts para llamarlos
  }
  deleteProduct(id: string){
    this.productsService.deleteProduct(id).subscribe(result =>{
      console.log(result);

        if (result) { //a partir de este IF se actualiza luego de borrar
          const index = this.products.findIndex(product => product.id === id);
          this.products.splice(index, 1);
          this.products = [...this.products];
      }
    });

    }


}
