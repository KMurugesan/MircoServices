import { Price } from './Price';
export class ProductDetails {
  productId: number;
  name: any;
  productType: any;
  transport: String;
  bandwidth: String;
  buildingExtn: String;
  router: String;
  price: Price;
  constructor() {
    this.price = new Price();
  }
}
