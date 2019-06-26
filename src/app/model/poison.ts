import { IAttackEffect } from './attackeffect';
import { SavingThrow } from './savingThrow';
import { AbilityEffect } from './abilityEffect';

export class Poison implements IAttackEffect {
  description = 'Poison';
  summary: string;
  details: string;

  constructor(
    public savingThrow: SavingThrow,
    public frequency: string,
    public effects: AbilityEffect[],
    public cureSaves: number) {
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  getSummary() {
    let summary: string = this.description + ': ' + this.savingThrow.getSummary() + ', ';
    console.log(this.effects);
    this.effects.forEach(effect => {
      summary += effect.getSummary() + ', ';
    });
    summary = summary.substring(0, summary.length - 2);
    return summary;
  }

  getDetails() {
    let details: string = this.getSummary();
    details += '\r\nFrequency: ' + this.frequency;
    details += ', Cure: ' + this.cureSaves + ' saves';
    return details;
  }

  applyAugmentSummoning() {
    this.savingThrow.difficultyCheck += 2;
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }
}
