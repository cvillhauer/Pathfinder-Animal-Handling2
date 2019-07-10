import { IAttackEffect } from './attackeffect';

export class NumbingCold implements IAttackEffect {
  description = 'Numbing Cold';
  summary = '';
  details = '';

  constructor(
    public difficultyCheck: number) {
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  static fromObject(numbingCold: NumbingCold): NumbingCold {
    const { difficultyCheck } = numbingCold;
    return new this(difficultyCheck);
  }

  getSummary() {
    let summary: string = this.description + ': ';
    summary += 'DC ' + this.difficultyCheck;
    return summary;
  }

  getDetails() {
    let details: string = this.getSummary();
    details += '\r\n' + 'Creatures hit make a Fortitude save or be staggered for 1 round.';
    return details;
  }

  applyAugmentSummoning() {
    this.difficultyCheck += 2;
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }
}
