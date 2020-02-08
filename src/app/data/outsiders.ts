import { Size, CreatureType, DamageType, AttackType, Spell, Shape, Save } from '../model/enums';
import { AbilityScores } from '../model/abilityscores';
import { Saves } from '../model/saves';
import { Creature } from '../model/creature';
import { Attack } from '../model/attack';
import { ArmorClass } from '../model/armorClass';
import { Speeds } from '../model/speed';
import { SkillBonus } from '../model/skillbonus';
import { SpellLikeAbility } from '../model/spellLikeAbility';
import { Feat } from '../model/feat';
import { Alignment } from '../model/alignment';
import { Skill } from '../model/skill';
import { SpecialAbility } from '../model/specialAbility';
import { AdditionalDamage } from '../model/additionalDamage';
import { BreathWeapon } from '../model/breathWeapon';
import { SavingThrow } from '../model/savingThrow';
import { Grab, Constrict } from '../model/combatManeuvers';
import { Paralysis } from '../model/paralysis';

export const outsiders: Creature[] = [
  new Creature(
    'babau',
    'Babau',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/demon/babau/',
    'https://i.pinimg.com/originals/4a/ab/bc/4aabbcba981403079a6f4ce9fa4a2fb8.png',
    Size.Medium,
    CreatureType.Outsider,
    Alignment.chaoticEvil,
    new Speeds(30),
    10,
    new AbilityScores(21, 13, 20, 14, 13, 16),
    7,
    73,
    new ArmorClass(19, 11, 18),
    12,
    23,
    7,
    6,
    17,
    new Saves(10, 6, 5),
    [Feat.CombatReflexes, Feat.ImprovedInititive, Feat.IronWill, Feat.SkillFocusStealth],
    [
      new SkillBonus(Skill.Acrobatics, 11),
      new SkillBonus(Skill.Climb, 12),
      new SkillBonus(Skill.DisableDevice, 11),
      new SkillBonus(Skill.EscapeArtist, 11),
      new SkillBonus(Skill.Perception, 19),
      new SkillBonus(Skill.SenseMotive, 11),
      new SkillBonus(Skill.SlightOfHand, 11),
      new SkillBonus(Skill.Stealth, 22)
    ],
    [
      new Attack('Longspear', 12, '1d8', 7, false, AttackType.Melee, [DamageType.Piercing],
        [], [new AdditionalDamage('2d6', 0, DamageType.SneakAttack)]),
      new Attack('Longspear', 7, '1d8', 7, false, AttackType.Melee, [DamageType.Piercing],
        [], [new AdditionalDamage('2d6', 0, DamageType.SneakAttack)]),
      new Attack('Bite', 7, '1d6', 2, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing],
        [], [new AdditionalDamage('2d6', 0, DamageType.SneakAttack)]),
    ],
    [SpecialAbility.Darkvision, SpecialAbility.ProtectiveSlime, SpecialAbility.DamageResistanceColdIron10,
    SpecialAbility.DamageResistanceGood10, SpecialAbility.ImmuneElectricity, SpecialAbility.ImmunePoison,
    SpecialAbility.ResistAcid10, SpecialAbility.ResistCold10, SpecialAbility.ResistFire10],
    [
      new SpellLikeAbility(7, 'constant', Spell.SeeInvisibility),
      new SpellLikeAbility(7, 'at will', Spell.Darkness),
      new SpellLikeAbility(7, 'at will', Spell.DispelMagic)
    ]
  ),
  new Creature(
    'beardeddevil',
    'Bearded Devil',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/devil/bearded/',
    'https://i.pinimg.com/originals/9f/65/7c/9f657cf48cb8ebc783cb61d14731eed5.png',
    Size.Medium,
    CreatureType.Outsider,
    Alignment.lawfulEvil,
    new Speeds(40),
    10,
    new AbilityScores(19, 15, 19, 6, 12, 10),
    6,
    57,
    new ArmorClass(19, 12, 17),
    10,
    22,
    6,
    5,
    16,
    new Saves(9, 7, 3),
    [Feat.ImprovedInititive, Feat.PowerAttack, Feat.WeaponFocusGlaive],
    [
      new SkillBonus(Skill.Climb, 13),
      new SkillBonus(Skill.Intimidate, 7),
      new SkillBonus(Skill.Perception, 10),
      new SkillBonus(Skill.SenseMotive, 6),
      new SkillBonus(Skill.Stealth, 11)
    ],
    [
      new Attack('Glaive', 11, '1d10', 6, false, AttackType.Melee, [DamageType.Slashing], [],
        [new AdditionalDamage('2', 0, DamageType.Bleed)]),
      new Attack('Glaive', 6, '1d10', 6, false, AttackType.Melee, [DamageType.Slashing], [],
        [new AdditionalDamage('2', 0, DamageType.Bleed)]),
    ],
    [SpecialAbility.Darkvision, SpecialAbility.SeeInDarkness, SpecialAbility.DamageResistanceGood5, SpecialAbility.DamageResistanceSilver5,
    SpecialAbility.ImmuneFire, SpecialAbility.ImmunePoison, SpecialAbility.ResistAcid10, SpecialAbility.ResistCold10,
    SpecialAbility.InfernalWound]
  ),
  new Creature(
    'bralani',
    'Bralani',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/azata/bralani/',
    'https://i.pinimg.com/736x/0f/4b/22/0f4b2219347c28e9038df0099457d15c.jpg',
    Size.Medium,
    CreatureType.Outsider,
    Alignment.chaoticGood,
    new Speeds(40, 0, 100),
    5,
    new AbilityScores(20, 18, 19, 13, 14, 15),
    7,
    66,
    new ArmorClass(20, 14, 16),
    12,
    26,
    7,
    6,
    17,
    new Saves(9, 9, 6),
    [Feat.BlindFight, Feat.ImprovedInititive, Feat.IronWill, Feat.SkillFocusPerception],
    [
      new SkillBonus(Skill.Bluff, 12),
      new SkillBonus(Skill.Fly, 22),
      new SkillBonus(Skill.HandleAnimal, 12),
      new SkillBonus(Skill.Perception, 15),
      new SkillBonus(Skill.Ride, 14),
      new SkillBonus(Skill.SenseMotive, 12),
      new SkillBonus(Skill.Stealth, 14)
    ],
    [
      new Attack('+1 Scimitar', 13, '1d6', 8, false, AttackType.Melee, [DamageType.Slashing]),
      new Attack('+1 Scimitar', 8, '1d6', 8, false, AttackType.Melee, [DamageType.Slashing]),
      new Attack('+1 Composite Longbow', 12, '1d8', 6, false, AttackType.Ranged, [DamageType.Piercing]),
      new Attack('+1 Composite Longbow', 7, '1d8', 6, false, AttackType.Ranged, [DamageType.Piercing]),
      new Attack('Whirlwind Blast', null, '', 0, false, AttackType.AreaOfEffect, [],
        [new BreathWeapon(Shape.Line20, new AdditionalDamage('3d6', 0, DamageType.Magic),
          new SavingThrow(Save.Reflex, 17), 'once per round')])
    ],
    [SpecialAbility.Darkvision, SpecialAbility.LowLightVision, SpecialAbility.DamageResistanceColdIron10,
    SpecialAbility.DamageResistanceEvil10, SpecialAbility.ImmuneElectricity, SpecialAbility.ImmunePetrification,
    SpecialAbility.ResistCold10, SpecialAbility.ResistFire10, SpecialAbility.WindForm],
    [
      new SpellLikeAbility(6, 'at will', Spell.Blur),
      new SpellLikeAbility(6, 'at will', Spell.CharmPerson, 13),
      new SpellLikeAbility(6, 'at will', Spell.GustOfWind, 14),
      new SpellLikeAbility(6, 'at will', Spell.MirrorImage),
      new SpellLikeAbility(6, 'at will', Spell.WindWall),
      new SpellLikeAbility(6, 'twice a day', Spell.LightningBolt, 15),
      new SpellLikeAbility(6, 'twice a day', Spell.CureSeriousWounds)
    ]
  ),
  new Creature(
    'dretch',
    'Dretch',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/demon/dretch/',
    'https://sites.google.com/site/pathfinderogc/_/rsrc/1487036773117/images/dretch-jr.png',
    Size.Small,
    CreatureType.Outsider,
    Alignment.chaoticEvil,
    new Speeds(20),
    5,
    new AbilityScores(12, 10, 14, 5, 11, 11),
    2,
    18,
    new ArmorClass(14, 11, 14),
    2,
    12,
    2,
    2,
    0,
    new Saves(5, 0, 3),
    [Feat.Toughness],
    [
      new SkillBonus(Skill.EscapeArtist, 5),
      new SkillBonus(Skill.Perception, 5),
      new SkillBonus(Skill.Stealth, 9)
    ],
    [
      new Attack('Claw', 4, '1d4', 1, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing]),
      new Attack('Claw', 4, '1d4', 1, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing]),
      new Attack('Bite', 4, '1d4', 1, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing])
    ],
    [SpecialAbility.Darkvision, SpecialAbility.DamageResistanceColdIron5, SpecialAbility.DamageResistanceGood5,
    SpecialAbility.ImmuneElectricity, SpecialAbility.ImmunePoison,
    SpecialAbility.ResistAcid10, SpecialAbility.ResistCold10, SpecialAbility.ResistFire10],
    [
      new SpellLikeAbility(2, 'once per day', Spell.CauseFear, 11),
      new SpellLikeAbility(2, 'once per day', Spell.StinkingCloud, 13)
    ]
  ),

  new Creature(
    'hellhound',
    'Hell Hound',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/hell-hound/',
    'https://i.pinimg.com/236x/0d/8c/1a/0d8c1a7fe23223efe9d45b8bb236e03e--playing-cards-roman.jpg',
    Size.Medium,
    CreatureType.Outsider,
    Alignment.lawfulEvil,
    new Speeds(40),
    5,
    new AbilityScores(13, 13, 15, 6, 10, 6),
    4,
    30,
    new ArmorClass(16, 11, 15),
    5,
    16,
    4,
    3,
    0,
    new Saves(6, 5, 1),
    [Feat.ImprovedInititive, Feat.Run],
    [
      new SkillBonus(Skill.Acrobatics, 8),
      new SkillBonus(Skill.Perception, 7),
      new SkillBonus(Skill.Stealth, 13),
      new SkillBonus(Skill.Survival, 7)
    ],
    [
      new Attack('Bite', 5, '1d8', 1, false, AttackType.Melee,
        [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing], [], [new AdditionalDamage('1d6', 0, DamageType.Fire)]),
      new Attack('Breath Weapon', null, '', 0, false, AttackType.AreaOfEffect, [],
        [new BreathWeapon(Shape.Cone10, new AdditionalDamage('2d6', 0, DamageType.Fire),
          new SavingThrow(Save.Reflex, 14), 'once every 2d4 rounds')])
    ],
    [SpecialAbility.Darkvision, SpecialAbility.Scent, SpecialAbility.ImmuneFire, SpecialAbility.VulnerableCold]
  ),
  new Creature(
    'houndarchon',
    'Hound Archon',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/archon/hound-archon/',
    'http://fc08.deviantart.net/fs51/f/2009/298/9/6/Hound_Archon_for_Paizo_by_MichaelJaecks.jpg',
    Size.Medium,
    CreatureType.Outsider,
    Alignment.lawfulGood,
    new Speeds(40),
    5,
    new AbilityScores(15, 10, 13, 10, 13, 12),
    6,
    39,
    new ArmorClass(19, 10, 19),
    8,
    18,
    6,
    4,
    15,
    new Saves(6, 5, 5),
    [Feat.ImprovedInititive, Feat.IronWill, Feat.PowerAttack],
    [
      new SkillBonus(Skill.Acrobatics, 9),
      new SkillBonus(Skill.Intimidate, 10),
      new SkillBonus(Skill.Perception, 10),
      new SkillBonus(Skill.SenseMotive, 10),
      new SkillBonus(Skill.Stealth, 13),
      new SkillBonus(Skill.Survival, 14)
    ],
    [
      new Attack('Greatsword', 9, '2d6', 3, false, AttackType.Melee, [DamageType.Slashing]),
      new Attack('Greatsword', 4, '2d6', 3, false, AttackType.Melee, [DamageType.Slashing]),
      new Attack('Bite', 3, '1d8', 2, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing])
    ],
    [SpecialAbility.Darkvision, SpecialAbility.LowLightVision, SpecialAbility.Scent,
    SpecialAbility.DamageResistanceEvil10, SpecialAbility.ImmuneElectricity, SpecialAbility.ImmunePetrification],
    [
      new SpellLikeAbility(6, 'constant', Spell.DetectEvil),
      new SpellLikeAbility(6, 'constant', Spell.MagicCircleAgainstEvil),
      new SpellLikeAbility(6, 'at will', Spell.Aid),
      new SpellLikeAbility(6, 'at will', Spell.ContinualFlame),
      new SpellLikeAbility(6, 'at will', Spell.Message)
    ]
  ),
  new Creature(
    'kyton',
    'Kyton',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/kyton/kyton/',
    'https://i.pinimg.com/originals/5b/e8/b3/5be8b3511261e436bd43f4eb81d34d1e.png',
    Size.Medium,
    CreatureType.Outsider,
    Alignment.lawfulEvil,
    new Speeds(30),
    10,
    new AbilityScores(15, 17, 14, 11, 12, 12),
    8,
    60,
    new ArmorClass(21, 13, 18),
    10,
    23,
    8,
    6,
    17,
    new Saves(8, 9, 3),
    [Feat.Alertness, Feat.BlindFight, Feat.ImprovedInititive, Feat.WeaponFocusChain],
    [
      new SkillBonus(Skill.Acrobatics, 14),
      new SkillBonus(Skill.Climb, 13),
      new SkillBonus(Skill.Craft, 11),
      new SkillBonus(Skill.EscapeArtist, 11),
      new SkillBonus(Skill.Intimidate, 12),
      new SkillBonus(Skill.Perception, 14)
    ],
    [
      new Attack('Chain', 11, '2d4', 2, false, AttackType.Melee, [DamageType.Piercing]),
      new Attack('Chain', 11, '2d4', 2, false, AttackType.Melee, [DamageType.Piercing]),
      new Attack('Chain', 11, '2d4', 2, false, AttackType.Melee, [DamageType.Piercing]),
      new Attack('Chain', 11, '2d4', 2, false, AttackType.Melee, [DamageType.Piercing])
    ],
    [SpecialAbility.Darkvision, SpecialAbility.DamageResistanceSilver5, SpecialAbility.DamageResistanceGood5,
    SpecialAbility.ImmuneCold, SpecialAbility.DancingChains],
    [
      new SpellLikeAbility(8, 'at will', Spell.UnnervingGaze, 15)
    ]
    // TODO: Add Regeneration 2, Good/Silver, for Kyton
  ),
  new Creature(
    'lanternarchon',
    'Lantern Archon',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/archon/lantern-archon/',
    'https://i.pinimg.com/originals/4f/b9/4c/4fb94c890c480f240f9af0cb49852357.png',
    Size.Small,
    CreatureType.Outsider,
    Alignment.lawfulGood,
    new Speeds(0, 0, 60),
    5,
    new AbilityScores(1, 11, 12, 6, 11, 10),
    2,
    13,
    new ArmorClass(15, 11, 15),
    -4,
    6,
    2,
    2,
    0,
    new Saves(4, 3, 0),
    [Feat.ImprovedInititive],
    [
      new SkillBonus(Skill.Diplomacy, 5),
      new SkillBonus(Skill.Fly, 14),
      new SkillBonus(Skill.KnowledgePlanes, 3),
      new SkillBonus(Skill.Perception, 4),
      new SkillBonus(Skill.SenseMotive, 5)
    ],
    [
      new Attack('Light Ray', 3, '1d6', 0, true, AttackType.Ranged, [DamageType.Force]),
      new Attack('Light Ray', 3, '1d6', 0, true, AttackType.Ranged, [DamageType.Force])
    ],
    [SpecialAbility.Darkvision, SpecialAbility.LowLightVision, SpecialAbility.DamageResistanceEvil10,
    SpecialAbility.ImmuneElectricity, SpecialAbility.ImmunePetrification],
    [
      new SpellLikeAbility(3, 'at will', Spell.Aid),
      new SpellLikeAbility(3, 'at will', Spell.AuraOfMenace, 13),
      new SpellLikeAbility(3, 'at will', Spell.ContinualFlame),
      new SpellLikeAbility(3, 'at will', Spell.DetectEvil)
    ]
  ),
  new Creature(
    'lemure',
    'Lemure',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/devil/lemure/',
    'https://i.pinimg.com/originals/4b/82/aa/4b82aae8c0b1bbeed9ad5da890abb744.png',
    Size.Medium,
    CreatureType.Outsider,
    Alignment.lawfulEvil,
    new Speeds(20),
    5,
    new AbilityScores(11, 10, 12, 0, 11, 5),
    2,
    13,
    new ArmorClass(14, 10, 14),
    2,
    12,
    2,
    1,
    0,
    new Saves(4, 3, 0),
    [],
    [],
    [new Attack('Claw', 2, '1d4', 0, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing]),
    new Attack('Claw', 2, '1d4', 0, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing])],
    [SpecialAbility.Darkvision, SpecialAbility.SeeInDarkness,
    SpecialAbility.ImmuneMindAffecting, SpecialAbility.ImmuneFire, SpecialAbility.ImmunePoison,
    SpecialAbility.DamageResistanceGood5, SpecialAbility.DamageResistanceSilver5, SpecialAbility.ResistAcid10, SpecialAbility.ResistCold10]
  ),
  new Creature(
    'salamander',
    'Salamander',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/salamander/',
    'https://i.pinimg.com/originals/d4/7f/eb/d47feb0ff67f29ae27e76d45f8f5e51c.png',
    Size.Medium,
    CreatureType.Outsider,
    Alignment.chaoticEvil,
    new Speeds(20),
    5,
    new AbilityScores(16, 13, 18, 14, 15, 13),
    8,
    76,
    new ArmorClass(18, 11, 17),
    11,
    22,
    8,
    6,
    0,
    new Saves(10, 7, 6),
    [Feat.Cleave, Feat.IronWill, Feat.PowerAttack, Feat.SkillFocusPerception],
    [
      new SkillBonus(Skill.Acrobatics, 12),
      new SkillBonus(Skill.Bluff, 12),
      new SkillBonus(Skill.Craft, 17),
      new SkillBonus(Skill.Intimidate, 12),
      new SkillBonus(Skill.KnowledgePlanes, 13),
      new SkillBonus(Skill.Perception, 16),
      new SkillBonus(Skill.SenseMotive, 13),
      new SkillBonus(Skill.Stealth, 12)
    ],
    [
      new Attack('Spear', 11, '1d8', 4, false, AttackType.Melee, [DamageType.Piercing],
        [], [new AdditionalDamage('1d6', 0, DamageType.Fire)]),
      new Attack('Spear', 6, '1d8', 4, false, AttackType.Melee, [DamageType.Piercing],
        [], [new AdditionalDamage('1d6', 0, DamageType.Fire)]),
      new Attack('Tail Slap', 6, '2d6', 1, false, AttackType.Melee, [DamageType.Bludgeoning],
        [new Grab(15), new Constrict(15, '2d6', 4, new AdditionalDamage('1d6', 0, DamageType.Fire))],
        [new AdditionalDamage('1d6', 0, DamageType.Fire)]),
    ],
    [SpecialAbility.Darkvision, SpecialAbility.DamageResistanceMagic10, SpecialAbility.ImmuneFire, SpecialAbility.VulnerableCold]
  ),
  new Creature(
    'xill',
    'Xill',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/xill/',
    'https://i.pinimg.com/originals/91/15/de/9115de83fadd8e8261cf2f95a8823cfb.png',
    Size.Medium,
    CreatureType.Outsider,
    Alignment.lawfulEvil,
    new Speeds(40),
    5,
    new AbilityScores(17, 18, 14, 15, 12, 11),
    9,
    67,
    new ArmorClass(21, 14, 17),
    12,
    26,
    9,
    6,
    17,
    new Saves(8, 10, 6),
    [Feat.CombatReflexes, Feat.ImprovedInititive, Feat.IronWill, Feat.WeaponFocusClaw, Feat.WeaponFocusShortSword],
    [
      new SkillBonus(Skill.Acrobatics, 16),
      new SkillBonus(Skill.Bluff, 12),
      new SkillBonus(Skill.Intimidate, 12),
      new SkillBonus(Skill.KnowledgeArcana, 14),
      new SkillBonus(Skill.KnowledgePlanes, 14),
      new SkillBonus(Skill.Perception, 13),
      new SkillBonus(Skill.SenseMotive, 13),
      new SkillBonus(Skill.Stealth, 14)
    ],
    [
      new Attack('Short Sword', 13, '1d6', 3, false, AttackType.Melee, [DamageType.Piercing]),
      new Attack('Short Sword', 13, '1d6', 3, false, AttackType.Melee, [DamageType.Piercing]),
      new Attack('Short Sword', 8, '1d6', 3, false, AttackType.Melee, [DamageType.Piercing]),
      new Attack('Claw', 13, '1d4', 3, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing], [new Grab(16)]),
      new Attack('Bite', 7, '1d3', 1, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing],
        [new Paralysis('1d4 hours', 16)]),
    ],
    [SpecialAbility.Darkvision, SpecialAbility.MultiweaponMastery]
  )
];
