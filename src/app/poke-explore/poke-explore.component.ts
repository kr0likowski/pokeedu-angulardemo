import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-explore',
  templateUrl: './poke-explore.component.html',
  styleUrls: ['./poke-explore.component.css']
})
export class PokeExploreComponent implements OnInit {
  mode: number;
  constructor() {
    this.mode = 0;
  }

  ngOnInit() {
  }

}
