import { Skill } from './skill';
import { Size, CreatureType } from './enums';

export class Creature {
  id: string;
  description: string;

  size: Size;
  type: CreatureType;

  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;

  skills: Skill[];
}
