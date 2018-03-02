import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListOfMoviesPage } from './list-of-movies';
import { TeluguComponent } from './telugu/telugu';
import { TeluguMoviesComponent } from '../../components/telugu-movies/telugu-movies';
import { HindiMoviesComponent } from '../../components/hindi-movies/hindi-movies';
import { EnglishMoviesComponent } from '../../components/english-movies/english-movies';
import { MovieServiceProvider } from '../../shared/services/movie-service/movie-service';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataTableComponent } from '../../shared/components/data-table/data-table';
@NgModule({
  declarations: [
    ListOfMoviesPage,
    TeluguComponent,
    TeluguMoviesComponent,
    HindiMoviesComponent,
    EnglishMoviesComponent,
    DataTableComponent
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    IonicPageModule.forChild(ListOfMoviesPage),
  ],
  providers : [MovieServiceProvider]
})
export class ListOfMoviesPageModule {}
