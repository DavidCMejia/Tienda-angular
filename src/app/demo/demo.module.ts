import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms'; //este es para las funciones de [ngModel]

import { DemoComponent } from './demo-components/demo.component';
import { DemoRoutingModule } from './demo-routing.module';


@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class DemoModule { }
