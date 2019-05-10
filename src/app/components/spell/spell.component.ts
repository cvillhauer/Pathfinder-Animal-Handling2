import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  selectedLevel: number;
  selectedCreature: Creature;
  @Output() summon: EventEmitter<Creature> = new EventEmitter<Creature>();

  constructor(private creatureService: CreatureService) {
  }

  ngOnInit() {
    if (this.spell) {
      this.getSpellLevelList();
      this.getSpellCreatures();
    }
  }

  getSpellLevelList() {
    this.spell.levelList = [];
    for (let i = 1; i <= this.spell.level; i++) {
      this.spell.levelList.push(i);
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

  onSummon() {
    if (this.castingCharacter && this.selectedLevel && this.selectedCreature) {
      console.log("Casting " + this.spell.description + " at level " + this.selectedLevel);
      console.log("Summoning " + this.selectedCreature.description);
      if (this.castingCharacter.feats.indexOf("Augmented Summoning") >= 0) {
        console.log("with +4 Strength and +4 Constitution");
      }
    }
    else {
      console.log("Not enough input");
    }
    this.summon.emit(this.selectedCreature);
  }

}
