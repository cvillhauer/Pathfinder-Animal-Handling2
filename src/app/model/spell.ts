import { Creature } from './creature';

export class Spell {
    id: string;
    description: string;

    classes: string[];
    creatureList: string[];
    creatures: Creature[];
}