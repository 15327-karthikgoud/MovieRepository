import { NgModule } from '@angular/core';
import { TeluguComponent } from './telugu/telugu';
import { TeluguMoviesComponent } from './telugu-movies/telugu-movies';
import { HindiMoviesComponent } from './hindi-movies/hindi-movies';
import { EnglishMoviesComponent } from './english-movies/english-movies';
@NgModule({
	declarations: [TeluguComponent,
    TeluguMoviesComponent,
    HindiMoviesComponent,
    EnglishMoviesComponent],
	imports: [],
	exports: [TeluguComponent,
    TeluguMoviesComponent,
    HindiMoviesComponent,
    EnglishMoviesComponent]
})
export class ComponentsModule {}
