import { ClientDetails } from './../model/ClientDetails';
import { ProductDetails } from './../model/ProductDetails';
import { HttpClientModule, HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  clientDetailsTest: ClientDetails;
  productDetailsTest: ProductDetails;
  clientName: string;
  companyName: string;
  path: string;
  action: string;
  productTypes = [{ productName: 'Vodafone', productType: 'Thunder' }];
  constructor(private httpClient: HttpClient) {
    this.clientDetailsTest = new ClientDetails();
    this.productDetailsTest = new ProductDetails();
  }

  getClientDetails(clientName): Observable<ClientDetails> {
    const options = this.options();
    // JSON.stringify(clientName);
    // this.path = 'http://india-saviya.perficient.com:8082/client/searchClient/' + clientName;
    // this.action = this.path.toString();
    return this.httpClient.get<ClientDetails>('http://india-saviya.perficient.com:8082/client/searchClient/' + clientName, options)
      ;
  }

  getProductDetails(productName: string): Observable<ProductDetails> {
    const options = this.options();
    console.log(productName);
    return this.httpClient.get<ProductDetails>('http://india-vijay.perficient.com:8082/products/search/name/' + productName, options);
  }

  persistClientDetails(details: ClientDetails): Observable<ClientDetails> {
    const options = this.options();
    return this.httpClient.post<ClientDetails>('http://india-saviya.perficient.com:8082/client/createUpdateClient', details, options);
  }

  persistProductDetails(product: ProductDetails): Observable<ProductDetails> {
    const options = this.options();
    return this.httpClient.post<ProductDetails>('http://india-saviya.perficient.com:8082', product, options);
  }

  planAction(clientDetail: ClientDetails): Observable<any> {
    console.log(clientDetail);
    const options = this.options();
    console.log(this.options);
    return this.httpClient.put<any>('http://india-saviya.perficient.com:8082/client/updateStatus/', clientDetail, { headers: options.headers });
  }

  private options() {
    const _headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });
    const options = {
      headers: _headers,
      // body: this.clientName
    };

    console.log(options.headers);

    return options;
  }
}
