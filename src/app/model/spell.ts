import { Creature } from './creature';

export class Spell {
    id: string;
    description: string;

    classes: string[];
    creatures: Creature[];
}