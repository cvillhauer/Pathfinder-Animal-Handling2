import { Size, CreatureType, AttackType, DamageType } from '../model/enums';
import { AbilityScores } from '../model/abilityscores';
import { Saves } from '../model/saves';
import { Creature } from '../model/creature';
import { Attack } from '../model/attack';
import { ArmorClass } from '../model/armorClass';
import { SkillBonus } from '../model/skillbonus';
import { Attach, Grab } from '../model/combatManeuvers';
import { BloodDrain } from '../model/grappleEffects';
import { Speeds } from '../model/speed';
import { Feat } from '../model/feat';
import { Alignment } from '../model/alignment';
import { Skill } from '../model/skill';
import { SpecialAbility } from '../model/specialAbility';
import { Rend } from '../model/rend';

export const magicalbeasts: Creature[] = [
  new Creature(
    'bulette',
    'Bulette',
    'https://www.d20pfsrd.com/bestiary/monster-listings/magical-beasts/bulette',
    'https://2e.aonprd.com/Images/Monsters/Bulette.png',
    Size.Huge,
    CreatureType.MagicalBeast,
    Alignment.trueNeutral,
    new Speeds(40, 0, 0, 0, 20),
    10,
    new AbilityScores(23, 15, 20, 2, 13, 6),
    8,
    84,
    new ArmorClass(22, 10, 20),
    16,
    28,
    8,
    7,
    0,
    new Saves(11, 8, 5),
    [Feat.ImprovedInititive, Feat.IronWill, Feat.SkillFocusPerception, Feat.WeaponFocusBite],
    [
      new SkillBonus(Skill.Acrobatics, 9),
      new SkillBonus(Skill.Acrobatics, 17, ('Jumping')),
      new SkillBonus(Skill.Perception, 11)
    ],
    [
      new Attack('Bite', 13, '2d8', 9, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing]),
      new Attack('Claw', 12, '2d6', 6, false, AttackType.Melee, [DamageType.Piercing, DamageType.Slashing]),
      new Attack('Claw', 12, '2d6', 6, false, AttackType.Melee, [DamageType.Piercing, DamageType.Slashing])
    ],
    [SpecialAbility.Darkvision, SpecialAbility.LowLightVision, SpecialAbility.Scent, SpecialAbility.Tremorsense,
    SpecialAbility.SavageBite, SpecialAbility.Leap]
  ),
  new Creature(
    'girallon',
    'Girallon',
    'https://www.d20pfsrd.com/bestiary/monster-listings/magical-beasts/girallon/',
    'https://i.pinimg.com/originals/03/16/64/031664ec6fd89e4ecf7cb8e25aa1b592.jpg',
    Size.Large,
    CreatureType.MagicalBeast,
    Alignment.trueNeutral,
    new Speeds(40, 40),
    10,
    new AbilityScores(19, 17, 18, 2, 12, 7),
    7,
    73,
    new ArmorClass(18, 12, 15),
    12,
    25,
    7,
    6,
    0,
    new Saves(9, 8, 5),
    [Feat.ImprovedInititive, Feat.IronWill, Feat.SkillFocusPerception, Feat.Toughness],
    [
      new SkillBonus(Skill.Climb, 12),
      new SkillBonus(Skill.Perception, 11),
      new SkillBonus(Skill.Stealth, 5)
    ],
    [
      new Attack('Bite', 10, '1d6', 4, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing]),
      new Attack('Claw', 10, '1d4', 4, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing]),
      new Attack('Claw', 10, '1d4', 4, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing]),
      new Attack('Claw', 10, '1d4', 4, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing]),
      new Attack('Claw', 10, '1d4', 4, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing], [new Rend('1d4', 6)])
    ],
    [SpecialAbility.Darkvision, SpecialAbility.LowLightVision, SpecialAbility.Scent]
  ),
  new Creature(
    'griffon',
    'Griffon',
    'https://www.d20pfsrd.com/bestiary/monster-listings/magical-beasts/griffon/',
    'https://pre00.deviantart.net/17d5/th/pre/i/2016/218/0/c/griffin_concept_by_dleoblack-dacx7vx.jpg',
    Size.Large,
    CreatureType.MagicalBeast,
    Alignment.trueNeutral,
    new Speeds(30, 0, 80),
    5,
    new AbilityScores(16, 15, 16, 5, 13, 8),
    5,
    42,
    new ArmorClass(17, 11, 15),
    9,
    21,
    5,
    4,
    0,
    new Saves(7, 6, 4),
    [Feat.IronWill, Feat.SkillFocusPerception, Feat.WeaponFocusBite],
    [
      new SkillBonus(Skill.Acrobatics, 10),
      new SkillBonus(Skill.Fly, 6),
      new SkillBonus(Skill.Perception, 12)
    ],
    [
      new Attack('Bite', 8, '1d6', 3, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing]),
      new Attack('Talon', 7, '1d6', 3, false, AttackType.Melee, [DamageType.Slashing]),
      new Attack('Talon', 7, '1d6', 3, false, AttackType.Melee, [DamageType.Slashing]),
      new Attack('Rake (if grappling)', 7, '1d4', 3, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing]),
      new Attack('Rake (if grappling)', 7, '1d4', 3, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing])
    ],
    [SpecialAbility.Darkvision, SpecialAbility.LowLightVision, SpecialAbility.Scent, SpecialAbility.Pounce]
  ),
  new Creature(
    'manticore',
    'Manticore',
    'https://www.d20pfsrd.com/bestiary/monster-listings/magical-beasts/manticore/',
    'https://i.pinimg.com/originals/33/8f/7f/338f7f30d1a199b99b4c2bc7633d0d9c.jpg',
    Size.Large,
    CreatureType.MagicalBeast,
    Alignment.trueNeutral,
    new Speeds(30, 0, 50),
    5,
    new AbilityScores(20, 15, 18, 7, 12, 9),
    6,
    57,
    new ArmorClass(17, 11, 15),
    12,
    24,
    6,
    5,
    0,
    new Saves(9, 7, 3),
    [Feat.FlybyAttack, Feat.Hover, Feat.WeaponFocusSpikes],
    [
      new SkillBonus(Skill.Fly, -3),
      new SkillBonus(Skill.Perception, 9),
      new SkillBonus(Skill.Survival, 4),
      new SkillBonus(Skill.Survival, 8, 'Tracking'),
    ],
    [
      new Attack('Bite', 10, '1d8', 5, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing]),
      new Attack('Claw', 10, '2d4', 5, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing]),
      new Attack('Claw', 10, '2d4', 5, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing]),
      new Attack('Spikes (x4)', 8, '1d6', 5, false, AttackType.Ranged, [DamageType.Piercing])
    ],
    [SpecialAbility.Darkvision, SpecialAbility.LowLightVision, SpecialAbility.Scent]
  ),
  new Creature(
    'owlbear',
    'Owlbear',
    'https://www.d20pfsrd.com/bestiary/monster-listings/magical-beasts/owlbear/',
    'http://orig03.deviantart.net/126f/f/2009/156/8/5/owl_bear_by_benwootten.jpg',
    Size.Large,
    CreatureType.MagicalBeast,
    Alignment.trueNeutral,
    new Speeds(30),
    5,
    new AbilityScores(19, 12, 18, 2, 12, 10),
    5,
    47,
    new ArmorClass(15, 10, 14),
    10,
    21,
    5,
    4,
    0,
    new Saves(10, 5, 2),
    [Feat.ImprovedInititive, Feat.GreatFortitude, Feat.SkillFocusPerception],
    [new SkillBonus(Skill.Perception, 12)],
    [
      new Attack('Claw', 8, '1d6', 4, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing], [new Grab(14)]),
      new Attack('Claw', 8, '1d6', 4, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing], [new Grab(14)]),
      new Attack('Bite', 8, '1d6', 4, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing])
    ],
    [SpecialAbility.Darkvision, SpecialAbility.LowLightVision, SpecialAbility.Scent]
  ),
  new Creature(
    'stirge',
    'Stirge',
    'https://www.d20pfsrd.com/bestiary/monster-listings/magical-beasts/stirge/',
    'https://vignette1.wikia.nocookie.net/forgottenrealms/images/d/d2/Stirge_-_Lars_Grant-West.jpg/revision/latest?cb=20090218055114',
    Size.Tiny,
    CreatureType.MagicalBeast,
    Alignment.trueNeutral,
    new Speeds(10, 0, 40),
    0,
    new AbilityScores(3, 19, 10, 1, 12, 6),
    1,
    5,
    new ArmorClass(16, 16, 12),
    3,
    9,
    1,
    0.5,
    0,
    new Saves(2, 6, 1),
    [Feat.WeaponFinesse],
    [
      new SkillBonus(Skill.Fly, 8),
      new SkillBonus(Skill.Stealth, 16)
    ],
    [new Attack('Touch', 7, ' ', 0, true, AttackType.Melee, [], [new Attach(11), new BloodDrain('1', 'For up to 4 con damage total.')])],
    [SpecialAbility.Darkvision, SpecialAbility.LowLightVision, SpecialAbility.Scent]
  )
];
