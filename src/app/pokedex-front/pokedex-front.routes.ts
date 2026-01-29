import { Routes } from '@angular/router';
import { PokedexFrontLayout } from './layouts/pokedex-front-layout/pokedex-front-layout';
import { HomePage } from './pages/home-page/home-page';

export const pokedexFrontRoutes: Routes = [
  {
    path: '',
    component: PokedexFrontLayout,
    children: [
      {
        path: '',
        component: HomePage,
      },
      
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default pokedexFrontRoutes;
