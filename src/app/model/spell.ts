import { Creature } from './creature';
import { ShapeshiftOption } from './shapeshiftOption';

export class Spell {
  id: string;
  type: string;
  description: string;
  level: number;
}

export class ShapeshiftSpell extends Spell {
  type = 'shapeshift';
  shapeshiftOptions: ShapeshiftOption[];
  creatures: Creature[];
  allowedAbilities: string[]; // TODO: Convert this to types/objects?
}

export class SummonSpell extends Spell {
  type = 'summon';
  group: string;
  levelList: number[];
  creatureList: string[];
  creatures: Creature[];
}
