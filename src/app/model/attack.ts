import { Modifier, DamageType, AttackType } from './enums';

export class Attack {
  additionalDamage: string[]; // TODO: This should be an object with damageDice, damageBonus, and damageTypes
  attackEffect: string[]; // TODO: This should be its own object with properties etc.

  constructor(
    public description: string,
    public attackBonus: number,
    public damageDice: string,
    public damageBonus: number,
    public touchAttack: boolean,
    public attackType: AttackType,
    public modifier: Modifier,
    public damageTypes: DamageType[]) {
  }
}
