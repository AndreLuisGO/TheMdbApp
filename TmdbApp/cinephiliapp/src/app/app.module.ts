import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { UpcomingMovieComponent } from './upcoming-movie/upcoming-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    SearchMovieComponent,
    UpcomingMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
