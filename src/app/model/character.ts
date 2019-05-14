import { Spell } from './spell';
import { Creature } from './creature';
import { AbilityScores } from './abilityscores';

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
    abilityScores: AbilityScores;

    summonedCreatures: Creature[];

    constructor(id: string, name: string, characterClass: string, level: number, scores: AbilityScores) {
        this.id = id;
        this.characterName = name;
        this.characterClass = characterClass;
        this.characterLevel = level;
        this.feats = [];
        this.abilityScores = scores;
        this.summonedCreatures = [];
    }

    toggleEditCharacterName() {
        this.editName = !this.editName;
    }
}
