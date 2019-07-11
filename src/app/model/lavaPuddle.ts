import { IAttackEffect } from './attackeffect';

export class LavaPuddle implements IAttackEffect {
  description = 'Lava Puddle';
  summary = '';
  details = '';
  displayDescription = false;

  constructor(
    public hitDice: number) {
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  static fromObject(lavaPuddle: LavaPuddle): LavaPuddle {
    const { hitDice } = lavaPuddle;
    return new this(hitDice);
  }

  getSummary() {
    let summary: string = this.hitDice + ' round';
    if (this.hitDice > 1) {
      summary += 's';
    }
    summary += ', 2d6 Fire damage, then 1d6 Fire damage for 1d3 rounds';
    return summary;
  }

  getDetails() {
    let details: string = this.description + ': ' + this.getSummary();
    details += '\r\n' + 'Vomit forth a puddle of lava in the creatures space.';
    details += '\r\n' + 'Any creature that moves through the puddle takes fire damage.';
    return details;
  }

  applyAugmentSummoning() {
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }
}
