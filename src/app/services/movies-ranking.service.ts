import { Injectable } from '@angular/core';
import {Movies} from '../Models/movie.model'

@Injectable({
  providedIn: 'root'
})
export class MoviesRankingService {
  movies_ranking: Movies[] = [];

  constructor() { }

  agregarPelicula(pelicula: Movies) {
    this.movies_ranking.push(pelicula);
  }

  obtenerPeliculas() {
    return this.movies_ranking;
  }

  eliminarPelicula(index: number) {
    this.movies_ranking.splice(index, 1);
  }
}
