import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../model/ProductDetails';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  product: ProductDetails;

  productType: String = 'ProductName';

  constructor() {
    this.product = new ProductDetails();
    this.loadProductType();
    console.log(this.product);
  }

  loadProductType() {
    console.log("Call Prduct lookup service");
    this.product.productType = this.productType;
    return this.product;
  }

  ngOnInit() {
  }
}
