import { Modifier, DamageType, AttackType } from './enums';
import { IAttackEffect } from './attackeffect';

export class Attack {
  additionalDamage: string[]; // TODO: This should be an object with damageDice, damageBonus, and damageTypes, or an abilityEffect

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
  }
}
