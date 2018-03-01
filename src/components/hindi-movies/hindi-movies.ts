import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello HindiMoviesComponent Component');
    this.text = 'Hello World';
  }

}
