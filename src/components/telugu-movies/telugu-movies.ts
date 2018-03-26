import { Component } from '@angular/core';
import { MovieServiceProvider } from '../../shared/services/movie-service/movie-service';

/**
 * Generated class for the TeluguMoviesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'telugu-movies',
  templateUrl: 'telugu-movies.html',

})
export class TeluguMoviesComponent {
latestMovies:any[]=[];
  text: string;

  constructor(public movieService : MovieServiceProvider) {
    console.log('Hello TeluguMoviesComponent Component');
    this.text = 'Hello World';
  }
  ngOnInit(){
    this.movieService.teluguMoviesList().map((teluguMovies:any[])=>{
      console.log(teluguMovies)
      for (var i = teluguMovies.length - 1; i >= 0; i--)
    this.latestMovies.push ({

      "name" : teluguMovies[i].name,
      "rating":teluguMovies[i].rating,
      "image":teluguMovies[i].image
    })
    console.log(this.latestMovies);
    });
  }

}
