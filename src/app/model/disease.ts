import { IAttackEffect } from './attackeffect';
import { SavingThrow } from './savingThrow';
import { AbilityEffect } from './abilityEffect';

export class Disease implements IAttackEffect {
  description = 'Disease';
  summary = '';
  details = '';
  displayDescription = true;

  constructor(
    public diseaseName: string,
    public savingThrow: SavingThrow,
    public onset: string,
    public frequency: string,
    public effects: AbilityEffect[],
    public cureSaves: number) {
  }

  static fromObject(disease: any): Disease {
    const { diseaseName, savingThrow, onset, frequency, effects, cureSaves } = disease;
    const newDisease = new this(diseaseName, SavingThrow.fromObject(savingThrow), onset, frequency, effects, cureSaves);
    newDisease.effects = newDisease.effects.map(e => AbilityEffect.fromObject(e));
    newDisease.summary = newDisease.getSummary();
    newDisease.details = newDisease.getDetails();
    return newDisease;
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
    details += ', Cure: ' + this.cureSaves + ' save';
    if (this.cureSaves > 1) {
      details += 's';
    }
    return details;
  }

  applyAbilityBonusIncreases(strIncrease: number, dexIncrease: number, conIncrease: number) {
    this.savingThrow.difficultyCheck += conIncrease;
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  applyAttackBonusIncrease(attackBonusIncrease: number, includeCombatManeuvers: boolean) {
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }
}
