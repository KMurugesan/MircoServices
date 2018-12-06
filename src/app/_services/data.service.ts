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

  getClientDetails(clientName): Observable<ClientDetails> {
    const _headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });

    return this.httpClient.get<any>('http://india-archana.perficient.com:8081/client/findByCompany/' + clientName, { headers: _headers })
      .map(res => res.ClientDetails);
  }

  getProductDetails(productId: number, productName: string): Observable<ProductDetails> {
    return this.httpClient.get<any>('http://india-archana.perficient.com:8081/client/product')
      .map(res => res.ProductDetails);
  }

  persistClientDetails(details: ClientDetails): Observable<ClientDetails> {
    const options = this.options();
    return this.httpClient.post<ClientDetails>('http://india-archana.perficient.com:8081/client/createUpdateClient', details, options);
  }

  persistProductDetails(product: ProductDetails): Observable<ProductDetails> {
    const options = this.options();
    return this.httpClient.post<ProductDetails>('http://india-archana.perficient.com:8081', product, options);
  }

  planAction(clientDetail: ClientDetails): Observable<any> {
    console.log(clientDetail);
    const options = this.options();
    console.log(this.options);
    return this.httpClient.put<any>('http://india-archana.perficient.com:8081/client/updateStatus/', clientDetail, { headers: options.headers });
  }

  private options() {
    const _headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });
    const options = {
      headers: _headers
    };

    console.log(options.headers);

    return options;
  }
}
