import { Injectable } from '@angular/core';
import { Product } from '../core/models/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'; // se importa la VAR del Link URL

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(){
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }
  getProduct(id:string){
    return this.http.get<Product>(`${environment.url_api}/products/${id}`); // para buscar producto por ID, cambio el link por COMILLAS raras y products/${id}
  }
  createProduct(product: Product){
    return this.http.post(`${environment.url_api}/products`, product)
  }

}

