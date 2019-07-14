import { Injectable } from '@angular/core';
import { Creature } from '../model/creature';
import { InGameModifier } from '../model/inGameModifiers';

@Injectable({
  providedIn: 'root'
})
export class InGameModifiersService {

  constructor() {

  }

  proccessModifierChange(affectedCreature: Creature, modifier: InGameModifier) {
    console.log(affectedCreature.description + ' had a modifier change.');
    console.log(modifier.description + ' changed to ' + modifier.applied + '.');
  }

  applyElementalMastery() {
    console.log('Creature\s elemental masteries apply.');
  }

  removeElementalMastery() {
    console.log('Creature\s elemental masteries don\'t apply.');
  }

  applyGrappled() {
    console.log('Creature is grappled.');
  }

  removeGrappled() {
    console.log('Creature is not grappled.');
  }

  applyPowerAttack() {
    console.log('Creature is power attacking.');
  }

  removePowerAttack() {
    console.log('Creature is not power attacking.');
  }

  applyRage() {
    console.log('Creature is raging.');
  }

  removeRage() {
    console.log('Creature is not raging.');
  }

  applySmite() {
    console.log('Creature is smiting.');
  }

  removeSmite() {
    console.log('Creature is not smiting.');
  }

}
