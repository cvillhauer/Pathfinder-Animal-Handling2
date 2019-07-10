import { IAttackEffect } from './attackeffect';

export class Web implements IAttackEffect {
  description = 'Web';
  summary = '';
  details = '';
  displayDescription = false;

  constructor(
    public difficultyCheck: number,
    public hitPoints: number) {
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  static fromObject(web: Web): Web {
    const { difficultyCheck, hitPoints } = web;
    return new this(difficultyCheck, hitPoints);
  }

  getSummary() {
    const summary: string = 'DC ' + this.difficultyCheck + ', ' + this.hitPoints + ' HP, DR 5';
    return summary;
  }

  getDetails() {
    let details: string = this.description + ': ' + this.getSummary();
    details += '\r\n' + 'Throw a web at a target up to 50ft away, entangling them.';
    return details;
  }

  applyAugmentSummoning() {
    this.difficultyCheck += 2;
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }
}
