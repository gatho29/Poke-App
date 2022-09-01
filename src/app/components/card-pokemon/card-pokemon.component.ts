import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ipokemon } from 'src/app/models/Ipokemons';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss']
})
export class CardPokemonComponent implements OnInit {

  @Input() pokemons: Ipokemon;
  @Input() isFavorite : boolean;
  listPokemonFavorite: any ;

  constructor(
    private _router: Router,
    private _localStorage: LocalStorageService
     ) { }

  ngOnInit(): void {
  }

  setPokemonToFavorite(pokemon: Ipokemon): void {
    this._localStorage.setPokemonToFavorite(pokemon);
  }


  goPokemonDetail(pokemon: Ipokemon): void {
    const id = pokemon.id;
    this._router.navigate([`/detail-pokemon/${id}`])
  }

}
