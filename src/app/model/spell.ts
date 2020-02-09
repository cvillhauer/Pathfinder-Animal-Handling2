import { Creature } from './creature';

export class Spell {
  id: string;
  description: string;
  level: number;
}

export class SummonSpell extends Spell {
  group: string;
  levelList: number[];
  creatureList: string[];
  creatures: Creature[];
}
