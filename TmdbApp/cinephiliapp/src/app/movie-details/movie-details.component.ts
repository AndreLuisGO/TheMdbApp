import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers: [TmdbService]
})
export class MovieDetailsComponent implements OnInit {
  public movie;
  
  constructor(
    private route: ActivatedRoute,
    private tmdbService: TmdbService ) { }


    getMovie(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.tmdbService.getMovie(id).subscribe(
        data => {
          this.movie = data;
          console.log(data)
  
        },
        err => console.log(err)
      );
    }

  ngOnInit(): void {
    this.getMovie();
  }

}
