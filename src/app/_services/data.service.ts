import { ClientDetails } from './../model/clientDetails';
import { HttpClientModule, HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  clientDetailsTest: ClientDetails;
  constructor(private httpClient: HttpClient) {

  }

  // getClientDetails(clientName: number): Observable<clientDetails> {

  //   return this.httpClient.get<any>(UrlApiConstants.LOAD_CLIENT_DETAILS)
  //     .map(res => res.entity);
  // }


}
