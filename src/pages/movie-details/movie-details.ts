import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'movie/:movie'
})


@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',

})
export class MovieDetailsPage {
  segmentSelected = "cast";
movieDetails:any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
    console.log(this.navParams.get('movie'));
    this.movieDetails =this.navParams.get('movie')
    console.log('ionViewDidLoad MovieDetailsPage');
  }

}
