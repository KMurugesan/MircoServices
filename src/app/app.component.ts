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
  status: string;

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

  getClientDetails() {
    this.clientDetailsAvailable = true;
    console.log(this.clientName);
    this.dataService.getClientDetails(this.clientName).subscribe(res => {
      if (res !== undefined) {
        this.clientDetail = res;
        this.creatingClientDetails = false;
        this.clientDetailsAvailable = true;
        console.log(this.clientDetail);
        this.clientDetail.status = 'C';
        this.productDetail.productId = this.clientDetail.product.productId;
        this.productDetail.productName = this.clientDetail.product.productName;
      } else {
        this.showErrorMessage = true;
      }
    });
  }

  activatePlan() {
    this.dataService.planAction(this.clientDetail.clientName, this.clientDetail.companyAddress, 'A');
    console.log(this.clientDetail.clientName, this.clientDetail.company);
  }

  deActivatePlan() {
    this.dataService.planAction(this.clientDetail.clientName, this.clientDetail.companyAddress, 'A');
  }
}
