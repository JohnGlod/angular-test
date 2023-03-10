import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { SvgComponent } from './components/svg-like/svg-like.component';
import { GenresTransformPipe, JoinPipe} from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    GenresTransformPipe,
    JoinPipe,
    CardItemComponent,
    SvgComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
