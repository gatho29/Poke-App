import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path:'detail-pokemon/:id',
    loadChildren: () => import('./components/detail-pokemon/detail-pokemon.module').then(m => m.DetailPokemonModule)
  },
  {
    path:'list-favourite',
    loadChildren: () => import('./components/list-favourite/list-favourite.module').then(m => m.ListfavouriteModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
