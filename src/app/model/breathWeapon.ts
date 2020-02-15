import { IAttackEffect } from './attackeffect';
import { Shape, Save } from './enums';
import { AdditionalDamage } from './additionalDamage';
import { SavingThrow } from './savingThrow';

export class BreathWeapon implements IAttackEffect {
  description = 'Breath Weapon';
  summary = '';
  details = '';
  displayDescription = false;

  constructor(
    public shape: Shape,
    public damage: AdditionalDamage,
    public save: SavingThrow,
    public frequency: string) {
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  static fromObject(breathWeapon: any): BreathWeapon {
    const { shape, damage, save, frequency } = breathWeapon;
    const newBreathWeapon = new this(shape, AdditionalDamage.fromObject(damage), SavingThrow.fromObject(save), frequency);
    return newBreathWeapon;
  }

  getSummary() {
    const summary: string = this.shape + ', ' + this.damage.getSummary() + ', ' + this.save.getSummary() + ', ' + this.frequency;
    return summary;
  }

  getDetails() {
    let details: string = this.description + ': ' + this.getSummary();
    details += '\r\n' + 'Creature exhales a cone, line, or cloud of energy or other magical effects.';
    if(this.save.save !== Save.None){
      details += '\r\n' + 'Targets can roll a ' + this.save.save + ' save to take half damage.';
    }
    return details;
  }

  applyAbilityBonusIncreases(strIncrease: number, dexIncrease: number, conIncrease: number) {
    this.save.difficultyCheck += conIncrease;
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  applyAttackBonusIncrease(attackBonusIncrease: number, includeCombatManeuvers: boolean) {
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }
}
