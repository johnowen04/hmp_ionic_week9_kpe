import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cegahcovid',
  templateUrl: './cegahcovid.component.html',
  styleUrls: ['./cegahcovid.component.scss'],
})
export class CegahcovidComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  btnOne = "success"
  btnTwo = "warning"
  btnThree = "danger"
  covidImg = "../assets/img/1.jpg"

  btnOneClick() {
    this.covidImg = "../assets/img/1.jpg"
  }

  btnTwoClick() {
    this.covidImg = "../assets/img/2.jpeg"
  }
  
  btnThreeClick() {
    this.covidImg = "../assets/img/3.jpg"
  }
}
