import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from '../models/Ipokemons';
import { PokeApiService } from '../services/poke-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemons: IPokemon[] = [];
  search: string;
  searchPost = '';

  constructor(private _pokeApi: PokeApiService) { }

  ngOnInit(): void {
    this.getPokeApp();
  }

  getPokeApp(): void {
    this._pokeApi.getPokemonData()
      .subscribe((response) => {
        response.results.map((results: IPokemon) => {
          this._pokeApi.getPokemonId(results.name).subscribe((response) => {
            this.pokemons.push(response);
            this.pokemons.sort((a, b) => {
              return a.id - b.id;
            });
          });
        });
      });
  }


}
