import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Pokemon} from './poke-search/pokemon/pokemon';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import {PokedataService} from './pokedata.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { PokeExploreComponent } from './poke-explore/poke-explore.component';
import { PokeTypesComponent } from './poke-explore/poke-types/poke-types.component';
import { PokeAbilitiesComponent } from './poke-explore/poke-abilities/poke-abilities.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeSearchComponent,
    PokeExploreComponent,
    PokeTypesComponent,
    PokeAbilitiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ PokedataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
