import { Creature } from './creature';

export class Spell {
    id: string;
    description: string;
    group: string;
    level: number;
    levelList: number[];
    creatureList: string[];
    creatures: Creature[];
}
