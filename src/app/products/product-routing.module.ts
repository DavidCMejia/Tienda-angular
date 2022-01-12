import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductsComponent } from "./products-components/products.component";

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: ':id',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule {}
