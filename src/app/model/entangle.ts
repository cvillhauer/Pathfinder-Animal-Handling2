import { IAttackEffect } from './attackeffect';
import { SavingThrow } from './savingThrow';
import { Save } from './enums';

export class Entangle implements IAttackEffect {
  description = 'Entangle';
  summary = '';
  details = '';
  displayDescription = false;
  savingThrow: SavingThrow;

  constructor(
    difficultyCheck: number,
    public armorClass: number,
    public hitPoints: number,
    public strengthDC: number) {
    this.savingThrow = new SavingThrow(Save.Reflex, difficultyCheck);
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  static fromObject(entangle: Entangle): Entangle {
    const { savingThrow, armorClass, hitPoints, strengthDC } = entangle;
    return new this(savingThrow.difficultyCheck, armorClass, hitPoints, strengthDC);
  }

  getSummary() {
    let summary: string = this.description + ': ' + this.savingThrow.getSummary();
    summary += ', AC ' + this.armorClass + ', HP ' + this.hitPoints + ', DC ' + this.strengthDC + ' Strength check to break';
    return summary;
  }

  getDetails() {
    let details: string = this.getSummary();
    details += '\r\n' + 'The target must make a ' + this.savingThrow.save + ' save or become entangled.';
    details += '\r\n' + 'An entangled creature can make a Strength check to break free (+5 DC for helpless).';
    return details;
  }

  applyAbilityBonusIncreases(strIncrease: number, dexIncrease: number, conIncrease: number) {
    this.savingThrow.difficultyCheck += dexIncrease;
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  applyAttackBonusIncrease(attackBonusIncrease: number, includeCombatManeuvers: boolean) {
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }
}
