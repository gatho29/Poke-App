import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';
import { PkmTopBarModule } from 'projects/ngx-nell-library/src/public-api';



@NgModule({
  declarations: [
    CardPokemonComponent
  ],
  imports: [
    CommonModule,
    PkmTopBarModule
  ],
  exports: [CardPokemonComponent]
})
export class ComponentsModule { }
