import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ProductsModule} from "./products/products.module";
import {NumericDirective} from "./numeric.directive";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        ProductsModule,
        NumericDirective
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
