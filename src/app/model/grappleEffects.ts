import { GrappleEffect } from './grappleEffect';
import { AdditionalDamage } from './additionalDamage';
import { AbilityEffect } from './abilityEffect';
import { Modifier, AbilityEffectType, DamageType } from './enums';

export class BloodDrain extends GrappleEffect {

  constructor(public conDamage: string, restrictionText: string) {
    super(
      'Blood Drain',
      'If grappling, drain blood at the end of the turn.',
      restrictionText,
      [new AdditionalDamage('', 0, null, [new AbilityEffect(conDamage, Modifier.Constitution, AbilityEffectType.Damage)])]
    );
  }
}
