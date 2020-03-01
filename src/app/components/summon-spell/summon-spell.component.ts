import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DiceService } from 'src/app/services/dice.service';
import { SummonSpell } from 'src/app/model/spell';
import { Creature } from 'src/app/model/creature';
import { SpellService } from 'src/app/services/spell.service';
import { CreatureService } from 'src/app/services/creature.service';
import { Character } from 'src/app/model/character';
import { Morality, CreatureType } from 'src/app/model/enums';
import { AbilityScoreService } from 'src/app/services/ability-score.service';
import { SummonedCreature } from 'src/app/model/summonedCreature';
import { Feat } from 'src/app/model/feat';

@Component({
  selector: 'summon-spell',
  templateUrl: './summon-spell.component.html'
})
export class SummonSpellComponent implements OnInit {
  @Input() spell: SummonSpell;
  @Input() castingCharacter: Character;
  @Input() roundCount: number;
  selectedLevel: number;
  selectedCreature: Creature;
  @Output() summon: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private diceService: DiceService,
    private spellService: SpellService,
    private creatureService: CreatureService,
    private abilityScoreService: AbilityScoreService) {
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
      this.spellService.getSummonSpellCreatureListBySpellId(creatureListSpellId).subscribe(creatureList => {
        this.creatureService.getCreaturesFromCreatureList(creatureList).subscribe(creatures => {
          possibleValidCreatures = creatures;
          for (const creature of possibleValidCreatures) {
            if (creature.isTrueNeutral() || this.castingCharacter.compareAlignment(creature.alignment) > -1) {
              this.spell.creatures.push(creature);
            }
          }
        });
      });
    }
  }

  levelChange() {
    this.spell.creatures = [];
    this.getSpellCreatures(this.selectedLevel);
  }

  onSummon() {
    const summonedCreatures: SummonedCreature[] = [];
    let numberOfCreatures = 0;
    if (this.castingCharacter && this.selectedLevel && this.selectedCreature) {
      numberOfCreatures = this.calculateNumberOfCreatures(this.spell.level, this.selectedLevel);
      if (this.castingCharacter.feats.indexOf(Feat.SuperiorSummoning) >= 0 && this.spell.level > this.selectedLevel) {
        numberOfCreatures += 1;
      }
      for (let i = 1; i <= numberOfCreatures; i++) {
        const newCreature = SummonedCreature.fromObject(JSON.parse(JSON.stringify(this.selectedCreature)));
        newCreature.level = this.selectedLevel;
        newCreature.creatureName = 'Squeaky ' + i; // TODO: Add a UI element to set this?
        newCreature.editName = false;
        newCreature.roundSummoned = this.roundCount;
        newCreature.roundsLeft = this.castingCharacter.characterLevel;
        // Add Celestial/Fiendish template
        if (this.spell.group === 'summonmonster' && this.selectedCreature.isTrueNeutral()
          && this.selectedCreature.type !== CreatureType.Elemental) {
          if (this.castingCharacter.alignment.morality === Morality.Good) {
            newCreature.applyCelestialTemplate();
          } else if (this.castingCharacter.alignment.morality === Morality.Evil) {
            newCreature.applyFiendishTemplate();
          } else {
            // TODO: Let the user choose
          }
        }
        newCreature.alignment = this.determineAlignment();
        if (this.castingCharacter.feats.indexOf(Feat.AugmentSummoning) >= 0) {
          // AugmentSummoning increases Strength and Constitution by 4
          this.abilityScoreService.increaseStrength(newCreature, 4);
          this.abilityScoreService.increaseConstitution(newCreature, 4);
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
    if (this.selectedCreature.isTrueNeutral() && this.selectedCreature.type !== CreatureType.Elemental) {
      return this.castingCharacter.alignment;
    } else {
      return this.selectedCreature.alignment;
    }
  }

}
