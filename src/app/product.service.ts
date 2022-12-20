import { Injectable } from '@angular/core';
import { ProductModel } from './product.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  productList(): Observable<any> {
    return this.http.get("https://ubaya.fun/hybrid/160420016/webservices/listproducts.php")
  }

  getProduct(id: number) {
    let body = new HttpParams();
    body = body.set('id', id.toString());
    return this.http.post("https://ubaya.fun/hybrid/160420016/webservices/getproduct.php", body);
  }

  newProduct(name: string, price: number, disc: number, url: string, desc: string): Observable<any> {
    let body = new HttpParams();
    body = body.set('name', name);
    body = body.set('price', price.toString());
    body = body.set('disc', disc.toString());
    body = body.set('url', url);
    body = body.set('desc', desc);
    return this.http.post("https://ubaya.fun/hybrid/160420016/webservices/addproduct.php", body);
  }


  productsPhone: ProductModel[] = [
    new ProductModel('Realme 5',
      1800000,
      0.1,
      'realme-5.jpg',
      'Realme 5 berbekal layar mini-drop fullscreen LCD 6.5", ditenagai Snapdragon 665, quad kamera belakang perangkat dan baterai 5000 mAh, Micro USB port.'
    ),
    new ProductModel('OPPO A1',
      1400000,
      0.15,
      'oppo-a1.jpg',
      'OPPO A1 untuk kelas menengah dengan fitur Face recognition, layar 5.7 inci 18:9, RAM 4GB, memori internal 64GB dan baterai 3,180 mAh. Hadir dalam varian warna biru, merah dan putih.'
    ),
    new ProductModel('Samsung Galaxy S10',
      1200000,
      0,
      'galaxy-s10.jpg',
      'Samsung Galaxy S10'
    ),
    new ProductModel('Redmi Note 8',
      1900000,
      0.2,
      'redmi-note-8.jpg',
      'Redmi Note 8'
    ),
    new ProductModel('Iphone X',
      6300000,
      0.25,
      'iphone-x.jpg',
      'Iphone X'
    )
  ];
}
