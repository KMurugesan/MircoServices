import { ProductDetails } from './../model/ProductDetails';
import { ClientDetails } from './../model/clientDetails';
import { HttpClientModule, HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  clientDetailsTest: ClientDetails;
  productDetailsTest: ProductDetails;
  productTypes = [{ productName: 'Vodafone', productType: 'Thunder' }];
  constructor(private httpClient: HttpClient) {
    this.clientDetailsTest = new ClientDetails();
    this.productDetailsTest = new ProductDetails();
  }

  getClientDetails(clientName: string): ClientDetails {

    // return this.httpClient.get<ClientDetails>('/v-employee/loadEmployee');
    // .map(res => res.entity);
    // return this.clientDetailsTest;
    return this.mockClientDetails();
  }

  mockClientDetails() {
    this.clientDetailsTest.address.addressLine1 = '3/29 Rayapuram street';
    this.clientDetailsTest.address.addressLine2 = 'Kaveriyammapatty';
    this.clientDetailsTest.productId = 12;
    this.clientDetailsTest.productName = 'Vodafone';
    return this.clientDetailsTest;
  }

  getProductDetails(productId: number, productName: string): ProductDetails {
    return this.mockProductDetails();
  }

  mockProductDetails() {
    this.productDetailsTest.productType = this.productTypes;
    this.productDetailsTest.transportType = 'abcd';
    this.productDetailsTest.bandwidthType = '5MB';
    return this.productDetailsTest;
  }
}
