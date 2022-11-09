import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  productName: string = "Gadget Baru"
  productPrice: number = 8000000
  productImg: string = "https://placeimg.com/200/200/tech"
  nettPrice: number = this.productPrice
  kodeVoucher: string

  discount(): number {
    return this.productPrice * 0.2
  }

  applyDiscount(): void {
    this.nettPrice -= this.discount()
    this.btnDisable = true
  }

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
