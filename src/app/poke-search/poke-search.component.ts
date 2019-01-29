import { Component, OnInit } from '@angular/core';
import {Pokemon} from './pokemon/pokemon';
import {PokedataService} from '../pokedata.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.css'],
  providers: [PokedataService],
})
export class PokeSearchComponent implements OnInit {
  fullurl: string;
  pokemon: Pokemon;
  pokename: string;
  url: string;
  mode: boolean;
  getData(url: string) {
    this.httpClient.get(url).subscribe((json) => {
      this.pokemon = this.myService.extractData(json);
      this.mode = true;
    });
  }
  getPokemon() {
    this.fullurl = this.url + this.pokename + '/';
    this.getData(this.fullurl);
  }

  constructor(private httpClient: HttpClient, private myService: PokedataService) {
    this.url = 'https:/pokeapi.co/api/v2/pokemon/';
    this.mode = false;
    this.pokemon = new Pokemon;
  }

  ngOnInit() {
  }

}
