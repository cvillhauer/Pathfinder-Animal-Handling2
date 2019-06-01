import { Size, CreatureType, Modifier } from './enums';
import { AbilityScores } from './abilityscores';
import { SkillBonus } from './skillbonus';
import { Saves } from './saves';
import { Alignment } from './alignment';

export class Creature {
  level: number;
  creatureName: string;
  editName: boolean;
  roundsLeft: number;

  constructor(
    public id: string,
    public description: string,
    public link?: string,
    public image?: string,
    public size?: Size,
    public type?: CreatureType,
    public alignment?: Alignment,
    public speed?: number,
    public abilityScores?: AbilityScores,
    public hitPoints?: number,
    public armorClass?: number,
    public combatManeuverBonus?: number, // BAB + Str + size
    public combatManeuverDefense?: number, // 10 + BAB + Str + Dex + size + dodge
    public saves?: Saves,
    public skills?: SkillBonus[]) {
  }

  toggleEditCreatureName() {
    this.editName = !this.editName;
  }

  augmentSummoning() {
    this.abilityScores.strength += 4;
    this.abilityScores.constitution += 4;
    this.hitPoints += (2 * this.level);
    this.combatManeuverBonus += 2;
    this.combatManeuverDefense += 2;
    this.saves.fortitude += 2;
    for (const skill of this.skills) {
      if (skill.skill.modifier === Modifier.Strength || skill.skill.modifier === Modifier.Constitution) {
        skill.bonus += 2;
      }
    }
  }
}
