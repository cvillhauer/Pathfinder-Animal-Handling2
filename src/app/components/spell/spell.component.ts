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
  @Output() summon: EventEmitter<Object> = new EventEmitter<Object>(); //TODO: Can I better Type this?

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
    let summonedCreatures: Creature[] = [];
    let numberOfCreatures = 0;
    if (this.castingCharacter && this.selectedLevel && this.selectedCreature) {
      console.log("Casting " + this.spell.description + " at level " + this.selectedLevel);
      numberOfCreatures = this.calculateNumberOfCreatures(this.spell.level, this.selectedLevel);
      //TODO: Selected Level should affect what creature list I get
      console.log("Summoning " + numberOfCreatures + " " + this.selectedCreature.description);
      if (this.castingCharacter.feats.indexOf("Augmented Summoning") >= 0) {
        console.log("with +4 Strength and +4 Constitution");
      }
      for (let i = 1; i <= numberOfCreatures; i++) {
        summonedCreatures.push(this.selectedCreature);
      }
    }
    else {
      console.log("Not enough input");
    }
    this.summon.emit({ id: this.castingCharacter.id, creatures: summonedCreatures });
  }

  calculateNumberOfCreatures(spellLevel: number, creatureLevel: number) {
    let numberOfCreatures: number = 0;
    if (spellLevel == creatureLevel) {
      numberOfCreatures = 1;
    }
    else if (spellLevel > creatureLevel) {
      if (spellLevel == creatureLevel + 1) {
        //Summon 1d3 creatures of this level
        numberOfCreatures = this.rollDice(1, 3);
      }
      else {
        //Summon 1d4+1 creatures of this level
        numberOfCreatures = this.rollDice(1, 4) + 1;
      }
    }
    return numberOfCreatures;
  }

  //TODO: Move RollDice somewhere other classes can use it?
  rollDice(numberOfDice: number, typeOfDice: number) {
    let result: number = 0;
    console.log("Rolling " + numberOfDice + "d" + typeOfDice);
    for (let i: number = 0; i < numberOfDice; i++) {
      let roll: number = Math.floor(Math.random() * typeOfDice) + 1;
      result += roll;
      console.log("Rolled a " + roll);
    }
    console.log("Total of dice rolls is a " + result);
    return result;
  }

}
