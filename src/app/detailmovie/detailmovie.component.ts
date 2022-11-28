import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieModel } from '../movie.module';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-detailmovie',
  templateUrl: './detailmovie.component.html',
  styleUrls: ['./detailmovie.component.scss'],
})
export class DetailmovieComponent implements OnInit {

  constructor(public ms: MovieService, public route: ActivatedRoute) { }

  ngOnInit() {
    var id: number = this.route.snapshot.params['id'];
    var detail: MovieModel = this.ms.movieList[id];

    this.judul = detail.judul;
    this.sinopsis = detail.sinopsis;
    this.poster = detail.poster;
  }

  judul: string = "";
  sinopsis: string = "";
  poster: string = "";

}
