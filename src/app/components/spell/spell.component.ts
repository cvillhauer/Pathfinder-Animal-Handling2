import { Component, OnInit } from '@angular/core';

import { Spell } from 'src/app/model/spell';
import { Creature } from 'src/app/model/creature';
import { SpellService } from '../../services/spell.service';
import { CreatureService } from 'src/app/services/creature.service';

@Component({
  selector: 'spell',
  templateUrl: './spell.component.html'
})
export class SpellComponent implements OnInit {
  title = 'Pathfinder-Animal-Handling2';
  spells: Spell[] = [];
  creatures: Creature[] = [];
  selectedCreature: Creature;

  constructor(private spellService: SpellService, private creatureService: CreatureService) {

  }

  ngOnInit() {
    this.showSpells();
  }

  showSpells() {
    this.spellService.getSpellsByGroup("summonnaturesally").subscribe(spells => {
      this.spells = spells;
      this.getSpellCreatures();
    });
  }

  getSpellCreatures() {
    this.spells.map(s => {
      if (s.creatures) {
        for (let i = 0; i < s.creatures.length; i++) {
          let creatureId = s.creatures[i];
          this.creatureService.getCreature(creatureId).subscribe(c => {
            this.creatures.push(c);
          });
        }
      }
    });
  }

  summon() {
    console.log("Summoning");
  }

}
