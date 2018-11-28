import { Price } from './Price';
export class ProductDetails {
  productType: any;
  transportType: any;
  bandwidthType: any;
  businessExtensionType: any;
  routerType: any;
  price: Price;
  constructor() {
    this.price = new Price();
  }
}
