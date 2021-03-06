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
import { Trample } from './trample';
import { BreathWeapon } from './breathWeapon';
import { Rend } from './rend';
import { Stun } from './stun';
import { Gnaw } from './gnaw';
import { Paralysis } from './paralysis';
import { Entangle } from './entangle';

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
        case 'Breath Weapon':
          const breathWeapon = BreathWeapon.fromObject(ae);
          return breathWeapon;
        case 'Burn':
          const burn = ae as Burn;
          const newBurn = new Burn(burn.damageDice, burn.savingThrow.difficultyCheck);
          return newBurn;
        case 'Constrict':
          const constrict = ae as Constrict;
          return new Constrict(constrict.combatManeuverBonus, constrict.damageDice, constrict.damageBonus, constrict.additionalDamage);
        case 'Death Roll':
          const deathRoll = ae as DeathRoll;
          return new DeathRoll(deathRoll.combatManeuverBonus, deathRoll.damageDice, deathRoll.damageBonus);
        case 'Disease':
          const disease = Disease.fromObject(ae);
          disease.effects = disease.effects.map(e => AbilityEffect.fromObject(e));
          return disease;
        case 'Entrap':
          const entrap = ae as Entrap;
          const newEntrap = new Entrap(entrap.savingThrow.difficultyCheck, entrap.duration, entrap.hardness, entrap.hitPoints);
          return newEntrap;
        case 'Entangle':
          const entangle = ae as Entangle;
          const newEntangle = new Entangle(entangle.savingThrow.difficultyCheck,
            entangle.armorClass, entangle.hitPoints, entangle.strengthDC);
          return newEntangle;
        case 'Gnaw':
          const gnaw = ae as Gnaw;
          return new Gnaw(gnaw.damageDice, gnaw.damageBonus);
        case 'Grab':
          const grab = ae as Grab;
          return new Grab(grab.combatManeuverBonus);
        case 'Lava Puddle':
          const lavaPuddle = ae as LavaPuddle;
          const newLavaPuddle = new LavaPuddle(lavaPuddle.hitDice);
          return newLavaPuddle;
        case 'Numbing Cold':
          const numbingCold = ae as NumbingCold;
          const newNumbingCold = new NumbingCold(numbingCold.savingThrow.difficultyCheck);
          return newNumbingCold;
        case 'Paralysis':
          const paralysis = ae as Paralysis;
          const newParalysis = new Paralysis(paralysis.duration, paralysis.savingThrow.difficultyCheck);
          return newParalysis;
        case 'Poison':
          const poison = Poison.fromObject(ae);
          poison.effects = poison.effects.map(e => AbilityEffect.fromObject(e));
          return poison;
        case 'Pull':
          const pull = ae as Pull;
          const newPull = new Pull(pull.combatManeuverBonus, pull.distance);
          return newPull;
        case 'Rend':
          const rend = ae as Rend;
          const newRend = new Rend(rend.damageDice, rend.damageBonus);
          return newRend;
        case 'Stun':
          const stun = ae as Stun;
          const newStun = new Stun(stun.savingThrow.difficultyCheck);
          return newStun;
        case 'Swallow Whole':
          const swallowWhole = ae as SwallowWhole;
          const newSwallowWhole = new SwallowWhole(swallowWhole.armorClass, swallowWhole.hitPoints);
          return newSwallowWhole;
        case 'Trample':
          const trample = ae as Trample;
          const newTrample = new Trample(trample.damageDice, trample.damageBonus, trample.savingThrow.difficultyCheck);
          return newTrample;
        case 'Trip':
          const trip = ae as Trip;
          const newTrip = new Trip(trip.combatManeuverBonus);
          return newTrip;
        case 'Vortex':
          const vortex = ae as Vortex;
          const newVortex = new Vortex(vortex.rounds, vortex.savingThrow.difficultyCheck, vortex.maxHeight);
          return newVortex;
        case 'Web':
          const web = ae as Web;
          const newWeb = new Web(web.difficultyCheck, web.hitPoints);
          return newWeb;
        case 'Whirlwind':
          const whirlwind = ae as Whirlwind;
          const newWhirlwind = new Whirlwind(whirlwind.rounds, whirlwind.savingThrow.difficultyCheck, whirlwind.maxHeight);
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

  applyAttackBonusIncrease(attackBonusIncrease: number) {
    this.attackBonus += attackBonusIncrease;
  }

  applyDamageBonusIncrease(damageBonusIncrease: number) {
    this.damageBonus += damageBonusIncrease;
  }
}
