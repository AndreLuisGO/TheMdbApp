import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { UpcomingMovieComponent } from './upcoming-movie/upcoming-movie.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';


const routes: Routes = [
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: '', component: UpcomingMovieComponent },
  { path: 'upcoming/:page', component: UpcomingMovieComponent},
  { path: 'search/:term', component: SearchMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
