import { Injectable } from '@angular/core';
import { IMovie } from '../models/IMovie.intarface';

export const MOVIE_FROM_LOCAL_STORAGE_KEY = 'favoriteMovie';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  clearLocalStorage() {
    localStorage.removeItem(MOVIE_FROM_LOCAL_STORAGE_KEY);
  }

  setLocalStorage = (data: IMovie[]) => {
    localStorage.setItem(MOVIE_FROM_LOCAL_STORAGE_KEY, JSON.stringify(data));
  };
  getLocalStorage(): IMovie[] {
    return JSON.parse(
      localStorage.getItem(MOVIE_FROM_LOCAL_STORAGE_KEY) ?? '[]'
    );
  }
}
