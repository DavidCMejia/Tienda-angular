import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-detal',
  templateUrl: './product-detal.component.html',
  styleUrls: ['./product-detal.component.css']

})
export class ProductDetalComponent implements OnInit {

  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService

  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      const id = params['id'];
      this.product = this.productsService.getProduct(id)!;

    })
  }

}
