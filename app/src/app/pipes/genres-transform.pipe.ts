import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appGenresTransform',
})
export class GenresTransformPipe implements PipeTransform {
  transform(value: number[]):string[] {
    return value.map(num => {
      switch (num) {
        case 1:
          return 'драма';
        case 2:
          return 'биография';
        case 3:
          return 'история';
        case 4:
          return 'фэнтези';
        case 5:
          return 'приключения';
        case 6:
          return 'боевик';
        case 7:
          return 'мультфильм';
        case 8:
          return 'комедия';
        case 9:
          return 'триллер';
        case 10:
          return 'детектив';
        case 11:
          return 'фантастика';
        default:
          return 'Не известно';
      }
    })
  }
}
