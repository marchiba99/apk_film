import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.page.html',
  styleUrls: ['./movies-details.page.scss'],
})
export class MoviesDetailsPage implements OnInit {
  notaMarc: number = 0; // Asignamos un valor predeterminado
  notaMaria: number = 0; // Asignamos un valor predeterminado
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movies: MoviesService
  ) {}

  imgbaseUrl = environment.images;

  id = this.route.snapshot.paramMap.get('id');
  public movie$: Observable<any> = this.movies.getMoviesDetails(this.id);

  ngOnInit() {}
   guardarNotas() {
     // Aquí puedes guardar las notas en tu base de datos o hacer lo que necesites con ellas
     console.log('Nota Marc:', this.notaMarc);
     console.log('Nota Maria:', this.notaMaria);
     // Puedes resetear los valores después de guardar si lo deseas
     // this.notaMarc = null;
     // this.notaMaria = null;
   }

  openHome() {
    this.router.navigate(['/movies']);
  }
}
