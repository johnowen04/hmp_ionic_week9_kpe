import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss'],
})
export class ProductformComponent implements OnInit {

  constructor(public ps: ProductService) { }

  ngOnInit() { }

  productName: string = "";
  productPrice: number = 0;
  productUrl: string = '';
  productDisc: number = 0;
  productDesc: string = "";


  addProduct() {
    this.ps.newProduct(
      this.productName,
      this.productPrice,
      this.productDisc,
      this.productUrl,
      this.productDesc
    ).subscribe(
      (data) => {
        alert(data['pesan']);
      });
    ;
  }
}
