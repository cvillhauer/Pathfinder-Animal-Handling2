import { Spell } from './spell';
import { Creature } from './creature';
import { AbilityScores } from './abilityscores';
import { Modifier } from './enums';

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

  getAbilityScore(abilityScore: Modifier) {
    switch (abilityScore) {
      case Modifier.Strength:
        return this.abilityScores.strength;
      case Modifier.Dexterity:
        return this.abilityScores.dexterity;
      case Modifier.Constitution:
        return this.abilityScores.constitution;
      case Modifier.Intelligence:
        return this.abilityScores.intelligence;
      case Modifier.Wisdom:
        return this.abilityScores.wisdom;
      case Modifier.Charisma:
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
        spellAbilityModifier = Modifier.Wisdom;
        break;
      case 'Cleric':
        spellAbilityModifier = Modifier.Wisdom;
        break;
      case 'Bard':
      case 'Oracle':
      case 'Sorcerer':
      case 'Summoner':
        spellAbilityModifier = Modifier.Charisma;
        break;
      case 'Witch':
      case 'Wizard':
        spellAbilityModifier = Modifier.Intelligence;
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
