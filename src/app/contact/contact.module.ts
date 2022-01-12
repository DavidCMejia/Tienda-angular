import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ContactComponent } from './contact-components/contact.component';
import { ContactRoutingModule } from './contact-routing.module';


@NgModule({
  declarations: [
    ContactComponent,

  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule

  ]
})
export class ContactModule { }
