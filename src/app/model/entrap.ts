import { IAttackEffect } from './attackeffect';
import { SavingThrow } from './savingThrow';
import { Save } from './enums';

export class Entrap implements IAttackEffect {
  description = 'Entrap';
  summary = '';
  details = '';
  displayDescription = true;
  savingThrow: SavingThrow;

  constructor(
    difficultyCheck: number,
    public duration: string,
    public hardness: number,
    public hitPoints: number) {
    this.savingThrow = new SavingThrow(Save.Fortitude, difficultyCheck);
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  static fromObject(entrap: Entrap): Entrap {
    const { savingThrow, duration, hardness, hitPoints } = entrap;
    return new this(savingThrow.difficultyCheck, duration, hardness, hitPoints);
  }

  getSummary() {
    let summary: string = this.description + ': ' + this.savingThrow.getSummary();
    summary += ', ' + this.duration + ', hardness ' + this.hardness + ', HP ' + this.hitPoints;
    return summary;
  }

  getDetails() {
    let details: string = this.getSummary();
    details += '\r\n' + 'The target must make a ' + this.savingThrow.save + ' save or become entangled.';
    details += '\r\n' + 'An already entangled target must make a ' + this.savingThrow.save + ' save or become helpless.';
    details += '\r\n' + 'An entangled creature can make a Strength check to break free (+5 DC for helpless).';
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
