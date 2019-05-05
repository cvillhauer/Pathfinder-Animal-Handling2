import { Component, OnInit, Input } from '@angular/core';

import { Spell } from 'src/app/model/spell';
import { Creature } from 'src/app/model/creature';
import { SpellService } from '../../services/spell.service';
import { CreatureService } from 'src/app/services/creature.service';

@Component({
  selector: 'spell',
  templateUrl: './spell.component.html'
})
export class SpellComponent implements OnInit {
  @Input() spellGroup: string;
  spells: Spell[] = [];
  selectedCreature: Creature;

  constructor(private spellService: SpellService, private creatureService: CreatureService) {
  }

  ngOnInit() {
    this.showSpells(this.spellGroup);
  }

  showSpells(spellGroup: string) {
    this.spellService.getSpellsByGroup(spellGroup).subscribe(spells => {
      this.spells = spells;
      this.getSpellCreatures();
    });
  }

  getSpellCreatures() {
    this.spells.map(s => {
      s.creatures = [];
      if (s.creatureList) {
        for (let i = 0; i < s.creatureList.length; i++) {
          let creatureId = s.creatureList[i];
          this.creatureService.getCreature(creatureId).subscribe(c => {
            s.creatures.push(c);
          });
        }
      }
    });
  }

  summon() {
    console.log("Summoning");
  }

}
