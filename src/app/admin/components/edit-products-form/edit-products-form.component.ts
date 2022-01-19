import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-products-form',
  templateUrl: './edit-products-form.component.html',
  styleUrls: ['./edit-products-form.component.css']
})
export class EditProductsFormComponent implements OnInit {

  form!: FormGroup;
  id!: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService:ProductsService,
    private router:Router,
    private activeRoute: ActivatedRoute
  ) {
    this.buildform();
   }


  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params)=>{
    this.id = params['id'];
    this.productsService.getProduct(this.id)!
    .subscribe(product=>{this.form.patchValue(product);

    });
      });
  }

  updateProduct(event: Event){ //SIN IMAGEN SE ACTUALIZA
    event.preventDefault();
    if (this.form.valid){

      const product = this.form.value;
      this.productsService.updateProduct(this.id, product).subscribe(newProduct =>{
        console.log(newProduct);

        this.router.navigate(['admin/products']); // va a los nuevos products en admin

      });

    }
  }

buildform(){
    this.form = this.formBuilder.group({
    title: ['',[Validators.required]],
    price: ['',[Validators.required]],
    image: [''],
    description:['',[Validators.required]]
    });
  }

  get priceField(){ //para sacar error si no tiene price required
    return this.form.get('price');
  }


}
