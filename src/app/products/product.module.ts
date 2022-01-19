import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsService } from "../core/services/products/products.service";

import { ProductsComponent } from "./products-components/products.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductComponent } from "./product-card/product-card.component";

import { ProductRoutingModule } from "./product-routing.module";
import { SharedModule } from "../shared/shared.module";
import { MaterialModule } from "../material/material.module"; //para usar diseños de angular


@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    MaterialModule

  ],
  providers: [ProductsService]

})
export class ProductModule {

}

