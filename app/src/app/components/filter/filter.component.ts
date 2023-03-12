import { Component, EventEmitter, Output } from '@angular/core';
import { EGenres } from 'src/app/models/EGenres.enum';
import { ISearchData } from 'src/app/models/ISearchData.interface';

interface IOptions {
  viewValue: string;
  value: number;
}
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() findMovie = new EventEmitter<ISearchData>();
  options: IOptions[] = [
    { value: -1, viewValue: 'Все' },
    { value: 6, viewValue: EGenres.ACTION_MOVIE },
    { value: 5, viewValue: EGenres.ADVENTURE },
    { value: 2, viewValue: EGenres.BIO },
    { value: 7, viewValue: EGenres.CARTOON },
    { value: 8, viewValue: EGenres.COMEDY },
    { value: 10, viewValue: EGenres.DETECTIVE },
    { value: 1, viewValue: EGenres.DRAMA },
    { value: 11, viewValue: EGenres.FANTASTIC },
    { value: 4, viewValue: EGenres.FENTASY },
    { value: 3, viewValue: EGenres.HISTORY },
    { value: 9, viewValue: EGenres.THRILLER },
  ];

  searchQuery: string = '';
  selectValue = 0;

  private findMovieAction() {

    if (this.selectValue === -1 && this.searchQuery){
      this.clearFilter()
    };

    this.findMovie.emit({
      searchQuery: this.searchQuery,
      genre: this.selectValue,
    });
  }
  private clearFilter(){
    this.searchQuery = ''
    this.selectValue = 0
  }

  handleSearch(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.findMovieAction();
    }
  }
  handleSelect() {
    this.findMovieAction();
  }
}
