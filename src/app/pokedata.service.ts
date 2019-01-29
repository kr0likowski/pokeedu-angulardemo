import { Injectable } from '@angular/core';
import {Pokemon} from './poke-search/pokemon/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokedataService {
  private pokemon: Pokemon = new Pokemon();
  extractData(pokeObj: any): Pokemon {
    this.pokemon.name = pokeObj.name;
    this.pokemon.weight = pokeObj.weight;
    this.pokemon.img = pokeObj.sprites.front_default;
    this.pokemon.type = pokeObj.types[0].type.name;
    return this.pokemon;
  }
  constructor() {
  }
}
