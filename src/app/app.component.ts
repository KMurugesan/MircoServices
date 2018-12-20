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
  clientName: string;
  status: 'P';

  constructor(private dataService: DataService) {
    this.clientDetail = new ClientDetails();
    this.productDetail = new ProductDetails();
    this.clientDetailsAvailable = false;
  }

  createClientDetail(clientDetail) {
    this.creatingClientDetails = false;
    this.clientDetailsAvailable = true;
    this.showErrorMessage = false;
    this.clientDetail.action = 'C';
  }

  getClientDetails() {
    // this.clientDetailsAvailable = true;
    console.log(this.clientName);
    this.dataService.getClientDetails(this.clientName).subscribe(res => {
      if (res !== undefined) {
        this.clientDetail = res;
        this.creatingClientDetails = false;
        this.clientDetailsAvailable = true;
        console.log(this.clientDetail);
        this.clientDetail.action = 'U';
        this.clientDetail.status = this.status;
        this.productDetail.productId = this.clientDetail.product.productId;
        this.productDetail.name = this.clientDetail.product.name;
      } else {
        this.showErrorMessage = true;
      }
    });
  }

  activatePlan() {
    this.clientDetail.status = 'A';
    this.dataService.planAction(this.clientDetail).subscribe(status => {
      console.log(status);
    });
    console.log(this.clientDetail);
  }

  deActivatePlan() {
    this.clientDetail.status = 'D';
    this.dataService.planAction(this.clientDetail).subscribe(status => {
      console.log(status);
    });
  }
}
