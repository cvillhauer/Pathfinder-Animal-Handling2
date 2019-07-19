import { Injectable } from '@angular/core';
import { Creature } from '../model/creature';
import { InGameModifier } from '../model/inGameModifiers';
import { InGameCondition, AttackType, Modifier } from '../model/enums';
import { AbilityScoreService } from './ability-score.service';

@Injectable({
  providedIn: 'root'
})
export class InGameModifiersService {

  constructor(private abilityScoreService: AbilityScoreService) {

  }

  proccessModifierChange(affectedCreature: Creature, modifier: InGameModifier) {
    const applyModifier = modifier.applied;
    switch (modifier.description) {
      case InGameCondition.EarthMastery:
        if (applyModifier) {
          this.applyEarthMastery(affectedCreature);
        } else {
          this.removeEarthMastery(affectedCreature);
        }
        break;
      case InGameCondition.Grappled:
        if (applyModifier) {
          this.applyGrappled(affectedCreature);
        } else {
          this.removeGrappled(affectedCreature);
        }
        break;
      case InGameCondition.MetalMastery:
        if (applyModifier) {
          this.applyMetalMastery(affectedCreature);
        } else {
          this.removeMetalMastery(affectedCreature);
        }
        break;
      case InGameCondition.PowerAttack:
        if (applyModifier) {
          this.applyPowerAttack(affectedCreature);
        } else {
          this.removePowerAttack(affectedCreature);
        }
        break;
      case InGameCondition.Rage:
        if (applyModifier) {
          this.applyRage(affectedCreature);
        } else {
          this.removeRage(affectedCreature);
        }
        break;
      case InGameCondition.Smite:
        if (applyModifier) {
          this.applySmite(affectedCreature);
        } else {
          this.removeSmite(affectedCreature);
        }
        break;
      case InGameCondition.WaterMastery:
        if (applyModifier) {
          this.applyWaterMastery(affectedCreature);
        } else {
          this.removeWaterMastery(affectedCreature);
        }
        break;
      default:
        console.log('Unknown in-game modifier: ' + modifier.description);
        break;
    }
  }

  applyEarthMastery(affectedCreature: Creature) {
    this.applyAttackBonusIncrease(affectedCreature, 1);
  }

  removeEarthMastery(affectedCreature: Creature) {
    this.applyAttackBonusIncrease(affectedCreature, -1);
  }

  applyGrappled(affectedCreature: Creature) {
    this.abilityScoreService.increaseDexterity(affectedCreature, -4);
    this.applyAttackBonusIncrease(affectedCreature, -2, false);
  }

  removeGrappled(affectedCreature: Creature) {
    this.abilityScoreService.increaseDexterity(affectedCreature, 4);
    this.applyAttackBonusIncrease(affectedCreature, +2, false);
  }

  applyMetalMastery(affectedCreature: Creature) {
    this.applyAttackBonusIncrease(affectedCreature, 3);
  }

  removeMetalMastery(affectedCreature: Creature) {
    this.applyAttackBonusIncrease(affectedCreature, -3);
  }

  applyPowerAttack(affectedCreature: Creature) {
    const powerAttackModifier = Math.ceil((affectedCreature.baseAttackBonus + 1) / 4);
    this.applyAttackBonusIncrease(affectedCreature, (-1 * powerAttackModifier), false);
    for (const attack of affectedCreature.attacks) {
      if ((attack.attackBonus || attack.attackBonus === 0) && attack.attackType === AttackType.Melee) {
        attack.applyDamageBonusIncrease(powerAttackModifier * 2);
      }
    }
  }

  removePowerAttack(affectedCreature: Creature) {
    const powerAttackModifier = Math.ceil((affectedCreature.baseAttackBonus + 1) / 4);
    this.applyAttackBonusIncrease(affectedCreature, powerAttackModifier, false);
    for (const attack of affectedCreature.attacks) {
      if ((attack.attackBonus || attack.attackBonus === 0) && attack.attackType === AttackType.Melee) {
        attack.applyDamageBonusIncrease(powerAttackModifier * -2);
      }
    }
  }

  applyRage(affectedCreature: Creature) {
    this.abilityScoreService.increaseStrength(affectedCreature, 4);
    this.abilityScoreService.increaseConstitution(affectedCreature, 4);
  }

  removeRage(affectedCreature: Creature) {
    this.abilityScoreService.increaseStrength(affectedCreature, -4);
    this.abilityScoreService.increaseConstitution(affectedCreature, -4);
  }

  applySmite(affectedCreature: Creature) {
    const charismaBonus = affectedCreature.abilityScores.getBonus(Modifier.Charisma);
    if (charismaBonus > 0) {
      this.applyAttackBonusIncrease(affectedCreature, charismaBonus);
    }
    for (const attack of affectedCreature.attacks) {
      attack.applyDamageBonusIncrease(affectedCreature.hitDice);
    }
  }

  removeSmite(affectedCreature: Creature) {
    const charismaBonus = affectedCreature.abilityScores.getBonus(Modifier.Charisma);
    if (charismaBonus > 0) {
      this.applyAttackBonusIncrease(affectedCreature, (-1 * charismaBonus));
    }
    for (const attack of affectedCreature.attacks) {
      attack.applyDamageBonusIncrease(-1 * affectedCreature.hitDice);
    }
  }

  applyWaterMastery(affectedCreature: Creature) {
    this.applyAttackBonusIncrease(affectedCreature, 1);
  }

  removeWaterMastery(affectedCreature: Creature) {
    this.applyAttackBonusIncrease(affectedCreature, -1);
  }

  applyAttackBonusIncrease(affectedCreature: Creature, attackBonusIncrease: number, includeCombatManeuvers: boolean = true) {
    if (includeCombatManeuvers) {
      affectedCreature.combatManeuverBonus += attackBonusIncrease;
      affectedCreature.combatManeuverDefense += attackBonusIncrease;
    }
    for (const attack of affectedCreature.attacks) {
      if (attack.attackBonus || attack.attackBonus === 0) {
        attack.applyAttackBonusIncrease(attackBonusIncrease);
      }
      if (attack.attackEffects) {
        for (const attackEffect of attack.attackEffects) {
          attackEffect.applyAttackBonusIncrease(attackBonusIncrease, includeCombatManeuvers);
        }
      }
    }
  }

}
