import { Component, Input, OnInit } from '@angular/core';

import { Character } from 'src/app/model/character';
import { SpellService } from 'src/app/services/spell.service';
import { Creature } from 'src/app/model/creature';

@Component({
  selector: 'character',
  templateUrl: './character.component.html'
})
export class CharacterComponent implements OnInit {
  @Input() character: Character;
  @Input() roundCount: number;

  constructor(private spellService: SpellService, ) {
  }

  ngOnInit() {
    this.getValidSpells();
  }

  getValidSpells() {
    this.character.validSpells = [];
    this.spellService.getSpellsByCharacterClassAndLevel(this.character.characterClass, this.character.spellLevel).subscribe(spells => {
      this.character.validSpells = spells;
    });
  }

  summon($event) {
    const summonedCreatures: Creature[] = $event.creatures;
    this.character.summonedCreatures.unshift(...summonedCreatures);
  }

  delete(creature: Creature) {
    const creatureIndex = this.character.summonedCreatures.indexOf(creature);
    this.character.summonedCreatures.splice(creatureIndex, 1);
  }

}
