import { Component } from '@angular/core';
import data from './data/data.json';
import { IMovie } from './models/IMovie.intarface';
import { LocalStorageService } from './service/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly localStorageService: LocalStorageService) {}
  title = 'app';
  movies = data;
  bestMovie: IMovie[] = [];
  bestMovieID: number | undefined = undefined;

  addFavoriteMovie = (id: number): void => {
    const findId = this.bestMovie.pop()?.id;
    if (findId === id) {
      this.localStorageService.clearLocalStorage();
      this.bestMovieID = undefined;
      return;
    }

    if (this.bestMovie.length > 0) {
      this.localStorageService.clearLocalStorage();
    }

    const findMovie = this.movies.find((movie) => movie.id === id);

    if (findMovie) {
      this.localStorageService.setSynchronizedData([findMovie]);
      this.bestMovieID = id;
    }
  };

  ngOnInit() {
    this.localStorageService.getSynchronizedData().subscribe((data) => {
      this.bestMovie = data;
      this.bestMovieID = data[0]?.id;
    });
  }
}
