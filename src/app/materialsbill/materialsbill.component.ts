import { bills } from './../model/Bills';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materialsbill',
  templateUrl: './materialsbill.component.html',
  styleUrls: ['./materialsbill.component.css']
})
export class MaterialsbillComponent implements OnInit {

  materialBills: bills;
  constructor() {
    this.materialBills = new bills();
  }

  ngOnInit() {
  }

  persistMaterialBills(materialBills) {
    console.log(materialBills);
  }

}
