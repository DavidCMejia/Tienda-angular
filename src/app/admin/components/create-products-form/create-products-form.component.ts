import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Storage,
        ref,
        deleteObject,
        uploadBytes,
        uploadString,
        uploadBytesResumable,
        percentage,
        getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-create-products-form',
  templateUrl: './create-products-form.component.html',
  styleUrls: ['./create-products-form.component.css']
})
export class CreateProductsFormComponent implements OnInit {


  form!: FormGroup;
  uploadPercent!: Observable<number>;


  constructor(
    private formBuilder: FormBuilder,
    private productsService:ProductsService,
    private router:Router,
    private storage: Storage

  ) {
    this.buildform();
  }

  ngOnInit(): void {

  }

  uploadFile(event: Event) {

    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    const name = file.name;
    const fileRef = ref(this.storage, name);
    const task = uploadBytesResumable(fileRef, file);

    task.on('state_changed',
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      this.form.get('progressBar')?.setValue(progress);
      document.getElementById("barraProgreso")!.innerHTML= 'Upload is ' + progress + '% done';
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(task.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        this.form.get('image')?.setValue(downloadURL);
        //document.getElementById("image")!.innerHTML= downloadURL;
      });
    }
  );

}


  buildform(){
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

  get priceField(){ //para sacar error si no tiene price required
    return this.form.get('price');
  }

}
