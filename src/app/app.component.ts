import { Component, Input } from '@angular/core';
import { ProductModel } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor() { }

  username = "John"
  judul = "Ionic-Angular Week 9"

}
