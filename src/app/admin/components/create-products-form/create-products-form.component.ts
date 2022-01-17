import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-products-form',
  templateUrl: './create-products-form.component.html',
  styleUrls: ['./create-products-form.component.css']
})
export class CreateProductsFormComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService:ProductsService,
    private router:Router


  ) {
    this.buildform();
  }

  ngOnInit(): void {

  }

  private buildform(){
    this.form = this.formBuilder.group({
    id: ['',[Validators.required]],
    title: ['',[Validators.required]],
    price: ['',[Validators.required]],
    image: [''],
    description:['',[Validators.required]]
    });
  }

  createProduct(event: Event){ //SIN IMAGEN SE ACTUALIZA
    event.preventDefault();
    if (this.form.valid){

      const newProduct = this.form.value;
      this.productsService.createProduct(newProduct).subscribe(newProduct =>{
        console.log(newProduct);

        this.router.navigate(['admin/products']); // va a los nuevos products en admin

      });

    }


  }


}
