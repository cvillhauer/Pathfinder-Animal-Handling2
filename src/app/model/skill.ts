import { Modifier } from './modifier';

export class Skill {
    id: string;
    description: string;
    modifier: Modifier;
    //classSkill: boolean; //TODO: Implement? Doesn't affect creatures.
    //useUntrained: boolean; //TODO: Implement? Affects creatures.
    //armorCheckPentalty: boolean; //TODO Implement? Do creatures ever wear armor? If they do, is the armorCheckPentalty already built into their stat blocks?
}