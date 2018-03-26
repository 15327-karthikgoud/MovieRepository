import { Component } from '@angular/core';

/**
 * Generated class for the MovieReviewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'movie-review',
  templateUrl: 'movie-review.html'
})
export class MovieReviewComponent {
  reviewList:any[] =[];
  text: string;

  constructor() {
    console.log('Hello MovieReviewComponent Component');
    this.text = 'Hello World';
  }
ngOnInit(){
  this.reviewList = [{
    name:"karthik",content:"supper"
  },
  {
    name:"Raju",content:"Family Entertainer"
  },
  {
    name:"Nakul",content:"Best Graphics"
  }
]
}
}
