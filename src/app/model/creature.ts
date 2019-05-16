import { Size, CreatureType } from './enums';
import { AbilityScores } from './abilityscores';
import { SkillBonus } from './skillbonus';

export class Creature {
  id: string;
  description: string;

  size: Size;
  type: CreatureType;

  abilityScores: AbilityScores;

  skills: SkillBonus[];
}
