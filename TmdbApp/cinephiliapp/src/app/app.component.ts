import { Component, OnInit } from '@angular/core';
import { TmdbService } from './tmdb.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  title = 'CinephiliApp';
  private searchQuery: string;
  autocompleteSearch;
  private pageNumber: number = 1;
  constructor(private tmdbService: TmdbService){}


  public searchMoviesNavBar() {
    console.log('searchMoviesNavBar: ' + this.searchQuery)
  }

  // public autoCompleteSearch(){
  //   if (this.searchQuery.length > 2){
  //     this.tmdbService.searchMovie(this.searchQuery).subscribe(
  //       data => {
  //         this.autoCompleteSearch = data;
  //         console.log(data);
  //       },
  //         err => console.log(err),
  //         () => console.log(`success`)
  //       );
  //   } else {
  //   }
  //}
  



  public selectNavBar(movie) {
    this.searchQuery = movie;
  }
}
