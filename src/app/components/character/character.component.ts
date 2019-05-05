import { Component, Input, OnInit } from '@angular/core';

import { Character } from 'src/app/model/character';
import { SpellService } from 'src/app/services/spell.service';

@Component({
  selector: 'character',
  templateUrl: './character.component.html'
})
export class CharacterComponent implements OnInit {
  @Input() characters: Character[];

  constructor(private spellService: SpellService, ) {
  }

  ngOnInit() {
    for (let i = 0; i < this.characters.length; i++) {
      this.calculateValidSpells(this.characters[i]);
    }
  }

  calculateValidSpells(character: Character) {
    let spellGroup = "";
    switch (character.characterClass) {
      case "Druid":
      case "Ranger":
      case "Shaman":
        spellGroup = "summonnaturesally";
        break;
      case "Bard":
      case "Cleric":
      case "Oracle":
      case "Sorcerer":
      case "Summoner":
      case "Witch":
      case "Wizard":
        spellGroup = "summonmonster";
        break;
      default:
        break;
    }
    character.spellGroup = spellGroup;
    character.spellLevel = 1; //TODO hardcoding for now, calculate later
    this.spellService.getSpellsByGroupAndLevel(character.spellGroup, character.spellLevel).subscribe(spells => {
      console.log("Found spells for " + character.characterName);
      console.log(spells);
      character.validSpells = spells;
    });
  }
}
