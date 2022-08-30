import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/models/Ipokemons';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss']
})
export class CardPokemonComponent implements OnInit {

  @Input() pokemons: IPokemon;


  constructor() { }

  ngOnInit(): void {
  }
}
