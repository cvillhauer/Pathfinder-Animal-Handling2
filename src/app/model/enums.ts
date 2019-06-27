export enum Sociology {
  Lawful = 'Lawful',
  Neutral = 'Neutral',
  Chaotic = 'Chaotic'
}

export enum Morality {
  Good = 'Good',
  Neutral = 'Neutral',
  Evil = 'Evil'
}

export class Alignment {
  static lawfulGood = {
    description: 'Lawful Good',
    sociology: Sociology.Lawful,
    morality: Morality.Good
  };

  static neutralGood = {
    description: 'Neutral Good',
    sociology: Sociology.Neutral,
    morality: Morality.Good
  };

  static chaoticGood = {
    description: 'Chaotic Good',
    sociology: Sociology.Chaotic,
    morality: Morality.Good
  };

  static lawfulNeutral = {
    description: 'Lawful Neutral',
    sociology: Sociology.Lawful,
    morality: Morality.Neutral
  };

  static trueNeutral = {
    description: 'True Neutral',
    sociology: Sociology.Neutral,
    morality: Morality.Neutral
  };

  static chaoticNeutral = {
    description: 'Chaotic Neutral',
    sociology: Sociology.Chaotic,
    morality: Morality.Neutral
  };

  static lawfulEvil = {
    description: 'Lawful Evil',
    sociology: Sociology.Lawful,
    morality: Morality.Evil
  };

  static neutralEvil = {
    description: 'Neutral Evil',
    sociology: Sociology.Neutral,
    morality: Morality.Evil
  };

  static chaoticEvil = {
    description: 'Chaotic Evil',
    sociology: Sociology.Chaotic,
    morality: Morality.Evil
  };
}

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

export enum Save {
  Fortitude = 'Fortitude',
  Reflex = 'Reflex',
  Will = 'Will'
}

export enum AbilityEffectType {
  Damage = 'Damage',
  Drain = 'Drain',
  Enhancement = 'Enhancement'
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

export enum AttackType {
  Melee = 'Melee',
  Ranged = 'Ranged'
}

export enum DamageType {
  Bludgeoning = 'Bludgeoning',
  Piercing = 'Piercing',
  Slashing = 'Slashing',
  Nonlethal = 'Nonlethal',
  Acid = 'Acid',
  Cold = 'Cold',
  Electricity = 'Electricity',
  Fire = 'Fire',
  Force = 'Force',
  Sonic = 'Sonic'
}
