import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IMovie } from 'src/app/models/IMovie.intarface';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent {
  @Input() item: IMovie;
  @Input() isLiked: boolean;
  @Input() isLikedId?: number;
  @Input() addFavorite: (event: MouseEvent, id: number) => void;

  constructor(public dialog: MatDialog) {}

  handleOpenDialog(event: MouseEvent, data: IMovie) {
    const target = event.target as HTMLButtonElement;

    if (target.className === 'card-item__like') {
      return;
    }

    this.dialog.open(DialogComponent, {
      width: '756px',
      data: {
        movie: data,
        addFavorite: this.addFavorite,
        isLikedId: this.isLikedId,
      },
    });
  }
}
