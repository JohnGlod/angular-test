import { Pipe, PipeTransform } from '@angular/core';
import { EGenres } from '../models/EGenres.enum';

@Pipe({
  name: 'appGenresTransform',
})
export class GenresTransformPipe implements PipeTransform {
  transform(value: number[]): string[] {
    return value.map((num) => {
      switch (num) {
        case 1:
          return EGenres.DRAMA;
        case 2:
          return EGenres.BIO;
        case 3:
          return EGenres.HISTORY;
        case 4:
          return EGenres.FENTASY;
        case 5:
          return EGenres.ADVENTURE;
        case 6:
          return EGenres.ACTION_MOVIE;
        case 7:
          return EGenres.CARTOON;
        case 8:
          return EGenres.COMEDY;
        case 9:
          return EGenres.THRILLER;
        case 10:
          return EGenres.DETECTIVE;
        case 11:
          return EGenres.FANTASTIC;
        default:
          return 'Не известно';
      }
    });
  }
}
