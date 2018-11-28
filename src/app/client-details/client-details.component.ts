import { ClientDetails } from './../model/clientDetails';
import { Component, OnInit } from '@angular/core';
// import { DataService } from '../../_services/data.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  details: ClientDetails;
  constructor() {
    this.details = new ClientDetails();
  }

  ngOnInit() {
    console.log('Client Details');
    this.loadForms();
  }

  loadForms() {
    // this.dataService.getClientDetails("PRFT").subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   error => {
    //     console.log('ERROR :' + error);
    //   }
    // );
  }

  persistClientDetails(details) {
    console.log(details);
  }

}
