import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Pokemon} from './pokemon/pokemon';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.css']
})
export class PokeSearchComponent implements OnInit {
  fullurl: string;
  pokemon: Pokemon;
  pokename: string;
  url: string;
  mode: boolean;
  extractData(jsonx: any) {
  this.pokemon.name = jsonx.name;
  this.pokemon.weight = jsonx.weight;
  this.pokemon.img = jsonx.sprites.front_default;
  this.pokemon.type = jsonx.types[0].type.name;
  this.mode = true;
  }
  getPokemon() {
    this.fullurl = this.url + this.pokename + '/';
  this.httpClient.get(this.fullurl).subscribe((json) => { this.extractData(json);
  });
  }
  constructor(private httpClient: HttpClient) {
    this.url = 'https:/pokeapi.co/api/v2/pokemon/';
    this.mode = false;
    this.pokemon = new Pokemon;
  }

  ngOnInit() {
  }

}
