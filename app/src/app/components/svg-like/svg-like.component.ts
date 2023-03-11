import { Component, Input } from '@angular/core';

@Component({
  selector: 'like-svg',
  templateUrl: './svg-like.component.svg',
})
export class SvgComponent {
  @Input() isLiked?: boolean;
  changeColor() {
    this.isLiked = !this.isLiked;
  }
}
