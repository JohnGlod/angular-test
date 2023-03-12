import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { SvgComponent } from './components/svg-like/svg-like.component';
import { GenresTransformPipe, JoinPipe, LikesTransformPipe } from './pipes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    GenresTransformPipe,
    JoinPipe,
    CardItemComponent,
    SvgComponent,
    LikesTransformPipe,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
