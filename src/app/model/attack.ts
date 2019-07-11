import { DamageType, AttackType } from './enums';
import { IAttackEffect } from './attackeffect';
import { Disease } from './disease';
import { AbilityEffect } from './abilityEffect';
import { Poison } from './poison';
import { Grab, Trip, Attach, Pull, Constrict, DeathRoll } from './combatManeuvers';
import { AdditionalDamage } from './additionalDamage';
import { BloodDrain } from './grappleEffects';
import { SwallowWhole } from './swallowWhole';
import { Web } from './web';
import { Whirlwind, Vortex } from './whirlwind';
import { Burn } from './burn';
import { NumbingCold } from './numbingCold';
import { LavaPuddle } from './lavaPuddle';
import { Entrap } from './entrap';

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
        case 'Burn':
          const burn = ae as Burn;
          const newBurn = new Burn(burn.damageDice, burn.difficultyCheck);
          return newBurn;
        case 'Constrict':
          const constrict = ae as Constrict;
          return new Constrict(constrict.combatManeuverBonus, constrict.damageDice, constrict.damageBonus);
          case 'Death Roll':
          const deathRoll = ae as DeathRoll;
          return new DeathRoll(deathRoll.combatManeuverBonus, deathRoll.damageDice, deathRoll.damageBonus);
        case 'Disease':
          const disease = Disease.fromObject(ae);
          disease.effects = disease.effects.map(e => AbilityEffect.fromObject(e));
          return disease;
        case 'Entrap':
          const entrap = ae as Entrap;
          const newEntrap = new Entrap(entrap.difficultyCheck, entrap.duration, entrap.hardness, entrap.hitPoints);
          return newEntrap;
        case 'Grab':
          const grab = ae as Grab;
          return new Grab(grab.combatManeuverBonus);
        case 'Lava Puddle':
          const lavaPuddle = ae as LavaPuddle;
          const newLavaPuddle = new LavaPuddle(lavaPuddle.hitDice);
          return newLavaPuddle;
        case 'Numbing Cold':
          const numbingCold = ae as NumbingCold;
          const newNumbingCold = new NumbingCold(numbingCold.difficultyCheck);
          return newNumbingCold;
        case 'Poison':
          const poison = Poison.fromObject(ae);
          poison.effects = poison.effects.map(e => AbilityEffect.fromObject(e));
          return poison;
        case 'Pull':
          const pull = ae as Pull;
          const newPull = new Pull(pull.combatManeuverBonus, pull.distance);
          return newPull;
        case 'Swallow Whole':
          const swallowWhole = ae as SwallowWhole;
          const newSwallowWhole = new SwallowWhole(swallowWhole.armorClass, swallowWhole.hitPoints);
          return newSwallowWhole;
        case 'Trip':
          const trip = ae as Trip;
          const newTrip = new Trip(trip.combatManeuverBonus);
          return newTrip;
        case 'Vortex':
          const vortex = ae as Vortex;
          const newVortex = new Vortex(vortex.rounds, vortex.difficultyCheck, vortex.maxHeight);
          return newVortex;
        case 'Web':
          const web = ae as Web;
          const newWeb = new Web(web.difficultyCheck, web.hitPoints);
          return newWeb;
        case 'Whirlwind':
          const whirlwind = ae as Whirlwind;
          const newWhirlwind = new Whirlwind(whirlwind.rounds, whirlwind.difficultyCheck, whirlwind.maxHeight);
          return newWhirlwind;
        default:
          console.log('Unknown attack effect: ' + ae.description);
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
    if (this.attackType === AttackType.Melee) {
      if (!this.touchAttack) {
        this.damageBonus += 2;
      }
      if (hasWeaponFinesse) {
        if (strBonus > dexBonus) {
          this.attackBonus = this.attackBonus - dexBonus + strBonus;
        }
      } else if (this.attackBonus) {
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
