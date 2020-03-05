import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { UpcomingMovieComponent } from './upcoming-movie/upcoming-movie.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: '', component: UpcomingMovieComponent },
  { path: 'upcoming/:page', component: UpcomingMovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
