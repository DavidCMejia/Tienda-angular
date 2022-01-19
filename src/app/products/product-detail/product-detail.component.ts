import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/core/models/product.model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']

})
export class ProductDetailComponent implements OnInit {

  product!: Product | any; //se agrega any para que coja el array x ID

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService

  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
    const id = params['id'];
    this.fetchProduct(id);
    });

  }

  fetchProduct(id:string){ //metodo GET
    this.productsService.getProduct(id)!
    .subscribe(product =>{
    this.product = product;
    }); // se aplica la funcion getAllProducts para llamarlos
  }

  createProduct(){
    const newProduct: Product = {
      id: '222',
      title: 'nuevo desde Angular',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'nuevo producto'

    };

    this.productsService.createProduct(newProduct)
    .subscribe(product =>{
      console.log(product);
    }); // se aplica la funcion getAllProducts para llamarlos
  }

updateProduct(){
  const updateProduct: Partial<Product> = {

    title: 'XDDDD',
    price: 55555,
    description: 'Edicion titulo y precio'

  };

  this.productsService.updateProduct('222',updateProduct)
  .subscribe(product =>{
  console.log(product);
  });

}

deleteProduct(){
  this.productsService.deleteProduct('222')
  .subscribe(result =>{
    console.log(result);
  });

  }
}
