import { Component, Input, OnInit } from '@angular/core';
import { Ipokemon } from 'src/app/models/Ipokemons';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-list-favourite',
  templateUrl: './list-favourite.component.html',
  styleUrls: ['./list-favourite.component.scss']
})
export class ListfavouriteComponent implements OnInit {

  @Input() pokemons: Ipokemon;
  pokemonsFavorite: Ipokemon[];

  constructor(
    public _localStorage: LocalStorageService) { }

  ngOnInit(): void {
    this.pokemonsFavorite = this._localStorage.getPokemonFavorites();

  }

  findIfFavoritePokemon(pokemon :Ipokemon): boolean {
    return this._localStorage.findIfFavoritePokemon(pokemon);
  }

}
