import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { PokemonsReponse } from '../interfaces/pokemon.interface';

const baseURL = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private http = inject(HttpClient);

  getPokemons(): Observable<PokemonsReponse> {
    return this.http
      .get<PokemonsReponse>(`${baseURL}/pokemon`)
      .pipe(tap((res) => console.log(res)));
  }
}
