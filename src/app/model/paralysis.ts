import { IAttackEffect } from './attackeffect';
import { SavingThrow } from './savingThrow';
import { Save } from './enums';

export class Paralysis implements IAttackEffect {
  description = 'Paralysis';
  summary = '';
  details = '';
  displayDescription = true;
  savingThrow: SavingThrow;

  constructor(
    public duration: string,
    difficultyCheck: number) {
    this.savingThrow = new SavingThrow(Save.Fortitude, difficultyCheck);
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  static fromObject(paralysis: Paralysis): Paralysis {
    const { duration, savingThrow } = paralysis;
    return new this(duration, savingThrow.difficultyCheck);
  }

  getSummary() {
    let summary: string = this.description + ': ' + this.duration;
    summary += ', ' + this.savingThrow.getSummary();
    return summary;
  }

  getDetails() {
    let details: string = this.getSummary();
    details += '\r\n' + 'Target makes a ' + this.savingThrow.save + ' save to avoid becoming paralyzed.';
    details += '\r\n' + 'Paralysis lasts for ' + this.duration;
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
