//aqui se cuadra lo del link google.com/home

import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

//import { HomeComponent } from './home/home.component';

import { ContactComponent } from './contact/contact-components/contact.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
        path: 'home',
        loadChildren:() => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        //canActivate: [AdminGuard],
        loadChildren: () => import('./products/product.module').then(m => m.ProductModule)
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

  imports: [RouterModule.forRoot(routes,{
  preloadingStrategy: PreloadAllModules //sirve para acelerar la carga de las paginas en 3g lento menos de 10 segs
  })],

  exports: [RouterModule]
})

export class AppRoutingModule { }
