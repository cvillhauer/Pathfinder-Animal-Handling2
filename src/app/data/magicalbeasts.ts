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

export const magicalbeasts: Creature[] = [
  new Creature(
    'griffon',
    'Griffon',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Griffon',
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
    'owlbear',
    'Owlbear',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Owlbear',
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
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Stirge',
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
