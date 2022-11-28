import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductModel } from '../product.model';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss'],
})
export class ProductdetailComponent implements OnInit {

  constructor(public ps: ProductService, public route: ActivatedRoute) { }

  ngOnInit() {
    var id: number = this.route.snapshot.params['id'];
    var detail: ProductModel = this.ps.productsPhone[id];
    
    this.name = detail.name;
    this.price = detail.price;
    this.discount = detail.discount;
    this.url = detail.url;
    this.description = detail.description;
  }

  name: string = "";
  price: number = 0;
  discount: number = 0;
  url: string = "";
  description: string = "";

}
