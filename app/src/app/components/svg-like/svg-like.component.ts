import { Component } from '@angular/core';

@Component({
  selector: 'like-svg',
  templateUrl: './svg-like.component.svg',
})

export class SvgComponent {
  like = false

  changeColor() {
    this.like = !this.like
    console.log(this.like)
  }
}
