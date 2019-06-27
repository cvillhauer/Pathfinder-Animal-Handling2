import { CombatManeuver } from './combatManeuver';

export class Grab extends CombatManeuver {

  constructor(public combatManeuverBonus: number) {
    super(
      'Grab',
      'Creature grapples target.',
      combatManeuverBonus,
      true);
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
