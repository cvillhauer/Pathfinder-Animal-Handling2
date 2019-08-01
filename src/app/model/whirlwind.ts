import { IAttackEffect } from './attackeffect';
import { SavingThrow } from './savingThrow';
import { Save } from './enums';

export class Whirlwind implements IAttackEffect {
  description = 'Whirlwind';
  summary = '';
  details = '';
  displayDescription = false;
  savingThrow: SavingThrow;

  constructor(
    public rounds: number,
    difficultyCheck: number,
    public maxHeight: number) {
    this.savingThrow = new SavingThrow(Save.Reflex, difficultyCheck);
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  static fromObject(whirlwind: Whirlwind): Whirlwind {
    const { rounds, savingThrow, maxHeight } = whirlwind;
    return new this(rounds, savingThrow.difficultyCheck, maxHeight);
  }

  getSummary() {
    let summary: string = this.rounds + ' round';
    if (this.rounds > 1) {
      summary += 's';
    }
    summary += ' per day, ';
    summary += '10-' + this.maxHeight + 'ft high, ';
    summary += this.savingThrow.getSummary();
    return summary;
  }

  getDetails() {
    let details: string = this.description + ': ' + this.getSummary();
    details += '\r\n' + 'Creatures that touch the whirlwind make a ' + this.savingThrow.save + ' save to avoid being trapped.';
    details += '\r\n' + 'Creatures the same size or smaller make a ' + this.savingThrow.save + ' save to avoid taking damage.';
    details += '\r\n' + 'A cloud of debris surrounds the creature and causes Concealment.';
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

export class Vortex extends Whirlwind {
  constructor(
    public rounds: number,
    difficultyCheck: number,
    public maxHeight: number) {
    super(rounds, difficultyCheck, maxHeight);
    this.description = 'Vortex';
  }

  getDetails() {
    let details: string = this.getSummary();
    details += '\r\n' + 'Creatures that touch the vortex make a ' + this.savingThrow.save + ' save to avoid being trapped.';
    details += '\r\n' + 'Creatures the same size or smaller make a ' + this.savingThrow.save + ' save to avoid taking damage.';
    details += '\r\n' + 'A cloud of bubbles surrounds the creature and causes Concealment.';
    return details;
  }
}
