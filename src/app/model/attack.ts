import { DamageType, AttackType } from './enums';
import { IAttackEffect } from './attackeffect';
import { Disease } from './disease';
import { AbilityEffect } from './abilityEffect';
import { Poison } from './poison';
import { Grab, Trip, Attach } from './combatManeuvers';
import { AdditionalDamage } from './additionalDamage';
import { BloodDrain } from './grappleEffects';

export class Attack {
  damageTypeDescription = '';

  constructor(
    public description: string,
    public attackBonus: number,
    public damageDice: string,
    public damageBonus: number,
    public touchAttack: boolean,
    public attackType: AttackType,
    public damageTypes: DamageType[] = [],
    public attackEffects: IAttackEffect[] = [],
    public additionalDamage: AdditionalDamage[] = []) {
    this.damageTypeDescription = this.getDamageTypeDescription();
  }

  static fromObject(attack: Attack): Attack {
    const { description, attackBonus, damageDice, damageBonus,
      touchAttack, attackType, damageTypes, attackEffects, additionalDamage } = attack;
    const newAttack = new this(description, attackBonus, damageDice, damageBonus,
      touchAttack, attackType, damageTypes, attackEffects, additionalDamage);
    newAttack.attackEffects = attackEffects.map(ae => {
      switch (ae.description) {
        case 'Attach':
          const attach = ae as Attach;
          const newAttach = new Attach(attach.combatManeuverBonus);
          return newAttach;
        case 'Blood Drain':
          const bloodDrain = ae as BloodDrain;
          const newBloodDrain = new BloodDrain(bloodDrain.conDamage, bloodDrain.restrictionText);
          return newBloodDrain;
        case 'Disease':
          const disease = Disease.fromObject(ae);
          disease.effects = disease.effects.map(e => AbilityEffect.fromObject(e));
          return disease;
        case 'Grab':
          const grab = ae as Grab;
          return new Grab(grab.combatManeuverBonus);
        case 'Poison':
          const poison = Poison.fromObject(ae);
          poison.effects = poison.effects.map(e => AbilityEffect.fromObject(e));
          return poison;
        case 'Trip':
          const trip = ae as Trip;
          const newTrip = new Trip(trip.combatManeuverBonus);
          return newTrip;
        default:
          console.log('Unknown attack effect');
          break;
      }
    });
    return newAttack;
  }

  getDamageTypeDescription() {
    let description = '';
    if (this.touchAttack) {
      description += 'Touch ';
    }
    this.damageTypes.forEach(dt => {
      description += dt + ' ';
    });
    return description;
  }

  augmentSummoning(hasWeaponFinesse: boolean, strBonus: number, dexBonus: number) {
    if (this.attackType === AttackType.Melee && !this.touchAttack) {
      this.damageBonus += 2;
      if (hasWeaponFinesse) {
        if (strBonus > dexBonus) {
          this.attackBonus = this.attackBonus - dexBonus + strBonus;
        }
      } else {
        this.attackBonus += 2;
      }
    }
    if (this.attackEffects) {
      for (const attackEffect of this.attackEffects) {
        attackEffect.applyAugmentSummoning();
      }
    }
  }

}
