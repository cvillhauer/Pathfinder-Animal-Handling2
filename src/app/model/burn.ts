import { IAttackEffect } from './attackeffect';

export class Burn implements IAttackEffect {
  description = 'Burn';
  summary = '';
  details = '';

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
    details += '\r\n' + 'Creatures hit make a Reflex save to avoid catching fire.';
    details += '\r\n' + 'Burning creatures take fire damage on their turn for 1d4 rounds.';
    details += '\r\n' + 'Burning creatures may spend a full-round action to get a new Reflex save at a +4 bonus.';
    return details;
  }

  applyAugmentSummoning() {
    this.difficultyCheck += 2;
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }
}
