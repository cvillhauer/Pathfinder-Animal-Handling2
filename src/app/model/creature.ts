import { Size, CreatureType } from './enums';
import { AbilityScores } from './abilityscores';
import { SkillBonus } from './skillbonus';
import { Saves } from './saves';

export class Creature {
  id: string;
  description: string;
  level: number;

  size: Size;
  type: CreatureType;

  abilityScores: AbilityScores;

  hitPoints: number;
  armorClass: number;
  combatManeuverBonus: number; // BAB + Str + size
  combatManeuverDefense: number; // 10 + BAB + Str + Dex + size + dodge

  saves: Saves;

  skills: SkillBonus[];
}
