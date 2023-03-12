import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import data from './data/data.json';
import { IMovie } from './models/IMovie.intarface';
import { ISearchData } from './models/ISearchData.interface';
import { LocalStorageService } from './service/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private readonly localStorageService: LocalStorageService,
    public dialog: MatDialog
  ) {}
  title = 'app';
  movies = data;
  filteredMovies: IMovie[] = [];
  bestMovie: IMovie[] = [];
  bestMovieID: number | undefined = undefined;
  addFavoriteMovie = (event: MouseEvent, id: number): void => {
    event.stopPropagation();
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

  onSearch(eventData: ISearchData) {
    const { genre, searchQuery } = eventData;

    if (!searchQuery && genre === 0) this.filteredMovies = [];

    let filteredMovies = this.movies;

    if (genre > 0) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.genre.includes(genre)
      );
    }

    if (searchQuery) {
      if (genre > 0) {
        filteredMovies = filteredMovies.filter((movie) =>
          movie.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      } else {
        filteredMovies = this.movies.filter((movie) =>
          movie.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
    }

    this.filteredMovies = filteredMovies;
  }

  ngOnInit() {
    this.localStorageService.getSynchronizedData().subscribe((data) => {
      this.bestMovie = data;
      this.bestMovieID = data[0]?.id;
    });
  }
}
