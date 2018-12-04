import { ProductDetails } from './ProductDetails';
import { ClientAddress } from './ClientAddress';

export class ClientDetails {
  clientName: string;
  company: string;
  companyAddress: string;
  email: string;
  extension: number;
  preferredContactMethod: string;
  address: ClientAddress;
  product: ProductDetails;
  status: string;
  errorCd: number;
  errorMsg: string;

  constructor() {
    this.address = new ClientAddress();
    this.product = new ProductDetails();
  }
}
