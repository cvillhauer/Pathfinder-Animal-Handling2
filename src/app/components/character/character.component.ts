import { Component, Input, OnInit } from '@angular/core';

import { Character } from 'src/app/model/character';

@Component({
  selector: 'character',
  templateUrl: './character.component.html'
})
export class CharacterComponent implements OnInit {
  @Input() characters: Character[];

  constructor() {
  }

  ngOnInit() {
    for(let i = 0; i < this.characters.length; i++){
      this.calculateValidSpells(this.characters[i]);
    }
  }

  calculateValidSpells(character: Character) {
    let spellGroup = "";
    switch(character.characterClass){
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
}
}
