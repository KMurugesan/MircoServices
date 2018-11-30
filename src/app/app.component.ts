import { ProductDetails } from './model/ProductDetails';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  @Input() product: ProductDetails;

  constructor() {
    this.product = new ProductDetails();
  }


}
