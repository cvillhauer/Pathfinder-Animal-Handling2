import { Modifier, DamageType, AttackType } from './enums';
import { IAttackEffect } from './attackeffect';

export class Attack {
  additionalDamage: string[]; // TODO: This should be an object with damageDice, damageBonus, and damageTypes, or an abilityEffect
  damageTypeDescription = '';

  constructor(
    public description: string,
    public attackBonus: number,
    public damageDice: string,
    public damageBonus: number,
    public touchAttack: boolean,
    public attackType: AttackType,
    public modifier: Modifier,
    public damageTypes: DamageType[],
    public attackEffects: IAttackEffect[] = []) {
    this.damageTypeDescription = this.getDamageTypeDescription();
  }

  static fromObject(attack: Attack): Attack {
    const { description, attackBonus, damageDice, damageBonus, touchAttack, attackType, modifier, damageTypes, attackEffects } = attack;
    const newAttack = new this(description, attackBonus, damageDice, damageBonus, touchAttack, attackType, modifier, damageTypes);
    newAttack.attackEffects = attackEffects;
    return newAttack;
  }

  getDamageTypeDescription() {
    let description = '';
    this.damageTypes.forEach(dt => {
      description += dt + ' ';
    });
    return description;
  }

}
