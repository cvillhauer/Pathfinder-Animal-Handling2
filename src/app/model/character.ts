import { Spell } from './spell';
import { Creature } from './creature';

export class Character {
    id: string;
    characterName: string;
    characterClass: string;
    characterLevel: number;
    editName: boolean;
    validSpells: Spell[];
    spellGroup: string;
    spellLevel: number;
    feats: string[];
    summonedCreatures: Creature[];

    constructor(id: string, name: string, characterClass: string, level: number) {
        this.id = id;
        this.characterName = name;
        this.characterClass = characterClass;
        this.characterLevel = level;
        this.feats = [];
        this.summonedCreatures = [];
    }

    toggleEditCharacterName() {
        this.editName = !this.editName;
    }
}