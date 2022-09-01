import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';
import { PkmButtonModule, PkmTopBarModule } from 'projects/ngx-nell-library/src/public-api';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { RouterModule } from '@angular/router';
import { ListfavouriteComponent } from './list-favourite/list-favourite.component';



@NgModule({
  declarations: [
    CardPokemonComponent,
    DetailPokemonComponent,
    ListfavouriteComponent
  ],
  imports: [
    CommonModule,
    PkmTopBarModule,
    RouterModule,
    PkmButtonModule
  ],
  exports: [CardPokemonComponent],
})
export class ComponentsModule { }
