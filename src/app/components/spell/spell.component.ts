import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DiceService } from 'src/app/services/dice.service';
import { Spell } from 'src/app/model/spell';
import { Creature } from 'src/app/model/creature';
import { SpellService } from 'src/app/services/spell.service';
import { CreatureService } from 'src/app/services/creature.service';
import { Character } from 'src/app/model/character';
import { Modifier } from 'src/app/model/enums';

@Component({
  selector: 'spell',
  templateUrl: './spell.component.html'
})
export class SpellComponent implements OnInit {
  @Input() spell: Spell;
  @Input() castingCharacter: Character;
  selectedLevel: number;
  selectedCreature: Creature;
  @Output() summon: EventEmitter<any> = new EventEmitter<any>();
  readonly augmentSummonFeat = 'Augmented Summoning';

  constructor(private diceService: DiceService, private spellService: SpellService, private creatureService: CreatureService) {
  }

  ngOnInit() {
    if (this.spell) {
      this.getSpellLevelList();
    }
  }

  getSpellLevelList() {
    this.spell.levelList = [];
    for (let i = 1; i <= this.spell.level; i++) {
      this.spell.levelList.push(i);
    }
  }

  getSpellCreatures(creatureLevel: number) {
    this.spell.creatures = [];
    if (creatureLevel && creatureLevel <= this.spell.level) {
      const creatureListSpellId = this.spell.group + creatureLevel;
      this.spellService.getSpellCreatureListBySpellId(creatureListSpellId).subscribe(creatureList => {
        this.creatureService.getCreaturesFromCreatureList(creatureList).subscribe(creatures => {
          this.spell.creatures = creatures;
        });
      });
    }
  }

  levelChange() {
    this.spell.creatures = [];
    this.getSpellCreatures(this.selectedLevel);
  }

  onSummon() {
    const summonedCreatures: Creature[] = [];
    let numberOfCreatures = 0;
    if (this.castingCharacter && this.selectedLevel && this.selectedCreature) {
      numberOfCreatures = this.calculateNumberOfCreatures(this.spell.level, this.selectedLevel);
      this.selectedCreature.level = this.selectedLevel;
      if (this.castingCharacter.feats.indexOf(this.augmentSummonFeat) >= 0) {
        this.augmentSummoning(this.selectedCreature);
      }
      for (let i = 1; i <= numberOfCreatures; i++) {
        summonedCreatures.push(this.selectedCreature);
      }
    } else {
      console.log('Not enough input');
    }
    this.summon.emit({ id: this.castingCharacter.id, creatures: summonedCreatures });
  }

  augmentSummoning(creature: Creature) {
    creature.abilityScores.strength += 4;
    creature.abilityScores.constitution += 4;
    creature.hitPoints += (2 * creature.level);
    for (const skill of creature.skills) {
      if (skill.skill.modifier === Modifier.Strength || skill.skill.modifier === Modifier.Constitution) {
        skill.bonus += 2;
      }
    }
  }

  calculateNumberOfCreatures(spellLevel: number, creatureLevel: number) {
    let numberOfCreatures = 0;
    if (spellLevel === creatureLevel) {
      numberOfCreatures = 1;
    } else if (spellLevel > creatureLevel) {
      if (spellLevel === creatureLevel + 1) {
        // Summon 1d3 creatures of this level
        numberOfCreatures = this.diceService.rollDice(1, 3);
      } else {
        // Summon 1d4+1 creatures of this level
        numberOfCreatures = this.diceService.rollDice(1, 4) + 1;
      }
    }
    return numberOfCreatures;
  }

}
