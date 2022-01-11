//aqui se cuadra lo del link google.com/home

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetalComponent } from './products/product-detal/product-detal.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path:'home',
        component: HomeComponent
      },
      {
        path:'products',
        component: ProductsComponent
      },
      {
        path:'products/:id',
        component: ProductDetalComponent
      },
      {
        path:'contact',
        component: ContactComponent
      },


    ]
  },
  {
    path:'demo',
    component: DemoComponent
  },
  {
    path:'**',
    component: PageNotFoundComponent

  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
