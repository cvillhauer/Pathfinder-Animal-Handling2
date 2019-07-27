import { IAttackEffect } from './attackeffect';

export class Rend implements IAttackEffect {
  description = 'Rend';
  summary = '';
  details = '';
  displayDescription = true;

  constructor(
    public damageDice: string,
    public damageBonus: number) {
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  static fromObject(rend: Rend): Rend {
    const { damageDice, damageBonus } = rend;
    return new this(damageDice, damageBonus);
  }

  getSummary() {
    const summary: string = this.description + ': ' + this.damageDice + '+' + this.damageBonus;
    return summary;
  }

  getDetails() {
    let details: string = this.getSummary();
    details += '\r\n' + 'If the creature hits with two or more natural attacks in one round, Rend damage is dealt.';
    details += '\r\n' + 'Target takes ' + this.damageDice + '+' + this.damageBonus + ' Rend damage, no more than once per round.';
    return details;
  }

  applyAbilityBonusIncreases(strIncrease: number, dexIncrease: number, conIncrease: number) {
    this.damageBonus += Math.floor(strIncrease * 1.5);
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  applyAttackBonusIncrease(attackBonusIncrease: number, includeCombatManeuvers: boolean) {
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }
}
