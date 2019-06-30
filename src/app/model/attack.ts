import { DamageType, AttackType } from './enums';
import { IAttackEffect } from './attackeffect';
import { Disease } from './disease';
import { AbilityEffect } from './abilityEffect';
import { Poison } from './poison';
import { Grab, Trip } from './combatManeuvers';

export class Attack {
  damageTypeDescription = '';

  constructor(
    public description: string,
    public attackBonus: number,
    public damageDice: string,
    public damageBonus: number,
    public touchAttack: boolean,
    public attackType: AttackType,
    public damageTypes: DamageType[],
    public attackEffects: IAttackEffect[] = [],
    // TODO: This should be an object with damageDice, damageBonus, and damageTypes, or an abilityEffect
    public additionalDamage: string[] = []) {
    this.damageTypeDescription = this.getDamageTypeDescription();
  }

  static fromObject(attack: Attack): Attack {
    const { description, attackBonus, damageDice, damageBonus,
      touchAttack, attackType, damageTypes, attackEffects, additionalDamage } = attack;
    const newAttack = new this(description, attackBonus, damageDice, damageBonus,
      touchAttack, attackType, damageTypes, attackEffects, additionalDamage);
    // I don't like that this is being repeated here and in the creature service (but it works)
    newAttack.attackEffects = attackEffects.map(ae => {
      switch (ae.description) {
        case 'Disease':
          const disease = Disease.fromObject(ae); // ae as Disease;
          disease.effects = disease.effects.map(e => AbilityEffect.fromObject(e));
          return disease;
        case 'Grab':
          const grab = ae as Grab;
          return new Grab(grab.combatManeuverBonus);
        case 'Poison':
          const poison = Poison.fromObject(ae); // ae as Disease;
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
    this.damageTypes.forEach(dt => {
      description += dt + ' ';
    });
    return description;
  }

  augmentSummoning(hasWeaponFinesse: boolean, strBonus: number, dexBonus: number) {
    if (this.attackType === AttackType.Melee) {
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
