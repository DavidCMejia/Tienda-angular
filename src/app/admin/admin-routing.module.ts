import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './../core/guards/admin.guard'
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CreateProductsFormComponent } from './components/create-products-form/create-products-form.component';
import { EditProductsFormComponent } from './components/edit-products-form/edit-products-form.component'
import { ProductsComponent } from '../products/products-components/products.component';


const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    canActivate: [AdminGuard],
    children:[
      {
        path: 'create',
        component: ProductFormComponent //ruta normal sin LazyLoading no es necesario
      },
      {
        path: 'products',
        component: ProductsListComponent
      },
      {
        path: 'products/create',
        component: CreateProductsFormComponent
      },
      {
        path:'products/edit/:id',
        component: EditProductsFormComponent
      },
      {
        path:'productsPreview',
        component: ProductsComponent
      }

    ]
  }

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
