import { Component, Input, OnInit } from '@angular/core';

import { Character } from 'src/app/model/character';
import { SpellService } from 'src/app/services/spell.service';
import { Creature } from 'src/app/model/creature';

@Component({
  selector: 'character',
  templateUrl: './character.component.html'
})
export class CharacterComponent implements OnInit {
  @Input() characters: Character[] = [];

  constructor(private spellService: SpellService, ) {
  }

  ngOnInit() {
    this.characters.map(character => { this.calculateValidSpells(character); });
  }

  getValidSpells(character: Character) {
    character.validSpells = [];
    this.spellService.getSpellsByCharacterGroupAndLevel(character.spellGroup, character.spellLevel).subscribe(spells => {
      character.validSpells = spells;
    });
  }

  calculateValidSpells(character: Character) {
    character.spellLevel = this.calculateSpellLevel(character);
    this.getValidSpells(character);
  }

  calculateSpellGroup(character: Character) {
    let spellGroup = '';
    switch (character.characterClass) {
      case 'Druid':
      case 'Ranger':
      case 'Shaman':
        spellGroup = 'summonnaturesally';
        break;
      case 'Cleric':
      case 'Bard':
      case 'Oracle':
      case 'Sorcerer':
      case 'Summoner':
      case 'Witch':
      case 'Wizard':
        spellGroup = 'summonmonster';
        break;
      default:
        break;
    }
    character.spellGroup = spellGroup;
  }

  calculateSpellLevel(character: Character) {
    const characterClass = character.characterClass;
    const characterLevel = character.characterLevel;
    const spellAbilityScore = character.getAbilityScore(character.spellAbilityModifier);
    let spellLevel = 0;
    this.calculateSpellGroup(character);
    if (characterClass === 'Bard' || characterClass === 'Summoner') {
      spellLevel = this.calculateSpellLevelBardOrSummoner(characterLevel);
    } else if (characterClass === 'Ranger') {
      spellLevel = this.calculateSpellLevelRanger(characterLevel);
    } else if (characterClass === 'Sorcerer') {
      spellLevel = this.calculateSpellLevelSorcerer(characterLevel);
    } else {
      switch (characterLevel) {
        case 1:
        case 2:
          spellLevel = 1;
          break;
        case 3:
        case 4:
          spellLevel = 2;
          break;
        case 5:
        case 6:
          spellLevel = 3;
          break;
        case 7:
        case 8:
          spellLevel = 4;
          break;
        case 9:
        case 10:
          spellLevel = 5;
          break;
        case 11:
        case 12:
          spellLevel = 6;
          break;
        case 13:
        case 14:
          spellLevel = 7;
          break;
        case 15:
        case 16:
          spellLevel = 8;
          break;
        case 17:
        case 18:
        case 19:
        case 20:
          spellLevel = 9;
          break;
        default:
          spellLevel = 0;
          break;
      }
    }
    if (spellLevel > (spellAbilityScore - 10)) {
      return spellAbilityScore - 10;
    } else {
      return spellLevel;
    }
  }

  calculateSpellLevelBardOrSummoner(characterLevel: number) {
    switch (characterLevel) {
      case 1:
      case 2:
      case 3:
        return 1;
      case 4:
      case 5:
      case 6:
        return 2;
      case 7:
      case 8:
      case 9:
        return 3;
      case 10:
      case 11:
      case 12:
        return 4;
      case 13:
      case 14:
      case 15:
        return 5;
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
        return 6;
      default:
        return 0;
    }
  }

  calculateSpellLevelRanger(characterLevel: number) {
    switch (characterLevel) {
      case 1:
      case 2:
      case 3:
        return 0;
      case 4:
      case 5:
      case 6:
        return 1;
      case 7:
      case 8:
      case 9:
        return 2;
      case 10:
      case 11:
      case 12:
        return 3;
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
        return 4;
      default:
        return 0;
    }
  }

  calculateSpellLevelSorcerer(characterLevel: number) {
    switch (characterLevel) {
      case 1:
      case 2:
      case 3:
        return 1;
      case 4:
      case 5:
        return 2;
      case 6:
      case 7:
        return 3;
      case 8:
      case 9:
        return 4;
      case 10:
      case 11:
        return 5;
      case 12:
      case 13:
        return 6;
      case 14:
      case 15:
        return 7;
      case 16:
      case 17:
        return 8;
      case 18:
      case 19:
      case 20:
        return 9;
      default:
        return 0;
    }
  }

  getCharacterById(id: string) {
    return this.characters.find(character => character.id === id);
  }

  summon($event) {
    const summonedCreatures: Creature[] = $event.creatures;
    const characterId: string = $event.id;
    this.getCharacterById(characterId).summonedCreatures.push(...summonedCreatures);
  }

  delete(character: Character, creature: Creature) {
    const creatureIndex = character.summonedCreatures.indexOf(creature);
    character.summonedCreatures.splice(creatureIndex, 1);
  }

}
