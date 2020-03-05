import { Component, OnInit, ɵConsole } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  movies;
  constructor( 
    public tmdbService: TmdbService, public router: Router
  ){ }


  searchMovie(query: string){
    console.log(query)
    this.tmdbService.callSearch(query);
    this.router.navigate(["/search"]);
  }

  ngOnInit(): void {
  }

}
