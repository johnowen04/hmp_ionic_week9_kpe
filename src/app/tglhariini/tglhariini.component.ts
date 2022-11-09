import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tglhariini',
  templateUrl: './tglhariini.component.html',
  styleUrls: ['./tglhariini.component.scss'],
})
export class TglhariiniComponent implements OnInit {
  constructor() { }
  
  ngOnInit() { }

  tglstring() {
    let d = new Date();
    let tahun = d.getFullYear();
    let bulan = d.getMonth() + 1;
    let tgl = d.getDate();
    let hr = d.getDay();
    let hari: string = '';
    if (hr == 0) hari = 'Minggu';
    if (hr == 1) hari = 'Senin';
    if (hr == 2) hari = 'Selasa';
    if (hr == 3) hari = 'Rabu';
    if (hr == 4) hari = 'Kamis';
    if (hr == 5) hari = 'Jumat';
    if (hr == 6) hari = 'Sabtu';
    let tgl_str = hari + ", " + tgl + "-" + bulan + "-" + tahun;
    return tgl_str;
  }
  tanggal = this.tglstring()
}
