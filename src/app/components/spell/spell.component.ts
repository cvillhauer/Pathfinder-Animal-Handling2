import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Spell } from 'src/app/model/spell';
import { Creature } from 'src/app/model/creature';
import { CreatureService } from 'src/app/services/creature.service';

@Component({
  selector: 'spell',
  templateUrl: './spell.component.html'
})
export class SpellComponent implements OnInit {
  @Input() spell: Spell;
  selectedCreature: Creature;

  constructor(private creatureService: CreatureService) {
  }

  ngOnInit() {
    if (this.spell) {
      this.getSpellCreatures();
    }
  }

  getSpellCreatures() {
    this.spell.creatures = [];
    if (this.spell.creatureList) {
      for (let i = 0; i < this.spell.creatureList.length; i++) {
        let creatureId = this.spell.creatureList[i];
        this.creatureService.getCreature(creatureId).subscribe(c => {
          this.spell.creatures.push(c);
        });
      }
    }
  }

  summon() {
    if (this.selectedCreature) {
      console.log("Summoning " + this.selectedCreature.description);
    }
    else {
      console.log("No creature selected");
    }
  }

}
