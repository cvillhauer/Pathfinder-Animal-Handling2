import { IAttackEffect } from './attackeffect';

export class Trample implements IAttackEffect {
  description = 'Trample';
  summary = '';
  details = '';
  displayDescription = false;

  constructor(
    public damageDice: string,
    public damageBonus: number,
    public difficultyCheck: number) {
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  static fromObject(trample: Trample): Trample {
    const { damageDice, damageBonus, difficultyCheck } = trample;
    return new this(damageDice, damageBonus, difficultyCheck);
  }

  getSummary() {
    let summary: string = this.damageDice + '+' + this.damageBonus;
    summary += ', DC ' + this.difficultyCheck;
    return summary;
  }

  getDetails() {
    let details: string = this.getSummary();
    details += '\r\n' + 'Creature moves through an opponent square and automatically succeeds an overrun combat maneuver.';
    details += '\r\n' + 'Target may take an attack of opportunity, or a make a Reflex save for half damage.';
    return details;
  }

  applyAbilityBonusIncreases(strIncrease: number, dexIncrease: number, conIncrease: number) {
    this.damageBonus += Math.floor(strIncrease * 1.5);
    this.difficultyCheck += strIncrease;
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }
}
