import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import {AuthService} from './../../../core/services/auth/auth.service'




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  form!: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildform();
  }

  ngOnInit(): void {

  }


  register(event: Event) {
    event.preventDefault();
    if (this.form.valid){
      const value = this.form.value;
      this.authService.createUser(value. email, value.password)
      .then(()=>{
        this.router.navigate( ['/login']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error.message");
        // ..
      });

    }

  }

  buildform(){
    this.form = this.formBuilder.group({
    email: ['',[Validators.required, Validators.pattern(this.emailPattern)]],
    password: ['',[Validators.required,Validators.minLength(6)]],
    });
  }



  get emailField(){ //para sacar error si no tiene email required
    return this.form.get('email');
  }
  get passwordField(){ //para sacar error si no tiene pw required
    return this.form.get('password');
  }


}
