import { ClientDetails } from './../model/ClientDetails';
import { ProductDetails } from './../model/ProductDetails';
import { HttpClientModule, HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  clientDetailsTest: ClientDetails;
  productDetailsTest: ProductDetails;
  clientName: string;
  companyName: string;
  action: string;
  productTypes = [{ productName: 'Vodafone', productType: 'Thunder' }];
  constructor(private httpClient: HttpClient) {
    this.clientDetailsTest = new ClientDetails();
    this.productDetailsTest = new ProductDetails();
  }

  getClientDetails(clientName: string): Observable<ClientDetails> {
    const _headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });
    const params = new HttpParams().set('company', clientName);
    return this.httpClient.get<any>('http://10.113.34.203:8081/client/findByCompany/', { headers: _headers, params })
      .map(res => res.ClientDetails);
  }

  mockClientDetails() {
    this.clientDetailsTest.address.addressLine1 = '3/29 Rayapuram street';
    this.clientDetailsTest.address.addressLine2 = 'Kaveriyammapatty';
    this.clientDetailsTest.product.productId = 12;
    this.clientDetailsTest.product.productName = 'Vodafone';
    return this.clientDetailsTest;
  }

  getProductDetails(productId: number, productName: string): Observable<ProductDetails> {
    return this.httpClient.get<any>('/client/product')
      .map(res => res.ProductDetails);
  }

  mockProductDetails() {
    this.productDetailsTest.productType = this.productTypes;
    this.productDetailsTest.transportType = 'abcd';
    this.productDetailsTest.bandwidthType = '5MB';
    return this.productDetailsTest;
  }

  persistClientDetails(details: ClientDetails): Observable<ClientDetails> {
    return this.httpClient.post<ClientDetails>('', details);
  }

  persistProductDetails(product: ProductDetails): Observable<ProductDetails> {
    return this.httpClient.post<ProductDetails>('', product);
  }

  planAction(clientName, companyName, action): Observable<any> {
    const params = new HttpParams()
      .set('clientName', clientName)
      .set('companyName', companyName)
      .set('action', action);
    return this.httpClient.post<any>('', { params });
  }

}
