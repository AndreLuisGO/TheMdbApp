import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private baseUrl ="https://localhost:44396/api/v1/tmdb";
  private movieRoute = "/movie"
  private upcomingRoute = "/upcoming/";
  private searchRoute = "/search";
  private pageRoute = "?page="
  
  constructor(private http: HttpClient) { }


  getUpcoming( page: number){
    const apiUrl =  this.baseUrl + this.movieRoute + this.upcomingRoute + page;
    return this.http.get(apiUrl);
  }

  getMovie(id: number) {
    const apiUrl = this.baseUrl + this.movieRoute + '/' + id;
    return this.http.get(apiUrl);
  }

  searchMovie(term: string, page: number) {
    const apiUrl = this.baseUrl + this.searchRoute + this.movieRoute + term + this.pageRoute + page;
    return this.http.get(apiUrl);
  }
}
