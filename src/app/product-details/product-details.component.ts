import { DataService } from './../_services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductDetails } from './../model/ProductDetails';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

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

  productTypes = [{ productName: 'Vodafone', productType: 'Thunder' },
  { productName: 'Airtel', productType: 'Storm' },
  { productName: 'Aircel', productType: 'Fast' },
  { productName: 'BSNL', productType: 'SFast' }];
  selectedProductType = this.productTypes[1];

  constructor(private dataService: DataService) {
    this.product = new ProductDetails();
  }

  ngOnInit() {
    this.product.productType = this.productTypes;
    console.log(this.product.productType);
    this.buildFormControlsInd();
    this.buildProductFormControls();
    this.loadProductDetails();
    console.log(this.product);
  }

  onProductChange($event) {
    console.log($event);
    this.selectedProductType = $event;
    this.getProductDetails(this.product.productId, this.product.productName);
  }

  onSubmit() {
    this.product.productType = this.selectedProductType.productType;
    this.product.transportType = this.productForm.get('transportType').value;
    this.product.bandwidthType = this.productForm.get('bandwidthType').value;
    this.product.businessExtensionType = this.productForm.get('businessExtensionType').value;
    this.product.routerType = this.productForm.get('routerType').value;
    this.product.price.basePrice = this.productForm.get('basePrice').value;
    this.product.price.shippingPrice = this.productForm.get('shippingPrice').value;
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

  getProductDetails(productId: number, productName: string) {
    this.dataService.getProductDetails(productId, productName).subscribe(res => {
      if (res !== undefined) {
        this.product = res;
        console.log(this.product);
        this.loadProductDetails();
      } else {
        // this.showErrorMessage = true;
      }
    });
  }

  loadProductDetails() {
    this.productType.setValue(this.product.productType);
    this.transportType.setValue(this.product.transportType);
    this.bandwidthType.setValue(this.product.bandwidthType);
    this.routerType.setValue(this.product.routerType);
    this.businessExtensionType.setValue(this.product.businessExtensionType);
    this.basePrice.setValue(this.product.price.basePrice);
    this.shippingPrice.setValue(this.product.price.shippingPrice);
    this.total.setValue(this.product.price.total);
    this.discount.setValue(this.product.price.discount);
  }

  persistProductDetails() {
    this.onSubmit();
    this.dataService.persistProductDetails(this.product);
    console.log(this.product);
    // this.dataService.persistProductDetails(this.product).subscribe(res => {
    //   console.log(res);
    // }, err => {

    // });
  }
}
