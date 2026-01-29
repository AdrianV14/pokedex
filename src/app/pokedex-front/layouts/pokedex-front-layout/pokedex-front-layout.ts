import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FrontNavbar } from "../../components/front-navbar/front-navbar";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-pokedex-front-layout',
  imports: [FrontNavbar, RouterOutlet],
  templateUrl: './pokedex-front-layout.html',
})
export class PokedexFrontLayout { }
