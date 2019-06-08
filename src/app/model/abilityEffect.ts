import { Modifier, AbilityEffectType } from './enums';

export class AbilityEffect {

  constructor(
    public dice: string,
    public ability: Modifier,
    public type: AbilityEffectType) {
  }

  getSummary() {
    return this.dice + ' ' + this.ability + ' ' + this.type;
  }
}
