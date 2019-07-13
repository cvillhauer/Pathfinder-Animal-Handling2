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

export class Constrict extends CombatManeuver {
  constructor(public combatManeuverBonus: number, public damageDice: string, public damageBonus: number) {
    super(
      'Constrict',
      'Creature crushes grappled target, dealing ' + damageDice + '+' + damageBonus + ' damage.',
      combatManeuverBonus,
      false);
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  getSummary() {
    let summary: string = this.description + ': ';
    if (this.combatManeuverBonus >= 0) {
      summary += '+';
    }
    summary += this.combatManeuverBonus;
    summary += ' ' + this.damageDice + '+' + this.damageBonus;
    return summary;
  }

  applyAugmentSummoning() {
    this.combatManeuverBonus += 2;
    this.damageBonus += 2;
    this.resultText = 'Creature crushes grappled target, dealing ' + this.damageDice + '+' + this.damageBonus + ' damage.';
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }
}

export class DeathRoll extends CombatManeuver {
  constructor(public combatManeuverBonus: number, public damageDice: string, public damageBonus: number) {
    super(
      'Death Roll',
      'Creature inflicts ' + damageDice + '+' + damageBonus + ' bite damage, and target is knocked prone.',
      combatManeuverBonus,
      false);
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  getSummary() {
    let summary: string = this.description + ': ';
    if (this.combatManeuverBonus >= 0) {
      summary += '+';
    }
    summary += this.combatManeuverBonus;
    summary += ' ' + this.damageDice + '+' + this.damageBonus;
    return summary;
  }

  applyAugmentSummoning() {
    this.combatManeuverBonus += 2;
    this.damageBonus += 2;
    this.resultText = 'Creature inflicts ' + this.damageDice + '+' + this.damageBonus + ' bite damage, and target is knocked prone.';
    this.summary = this.getSummary();
    this.details = this.getDetails();
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
