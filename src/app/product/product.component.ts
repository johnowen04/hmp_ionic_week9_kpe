import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  productName: string = "Gadget Baru"
  productPrice: number = 8000000
  productImg: string = "https://placeimg.com/200/200/tech"
  nettPrice: number = this.productPrice
  kodeVoucher: string
  fontSize: number = 12

  showMore: boolean

  products = [
    {
      name: 'Realme 5',
      display: 0,
      spec: ['4 Gb', 'Snapdragon', '128 Gb'],
      price: 1800000, disc: 0.1, url: '../assets/img/realme-5.jpg'
    },
    {
      name: 'OPPO A1',
      display: 0,
      spec: ['4 Gb', 'Snapdragon', '128 Gb'],
      price: 1400000, disc: 0.15, url: '../assets/img/oppo-a1.jpg'
    },
    {
      name: 'Samsung Galaxy S10',
      display: 0,
      spec: ['4 Gb', 'Snapdragon', '128 Gb'],
      price: 1200000, disc: 0, url: '../assets/img/galaxy-s10.jpg'
    },
    {
      name: 'Redmi Note 8',
      display: 0,
      spec: ['4 Gb', 'Snapdragon', '128 Gb'],
      price: 1900000, disc: 0.2, url: '../assets/img/redmi-note-8.jpg'
    },
    {
      name: 'Iphone X',
      display: 0,
      spec: ['4 Gb', 'Snapdragon', '128 Gb'],
      price: 6300000, disc: 0.25, url: '../assets/img/iphone-x.jpg'
    }
  ];

  checkDisplay(product) {
    product.display = product.display ? false : true;
  }


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
