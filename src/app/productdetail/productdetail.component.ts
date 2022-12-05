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
    this.ps.getProduct(id).subscribe(
      (data) => {
        this.name = data[0]['name'];
        this.price = data[0]['price'];
        this.discount = data[0]['disc'];
        this.url = data[0]['url']
        this.description = data[0]['desc']
      }
    );
  }

  name: string = "";
  price: number = 0;
  discount: number = 0;
  url: string = "";
  description: string = "";

}
