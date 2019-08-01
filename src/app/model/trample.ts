import { IAttackEffect } from './attackeffect';
import { SavingThrow } from './savingThrow';
import { Save } from './enums';

export class Trample implements IAttackEffect {
  description = 'Trample';
  summary = '';
  details = '';
  displayDescription = false;
  savingThrow: SavingThrow;

  constructor(
    public damageDice: string,
    public damageBonus: number,
    difficultyCheck: number) {
    this.savingThrow = new SavingThrow(Save.Reflex, difficultyCheck);
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  static fromObject(trample: Trample): Trample {
    const { damageDice, damageBonus, savingThrow } = trample;
    return new this(damageDice, damageBonus, savingThrow.difficultyCheck);
  }

  getSummary() {
    const summary: string = this.damageDice + '+' + this.damageBonus + ', ' + this.savingThrow.getSummary();
    return summary;
  }

  getDetails() {
    let details: string = this.getSummary();
    details += '\r\n' + 'Creature moves through an opponent square and automatically succeeds an overrun combat maneuver.';
    details += '\r\n' + 'Target may take an attack of opportunity, or a make a ' + this.savingThrow.save + ' save for half damage.';
    return details;
  }

  applyAbilityBonusIncreases(strIncrease: number, dexIncrease: number, conIncrease: number) {
    this.damageBonus += Math.floor(strIncrease * 1.5);
    this.savingThrow.difficultyCheck += strIncrease;
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  applyAttackBonusIncrease(attackBonusIncrease: number, includeCombatManeuvers: boolean) {
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }
}
