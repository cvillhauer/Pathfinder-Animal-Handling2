import { Injectable } from '@angular/core';
import { Creature } from '../model/creature';
import { InGameModifier } from '../model/inGameModifiers';
import { InGameCondition } from '../model/enums';
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
    console.log('Creature is power attacking.');
    // -x on attack rolls and CMB/CMD (including attack effects)
    // +2x on damage rolls
    // x = (BAB + 1) / 4, round up

  }

  removePowerAttack(affectedCreature: Creature) {
    console.log('Creature is not power attacking.');
    // Attack and damage rolls go back to normal
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
    console.log('Creature is smiting.');
    // Add charisma bonus to attack rolls
    // Add hitdice to damage bonus
  }

  removeSmite(affectedCreature: Creature) {
    console.log('Creature is not smiting.');
    // Subtract charisma bonus to attack rolls
    // Subtract hitdice to damage bonus
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
      if (attack.attackBonus) {
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
