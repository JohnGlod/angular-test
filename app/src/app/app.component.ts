import { Component } from '@angular/core';
import data from './data/data.json';
import { IMovie } from './models/IMovie.intarface';
import { StorageService } from './service/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  constructor(private Storage: StorageService){}
  title = 'app';
  movies = data;
  bestMovie: IMovie[] = this.Storage.getLocalStorage();

  addFavorite = (id: number): void => {
    const findId = this.bestMovie.pop()?.id;

    if (findId === id) {
      this.Storage.clearLocalStorage();
      return;
    }

    if (this.bestMovie.length > 0) {
      this.Storage.clearLocalStorage();
    }

    const findMovie = this.movies.find((movie) => movie.id === id);

    if (findMovie) {
      this.Storage.setLocalStorage([findMovie]);
    }
  };

}
