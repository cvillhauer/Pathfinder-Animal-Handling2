import { Skill } from './skill';
import { Size, CreatureType } from './enums';
import { AbilityScores } from './abilityscores';

export class Creature {
  id: string;
  description: string;

  size: Size;
  type: CreatureType;

  abilityScores: AbilityScores;

  skills: Skill[];
}
