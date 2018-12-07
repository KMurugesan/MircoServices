import { ClientDetails } from './../model/ClientDetails';
import { Component, OnInit, Input } from '@angular/core';
import { ProductDetails } from '../model/ProductDetails';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  @Input() product: ProductDetails;
  @Input() clientDetail: ClientDetails;
  clientName: string;
  companyName: string;
  email: string;
  extension: number;
  productType: string;
  totalCharges: number;
  discount: number;

  constructor() {
    this.clientDetail = new ClientDetails();
    this.product = new ProductDetails();
    this.loadProductType();
    console.log(this.product);
  }

  loadProductType() {
    console.log('Call Product lookup service');
    this.clientName = this.clientDetail.name;
    this.companyName = this.clientDetail.company;
    this.email = this.clientDetail.email;
    this.extension = this.clientDetail.phone;
    this.productType = this.product.productType;
    this.totalCharges = this.product.price.total;
    this.discount = this.product.price.discount;
    return this.product;
  }

  ngOnInit() {
  }
}
