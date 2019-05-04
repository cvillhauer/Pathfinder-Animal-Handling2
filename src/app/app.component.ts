import { Component, OnInit } from '@angular/core';

import { Creature } from 'src/app/model/creature';
import { CreatureService } from 'src/app/services/creature.service';

import { Spell } from 'src/app/model/spell';
import { SpellService } from './services/spell.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pathfinder-Animal-Handling2';
  creatures: Creature[] = [];
  spells: Spell[] = [];

  constructor(private creatureService: CreatureService, private spellService: SpellService) {

  }

  ngOnInit() {
    this.showCreatures();
    this.showSpells();
  }

  showCreatures() {
    this.creatureService.getCreatures().subscribe(creatures => {
      this.creatures = creatures;
    });
  }

  showSpells() {
    this.spellService.getSpells().subscribe(spells => {
      this.spells = spells;
    });
  }
}
