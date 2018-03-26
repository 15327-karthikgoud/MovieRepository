import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieDetailsPage } from './movie-details';
import { CastComponent } from '../../components/cast/cast';
import { CrewComponent } from '../../components/crew/crew';
import { MovieReviewComponent } from './movie-review/movie-review';

@NgModule({
  declarations: [
    MovieDetailsPage,
    CastComponent,
    CrewComponent,
    MovieReviewComponent
  ],
  imports: [
    IonicPageModule.forChild(MovieDetailsPage),
  ],
})
export class MovieDetailsPageModule {}
