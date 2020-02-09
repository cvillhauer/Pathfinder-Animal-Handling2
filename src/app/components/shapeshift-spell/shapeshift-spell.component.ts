import { Component, OnInit, Input } from '@angular/core';

import { SummonSpell } from 'src/app/model/spell';
import { Character } from 'src/app/model/character';

@Component({
  selector: 'shapeshift-spell',
  templateUrl: './shapeshift-spell.component.html'
})
export class ShapeshiftSpellComponent implements OnInit {
  @Input() spell: SummonSpell;
  @Input() castingCharacter: Character;
  @Input() roundCount: number;

  constructor() {
  }

  ngOnInit() {

  }
}
