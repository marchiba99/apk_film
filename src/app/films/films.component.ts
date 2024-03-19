import { Component, OnInit } from '@angular/core';
import {Film} from '../film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent  implements OnInit {
  film: Film = {
    id: 1,
    name: 'Joker'
  };
  constructor() { }

  ngOnInit() {}

}
