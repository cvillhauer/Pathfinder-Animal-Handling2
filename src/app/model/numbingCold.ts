import { IAttackEffect } from './attackeffect';
import { SavingThrow } from './savingThrow';
import { Save } from './enums';

export class NumbingCold implements IAttackEffect {
  description = 'Numbing Cold';
  summary = '';
  details = '';
  displayDescription = true;
  savingThrow: SavingThrow;

  constructor(
    difficultyCheck: number) {
    this.savingThrow = new SavingThrow(Save.Fortitude, difficultyCheck);
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  static fromObject(numbingCold: NumbingCold): NumbingCold {
    const { savingThrow } = numbingCold;
    return new this(savingThrow.difficultyCheck);
  }

  getSummary() {
    const summary: string = this.description + ': ' + this.savingThrow.getSummary();
    return summary;
  }

  getDetails() {
    let details: string = this.getSummary();
    details += '\r\n' + 'Creatures hit make a ' + this.savingThrow.save + ' save or be staggered for 1 round.';
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
