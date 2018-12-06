import { ProductDetails } from './ProductDetails';
import { ClientAddress } from './ClientAddress';

export class ClientDetails {
  name: string;
  company: string;
  companyAddress: string;
  email: string;
  phone: number;
  preferredContactMethod: string;
  address: ClientAddress;
  product: ProductDetails;
  action: string;
  status: string;
  errorCd: number;
  errorMsg: string;

  constructor() {
    this.address = new ClientAddress();
    this.product = new ProductDetails();
  }
}
