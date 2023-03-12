import { Pipe, PipeTransform } from '@angular/core';
import { IMovie } from '../models/IMovie.intarface';

@Pipe({
  name: 'likesTransform',
})
export class LikesTransformPipe implements PipeTransform {
  transform(id: number | undefined, movie: IMovie): boolean {
    return movie.id === id;
  }
}
