import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    component: DetailPokemonComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class DetailPokemonModule { }
