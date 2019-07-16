import { IAttackEffect } from './attackeffect';

export class SwallowWhole implements IAttackEffect {
  description = 'Swallow Whole';
  summary = '';
  details = '';
  displayDescription = false;

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
    const summary: string = 'AC ' + this.armorClass + ', ' + this.hitPoints + ' HP';
    return summary;
  }

  getDetails() {
    let details: string = this.description + ': ' + this.getSummary();
    details += '\r\n' + 'If turn begins with a grappled target in its mouth, creature does damage on successful combat maneuver check.';
    details += '\r\n' + 'Once swallowed, target takes damage every round until they escape.';
    return details;
  }

  applyAbilityBonusIncreases(strIncrease: number, dexIncrease: number, conIncrease: number) {
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }
}
