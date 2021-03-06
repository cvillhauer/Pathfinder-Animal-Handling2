import { Spell } from './spell';
import { Creature } from './creature';
import { SummonedCreature } from './summonedCreature';
import { AbilityScores } from './abilityscores';
import { Modifier, Size, CreatureType, CharacterClass, Sociology, Morality } from './enums';
import { Alignment } from './alignment';
import { Speeds } from './speed';
import { ArmorClass } from './armorClass';
import { Saves } from './saves';
import { Feat } from './feat';
import { SkillBonus } from './skillbonus';
import { Attack } from './attack';
import { SpecialAbility } from './specialAbility';
import { SpellLikeAbility } from './spellLikeAbility';

export class Character extends Creature {
  validSpells: Spell[];
  spellLevel: number;
  spellAbilityModifier: Modifier;
  summonedCreatures: SummonedCreature[];

  constructor(
    public characterName: string,
    public characterClass: CharacterClass,
    public characterLevel: number,
    public id: string,
    public link?: string,
    public image?: string,
    public alignment?: Alignment,
    public speed?: Speeds,
    public abilityScores?: AbilityScores,
    public hitPoints?: number,
    public armorClass?: ArmorClass,
    public combatManeuverBonus?: number, // BAB + Str + size
    public combatManeuverDefense?: number, // 10 + BAB + Str + Dex + size + dodge
    public baseAttackBonus?: number,
    public spellResistance?: number,
    public saves?: Saves,
    public feats: Feat[] = [],
    public skills: SkillBonus[] = [],
    public attacks: Attack[] = [],
    public abilities: SpecialAbility[] = [],
    public spellLikeAbilities: SpellLikeAbility[] = []
  ) {
    super(id, characterClass + ' - Level ' + characterLevel, link, image, Size.Medium, CreatureType.Humanoid, alignment, speed, 5,
      abilityScores, characterLevel, hitPoints, armorClass, combatManeuverBonus, combatManeuverDefense,
      baseAttackBonus, characterLevel, spellResistance, saves, feats, skills, attacks, abilities, spellLikeAbilities);
    this.calculateSpellAbilityModifier();
    this.calculateSpellLevel();
    this.summonedCreatures = [];
  }

  isCharacter() {
    return true;
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
      case CharacterClass.Druid:
      case CharacterClass.Ranger:
      case CharacterClass.Shaman:
      case CharacterClass.Cleric:
        spellAbilityModifier = Modifier.Wisdom;
        break;
      case CharacterClass.Bard:
      case CharacterClass.Oracle:
      case CharacterClass.Sorcerer:
      case CharacterClass.Summoner:
        spellAbilityModifier = Modifier.Charisma;
        break;
      case CharacterClass.Witch:
      case CharacterClass.Wizard:
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
    } else if (this.alignment.sociology === otherAlignment.sociology &&
      (this.alignment.morality === Morality.Neutral || otherAlignment.morality === Morality.Neutral)) {
      return 1;
    } else if (this.alignment.morality === otherAlignment.morality &&
      (this.alignment.sociology === Sociology.Neutral || otherAlignment.sociology === Sociology.Neutral)) {
      return 1;
    } else {
      return -1;
    }
  }

  calculateSpellLevel() {
    const characterClass = this.characterClass;
    const characterLevel = this.characterLevel;
    const spellAbilityScore = this.getAbilityScore(this.spellAbilityModifier);
    let spellLevel = 0;
    if (characterClass === CharacterClass.Bard || characterClass === CharacterClass.Summoner) {
      spellLevel = this.calculateSpellLevelBardOrSummoner(characterLevel);
    } else if (characterClass === CharacterClass.Ranger) {
      spellLevel = this.calculateSpellLevelRanger(characterLevel);
    } else if (characterClass === CharacterClass.Sorcerer) {
      spellLevel = this.calculateSpellLevelSorcerer(characterLevel);
    } else {
      switch (characterLevel) {
        case 1:
        case 2:
          spellLevel = 1;
          break;
        case 3:
        case 4:
          spellLevel = 2;
          break;
        case 5:
        case 6:
          spellLevel = 3;
          break;
        case 7:
        case 8:
          spellLevel = 4;
          break;
        case 9:
        case 10:
          spellLevel = 5;
          break;
        case 11:
        case 12:
          spellLevel = 6;
          break;
        case 13:
        case 14:
          spellLevel = 7;
          break;
        case 15:
        case 16:
          spellLevel = 8;
          break;
        case 17:
        case 18:
        case 19:
        case 20:
          spellLevel = 9;
          break;
        default:
          spellLevel = 0;
          break;
      }
    }
    if (spellLevel > (spellAbilityScore - 10)) {
      this.spellLevel = spellAbilityScore - 10;
    } else {
      this.spellLevel = spellLevel;
    }
  }

  calculateSpellLevelBardOrSummoner(characterLevel: number) {
    switch (characterLevel) {
      case 1:
      case 2:
      case 3:
        return 1;
      case 4:
      case 5:
      case 6:
        return 2;
      case 7:
      case 8:
      case 9:
        return 3;
      case 10:
      case 11:
      case 12:
        return 4;
      case 13:
      case 14:
      case 15:
        return 5;
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
        return 6;
      default:
        return 0;
    }
  }

  calculateSpellLevelRanger(characterLevel: number) {
    switch (characterLevel) {
      case 1:
      case 2:
      case 3:
        return 0;
      case 4:
      case 5:
      case 6:
        return 1;
      case 7:
      case 8:
      case 9:
        return 2;
      case 10:
      case 11:
      case 12:
        return 3;
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
        return 4;
      default:
        return 0;
    }
  }

  calculateSpellLevelSorcerer(characterLevel: number) {
    switch (characterLevel) {
      case 1:
      case 2:
      case 3:
        return 1;
      case 4:
      case 5:
        return 2;
      case 6:
      case 7:
        return 3;
      case 8:
      case 9:
        return 4;
      case 10:
      case 11:
        return 5;
      case 12:
      case 13:
        return 6;
      case 14:
      case 15:
        return 7;
      case 16:
      case 17:
        return 8;
      case 18:
      case 19:
      case 20:
        return 9;
      default:
        return 0;
    }
  }
}
