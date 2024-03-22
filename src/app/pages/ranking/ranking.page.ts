import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/Models/movie.model';
import { MoviesRankingService } from 'src/app/services/movies-ranking.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {
  moviesRanking: Movies[] = [];
  imgbaseUrl: string = ''; // Definir la variable imgbaseUrl

  constructor(private moviesRankingService: MoviesRankingService) { }

  ngOnInit() {
    this.moviesRanking = this.moviesRankingService.obtenerPeliculas();
    this.imgbaseUrl = 'URL_BASE_IMAGENES'; // Asignar la URL base de las imágenes
    console.log('Lista de películas:', this.moviesRankingService);
  }
}
