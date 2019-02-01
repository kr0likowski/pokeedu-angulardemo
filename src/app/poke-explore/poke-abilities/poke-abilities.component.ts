import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-abilities',
  templateUrl: './poke-abilities.component.html',
  styleUrls: ['./poke-abilities.component.css']
})
export class PokeAbilitiesComponent implements OnInit {
abilities = [];
  constructor() {
    this.abilities.push('Adaptability');
    this.abilities.push('Bullet Proof');
    this.abilities.push('Analytic');
    this.abilities.push('Blaze');

  }

  ngOnInit() {
  }

}
