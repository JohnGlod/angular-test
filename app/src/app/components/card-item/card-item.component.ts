import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie.intarface';

@Component({
  selector: 'card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})

export class CardItemComponent {
  @Input() item: IMovie
}
