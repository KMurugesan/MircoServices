import { Price } from './Price';
export class ProductDetails {
  productId: number;
  productName: string;
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
