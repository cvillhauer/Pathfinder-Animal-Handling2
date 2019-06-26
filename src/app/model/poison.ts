import { IAttackEffect } from './attackeffect';
import { SavingThrow } from './savingThrow';
import { AbilityEffect } from './abilityEffect';

export class Poison implements IAttackEffect {
  description = 'Poison';
  summary = '';
  details = '';

  constructor(
    public savingThrow: SavingThrow,
    public frequency: string,
    public effects: AbilityEffect[],
    public cureSaves: number) { }
  static fromObject(poison: any): Poison {
    console.log('EVER???', poison);
    const {savingThrow, frequency, effects, cureSaves} = poison;
    const newPoison = new this(SavingThrow.fromObject(savingThrow), frequency, effects, cureSaves);
    newPoison.effects = newPoison.effects.map(e => AbilityEffect.fromObject(e));
    newPoison.summary = newPoison.getSummary();
    newPoison.details = newPoison.getDetails();
    console.log('Poison newPoison.effects', newPoison.effects);
    return newPoison;
  }
  getSummary() {
    console.log('Poison savingThrow', this.savingThrow);
    let summary: string = this.description + ': ' + this.savingThrow.getSummary() + ', ';
    console.log('Poison effects', this.effects);
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
  }
}
