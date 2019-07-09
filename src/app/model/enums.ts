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

export enum SpecialAbility {
  AirMastery = 'Air Mastery',
  Blindsense = 'Blindsense',
  Blindsight = 'Blindsight',
  DamageResistanceColdIron2 = 'DR 2/Cold Iron',
  DamageResistanceEvil5 = 'DR 5/Evil',
  DamageResistanceEvil10 = 'DR 10/Evil',
  DamageResistanceGood5 = 'DR 5/Good',
  DamageResistanceGood10 = 'DR 10/Good',
  DamageResistanceSilver5 = 'DR 5/Siver',
  Darkvision = 'Darkvision',
  Drench = 'Drench',
  EarthGlide = 'EarthGlide',
  EarthMastery = 'Earth Mastery',
  Hatred = 'Hatred',
  ImmuneBleed = 'Immune to Bleed',
  ImmuneDisesase = 'Immune to Disease',
  ImmuneCritical = 'Immune to Critical Hits',
  ImmuneFire = 'Immune to Fire',
  ImmuneFlanking = 'Immune to Flanking',
  ImmuneMindAffecting = 'Immune to Mind-Affecting Effects',
  ImmuneParalysis = 'Immune to Paralysis',
  ImmunePoison = 'Immune to Poison',
  ImmuneSleepEffects = 'Immune to Sleep Effects',
  ImmuneSneakAttack = 'Immune to Sneak Attack',
  ImmuneStunning = 'Immune to Stunning',
  InkCloud = 'Ink cloud',
  Jet = 'Jet',
  KeenScent = 'Keen Scent',
  LightSensitivity = 'Light Sensitivity',
  LowLightVision = 'Low-light Vision',
  Luminescence = 'Luminescence',
  MetalMastery = 'Metal Mastery',
  ResistAcid5 = 'Resist Acid 5',
  ResistAcid10 = 'Resist Acid 10',
  ResistAcid15 = 'Resist Acid 15',
  ResistCold5 = 'Resist Cold 5',
  ResistCold10 = 'Resist Cold 10',
  ResistCold15 = 'Resist Cold 15',
  ResistFire5 = 'Resist Fire 5',
  ResistFire10 = 'Resist Fire 10',
  ResistFire15 = 'Resist Fire 15',
  ResistElectricity5 = 'Resist Electricity 5',
  ResistElectricity10 = 'Resist Electricity 10',
  ResistElectricity15 = 'Resist Electricity 15',
  Scent = 'Scent',
  SeeInDarkness = 'See in Darkness',
  SmiteEvil = 'Smite Evil',
  SmiteGood = 'Smite Good',
  Sprint = 'Sprint',
  Tremorsense = 'Tremorsense',
  VerminEmpathy = 'Vermin Empathy',
  VulnerableAcid = 'Vulnerable to Acid',
  VulnerableCold = 'Vulnerable to Cold',
  VulnerableFire = 'Vulnerable to Fire',
  VulnerableElectricity = 'Vulnerable to Electricity',
  WaterMastery = 'Water Mastery'
}

export enum Feat {
  Dodge = 'Dodge',
  Endurance = 'Endurance',
  FlybyAttack = 'Flyby Attack',
  GreatFortitude = 'Great Fortitude',
  ImprovedBullRush = 'Improved Bull Rush',
  ImprovedInititive = 'Improved Inititive',
  LightningReflexes = 'Lightning Reflexes',
  Multiattack = 'Multiattack',
  PointBlankShot = 'Point-Blank Shot',
  PowerAttack = 'Power Attack',
  Run = 'Run',
  SkillFocusPerception = 'Skill Focus (Perception)',
  SkillFocusStealth = 'Skill Focus (Stealth)',
  Toughness = 'Toughness',
  WeaponFinesse = 'Weapon Finesse'
}

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

export enum SpeedType {
  Foot = 'Foot',
  Climb = 'Climb',
  Fly = 'Fly',
  Swim = 'Swim',
  Burrow = 'Burrow'
}

export enum Spell {
  Aid = 'Aid',
  ContinualFlame = 'Continual Flame',
  DetectEvil = 'Detect Evil',
  GreaterTeleport = 'GreaterTeleport',
  Doom = 'Doom',
  Prestidigitation = 'Prestidigitation'
}
