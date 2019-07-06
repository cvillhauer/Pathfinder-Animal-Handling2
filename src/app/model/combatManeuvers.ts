import { CombatManeuver } from './combatManeuver';

export class Attach extends CombatManeuver {
  constructor(public combatManeuverBonus: number) {
    super(
      'Attach',
      'Creature grapples target, but target is not grappled.',
      combatManeuverBonus,
      true);
  }
}

export class Grab extends CombatManeuver {
  constructor(public combatManeuverBonus: number) {
    super(
      'Grab',
      'Creature grapples target.',
      combatManeuverBonus,
      true);
  }
}

export class Pull extends CombatManeuver {
  constructor(public combatManeuverBonus: number, public distance: number) {
    super(
      'Pull',
      'Target is pulled ' + distance + 'ft closer to creature.',
      combatManeuverBonus,
      false);
  }
}

export class Trip extends CombatManeuver {
  constructor(public combatManeuverBonus: number) {
    super(
      'Trip',
      'Target is knocked prone.',
      combatManeuverBonus,
      false);
  }
}
