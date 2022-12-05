import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss'],
})
export class ProductformComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  productName: string = "";
  productPrice: number = 0;
  productUrl: string = '';
  productDisc: number = 0;


}
