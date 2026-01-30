import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FrontNavbar } from '../../components/front-navbar/front-navbar';
import { RouterOutlet } from '@angular/router';
import { PokemonService } from '../../../pokemons/services/pokemon';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-pokedex-front-layout',
  imports: [FrontNavbar, RouterOutlet],
  templateUrl: './pokedex-front-layout.html',
})
export class PokedexFrontLayout {
  pokemonServie = inject(PokemonService);

  pokemonsResource = rxResource({
    params: () => ({}),
    stream: () => {
      return this.pokemonServie.getPokemons();
    },
  });
}
