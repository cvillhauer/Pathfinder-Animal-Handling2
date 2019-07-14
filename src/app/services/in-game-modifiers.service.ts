import { Injectable } from '@angular/core';
import { Creature } from '../model/creature';
import { InGameModifier } from '../model/inGameModifiers';
import { InGameCondition } from '../model/enums';

@Injectable({
  providedIn: 'root'
})
export class InGameModifiersService {

  constructor() {

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
    console.log('Creature\s earth mastery applies.');
  }

  removeEarthMastery(affectedCreature: Creature) {
    console.log('Creature\s earth mastery doen\'t apply.');
  }

  applyGrappled(affectedCreature: Creature) {
    console.log('Creature is grappled.');
  }

  removeGrappled(affectedCreature: Creature) {
    console.log('Creature is not grappled.');
  }

  applyMetalMastery(affectedCreature: Creature) {
    console.log('Creature\s metal mastery applies.');
  }

  removeMetalMastery(affectedCreature: Creature) {
    console.log('Creature\s metal mastery doen\'t apply.');
  }

  applyPowerAttack(affectedCreature: Creature) {
    console.log('Creature is power attacking.');
  }

  removePowerAttack(affectedCreature: Creature) {
    console.log('Creature is not power attacking.');
  }

  applyRage(affectedCreature: Creature) {
    console.log('Creature is raging.');
  }

  removeRage(affectedCreature: Creature) {
    console.log('Creature is not raging.');
  }

  applySmite(affectedCreature: Creature) {
    console.log('Creature is smiting.');
  }

  removeSmite(affectedCreature: Creature) {
    console.log('Creature is not smiting.');
  }

  applyWaterMastery(affectedCreature: Creature) {
    console.log('Creature\s water mastery applies.');
  }

  removeWaterMastery(affectedCreature: Creature) {
    console.log('Creature\s water mastery doen\'t apply.');
  }

}
