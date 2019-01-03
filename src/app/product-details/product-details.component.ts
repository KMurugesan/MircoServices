import { DataService } from './../_services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductDetails } from './../model/ProductDetails';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productForm: FormGroup;

  @Input() product: ProductDetails;

  productType: FormControl;
  transportType: FormControl;
  bandwidthType: FormControl;
  businessExtensionType: FormControl;
  routerType: FormControl;
  basePrice: FormControl;
  shippingPrice: FormControl;
  total: FormControl;
  discount: FormControl;

  productTypeSelected = true;
  productNameOb: string;

  productTypes = [
    { productType: 'THUNDER' },
    { productType: 'STORM' },
    { productType: 'FAST' },
    { productType: 'SFAST' }
  ];
  selectedProductType = this.productTypes[1];

  constructor(private dataService: DataService) {
    this.product = new ProductDetails();
  }

  ngOnInit() {
    this.productTypeSelected = true;
    this.product.productType = this.productTypes;
    this.buildFormControlsInd();
    this.buildProductFormControls();
    console.log(this.product);
  }

  onProductChange(event) {
    console.log(event);
    this.selectedProductType = event.target.value;
    console.log(this.selectedProductType);
    this.product.name = this.selectedProductType;
    console.log(this.product.name);
    this.getProductDetails(this.product.name);
  }

  onSubmit() {
    this.product.productType = this.selectedProductType.productType;
    this.product.transport = this.productForm.get('transportType').value;
    this.product.bandwidth = this.productForm.get('bandwidthType').value;
    this.product.buildingExtn = this.productForm.get('businessExtensionType').value;
    this.product.router = this.productForm.get('routerType').value;
    this.product.price.basePrice = this.productForm.get('basePrice').value;
    this.product.price.shippingCharge = this.productForm.get('shippingPrice').value;
    this.product.price.total = this.productForm.get('total').value;
    this.product.price.discount = this.productForm.get('discount').value;
  }

  buildFormControlsInd() {
    this.productType = new FormControl('', [Validators.required]);
    this.transportType = new FormControl('', [Validators.required]);
    this.bandwidthType = new FormControl('', [Validators.required]);
    this.businessExtensionType = new FormControl('', [Validators.required]);
    this.routerType = new FormControl('', [Validators.required]);
    this.basePrice = new FormControl('', [Validators.required]);
    this.shippingPrice = new FormControl('');
    this.total = new FormControl('', [Validators.required]);
    this.discount = new FormControl('', [Validators.required]);
  }

  buildProductFormControls() {
    this.productForm = new FormGroup({
      productType: this.productType,
      transportType: this.transportType,
      bandwidthType: this.bandwidthType,
      businessExtensionType: this.businessExtensionType,
      routerType: this.routerType,
      basePrice: this.basePrice,
      shippingPrice: this.shippingPrice,
      total: this.total,
      discount: this.discount
    });
  }

  getProductDetails(productName: string) {
    console.log(productName);
    this.dataService.getProductDetails(productName).subscribe((res) => {
      if (res !== undefined) {
        this.product = res;
        console.log(res);
        this.loadProductDetails();
      } else {
        // this.showErrorMessage = true;
      }
    });
  }

  loadProductDetails() {
    this.productType.setValue(this.product.name);
    console.log(this.productType);
    this.productTypes.values = this.productType.value;
    this.productTypeSelected = false;
    this.transportType.setValue(this.product.transport);
    this.bandwidthType.setValue(this.product.bandwidth);
    this.routerType.setValue(this.product.router);
    this.businessExtensionType.setValue(this.product.buildingExtn);
    this.basePrice.setValue(this.product.price.basePrice);
    this.shippingPrice.setValue(this.product.price.shippingCharge);
    this.total.setValue(this.product.price.total);
    this.discount.setValue(this.product.price.discount);
  }

  persistProductDetails() {
    this.onSubmit();
    console.log(this.product);
    this.dataService.persistProductDetails(this.product).subscribe((product) => {
      console.log(product);
      if (product.name !== undefined) {
        this.productNameOb = product.name;
        $('#success').modal({ show: true });
      } else {
        this.productNameOb = '';
      }
    });
  }
}
