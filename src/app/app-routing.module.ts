import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    loadChildren: () => import('./pages/movies/movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'movies/:id',
    loadChildren: () => import('./pages/movies-details/movies-details.module').then( m => m.MoviesDetailsPageModule)
  },
  {
    path: 'nowplaying',
    loadChildren: () => import('./pages/nowplaying/nowplaying.module').then( m => m.NowplayingPageModule)
  },
  {
    path: 'nowplaying/:id/:name',
    loadChildren: () => import('./pages/trailer/trailer.module').then( m => m.TrailerPageModule)
  },
  {
    path: 'upcoming',
    loadChildren: () => import('./pages/upcoming/upcoming.module').then( m => m.UpcomingPageModule)
  },
  {
    path: 'recommendations',
    loadChildren: () => import('./pages/recommendations/recommendations.module').then( m => m.RecommendationsPageModule)
  },
  {
    path: 'toprated',
    loadChildren: () => import('./pages/toprated/toprated.module').then( m => m.TopratedPageModule)
  },
  {
    path: 'toprated/:id/:name',
    loadChildren: () => import('./pages/trailer/trailer.module').then( m => m.TrailerPageModule)
  },
  {
    path: 'ranking',
    loadChildren: () => import('./pages/ranking/ranking.module').then( m => m.RankingPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
