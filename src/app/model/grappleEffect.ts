import { IAttackEffect } from './attackeffect';
import { AdditionalDamage } from './additionalDamage';

export class GrappleEffect implements IAttackEffect {
  summary = '';
  details = '';
  displayDescription = true;

  constructor(
    public description: string,
    public resultText: string,
    public restrictionText: string,
    public damages: AdditionalDamage[] = []) {
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  static fromObject(grappleEffect: GrappleEffect): GrappleEffect {
    const { description, resultText, restrictionText, damages } = grappleEffect;
    return new this(description, resultText, restrictionText, damages);
  }

  getSummary() {
    let summary: string = this.description + ': ';
    this.damages.forEach(d => {
      summary += d.getSummary();
      summary += ', ';
    });
    if (summary[summary.length - 2] === ',') {
      summary = summary.substring(0, summary.length - 2);
    }
    return summary;
  }

  getDetails() {
    let details: string = this.getSummary();
    details += '\r\n' + this.resultText;
    details += '\r\n' + this.restrictionText;
    return details;
  }

  applyAbilityBonusIncreases(strIncrease: number, dexIncrease: number, conIncrease: number) {
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }
}
