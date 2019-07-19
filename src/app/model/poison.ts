import { IAttackEffect } from './attackeffect';
import { SavingThrow } from './savingThrow';
import { AbilityEffect } from './abilityEffect';

export class Poison implements IAttackEffect {
  description = 'Poison';
  summary = '';
  details = '';
  displayDescription = true;

  constructor(
    public savingThrow: SavingThrow,
    public frequency: string,
    public effects: AbilityEffect[],
    public cureSaves: number) {
  }

  static fromObject(poison: any): Poison {
    const { savingThrow, frequency, effects, cureSaves } = poison;
    const newPoison = new this(SavingThrow.fromObject(savingThrow), frequency, effects, cureSaves);
    newPoison.effects = newPoison.effects.map(e => AbilityEffect.fromObject(e));
    newPoison.summary = newPoison.getSummary();
    newPoison.details = newPoison.getDetails();
    return newPoison;
  }

  getSummary() {
    let summary: string = this.description + ': ' + this.savingThrow.getSummary() + ', ';
    this.effects.forEach(effect => {
      summary += effect.getSummary() + ', ';
    });
    summary = summary.substring(0, summary.length - 2);
    return summary;
  }

  getDetails() {
    let details: string = this.getSummary();
    details += '\r\nFrequency: ' + this.frequency;
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
