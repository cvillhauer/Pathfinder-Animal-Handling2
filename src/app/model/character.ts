import { Spell } from './spell';
import { Creature } from './creature';
import { AbilityScores } from './abilityscores';
import { Modifier } from './modifier';

export class Character {
  id: string;
  characterName: string;
  characterClass: string;
  characterLevel: number;
  editName: boolean;
  validSpells: Spell[];
  spellGroup: string;
  spellLevel: number;
  spellAbilityModifier: Modifier;
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
    this.calculateSpellAbilityModifier();
    this.summonedCreatures = [];
  }

  getAbilityScore(abilityScoreId: string) {
    switch (abilityScoreId) {
      case 'str':
        return this.abilityScores.strength;
      case 'dex':
        return this.abilityScores.dexterity;
      case 'con':
        return this.abilityScores.constitution;
      case 'int':
        return this.abilityScores.intelligence;
      case 'wis':
        return this.abilityScores.wisdom;
      case 'cha':
        return this.abilityScores.charisma;
      default:
        return 0;
    }
  }

  calculateSpellAbilityModifier() {
    let spellAbilityModifier: Modifier;
    switch (this.characterClass) {
      case 'Druid':
      case 'Ranger':
      case 'Shaman':
        spellAbilityModifier = { id: 'wis', description: 'Wisdom' }; // TODO: These should be enums somewhere
        break;
      case 'Cleric':
        spellAbilityModifier = { id: 'wis', description: 'Wisdom' };
        break;
      case 'Bard':
      case 'Oracle':
      case 'Sorcerer':
      case 'Summoner':
        spellAbilityModifier = { id: 'cha', description: 'Charisma' };
        break;
      case 'Witch':
      case 'Wizard':
        spellAbilityModifier = { id: 'int', description: 'Intelligence' };
        break;
      default:
        break;
    }
    this.spellAbilityModifier = spellAbilityModifier;
  }

  toggleEditCharacterName() {
    this.editName = !this.editName;
  }
}
