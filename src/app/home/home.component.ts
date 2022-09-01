import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ipokemon } from '../models/Ipokemons';
import { LocalStorageService } from '../services/local-storage.service';
import { PokeApiService } from '../services/poke-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemons: Ipokemon[]= [];
  idPokemon: number;
  filterPokemon: '';

  constructor(public _pokeApi: PokeApiService,
    public _localStorage: LocalStorageService) { }

  ngOnInit(): void {
    this.getPokeApp();
  }

  getPokeApp(): void {
    this._pokeApi.getPokemonData(12)
      .subscribe((response) => {
        response.results.map((results: Ipokemon) => {
          this._pokeApi.getPokemonName(results.name).subscribe((response) => {
            this.pokemons.push(response);
            this.pokemons.sort((a, b) => {
              return a.id - b.id;
            });
            this.idPokemon = results.id;
          });
        });
      });
  }

  findIfFavoritePokemon(pokemon: Ipokemon): boolean {
    return this._localStorage.findIfFavoritePokemon(pokemon);
  }

  nextPage(): void {
    this.getPokeApp();
  }

}
