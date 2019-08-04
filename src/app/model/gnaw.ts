import { IAttackEffect } from './attackeffect';
import { SavingThrow } from './savingThrow';
import { Save } from './enums';

export class Gnaw implements IAttackEffect {
  description = 'Gnaw';
  summary = '';
  details = '';
  displayDescription = true;

  constructor(
    public damageDice: string,
    public damageBonus: number) {
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  static fromObject(gnaw: Gnaw): Gnaw {
    const { damageDice, damageBonus } = gnaw;
    return new this(damageDice, damageBonus);
  }

  getSummary() {
    const summary: string = this.description + ': ' + this.damageDice + '+' + this.damageBonus;
    return summary;
  }

  getDetails() {
    let details: string = this.getSummary();
    details += '\r\n' + 'Affects targets that are grappled at the beginning of the round.';
    details += '\r\n' + 'Grappled target automatically takes ' + this.damageDice + '+' + this.damageBonus + ' bite damage.';
    return details;
  }

  applyAbilityBonusIncreases(strIncrease: number, dexIncrease: number, conIncrease: number) {
    this.damageBonus += strIncrease;
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  applyAttackBonusIncrease(attackBonusIncrease: number, includeCombatManeuvers: boolean) {
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }
}
