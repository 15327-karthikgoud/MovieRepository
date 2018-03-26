import { Component } from '@angular/core';

/**
 * Generated class for the CastComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cast',
  templateUrl: 'cast.html'
})
export class CastComponent {
cast:any;
  text: string;

  constructor() {
    console.log('Hello CastComponent Component');
    this.text = 'Hello World';
  }
ngOnInit(){
  this.cast = {
    hero:'prabhas',
  heroine:'anushka',
  supporting:'thamanna',
  villan:'Rana'};
  console.log(this.cast.hero)
}
}
