import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListOfMoviesPage } from './list-of-movies';
import { TeluguComponent } from './telugu/telugu';
import { TeluguMoviesComponent } from '../../components/telugu-movies/telugu-movies';
import { HindiMoviesComponent } from '../../components/hindi-movies/hindi-movies';
import { EnglishMoviesComponent } from '../../components/english-movies/english-movies';

@NgModule({
  declarations: [
    ListOfMoviesPage,
    TeluguComponent,
    TeluguMoviesComponent,
    HindiMoviesComponent,
    EnglishMoviesComponent
  ],
  imports: [
    IonicPageModule.forChild(ListOfMoviesPage),
  ],
})
export class ListOfMoviesPageModule {}
