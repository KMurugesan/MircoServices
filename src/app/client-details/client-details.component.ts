import { ClientAddress } from './../model/ClientAddress';
import { ClientDetails } from './../model/clientDetails';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
// import { DataService } from '../../_services/data.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  clientForm: FormGroup;

  details: ClientDetails;

  clientName: FormControl;
  companyName: FormControl;
  preferredContactMethod: FormControl;
  email: FormControl;
  extension: FormControl;
  addressLine1: FormControl;
  addressLine2: FormControl;
  city: FormControl;
  state: FormControl;
  zipCode: FormControl;
  county: FormControl;

  constructor(private fb: FormBuilder) {
    this.buildFormControlsInd();
    this.buildClientFormControls();
    this.details = new ClientDetails();
  }

  ngOnInit() {
    this.buildClientFormControls();
    console.log('Client Details');
    this.loadForms();
  }

  onSubmit() {
    this.details.clientName = this.clientForm.get('clientName').value;
    this.details.company = this.clientForm.get('companyName').value;
    this.details.preferredContactMethod = this.clientForm.get('preferredContactMethod').value;
    this.details.email = this.clientForm.get('email').value;
    this.details.extension = this.clientForm.get('extension').value;
    this.details.address.addressLine1 = this.clientForm.get('addressLine1').value;
    this.details.address.addressLine2 = this.clientForm.get('addressLine2').value;
    this.details.address.city = this.clientForm.get('city').value;
    this.details.address.state = this.clientForm.get('state').value;
    this.details.address.zipCode = this.clientForm.get('zipCode').value;
    this.details.address.county = this.clientForm.get('county').value;
  }

  loadForms() {
    // this.dataService.getClientDetails("PRFT").subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   error => {
    //     console.log('ERROR :' + error);
    //
    // );
  }

  buildFormControlsInd() {
    this.clientName = new FormControl('', [Validators.required]);
    this.companyName = new FormControl('', [Validators.required]);
    this.preferredContactMethod = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.email, Validators.required]);
    this.extension = new FormControl('', [Validators.required]);
    this.addressLine1 = new FormControl('', [Validators.required]);
    this.addressLine2 = new FormControl('');
    this.city = new FormControl('', [Validators.required]);
    this.state = new FormControl('', [Validators.required]);
    this.zipCode = new FormControl('', [Validators.required]);
    this.county = new FormControl('', [Validators.required]);
  }

  buildClientFormControls() {
    this.clientForm = new FormGroup({
      clientName: this.clientName,
      companyName: this.companyName,
      preferredContactMethod: this.preferredContactMethod,
      email: this.email,
      extension: this.extension,
      addressLine1: this.addressLine1,
      addressLine2: this.addressLine2,
      city: this.city,
      state: this.state,
      zipCode: this.zipCode,
      county: this.county
    });
  }

  persistClientDetails(details) {
    console.log(details);
  }
}
