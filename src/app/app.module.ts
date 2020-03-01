import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttackComponent } from './components/attack/attack.component';
import { CharacterComponent } from './components/character/character.component';
import { CreatureComponent } from './components/creature/creature.component';
import { ShapeshiftSpellComponent } from './components/shapeshift-spell/shapeshift-spell.component';
import { SummonSpellComponent } from './components/summon-spell/summon-spell.component';
import { InGameModifiersComponent } from './components/in-game-modifiers/in-game-modifiers.component';
import { SummonedCreatureComponent } from './components/summoned-creature/summoned-creature.component';


@NgModule({
  declarations: [
    AppComponent,
    AttackComponent,
    CharacterComponent,
    CreatureComponent,
    InGameModifiersComponent,
    ShapeshiftSpellComponent,
    SummonedCreatureComponent,
    SummonSpellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
