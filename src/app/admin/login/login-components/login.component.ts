import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.buildform();
  }

  ngOnInit(): void {
  }

  buildform(){
    this.form = this.formBuilder.group({
    email: ['',[Validators.required], Validators.email],
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
