import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MovieServiceProvider Provider');
  }
  public teluguMoviesList(){
    let recentMovies : any[] = []
  recentMovies.push([
    {
    "name":"Baahubali","rating":"90","image":"./assets/imgs/baahubali.jpg"},
    {"name":"Chatrapathi","rating":"80","image":"./assets/imgs/chatrapathi.jpg"}
    ,{"name":"Mirchi","rating":"70","image":"./assets/imgs/mirchi.jpg"}]
  )
    return recentMovies;
  }
  public hindiMoviesList(){
    let recentMovies : any[] = []
  recentMovies.push([
    {
    "name":"3idiots","rating":"90"},
    {"name":"Dangal","rating":"80"}
    ,{"name":"pk","rating":"70"}]
  )
    return recentMovies;
  }
}
