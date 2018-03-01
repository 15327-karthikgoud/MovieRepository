import { Component } from '@angular/core';

/**
 * Generated class for the EnglishMoviesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'english-movies',
  templateUrl: 'english-movies.html'
})
export class EnglishMoviesComponent {

  text: string;

  constructor() {
    console.log('Hello EnglishMoviesComponent Component');
    this.text = 'Hello World';
  }

}
