import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsComponent } from "./products-components/products.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductComponent } from "./product-card/product-card.component";

import { ProductRoutingModule } from "./product-routing.module";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";

import { ProductsService } from "../services/products.service";

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
    FormsModule

  ],
  providers: [ProductsService]

})
export class ProductModule {

}

