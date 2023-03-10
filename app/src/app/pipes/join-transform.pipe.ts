import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appJoinPipe'
})
export class JoinPipe implements PipeTransform {
  transform(input:Array<string>, sep = ','): string {
    return input.toString().split(sep).join(', ')
  }
}
