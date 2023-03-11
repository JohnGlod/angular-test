import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMovie } from '../models/IMovie.intarface';

export const MOVIE_FROM_LOCAL_STORAGE_KEY = 'favoriteMovie';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly synchronizedData$ = new BehaviorSubject<IMovie[]>([]);

  constructor() {
    const data = JSON.parse(
      localStorage.getItem(MOVIE_FROM_LOCAL_STORAGE_KEY) ?? '[]'
    );
    this.synchronizedData$.next(data);
    window.addEventListener('storage', (event) => {
      if (event.key === MOVIE_FROM_LOCAL_STORAGE_KEY) {
        const data = JSON.parse(event.newValue as string);
        this.synchronizedData$.next(data);
      }
    });
  }

  setSynchronizedData(data: IMovie[]) {
    localStorage.setItem(MOVIE_FROM_LOCAL_STORAGE_KEY, JSON.stringify(data));
    this.synchronizedData$.next(data);
  }

  clearLocalStorage() {
    localStorage.setItem(MOVIE_FROM_LOCAL_STORAGE_KEY, JSON.stringify([]));
    this.synchronizedData$.next([]);
  }

  getSynchronizedData() {
    return this.synchronizedData$.asObservable();
  }
}
