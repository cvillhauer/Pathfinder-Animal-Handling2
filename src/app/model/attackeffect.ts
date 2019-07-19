export abstract class IAttackEffect {
  description: string;
  summary: string;
  details: string;
  displayDescription: boolean;

  getSummary: () => string;
  getDetails: () => string;
  // TODO: Will AttackEffects ever care about int, wis, or cha increases?
  applyAbilityBonusIncreases: (strIncrease, dexIncrease, conIncrease) => void;
  applyAttackBonusIncrease: (attackBonusIncrease, includeCombatManeuvers) => void;
}
