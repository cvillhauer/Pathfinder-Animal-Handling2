import { Creature } from './creature';
import { Size, CreatureType } from 'src/app/model/enums';

export class Spell {
  id: string;
  type: string;
  description: string;
  level: number;
}

export class ShapeshiftSpell extends Spell {
  type = 'shapeshift';
  creatureType: CreatureType;
  sizeOptions: Size[];
  allowedAbilities: string[]; // TODO: Convert this to types/objects?
}

export class SummonSpell extends Spell {
  type = 'summon';
  group: string;
  levelList: number[];
  creatureList: string[];
  creatures: Creature[];
}
