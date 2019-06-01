import { Spell } from './spell';
import { Creature } from './creature';
import { AbilityScores } from './abilityscores';
import { Modifier } from './enums';
import { Alignment } from './alignment';

export class Character {
  id: string;
  characterName: string;
  alignment: Alignment;
  characterClass: string;
  characterLevel: number;
  editName: boolean;

  abilityScores: AbilityScores;

  validSpells: Spell[];
  spellGroup: string;
  spellLevel: number;
  spellAbilityModifier: Modifier;

  feats: string[];

  summonedCreatures: Creature[];

  constructor(id: string, name: string, alignment: Alignment, characterClass: string, level: number, scores: AbilityScores) {
    this.id = id;
    this.characterName = name;
    this.alignment = alignment;
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

  compareAlignment(otherAlignment: Alignment) {
    // This function will return 0 if it is the exact same alignment, 1 if it is an adjacement alignment, -1 if it is an opposed alignment
    if (this.alignment.sociology === otherAlignment.sociology && this.alignment.morality === otherAlignment.morality) {
      return 0;
    } else if (this.alignment.sociology === otherAlignment.sociology || this.alignment.morality === otherAlignment.morality) {
      return 1;
    } else {
      return -1;
    }
  }

  toggleEditCharacterName() {
    this.editName = !this.editName;
  }
}
