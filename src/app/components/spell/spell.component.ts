import { Component, OnInit, Input } from '@angular/core';

import { Spell } from 'src/app/model/spell';
import { Creature } from 'src/app/model/creature';
import { CreatureService } from 'src/app/services/creature.service';
import { Character } from 'src/app/model/character';

@Component({
  selector: 'spell',
  templateUrl: './spell.component.html'
})
export class SpellComponent implements OnInit {
  @Input() spell: Spell;
  @Input() castingCharacter: Character;
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
      this.creatureService.getSpellCreatures(this.spell.creatureList).subscribe(creatures => {
        this.spell.creatures = creatures;
      });
    }
  }

  summon() {
    if (this.selectedCreature) {
      console.log("Summoning " + this.selectedCreature.description);
      if (this.castingCharacter && this.castingCharacter.feats.indexOf("Augmented Summoning") >= 0) {
        console.log("with +4 Strength and +4 Constitution");
      }
    }
    else {
      console.log("No creature selected");
    }
  }

}
