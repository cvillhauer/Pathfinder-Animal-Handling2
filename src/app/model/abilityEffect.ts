import { Modifier, AbilityEffectType } from './enums';

export class AbilityEffect {

  constructor(
    public dice: string,
    public ability: Modifier,
    public type: AbilityEffectType) {
  }

  static fromObject(abilityEffect: AbilityEffect): AbilityEffect {
    const { dice, ability, type } = abilityEffect;
    return new this(dice, ability, type);
  }

  getSummary() {
    return this.dice + ' ' + this.ability + ' ' + this.type;
  }
}
