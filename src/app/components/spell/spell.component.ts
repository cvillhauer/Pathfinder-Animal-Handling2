import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DiceService } from 'src/app/services/dice.service';
import { Spell } from 'src/app/model/spell';
import { Creature } from 'src/app/model/creature';
import { SpellService } from 'src/app/services/spell.service';
import { CreatureService } from 'src/app/services/creature.service';
import { Character } from 'src/app/model/character';
import { Sociology, Morality, Alignment } from 'src/app/model/enums';
import { AbilityScores } from 'src/app/model/abilityscores';
import { Saves } from 'src/app/model/saves';

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
    let possibleValidCreatures = [];
    if (creatureLevel && creatureLevel <= this.spell.level) {
      const creatureListSpellId = this.spell.group + creatureLevel;
      this.spellService.getSpellCreatureListBySpellId(creatureListSpellId).subscribe(creatureList => {
        this.creatureService.getCreaturesFromCreatureList(creatureList).subscribe(creatures => {
          possibleValidCreatures = creatures;
          possibleValidCreatures.forEach(creature => {
            // A creature must be True Neutral, or else be adjacent to the casting character's alignment, to be a valid summon
            if ((creature.alignment.sociology === Sociology.Neutral && creature.alignment.morality === Morality.Neutral)
              || this.castingCharacter.compareAlignment(creature.alignment) > -1) {
              this.spell.creatures.push(creature);
            }
          });
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
      for (let i = 1; i <= numberOfCreatures; i++) {
        const newCreature = new Creature(
          this.selectedCreature.id,
          this.selectedCreature.description,
          this.selectedCreature.link,
          this.selectedCreature.image,
          this.selectedCreature.size,
          this.selectedCreature.type,
          this.determineAlignment(),
          this.selectedCreature.speed,
          new AbilityScores(
            this.selectedCreature.abilityScores.strength,
            this.selectedCreature.abilityScores.dexterity,
            this.selectedCreature.abilityScores.constitution,
            this.selectedCreature.abilityScores.intelligence,
            this.selectedCreature.abilityScores.wisdom,
            this.selectedCreature.abilityScores.charisma),
          this.selectedCreature.hitPoints,
          this.selectedCreature.armorClass,
          this.selectedCreature.combatManeuverBonus,
          this.selectedCreature.combatManeuverDefense,
          new Saves(
            this.selectedCreature.saves.fortitude,
            this.selectedCreature.saves.reflex,
            this.selectedCreature.saves.will),
          this.selectedCreature.skills
        );
        newCreature.level = this.selectedLevel;
        newCreature.creatureName = 'Squeaky ' + i; // TODO: Add a UI element to set this?
        newCreature.editName = false;
        newCreature.roundsLeft = this.castingCharacter.characterLevel;
        if (this.castingCharacter.feats.indexOf(this.augmentSummonFeat) >= 0) {
          newCreature.augmentSummoning();
        }
        summonedCreatures.push(newCreature);
      }
    } else {
      console.log('Not enough input');
    }
    this.summon.emit({ id: this.castingCharacter.id, creatures: summonedCreatures });
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

  determineAlignment() {
    // True Neutral creatures will use the summoning character's alignment
    if (this.selectedCreature.alignment.sociology === Sociology.Neutral && this.selectedCreature.alignment.morality === Morality.Neutral) {
      return this.castingCharacter.alignment;
    } else {
      return this.selectedCreature.alignment;
    }
  }

}
