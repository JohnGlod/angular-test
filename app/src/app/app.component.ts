import { Component } from '@angular/core';
import data from './data/data.json';
import { IMovie } from './models/IMovie.intarface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';
  movies = data;
  bestMovie: IMovie[] = JSON.parse(
    localStorage.getItem('favoriteMovie') ?? '[]'
  );

  private clearLocalStorage() {
    localStorage.removeItem('favoriteMovie');
  }

  private setLocalStorage = (data: IMovie) => {
    localStorage.setItem('favoriteMovie', JSON.stringify([data]));
  };

  addFavorite = (id: number): void => {
    const findId = this.bestMovie.pop()?.id;

    if (findId === id) {
      this.clearLocalStorage();
      return;
    }

    if (this.bestMovie.length > 0) {
      this.clearLocalStorage();
    }

    const findMovie = this.movies.find((movie) => movie.id === id);

    if (findMovie) {
      this.setLocalStorage(findMovie);
    }
  };
}
