import { IAttackEffect } from './attackeffect';

export class CombatManeuver implements IAttackEffect {
  summary = '';
  details = '';
  displayDescription = true;

  constructor(
    public description: string,
    public resultText: string,
    public combatManeuverBonus: number,
    public creatureBecomesGrappled: boolean) {
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  static fromObject(combatManeuver: CombatManeuver): CombatManeuver {
    const { description, resultText, combatManeuverBonus, creatureBecomesGrappled } = combatManeuver;
    return new this(description, resultText, combatManeuverBonus, creatureBecomesGrappled);
  }

  getSummary() {
    let summary: string = this.description + ': ';
    if (this.combatManeuverBonus >= 0) {
      summary += '+';
    }
    summary += this.combatManeuverBonus;
    return summary;
  }

  getDetails() {
    let details: string = this.getSummary();
    details += '\r\n' + this.resultText;
    if (this.creatureBecomesGrappled) {
      details += '\r\nCreature becomes grappled.';
    }
    return details;
  }

  applyAbilityBonusIncreases(strIncrease: number, dexIncrease: number, conIncrease: number) {
    this.combatManeuverBonus += strIncrease;
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }
}
