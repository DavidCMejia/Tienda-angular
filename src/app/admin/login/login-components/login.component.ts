import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormGroupDirective, NgForm, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';

import {AuthService} from './../../../core/services/auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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

  login(event: Event) {
    event.preventDefault();
    if (this.form.valid){
      const value = this.form.value;
      this.authService.login(value. email, value.password)
      .then(()=>{
        this.router.navigate( ['/admin']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.message);
        //alert('Usuario/contraseña no valida')//VERIFICAR SI SE PUEDE HACER MAS BONITO
        document.getElementById("wrongPwLabel")!.innerHTML= "El usuario o la contraseña son incorrectos.";

      });
    }

  }

  buildform(){
    this.form = this.formBuilder.group({
    email: ['',[Validators.required, Validators.pattern(this.emailPattern)]],
    password: ['',[Validators.required]],
    });
  }

  get emailField(){ //para sacar error si no tiene email required
    return this.form.get('email');
  }
  get passwordField(){ //para sacar error si no tiene pw required
    return this.form.get('password');
  }


}

