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
  private pageNumber: number = 1;
  constructor(private tmdbService: TmdbService){}


  public searchMoviesNavBar() {
    console.log('searchMoviesNavBar: ' + this.searchQuery)
  }
  
  public selectNavBar(movie) {
    this.searchQuery = movie;
  }
}
