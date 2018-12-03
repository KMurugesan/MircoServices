import { ClientDetails } from './model/ClientDetails';
import { ProductDetails } from './model/ProductDetails';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { DataService } from './_services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  // @Input() product: ProductDetails;
  // @Output() selected: EventEmitter<ClientDetails> = new EventEmitter<ClientDetails>();

  clientDetailsAvailable = true;
  showErrorMessage = false;
  creatingClientDetails = true;
  productDetail: ProductDetails;
  clientDetail: ClientDetails;

  constructor(private dataService: DataService) {
    this.clientDetail = new ClientDetails();
    this.productDetail = new ProductDetails();
    this.clientDetailsAvailable = false;
  }

  createClientDetail(clientDetail) {
    this.creatingClientDetails = false;
    this.clientDetailsAvailable = true;
    this.showErrorMessage = false;
  }

  getClientDetails(clientName: string) {
    // this.dataService.getClientDetails(clientName).subscribe(res => {
    //   this.clientDetail = res;
    // });
    this.clientDetail = this.dataService.getClientDetails(clientName);
    if (this.clientDetail !== undefined) {
      this.creatingClientDetails = false;
      this.clientDetailsAvailable = true;
      console.log(this.clientDetail);
      this.productDetail.productId = this.clientDetail.productId;
      this.productDetail.productName = this.clientDetail.productName;
    } else {
      this.showErrorMessage = true;
    }
  }
}
