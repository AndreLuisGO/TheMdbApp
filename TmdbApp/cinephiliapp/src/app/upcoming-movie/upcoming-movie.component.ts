import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-upcoming-movie',
  templateUrl: './upcoming-movie.component.html',
  styleUrls: ['./upcoming-movie.component.css'],
  providers: [TmdbService]
})
export class UpcomingMovieComponent implements OnInit {

  movies;

  constructor(private tmdbService: TmdbService) { }

  getUpcomingMovies(page: number) {
    this.tmdbService.getUpcoming(page).subscribe(
      data => {
        this.movies = data;
        console.log(data);
      },
      err => console.log(err),
      () => console.log(`success`)
    );

  }

  ngOnInit() {
  }

}
