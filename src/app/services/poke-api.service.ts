import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IPokemon } from '../models/Ipokemons';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  pokemons: IPokemon[] = [];

  constructor(private _http: HttpClient) { }

  getPokemonData(): Observable<any> {
    return this._http.get<IPokemon>(`${environment.apiUrl}/pokemon?limit=40`)
  }

  getPokemonId(id: string): Observable<any> {
    return this._http.get<IPokemon>(`${environment.apiUrl}/pokemon/${id}`)
  }

  getPokemonEspecie(id: string): Observable<any> {
    return this._http.get<IPokemon>(`${environment.apiUrl}/pokemon-species/${id}`)
  }

}
