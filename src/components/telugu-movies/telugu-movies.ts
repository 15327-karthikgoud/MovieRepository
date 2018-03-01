import { Component } from '@angular/core';

/**
 * Generated class for the TeluguMoviesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'telugu-movies',
  templateUrl: 'telugu-movies.html'
})
export class TeluguMoviesComponent {

  text: string;

  constructor() {
    console.log('Hello TeluguMoviesComponent Component');
    this.text = 'Hello World';
  }

}
