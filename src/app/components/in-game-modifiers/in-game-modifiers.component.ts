import { Component, Input } from '@angular/core';
import { InGameModifiersService } from 'src/app/services/in-game-modifiers.service';
import { InGameModifier } from 'src/app/model/inGameModifiers';
import { Creature } from 'src/app/model/creature';

@Component({
  selector: 'in-game-modifiers',
  templateUrl: './in-game-modifiers.component.html'
})
export class InGameModifiersComponent {
  @Input() affectedCreature: Creature;
  @Input() inGameModifiers: InGameModifier;

  constructor(private modifiersService: InGameModifiersService) {
  }

  modifierChange(modifier: InGameModifier) {
    this.modifiersService.proccessModifierChange(this.affectedCreature, modifier);
  }
}
