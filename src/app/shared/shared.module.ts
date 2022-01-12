import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CartComponent

  ],

  imports: [
    CommonModule,
    RouterModule,
    MaterialModule

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CartComponent
  ]
})
export class SharedModule { }
