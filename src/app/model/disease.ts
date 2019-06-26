import { IAttackEffect } from './attackeffect';
import { SavingThrow } from './savingThrow';
import { AbilityEffect } from './abilityEffect';

export class Disease implements IAttackEffect {
  description = 'Disease';
  summary = ''; // : string = this.getSummary();
  details = ''; // : string = this.getDetails();

  constructor(
    public diseaseName: string,
    public savingThrow: SavingThrow,
    public onset: string,
    public frequency: string,
    public effects: AbilityEffect[],
    public cureSaves: number) { }
  static fromObject(disease: any): Disease {
    const {diseaseName, savingThrow, onset, frequency, effects, cureSaves} = disease;
    return new this(diseaseName, SavingThrow.fromObject(savingThrow), onset, frequency, effects, cureSaves);
  }
  getSummary() {
    let summary: string = this.description + ' - ' + this.diseaseName + ': ' + this.savingThrow.getSummary() + ', ';
    this.effects.forEach(effect => {
      summary += effect.getSummary() + ', ';
    });
    summary = summary.substring(0, summary.length - 2);
    return summary;
  }

  getDetails() {
    let details: string = this.getSummary();
    details += '\r\nOnset: ' + this.onset;
    details += ', Frequency: ' + this.frequency;
    details += ', Cure: ' + this.cureSaves + ' saves';
    return details;
  }

  applyAugmentSummoning() {
    this.savingThrow.difficultyCheck += 2;
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }
}
