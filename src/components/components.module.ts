import { NgModule } from '@angular/core';
import { TeluguMoviesComponent } from './telugu-movies/telugu-movies';
import { HindiMoviesComponent } from './hindi-movies/hindi-movies';
import { EnglishMoviesComponent } from './english-movies/english-movies';
@NgModule({
	declarations: [
    TeluguMoviesComponent,
    HindiMoviesComponent,
    EnglishMoviesComponent,
  ],
	imports: [],
	exports: [
    TeluguMoviesComponent,
    HindiMoviesComponent,
    EnglishMoviesComponent,
    ]
})
export class ComponentsModule {}
