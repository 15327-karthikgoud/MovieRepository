import { Component } from '@angular/core';
import { MovieServiceProvider } from '../../shared/services/movie-service/movie-service';

/**
 * Generated class for the HindiMoviesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hindi-movies',
  templateUrl: 'hindi-movies.html'
})
export class HindiMoviesComponent {
  latestMovies:any[]=[];
  text: string;

  constructor(public movieService : MovieServiceProvider) {
    console.log('Hello HindiMoviesComponent Component');
    this.text = 'Hello World';
  }
  ngOnInit(){
    this.movieService.hindiMoviesList().map((hindiMovies:any[])=>{
      console.log(hindiMovies)
      for (var i = hindiMovies.length - 1; i >= 0; i--)
    this.latestMovies.push ({

      "name" : hindiMovies[i].name,
      "rating":hindiMovies[i].rating
    })
    console.log(this.latestMovies);
    });
  }



}
