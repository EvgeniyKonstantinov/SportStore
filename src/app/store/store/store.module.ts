import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreComponent } from "./store.component";
import { FormsModule } from "@angular/forms";
import { CounterDirective } from "./counter.directive";
import { ModelModule } from "../../model/model.module";
import { CartSummaryComponent } from "../cart-summary/cart-summary.component";
import { CartDetailComponent } from "../cart-detail/cart-detail.component";
import { CheckoutComponent } from "../checkout/checkout.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
    exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})

export class StoreModule {}