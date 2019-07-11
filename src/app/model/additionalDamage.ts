import { DamageType } from './enums';
import { AbilityEffect } from './abilityEffect';

export class AdditionalDamage {
  summary = '';

  constructor(
    public damageDice: string,
    public damageBonus: number,
    public damageType: DamageType,
    public effects: AbilityEffect[] = []) {
    this.summary = this.getSummary();
  }

  static fromObject(additionalDamage: AdditionalDamage): AdditionalDamage {
    const { damageDice, damageBonus, damageType, effects } = additionalDamage;
    return new this(damageDice, damageBonus, damageType, effects);
  }

  getSummary() {
    let summary = '';
    if (this.damageDice) {
      summary += this.damageDice + ' ';
      if (this.damageBonus > 0) {
        summary += '+' + this.damageBonus + ' ';
      }
      summary += this.damageType + ' damage';
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
