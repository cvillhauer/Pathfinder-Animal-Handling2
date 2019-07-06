import { DamageType } from './enums';
import { AbilityEffect } from './abilityEffect';

export class AdditionalDamage {

  constructor(
    public damageDice: string,
    public damageBonus: number,
    public damageType: DamageType,
    public effects: AbilityEffect[] = []) {
  }

  static fromObject(additionalDamage: AdditionalDamage): AdditionalDamage {
    const { damageDice, damageBonus, damageType, effects } = additionalDamage;
    return new this(damageDice, damageBonus, damageType, effects);
  }

  getSummary() {
    let summary = '';
    if (this.damageDice) {
      summary += this.damageDice + ' +' + this.damageBonus + ' ' + this.damageType + ' damage';
      summary += ', ';
    }
    this.effects.forEach(e => {
      summary += e.getSummary();
      summary += ', ';
    });
    if (summary[summary.length - 2] === ',') {
      summary = summary.substring(0, summary.length - 2);
    }
    return summary;
  }
}
