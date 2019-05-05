import { Spell } from './spell';

export class Character {
    id: string;
    characterName: string;
    characterClass: string;
    characterLevel: number;
    editName: boolean;
    validSpells: Spell[];
    spellGroup: string;
    spellLevel: number;

    constructor(id: string, name: string, characterClass: string, level: number) {
        this.id = id;
        this.characterName = name,
            this.characterClass = characterClass,
            this.characterLevel = level
    }

    toggleEditCharacterName() {
        this.editName = !this.editName;
    }
}