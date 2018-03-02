import { Component, Input } from '@angular/core';

/**
 * Generated class for the DataTableComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'data-table',
  templateUrl: 'data-table.html'
})
export class DataTableComponent {
@Input() data:any;
  text: string;
  movieList:any[];
  constructor() {
    console.log('Hello DataTableComponent Component');
    this.text = 'Hello World';
    
  }
ngOnChanges(){
  console.log(this.data.length);
this.movieList = ["a","b","c","d"]
}
}
