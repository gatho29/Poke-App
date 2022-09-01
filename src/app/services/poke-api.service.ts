import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Ipokemon } from '../models/Ipokemons';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  pokemons: Ipokemon[] = [];
  pokemonsFavorite: Ipokemon[] = [];

  constructor(private _http: HttpClient) { }

  getPokemonData(limit: number): Observable<any> {
    return this._http.get<Ipokemon>(`${environment.apiUrl}/pokemon?limit=${limit}`);
  }

  getPokemonName(name: string): Observable<Ipokemon> {
    return this._http.get<Ipokemon>(`${environment.apiUrl}/pokemon/${name}`);
  }

  getPokemonEspecie(id: number): Observable<Ipokemon> {
    return this._http.get<Ipokemon>(`${environment.apiUrl}/pokemon-species/${id}/`);
  }
}
