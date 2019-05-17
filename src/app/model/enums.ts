export enum Size {
  Medium = 'Medium',
  Small = 'Small',
  Large = 'Large',
  Tiny = 'Tiny',
  Huge = 'Huge',
  Diminutive = 'Diminutive',
  Gargantuan = 'Gargantuan',
  Fine = 'Fine',
  Colossal = 'Colossal'
}

export enum CreatureType {
  Aberration = 'Aberration',
  Animal = 'Animal',
  Construct = 'Construct',
  Dragon = 'Dragon',
  Elemental = 'Elemental',
  Fey = 'Fey',
  Humanoid = 'Humanoid',
  MagicalBeast = 'Magical Beast',
  MonstrousHumanoid = 'Monsterous Humanoid',
  Ooze = 'Ooze',
  Outsider = 'Outsider',
  Plant = 'Plant',
  Undead = 'Undead',
  Vermin = 'Vermin'
}

export enum Modifier {
  Strength = 'Strength',
  Dexterity = 'Dexterity',
  Constitution = 'Constitution',
  Intelligence = 'Intelligence',
  Wisdom = 'Wisdom',
  Charisma = 'Charisma'
}

export class Skill {
  static acrobatics = {
    description: 'Acrobatics',
    modifier: Modifier.Dexterity
  };

  static appraise = {
    description: 'Appraise',
    modifier: Modifier.Intelligence
  };

  static bluff = {
    description: 'Bluff',
    modifier: Modifier.Charisma
  };

  static climb = {
    description: 'Climb',
    modifier: Modifier.Strength
  };

  static craft = {
    description: 'Craft',
    modifier: Modifier.Intelligence
  };

  static diplomacy = {
    description: 'Diplomacy',
    modifier: Modifier.Charisma
  };

  static disabledevice = {
    description: 'Disable Device',
    modifier: Modifier.Dexterity
  };

  static disguise = {
    description: 'Disguise',
    modifier: Modifier.Charisma
  };

  static escapeartist = {
    description: 'Escape Artist',
    modifier: Modifier.Dexterity
  };

  static fly = {
    description: 'Fly',
    modifier: Modifier.Dexterity
  };

  static handleanimal = {
    description: 'Handle Animal',
    modifier: Modifier.Charisma
  };

  static heal = {
    description: 'Heal',
    modifier: Modifier.Wisdom
  };

  static intimidate = {
    description: 'Intimidate',
    modifier: Modifier.Charisma
  };

  static knowledgearcana = {
    description: 'Knowledge (Arcana)',
    modifier: Modifier.Intelligence
  };

  static knowledgedungeoneering = {
    description: 'Knowledge (Dungeoneering)',
    modifier: Modifier.Intelligence
  };

  static knowledgeengineering = {
    description: 'Knowledge (Engineering)',
    modifier: Modifier.Intelligence
  };

  static knowledgegeography = {
    description: 'Knowledge (Geography)',
    modifier: Modifier.Intelligence
  };

  static knowledgehistory = {
    description: 'Knowledge (History)',
    modifier: Modifier.Intelligence
  };

  static knowledgelocal = {
    description: 'Knowledge (Local)',
    modifier: Modifier.Intelligence
  };

  static knowledgenature = {
    description: 'Knowledge (Nature)',
    modifier: Modifier.Intelligence
  };

  static knowledgenobility = {
    description: 'Knowledge (Nobility)',
    modifier: Modifier.Intelligence
  };

  static knowledgeplanes = {
    description: 'Knowledge (Planes)',
    modifier: Modifier.Intelligence
  };

  static knowledgereligion = {
    description: 'Knowledge (Religion)',
    modifier: Modifier.Intelligence
  };

  static linguistics = {
    description: 'Linguistics',
    modifier: Modifier.Intelligence
  };

  static perception = {
    description: 'Perception',
    modifier: Modifier.Wisdom
  };

  static perform = {
    description: 'Perform',
    modifier: Modifier.Charisma
  };

  static profession = {
    description: 'Profession',
    modifier: Modifier.Wisdom
  };

  static ride = {
    description: 'Ride',
    modifier: Modifier.Dexterity
  };

  static sensemotive = {
    description: 'Sense Motive',
    modifier: Modifier.Wisdom
  };

  static slightofhand = {
    description: 'Slight of Hand',
    modifier: Modifier.Dexterity
  };

  static spellcraft = {
    description: 'Spellcraft',
    modifier: Modifier.Intelligence
  };

  static stealth = {
    description: 'Stealth',
    modifier: Modifier.Dexterity
  };

  static survival = {
    description: 'Survival',
    modifier: Modifier.Wisdom
  };

  static swim = {
    description: 'Swim',
    modifier: Modifier.Strength
  };

  static usemagicdevice = {
    description: 'Use Magic Device',
    modifier: Modifier.Charisma
  };
}
