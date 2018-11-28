import { Price } from './Price';
export class ProductDetails {
  productType: any;
  transportType: String;
  bandwidthType: String;
  businessExtensionType: String;
  routerType: String;
  price: Price;
  constructor() {
    this.price = new Price();
  }
}
