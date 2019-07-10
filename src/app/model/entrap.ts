import { IAttackEffect } from './attackeffect';

export class Entrap implements IAttackEffect {
  description = 'Entrap';
  summary = '';
  details = '';
  displayDescription = true;

  constructor(
    public difficultyCheck: number,
    public duration: string,
    public hardness: number,
    public hitPoints: number) {
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  static fromObject(entrap: Entrap): Entrap {
    const { difficultyCheck, duration, hardness, hitPoints } = entrap;
    return new this(difficultyCheck, duration, hardness, hitPoints);
  }

  getSummary() {
    let summary: string = this.description + ': DC ' + this.difficultyCheck;
    summary += ', ' + this.duration + ', hardness ' + this.hardness + ', HP ' + this.hitPoints;
    return summary;
  }

  getDetails() {
    let details: string = this.getSummary();
    details += '\r\n' + 'The target must make a Fortitude save or become entangled.';
    details += '\r\n' + 'An already entangled target must make a Fortitude save or become helpless.';
    details += '\r\n' + 'An entangled creature can make a Strength check to break free (+5 DC for helpless).';
    return details;
  }

  applyAugmentSummoning() {
    this.difficultyCheck += 2;
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }
}
