import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { PokeExploreComponent } from './poke-explore/poke-explore.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeSearchComponent,
    PokeExploreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
