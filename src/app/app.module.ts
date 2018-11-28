import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TelecomservicesComponent } from './src/telecomservices/telecomservices.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MaterialsbillComponent } from './materialsbill/materialsbill.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    TelecomservicesComponent,
    ClientDetailsComponent,
    ProductDetailsComponent,
    MaterialsbillComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
