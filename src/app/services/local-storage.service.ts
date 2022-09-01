import { Injectable } from '@angular/core';
import { Ipokemon } from '../models/Ipokemons';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  pokemonsFavorite: Ipokemon[] = [];

  constructor() { }

  setPokemonToFavorite(pokemonFav: Ipokemon): void {
    const result = this.pokemonsFavorite.find(param => param.id === pokemonFav.id);
    if (!result) {
      this.pokemonsFavorite.push(pokemonFav);
      localStorage.setItem('pokemonFav', JSON.stringify(this.pokemonsFavorite));
    } else {
      this.deletePokemonFavorite(pokemonFav);
    }
  }

  setPokemonToFavoriteSinceDetail(pokemonFav: Ipokemon): void {
    const result = this.pokemonsFavorite.find(param => param.id === pokemonFav.id);
    if (!result) {
      this.pokemonsFavorite.push(pokemonFav);
      localStorage.setItem('pokemonFav', JSON.stringify(this.pokemonsFavorite));
    }
  }

  getPokemonFavorites(): Ipokemon[] {
    this.pokemonsFavorite = JSON.parse(localStorage.getItem('pokemonFav')) || [];
    return this.pokemonsFavorite;
  }

  deletePokemonFavorite(pokemon: any): void {
    let index = null;
    this.pokemonsFavorite.forEach((param, i) => {
      if (param.id === pokemon.id) {
        index = i;
        return;
      }
    });
    this.pokemonsFavorite.splice(index, 1);
    localStorage.setItem('pokemonFav', JSON.stringify(this.pokemonsFavorite));
  }

  findIfFavoritePokemon(pokemon: Ipokemon): boolean {
    const result = this.pokemonsFavorite.find(param => param.id === pokemon.id);
    return result ? true : false;
  }


}
