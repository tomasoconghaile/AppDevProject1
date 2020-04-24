import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

//These are all the paths to the pages
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'america',
    loadChildren: () => import('./america/america.module').then( m => m.AmericaPageModule)
  },
  {
    path: 'canada',
    loadChildren: () => import('./canada/canada.module').then( m => m.CanadaPageModule)
  },
  {
    path: 'australia',
    loadChildren: () => import('./australia/australia.module').then( m => m.AustraliaPageModule)
  },
  
  {
    path: 'popovercomponent',
    loadChildren: () => import('./popovercomponent/popovercomponent.module').then( m => m.PopovercomponentPageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then( m => m.MoviesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
