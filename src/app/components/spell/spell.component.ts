import { Component, OnInit, Input } from '@angular/core';

import { Spell } from 'src/app/model/spell';
import { Creature } from 'src/app/model/creature';
import { CreatureService } from 'src/app/services/creature.service';

@Component({
  selector: 'spell',
  templateUrl: './spell.component.html'
})
export class SpellComponent implements OnInit {
  @Input() spells: Spell[];
  selectedCreature: Creature;

  constructor(private creatureService: CreatureService) {
  }

  ngOnInit() {
    if(this.spells){
      this.getSpellCreatures();
    }
  }

  getSpellCreatures() {
    console.log("Getting spell creatures");
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
    if(this.selectedCreature){
      console.log("Summoning " + this.selectedCreature.description);
    }
    else {
      console.log("No creature selected");
    }
  }

}
