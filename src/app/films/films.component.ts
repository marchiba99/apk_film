import { Component, OnInit } from '@angular/core';
import {
  NgIf,
  NgFor,
  UpperCasePipe,
} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {Film} from '../film';
import {FILMS} from '../mock-films';


@Component({
  standalone: true,
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
   ],
})
export class FilmsComponent  implements OnInit {
  films = FILMS;
    selectedFilm?: Film;

    onSelect(film: Film): void {
      this.selectedFilm = film;
    }
  constructor() { }

  ngOnInit() {}

}
