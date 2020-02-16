import { Size, CreatureType, DamageType, AttackType } from '../model/enums';
import { AbilityScores } from '../model/abilityscores';
import { Saves } from '../model/saves';
import { Creature } from '../model/creature';
import { Attack } from '../model/attack';
import { ArmorClass } from '../model/armorClass';
import { SkillBonus } from '../model/skillbonus';
import { Speeds } from '../model/speed';
import { Feat } from '../model/feat';
import { Alignment } from '../model/alignment';
import { Skill } from '../model/skill';
import { SpecialAbility } from '../model/specialAbility';
import { Stun } from '../model/stun';
import { Grab } from '../model/combatManeuvers';
import { SwallowWhole } from '../model/swallowWhole';
import { Trample } from '../model/trample';

export const dinosaurs: Creature[] = [
  new Creature(
    'ankylosaurus',
    'Ankylosaurus',
    'https://www.d20pfsrd.com/bestiary/monster-listings/animals/dinosaur/ankylosaurus/',
    'https://dreager1.files.wordpress.com/2012/04/ankylosaurus_7.jpg',
    Size.Huge,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(30),
    15,
    new AbilityScores(27, 10, 17, 2, 13, 8),
    10,
    75,
    new ArmorClass(22, 8, 22),
    17,
    27,
    7,
    6,
    0,
    new Saves(12, 7, 4),
    [Feat.GreatFortitude, Feat.ImprovedBullRush, Feat.ImprovedOverrun, Feat.PowerAttack, Feat.WeaponFocusTail],
    [new SkillBonus(Skill.Perception, 14)],
    [new Attack('Tail', 14, '3d6', 12, false, AttackType.Melee, [DamageType.Bludgeoning], [new Stun(23)])],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent]
  ),
  new Creature(
    'brachiosaurus',
    'Brachiosaurus',
    'https://www.d20pfsrd.com/bestiary/monster-listings/animals/dinosaur/brachiosaurus',
    'https://i.pinimg.com/originals/28/a8/92/28a892bde208ccecbcbe1a846c275c51.jpg',
    Size.Gargantuan,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(30),
    20,
    new AbilityScores(37, 10, 21, 2, 13, 10),
    18,
    171,
    new ArmorClass(18, 6, 18),
    30,
    40,
    13,
    10,
    0,
    new Saves(18, 11, 9),
    [Feat.Cleave, Feat.GreatCleave, Feat.GreatFortitude, Feat.GreaterOverrun, Feat.ImprovedBullRush,
    Feat.IronWill, Feat.PowerAttack, Feat.SkillFocusPerception, Feat.WeaponFocusTail],
    [
      new SkillBonus(Skill.Perception, 28)
    ],
    [
      new Attack('Tail', 23, '4d6', 19, false, AttackType.Melee, [DamageType.Bludgeoning]),
      new Attack('Trample', null, '', 0, false, AttackType.Melee, [DamageType.Bludgeoning], [new Trample('2d6', 19, 32)])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent]
  ),
  new Creature(
    'deinonychus',
    'Deinonychus',
    'https://www.d20pfsrd.com/bestiary/monster-listings/animals/dinosaur/deinonychus/',
    'https://dungeonhacking.files.wordpress.com/2015/07/deinonychus_antirrhopus.gif',
    Size.Medium,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(60),
    5,
    new AbilityScores(15, 15, 19, 2, 12, 14),
    4,
    34,
    new ArmorClass(15, 12, 13),
    5,
    17,
    3,
    3,
    0,
    new Saves(8, 6, 2),
    [Feat.ImprovedInititive, Feat.Run],
    [
      new SkillBonus(Skill.Acrobatics, 10),
      new SkillBonus(Skill.Acrobatics, 22, 'Jumping'),
      new SkillBonus(Skill.Perception, 14),
      new SkillBonus(Skill.Stealth, 15)
    ],
    [
      new Attack('Talon', 5, '1d8', 2, false, AttackType.Melee, [DamageType.Slashing]),
      new Attack('Talon', 5, '1d8', 2, false, AttackType.Melee, [DamageType.Slashing]),
      new Attack('Bite', 5, '1d6', 2, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing]),
      new Attack('Foreclaws', 0, '1d4', 1, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent, SpecialAbility.Pounce]
  ),
  new Creature(
    'elasmosaurus',
    'Elasmosaurus',
    'https://www.d20pfsrd.com/bestiary/monster-listings/animals/dinosaur/elasmosaurus',
    'https://images.dinosaurpictures.org/Elasmosaurus_bcc2.jpg',
    Size.Huge,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(20, 0, 0, 50),
    20,
    new AbilityScores(26, 15, 20, 2, 13, 9),
    10,
    105,
    new ArmorClass(20, 11, 17),
    17,
    30,
    7,
    7,
    0,
    new Saves(14, 9, 6),
    [Feat.Dodge, Feat.GreatFortitude, Feat.IronWill, Feat.Mobility, Feat.Toughness],
    [
      new SkillBonus(Skill.Perception, 14),
      new SkillBonus(Skill.Swim, 16)
    ],
    [
      new Attack('Bite', 13, '2d8', 12, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent]
  ),
  new Creature(
    'pteranodon',
    'Pteranodon',
    'https://www.d20pfsrd.com/bestiary/monster-listings/animals/pterosaur/pterosaur-pteranodon/',
    'https://vignette.wikia.nocookie.net/primalcarnagethegame/images/2/22/Pteranodon.png/revision/latest?cb=20170929141926',
    Size.Large,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(10, 0, 50),
    10,
    new AbilityScores(16, 19, 15, 2, 15, 12),
    5,
    32,
    new ArmorClass(16, 14, 11),
    7,
    21,
    3,
    3,
    0,
    new Saves(6, 8, 3),
    [Feat.Dodge, Feat.ImprovedInititive, Feat.SkillFocusPerception],
    [
      new SkillBonus(Skill.Fly, -1),
      new SkillBonus(Skill.Perception, 11)
    ],
    [new Attack('Bite', 5, '2d6', 4, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing])],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent]
  ),
  new Creature(
    'stegosaurus',
    'Stegosaurus',
    'https://www.d20pfsrd.com/bestiary/monster-listings/animals/dinosaur/stegosaurus',
    'https://thethesiswhisperer.files.wordpress.com/2010/11/stegosaurus.jpg',
    Size.Huge,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(30),
    15,
    new AbilityScores(27, 14, 17, 2, 13, 10),
    12,
    90,
    new ArmorClass(22, 10, 20),
    19,
    31,
    9,
    7,
    0,
    new Saves(13, 10, 5),
    [Feat.Cleave, Feat.GreatFortitude, Feat.ImprovedInititive, Feat.ImprovedOverrun, Feat.PowerAttack, Feat.WeaponFocusTail],
    [
      new SkillBonus(Skill.Perception, 16)
    ],
    [
      new Attack('Tail', 16, '4d6', 12, false, AttackType.Melee, [DamageType.Bludgeoning], [new Trip(19)])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent]
  ),
  new Creature(
    'triceratops',
    'Triceratops',
    'https://www.d20pfsrd.com/bestiary/monster-listings/animals/dinosaur/triceratops',
    'https://pathfinderwiki.com/mediawiki/images/thumb/4/4e/Ceratopsid.jpg/250px-Ceratopsid.jpg',
    Size.Huge,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(30),
    15,
    new AbilityScores(26, 9, 19, 2, 12, 7),
    14,
    119,
    new ArmorClass(21, 7, 21),
    20,
    29,
    10,
    8,
    0,
    new Saves(15, 8, 5),
    [Feat.GreatFortitude, Feat.ImprovedBullRush, Feat.ImprovedCriticalGore, Feat.PowerAttack,
    Feat.Run, Feat.SkillFocusPerception, Feat.WeaponFocusGore],
    [new SkillBonus(Skill.Perception, 24)],
    [
      new Attack('Gore', 17, '2d10', 12, false, AttackType.Melee, [DamageType.Piercing]),
      new Attack('Powerful Charge (Gore)', 17, '4d10', 16, false, AttackType.Melee, [DamageType.Piercing]),
      new Attack('Trample', null, '', 0, false, AttackType.Melee, [DamageType.Bludgeoning], [new Trample('1d8', 12, 25)])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent, SpecialAbility.PowerfulCharge]
  ),
  new Creature(
    'tyrannosaurus',
    'Tyrannosaurus',
    'https://www.d20pfsrd.com/bestiary/monster-listings/animals/dinosaur/tyrannosaurus',
    'https://i.pinimg.com/474x/c1/d2/97/c1d29742b1d5922aaba3902da0717b88.jpg',
    Size.Gargantuan,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(40),
    20,
    new AbilityScores(32, 13, 19, 2, 15, 10),
    18,
    153,
    new ArmorClass(21, 7, 20),
    28,
    39,
    13,
    9,
    0,
    new Saves(15, 12, 10),
    [Feat.BleedingCritical, Feat.CriticalFocus, Feat.Diehard, Feat.Endurance, Feat.ImprovedCriticalBite,
    Feat.ImprovedInititive, Feat.IronWill, Feat.Run, Feat.SkillFocusPerception],
    [
      new SkillBonus(Skill.Perception, 37)
    ],
    [
      new Attack('Bite', 20, '4d6', 22, false, AttackType.Melee,
        [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing], [new Grab(32)]),
      new Attack('Swallow Whole', 32, '2d8', 11, false, AttackType.Melee, [DamageType.Bludgeoning], [new SwallowWhole(17, 15)])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent]
  )
];
