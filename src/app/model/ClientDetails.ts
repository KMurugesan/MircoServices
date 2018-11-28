import { ClientAddress } from './ClientAddress';

export class ClientDetails {
  clientName: string;
  company: string;
  companyAddress: string;
  email: string;
  extension: number;
  preferredContactMethod: string;
  address: ClientAddress;

  constructor() {
    this.address = new ClientAddress();
  }
}
