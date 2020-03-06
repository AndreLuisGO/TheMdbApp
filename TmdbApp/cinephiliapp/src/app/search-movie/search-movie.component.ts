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
  page: number = 1;
  searchTerm: string;
  constructor( 
    public tmdbService: TmdbService, public router: Router
  ){ }


  searchMovie(query: string, pageNumber){
    console.log(query);
    this.searchTerm = query;
    this.tmdbService.searchMovie(query, pageNumber).subscribe(
      data => {
        this.movies = data;
        console.log(data);
      },
      err => console.log(err),
      () => console.log(`success`)
    );
  }
  
  nextPage() {
    if (this.page < this.movies.total_pages) {
      this.page = this.page + 1;
      this.searchMovie(this.searchTerm, this.page);
    }
  }

  previousPage() {
    if (this.page > 1) {
      this.page = this.page - 1;
      this.searchMovie(this.searchTerm, this.page);
    }
  }
  


  ngOnInit(): void {
  }

}
