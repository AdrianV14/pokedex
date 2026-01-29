import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./pokedex-front/pokedex-front.routes'),
  },
];
