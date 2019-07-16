import { IAttackEffect } from './attackeffect';

export class Burn implements IAttackEffect {
  description = 'Burn';
  summary = '';
  details = '';
  displayDescription = true;

  constructor(
    public damageDice: string,
    public difficultyCheck: number) {
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  static fromObject(burn: Burn): Burn {
    const { damageDice, difficultyCheck } = burn;
    return new this(damageDice, difficultyCheck);
  }

  getSummary() {
    let summary: string = this.description + ': ' + this.damageDice;
    summary += ', DC ' + this.difficultyCheck;
    return summary;
  }

  getDetails() {
    let details: string = this.getSummary();
    details += '\r\n' + 'Affects targets hit by this creature and enemies who hit this creature with a natural attack.';
    details += '\r\n' + 'Creatures take ' + this.damageDice + ' Fire damage and make a Reflex save to avoid catching fire.';
    details += '\r\n' + 'Burning creatures take 1d6 Fire damage on their turn for 1d4 rounds.';
    details += '\r\n' + 'Burning creatures may spend a full-round action to get a new Reflex save at a +4 bonus.';
    return details;
  }

  applyAbilityBonusIncreases(strIncrease: number, dexIncrease: number, conIncrease: number) {
    this.difficultyCheck += conIncrease;
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }
}
