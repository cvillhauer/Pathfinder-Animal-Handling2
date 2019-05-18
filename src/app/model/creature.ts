import { Size, CreatureType } from './enums';
import { AbilityScores } from './abilityscores';
import { SkillBonus } from './skillbonus';

export class Creature {
  id: string;
  description: string;
  level: number;

  size: Size;
  type: CreatureType;

  abilityScores: AbilityScores;

  hitPoints: number;

  skills: SkillBonus[];
}
