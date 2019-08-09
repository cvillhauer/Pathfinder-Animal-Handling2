import { IAttackEffect } from './attackeffect';
import { SavingThrow } from './savingThrow';
import { Save } from './enums';

export class Burn implements IAttackEffect {
  description = 'Burn';
  summary = '';
  details = '';
  displayDescription = true;
  savingThrow: SavingThrow;

  constructor(
    public damageDice: string,
    difficultyCheck: number) {
    this.savingThrow = new SavingThrow(Save.Reflex, difficultyCheck);
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  static fromObject(burn: Burn): Burn {
    const { damageDice, savingThrow } = burn;
    return new this(damageDice, savingThrow.difficultyCheck);
  }

  getSummary() {
    let summary: string = this.description + ': ' + this.damageDice;
    summary += ', ' + this.savingThrow.getSummary();
    return summary;
  }

  getDetails() {
    let details: string = this.getSummary();
    details += '\r\n' + 'Affects targets hit by this creature and enemies who hit this creature with a natural attack.';
    details += '\r\n' + 'Creatures take ' + this.damageDice + ' Fire damage ';
    details += 'and make a ' + this.savingThrow.save + ' save to avoid catching fire.';
    details += '\r\n' + 'Burning creatures take 1d6 Fire damage on their turn for 1d4 rounds.';
    details += '\r\n' + 'Burning creatures may spend a full-round action to get a new ' + this.savingThrow.save + ' save at a +4 bonus.';
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
