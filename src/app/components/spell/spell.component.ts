import { Component, OnInit } from '@angular/core';

import { Spell } from 'src/app/model/spell';
import { SpellService } from '../../services/spell.service';

@Component({
  selector: 'spell',
  templateUrl: './spell.component.html'
})
export class SpellComponent implements OnInit {
  title = 'Pathfinder-Animal-Handling2';
  spells: Spell[] = [];

  constructor(private spellService: SpellService) {

  }

  ngOnInit() {
    this.showSpells();
  }

  showSpells() {
    this.spellService.getSpellsByGroup("summonnaturesally").subscribe(spells => {
      this.spells = spells;
    });
  }

  summon(){
    console.log("Summoning");
  }

}
