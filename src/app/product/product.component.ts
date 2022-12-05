import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Input()

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  constructor(public ps: ProductService) { }

  ngOnInit() {
    this.products = this.ps.productsPhone
  }

  json: string = '... Menunggu dari observable'

  listProduct() {
    this.ps.productList().subscribe(
      (data) => { this.json = data; }
    );
  }

  // @Input('prod') products;
  products = [];

  productName: string = "Gadget Baru"
  productPrice: number = 8000000
  productImg: string = "https://placeimg.com/200/200/tech"
  nettPrice: number = this.productPrice
  kodeVoucher: string

  // products = [
  //   { name: 'Realme 5', price: 1800000, disc: 0.1, url: 'realme_5.jpg' },
  //   { name: 'OPPO A1', price: 1400000, disc: 0.15, url: 'oppo_a1.jpg' },
  //   { name: 'Samsung Galaxy S10', price: 1200000, disc: 0, url: 'samsung10.jpg' },
  //   { name: 'Redmi Note 8', price: 1900000, disc: 0.2, url: 'redmi_note_8.jpg' },
  //   { name: 'Iphone X', price: 6300000, disc: 0.25, url: 'iphone_x.jpg' }
  // ];

  discount(product): number {
    return product.price * product.discount
  }

  calculateNettPrice(product): number {
    return product.price - this.discount(product)
  }

  // applyDiscount(): void {
  //   this.nettPrice -= this.discount()
  //   this.btnDisable = true
  // }

  checkVoucher(event: Event) {
    var element = event.target as HTMLInputElement
    this.btnDisable = element.value == "007" ? false : true

    // if (element.value == "007") {
    //   this.btnDisable = false
    // } else {
    //   this.btnDisable = true 
    // }

    // this.kodeVoucher = this.btnDisable ? "" : element.value

    // if (!this.btnDisable) {
    //   this.kodeVoucher = element.value
    // } else {
    //   this.kodeVoucher = ""
    // }
  }

  btnDisable: boolean = true
  btnColor = "danger"
}
