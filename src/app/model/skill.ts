import { Modifier } from './enums';

export class Skill {
  static Acrobatics = {
    description: 'Acrobatics',
    modifier: Modifier.Dexterity
  };

  static Appraise = {
    description: 'Appraise',
    modifier: Modifier.Intelligence
  };

  static Bluff = {
    description: 'Bluff',
    modifier: Modifier.Charisma
  };

  static Climb = {
    description: 'Climb',
    modifier: Modifier.Strength
  };

  static Craft = {
    description: 'Craft',
    modifier: Modifier.Intelligence
  };

  static Diplomacy = {
    description: 'Diplomacy',
    modifier: Modifier.Charisma
  };

  static Disabledevice = {
    description: 'Disable Device',
    modifier: Modifier.Dexterity
  };

  static Disguise = {
    description: 'Disguise',
    modifier: Modifier.Charisma
  };

  static EscapeArtist = {
    description: 'Escape Artist',
    modifier: Modifier.Dexterity
  };

  static Fly = {
    description: 'Fly',
    modifier: Modifier.Dexterity
  };

  static HandleAnimal = {
    description: 'Handle Animal',
    modifier: Modifier.Charisma
  };

  static Heal = {
    description: 'Heal',
    modifier: Modifier.Wisdom
  };

  static Intimidate = {
    description: 'Intimidate',
    modifier: Modifier.Charisma
  };

  static KnowledgeArcana = {
    description: 'Knowledge (Arcana)',
    modifier: Modifier.Intelligence
  };

  static KnowledgeDungeoneering = {
    description: 'Knowledge (Dungeoneering)',
    modifier: Modifier.Intelligence
  };

  static KnowledgeEngineering = {
    description: 'Knowledge (Engineering)',
    modifier: Modifier.Intelligence
  };

  static KnowledGegeography = {
    description: 'Knowledge (Geography)',
    modifier: Modifier.Intelligence
  };

  static KnowledgeHistory = {
    description: 'Knowledge (History)',
    modifier: Modifier.Intelligence
  };

  static KnowledgeLocal = {
    description: 'Knowledge (Local)',
    modifier: Modifier.Intelligence
  };

  static KnowledgeNature = {
    description: 'Knowledge (Nature)',
    modifier: Modifier.Intelligence
  };

  static KnowledgeNobility = {
    description: 'Knowledge (Nobility)',
    modifier: Modifier.Intelligence
  };

  static KnowledgePlanes = {
    description: 'Knowledge (Planes)',
    modifier: Modifier.Intelligence
  };

  static KknowledgeReligion = {
    description: 'Knowledge (Religion)',
    modifier: Modifier.Intelligence
  };

  static Linguistics = {
    description: 'Linguistics',
    modifier: Modifier.Intelligence
  };

  static Perception = {
    description: 'Perception',
    modifier: Modifier.Wisdom
  };

  static Perform = {
    description: 'Perform',
    modifier: Modifier.Charisma
  };

  static Profession = {
    description: 'Profession',
    modifier: Modifier.Wisdom
  };

  static Ride = {
    description: 'Ride',
    modifier: Modifier.Dexterity
  };

  static SenseMotive = {
    description: 'Sense Motive',
    modifier: Modifier.Wisdom
  };

  static SlightOfHand = {
    description: 'Slight of Hand',
    modifier: Modifier.Dexterity
  };

  static Spellcraft = {
    description: 'Spellcraft',
    modifier: Modifier.Intelligence
  };

  static Stealth = {
    description: 'Stealth',
    modifier: Modifier.Dexterity
  };

  static Survival = {
    description: 'Survival',
    modifier: Modifier.Wisdom
  };

  static Swim = {
    description: 'Swim',
    modifier: Modifier.Strength
  };

  static UseMagicDevice = {
    description: 'Use Magic Device',
    modifier: Modifier.Charisma
  };

  description: string;
  modifier: Modifier;
}
