import { IAttackEffect } from './attackeffect';
import { SavingThrow } from './savingThrow';
import { Save } from './enums';

export class Stun implements IAttackEffect {
  description = 'Stun';
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

  static fromObject(stun: Stun): Stun {
    const { savingThrow } = stun;
    return new this(savingThrow.difficultyCheck);
  }

  getSummary() {
    const summary: string = this.description + ': ' + this.savingThrow.getSummary();
    return summary;
  }

  getDetails() {
    let details: string = this.getSummary();
    details += '\r\n' + 'The target must make a ' + this.savingThrow.save + ' save or become stunned for 1 round.';
    details += '\r\n' + 'On a critcal hit, the stun lasts for 1d4 rounds.';
    return details;
  }

  applyAbilityBonusIncreases(strIncrease: number, dexIncrease: number, conIncrease: number) {
    this.savingThrow.difficultyCheck += strIncrease;
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  applyAttackBonusIncrease(attackBonusIncrease: number, includeCombatManeuvers: boolean) {
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }
}
