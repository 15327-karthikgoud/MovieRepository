import { NgModule } from '@angular/core';
import { TeluguMoviesComponent } from './telugu-movies/telugu-movies';
import { HindiMoviesComponent } from './hindi-movies/hindi-movies';
import { EnglishMoviesComponent } from './english-movies/english-movies';
import { CastComponent } from './cast/cast';
import { CrewComponent } from './crew/crew';

@NgModule({
	declarations: [
    TeluguMoviesComponent,
    HindiMoviesComponent,
    EnglishMoviesComponent,
    CastComponent,
    CrewComponent,
    
  ],
	imports: [],
	exports: [
    TeluguMoviesComponent,
    HindiMoviesComponent,
    EnglishMoviesComponent,
    CastComponent,
    CrewComponent,
 
    ]
})
export class ComponentsModule {}
