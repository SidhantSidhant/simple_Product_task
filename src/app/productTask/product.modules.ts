import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AddProductComponent } from "./add-product/add-product.component";
import { ProductCardComponent } from "./product-card/product-card.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";


@NgModule({
    declarations: [
        AddProductComponent,
        ProductDetailsComponent,
        ProductCardComponent
    ],
    imports: [
        CommonModule
    ],
    providers : [],
    exports: [AddProductComponent]
})
export class ProductModules{

}