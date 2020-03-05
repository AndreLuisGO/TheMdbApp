import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit, OnDestroy {
searchKeyword: string;
subscription: Subscription;
movies;


  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.getSearchKeyword();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe
  }


  getSearchKeyword(){
    this.subscription = this.tmdbService.searchTerm
      .subscribe(
        keyword => this.searchKeyword = keyword,
        err => console.log(err)
      );
  }

  search(){
    if(this.searchKeyword){
      this.tmdbService.searchMovie(this.searchKeyword)
        .subscribe(movies =>{
          console.log(movies);
          this.movies = movies
        },
        err => {
          console.log(err);
        });
    }
  }

}
