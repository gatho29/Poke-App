import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Ipokemon, IspeciePokemon } from 'src/app/models/Ipokemons';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  pokemonDetail: Ipokemon | any;
  speciePokemon: IspeciePokemon |any;
  pokemonId : number;

  constructor(private _router: ActivatedRoute,
    private _pokeApi: PokeApiService,
    public _localStorage: LocalStorageService
    ) { }

  ngOnInit(): void {
    this._router.paramMap
      .pipe(
        switchMap(params => this._pokeApi.getPokemonName(params.get('id')))
      )
      .subscribe((pokemon: Ipokemon) => {
        this.pokemonDetail = pokemon;
        this.pokemonId = pokemon.id;
        this.getSpeciePokemon();
      });
  }

  getSpeciePokemon(): void {
    this._pokeApi.getPokemonEspecie(this.pokemonId).subscribe((response) => {
      this.speciePokemon = response;
    });
  }


  setPokemonToFavorite(pokemon: Ipokemon): void {
    this._localStorage.setPokemonToFavoriteSinceDetail(pokemon)

  }

}
