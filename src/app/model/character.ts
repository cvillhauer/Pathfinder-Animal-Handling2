export class Character {
    id: string;
    characterName: string;
    characterClass: string;
    characterLevel: number;
    editName: boolean;

    constructor(id: string, name: string, characterClass: string, level: number) {
        this.id = id;
        this.characterName = name,
            this.characterClass = characterClass,
            this.characterLevel = level
    }

    toggleEditCharacterName() {
        this.editName = !this.editName;
    }

    calculateSpellGroup() {
        let spellGroup = "";
        if (this.characterClass === "Druid") {
            spellGroup = "summonnaturesally"
        }
        else if (this.characterClass) {
            spellGroup = "summonmonster"
        }
        return spellGroup;
    }
}