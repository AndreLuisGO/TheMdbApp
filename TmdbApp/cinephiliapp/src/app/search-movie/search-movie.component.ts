import { Component, OnInit, ɵConsole } from '@angular/core';
import { Subject } from 'rxjs';
import { TmdbService } from '../tmdb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  searchTerm: string;
  movies;
  constructor( 
    public tmdbService: TmdbService, public route: ActivatedRoute
  ){ }


  searchMovie(term: string){
    this.tmdbService.searchMovie(term)
    .subscribe(data => {
      this.movies = data;
    },
    err => console.log(err),
    () => console.log(this.movies)
    );
  }

  ngOnInit(): void {
  }

}
