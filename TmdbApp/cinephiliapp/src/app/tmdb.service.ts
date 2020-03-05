import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private baseUrl ="https://localhost:44396/api/v1/tmdb";
  private movieRoute = "/movie/"
  private upcomingRoute = "upcoming/";
  private searchRoute = "/search";
  private pageRoute = "?page=";
  private searchSubject = new BehaviorSubject<string>(null);
  searchTerm = this.searchSubject.asObservable();
  
  constructor(private http: HttpClient) { }


  getUpcoming( page: number){
    const apiUrl =  this.baseUrl + this.movieRoute + this.upcomingRoute + page;
    return this.http.get(apiUrl);
  }

  getMovie(id: number) {
    const apiUrl = this.baseUrl + this.movieRoute + id;
    return this.http.get(apiUrl);
  }

  searchMovie(term: string) {
    const apiUrl = this.baseUrl + this.searchRoute + this.movieRoute + term + this.pageRoute + 1;
    return this.http.get(apiUrl);
  }

  callSearch(query:string)
  {
    this.searchSubject.next(query);
  }
}
