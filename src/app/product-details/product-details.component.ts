import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductDetails } from './../model/ProductDetails';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productForm: FormGroup;

  product: ProductDetails;

  // productType: FormControl;
  transportType: FormControl;
  bandwidthType: FormControl;
  businessExtensionType: FormControl;
  routerType: FormControl;
  basePrice: FormControl;
  shippingPrice: FormControl;
  total: FormControl;
  discount: FormControl;

  productTypes = [{ productName: 'Vodafone', productType: 'Thunder' },
  { productName: 'Airtel', productType: 'Storm' },
  { productName: 'Aircel', productType: 'Fast' },
  { productName: 'BSNL', productType: 'SFast' }];
  selectedProductType = this.productTypes[1];

  constructor() {
    this.buildFormControlsInd();
    this.buildProductFormControls();
    this.product = new ProductDetails();
    this.loadProductType();
    console.log(this.product);
  }

  loadProductType() {
    this.product.productType = this.productTypes;
    // this.product.transportType = this.transportTypes;
    // this.product.bandwidthType = this.bandwidthTypes;
    // this.product.businessExtensionType = this.beTypes;
    // this.product.routerType = this.routerTypes;
    return this.product;
  }

  ngOnInit() {
  }

  onProductChange($event) {
    console.log($event);
    this.selectedProductType = $event;
  }

  persistProductDetails(product) {
    console.log(product);
  }

  onSubmit() {
    // this.product.productType = this.productForm.get('productType').value;
    this.product.transportType = this.productForm.get('transportType').value;
    this.product.bandwidthType = this.productForm.get('bandwidthType').value;
    this.product.businessExtensionType = this.productForm.get('businessExtensoinType').value;
    this.product.routerType = this.productForm.get('routerType').value;
    this.product.price.basePrice = this.productForm.get('basePrice').value;
    this.product.price.shippingPrice = this.productForm.get('shippingPrice').value;
    this.product.price.total = this.productForm.get('total').value;
    this.product.price.discount = this.productForm.get('discount').value;
  }

  buildFormControlsInd() {
    // this.productType = new FormControl('', [Validators.required]);
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
      // productType: this.productType,
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
}
