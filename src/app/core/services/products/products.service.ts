import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
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

  getProduct(id:string){ //metodo GET
    return this.http.get<Product>(`${environment.url_api}/products/${id}`); // para buscar producto por ID, cambio el link por COMILLAS raras y products/${id}
  }

  createProduct(product: Product){ //metodo POST
    return this.http.post(`${environment.url_api}/products`, product)
  }

  updateProduct(id:string, changes: Partial<Product>){ //metodo UPDATE/PUT
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }

  deleteProduct(id:string){ //metodo DELETE
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }

}

