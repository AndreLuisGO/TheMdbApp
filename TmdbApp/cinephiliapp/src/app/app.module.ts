import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { UpcomingMovieComponent } from './upcoming-movie/upcoming-movie.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    SearchMovieComponent,
    UpcomingMovieComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
