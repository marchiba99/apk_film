import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { Movies } from 'src/app/Models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-toprated',
  templateUrl: './toprated.page.html',
  styleUrls: ['./toprated.page.scss'],
})
export class TopratedPage implements OnInit {

  constructor(private movies: MoviesService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadMovies();
  }

  movie: any = [];
  currentPage = 1;
  imgbaseUrl = environment.images;

  async loadMovies(event?: InfiniteScrollCustomEvent) {
    const loading = this.loadingCtrl.create({
      message: 'Loading',
      spinner: 'bubbles',
    });
    (await loading).present;

    this.movies.getTopRatedMovies(this.currentPage).subscribe({
      next: async (res: Movies) => {
        (await loading).dismiss();
        // this.movie = [...this.movie, ...res.results];
        this.movie.push(...res.results);

        console.log(res.results)

        event?.target.complete();
      },
    });
  }

  onIonInfinite(event: any) {
    this.currentPage++;
    this.loadMovies(event);
    setTimeout(() => {
      (event as InfiniteScrollCustomEvent).target.complete();
    }, 1000);
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.loadMovies();
      event.target.complete();
    }, 2000);
  };

}
