import { ProductDetails } from './../model/ProductDetails';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: ProductDetails;

  // @Output() emit_product: EventEmitter<ProductDetails> = new EventEmitter<ProductDetails>();

  // @Output() products: EventEmitter<ProductDetails> = new EventEmitter<ProductDetails>();

  productTypes = [{ productName: 'Vodafone', productType: 'Thunder' },
  { productName: 'Airtel', productType: 'Storm' },
  { productName: 'Aircel', productType: 'Fast' },
  { productName: 'BSNL', productType: 'SFast' }];
  selectedProductType = this.productTypes[1];

  transportTypes = [{ transportName: 'Vodafone', transportType: 'Thunder' },
  { transportName: 'Airtel', transportType: 'Storm' },
  { transportName: 'Aircel', transportType: 'Fast' },
  { transportName: 'BSNL', transportType: 'SFast' }];
  selectedTransportType = this.transportTypes[1];

  bandwidthTypes = [{ bandwidthName: 'Vodafone', bandwidthType: 'Thunder' },
  { bandwidthName: 'Airtel', bandwidthType: 'Storm' },
  { bandwidthName: 'Aircel', bandwidthType: 'Fast' },
  { bandwidthName: 'BSNL', bandwidthType: 'SFast' }];
  selectedBandwidthType = this.bandwidthTypes[1];

  beTypes = [{ bEName: 'Vodafone', bEType: 'Thunder' },
  { bEName: 'Airtel', bEType: 'Storm' },
  { bEName: 'Aircel', bEType: 'Fast' },
  { bEName: 'BSNL', bEType: 'SFast' }];
  selectedBEType = this.beTypes[1];

  routerTypes = [{ routerName: 'Vodafone', routerType: 'Thunder' },
  { routerName: 'Airtel', routerType: 'Storm' },
  { routerName: 'Aircel', routerType: 'Fast' },
  { routerName: 'BSNL', routerType: 'SFast' }];
  selectedRouterType = this.routerTypes[1];

  constructor() {
    this.product = new ProductDetails();
    this.loadProductType();
    console.log(this.product);
  }

  loadProductType() {
    this.product.productType = this.productTypes;
    // this.product.transportType = this.transportTypes;
    // this.product.bandwidthType = this.bandwidthTypes;
    // this.product.businessExtensionType = this.beTypes;
    // this.product.routerType = this.routerTypes;
    return this.product;
  }

  ngOnInit() {
  }

  onProductChange($event) {
    console.log($event);
    this.selectedProductType = $event;
    // this.transportTypes =
    // this.product.productType. = $event;
  }

  // onTransportChange(newObj) {
  //   console.log(newObj);
  //   this.selectedTransportType = newObj;
  //   // this.product.transportType.push(this.selectedTransportType);
  // }

  // onBandwidthChange(newObj) {
  //   console.log(newObj);
  //   this.selectedBandwidthType = newObj;
  //   // this.product.bandwidthType = this.selectedBandwidthType;
  // }

  // onBEChange(newObj) {
  //   console.log(newObj);
  //   this.selectedBEType = newObj;
  //   // this.product.businessExtensionType = this.selectedBEType;
  // }

  // onRouterChange($event) {
  //   console.log($event);
  //   this.selectedRouterType = $event;
  //   // this.product.routerType = this.selectedRouterType;
  // }

  persistProductDetails(product) {
    console.log(product);
  }
}
