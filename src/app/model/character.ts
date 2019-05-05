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
        switch(this.characterClass){
            case "Druid":
            case "Ranger":
            case "Shaman":
                spellGroup = "summonnaturesally";
                break;
            case "Bard":
            case "Cleric":
            case "Oracle":
            case "Sorcerer":
            case "Summoner":
            case "Witch":
            case "Wizard":
                spellGroup = "summonmonster";
                break;
            default:
                break;
        }
        return spellGroup;
    }
}