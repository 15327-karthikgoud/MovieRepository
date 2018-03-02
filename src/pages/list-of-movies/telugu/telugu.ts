import { Component } from '@angular/core';
import { MovieServiceProvider } from '../../../shared/services/movie-service/movie-service';

/**
 * Generated class for the TeluguComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'telugu',
  templateUrl: 'telugu.html'
})
export class TeluguComponent {

  text: string;

  constructor(
    public movieService : MovieServiceProvider
  ) {
    console.log('Hello TeluguComponent Component');
    
  }

}
