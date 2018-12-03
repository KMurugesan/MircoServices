import { ClientAddress } from './ClientAddress';

export class ClientDetails {
  clientName: string;
  company: string;
  companyAddress: string;
  email: string;
  extension: number;
  preferredContactMethod: string;
  address: ClientAddress;
  productId: number;
  productName: string;
  status: string;
  errorCd: number;
  errorMsg: string;

  constructor() {
    this.address = new ClientAddress();
  }
}
