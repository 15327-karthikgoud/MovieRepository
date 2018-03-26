import { Component } from '@angular/core';

/**
 * Generated class for the CrewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'crew',
  templateUrl: 'crew.html'
})
export class CrewComponent {
Crew:any;
  text: string;

  constructor() {
    console.log('Hello CrewComponent Component');
    this.text = 'Hello World';
  }
  ngOnInit(){
    this.Crew ={
      director:"Rajamouli",
      producer:"Shoba Naidu",
      mdirector:"Keeravani"
    }
  }

}
