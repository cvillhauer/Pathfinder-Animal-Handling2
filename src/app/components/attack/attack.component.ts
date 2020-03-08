import { Component, Input } from '@angular/core';
import { Attack } from 'src/app/model/attack';
import { DamageType } from 'src/app/model/enums';

@Component({
  selector: 'attack',
  templateUrl: './attack.component.html'
})
export class AttackComponent {
  @Input() attack: Attack;

  constructor() {
  }

  getDamageTypeText() {
    let text = '';
    this.attack.damageTypes.forEach(damageType => {
      if (damageType !== DamageType.Bludgeoning && damageType !== DamageType.Slashing && damageType !== DamageType.Piercing) {
        text += damageType + ' ';
      }
    }
    );
    if (text) {
      text += ' damage';
    }
    return text;
  }

}
