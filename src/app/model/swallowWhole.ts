import { IAttackEffect } from './attackeffect';

export class SwallowWhole implements IAttackEffect {
  description = 'Swallow Whole';
  summary = '';
  details = '';

  constructor(
    public armorClass: number,
    public hitPoints: number) {
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  static fromObject(swallowWhole: SwallowWhole): SwallowWhole {
    const { armorClass, hitPoints } = swallowWhole;
    return new this(armorClass, hitPoints);
  }

  getSummary() {
    let summary: string = this.description + ': ';
    summary += 'AC ' + this.armorClass + ', ' + this.hitPoints + ' HP';
    return summary;
  }

  getDetails() {
    let details: string = this.getSummary();
    details += '\r\n' + 'If turn begins with a grappled target in its mouth, creature does damage on successful combat maneuver check.';
    details += '\r\n' + 'Once swallowed, target takes damage every round until they escape.';
    return details;
  }

  applyAugmentSummoning() {
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }
}
