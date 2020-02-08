import { Size, CreatureType, DamageType, AttackType } from '../model/enums';
import { AbilityScores } from '../model/abilityscores';
import { Saves } from '../model/saves';
import { Creature } from '../model/creature';
import { Attack } from '../model/attack';
import { ArmorClass } from '../model/armorClass';
import { SkillBonus } from '../model/skillbonus';
import { Speeds } from '../model/speed';
import { Whirlwind, Vortex } from '../model/whirlwind';
import { Burn } from '../model/burn';
import { NumbingCold } from '../model/numbingCold';
import { AdditionalDamage } from '../model/additionalDamage';
import { LavaPuddle } from '../model/lavaPuddle';
import { Entrap } from '../model/entrap';
import { Feat } from '../model/feat';
import { Alignment } from '../model/alignment';
import { Skill } from '../model/skill';
import { SpecialAbility } from '../model/specialAbility';

const elementalTraits = [
  SpecialAbility.ImmuneBleed, SpecialAbility.ImmuneParalysis, SpecialAbility.ImmunePoison,
  SpecialAbility.ImmuneSleepEffects, SpecialAbility.ImmuneStunning,
  SpecialAbility.ImmuneCritical, SpecialAbility.ImmuneFlanking, SpecialAbility.ImmuneSneakAttack
];
const airElementalTraits = [SpecialAbility.Darkvision, SpecialAbility.AirMastery];
const earthElementalTraits = [SpecialAbility.Darkvision, SpecialAbility.Tremorsense,
SpecialAbility.EarthMastery, SpecialAbility.EarthGlide];
const fireElementalTraits = [SpecialAbility.Darkvision, SpecialAbility.ImmuneFire, SpecialAbility.VulnerableCold];
const iceElementalTraits = [SpecialAbility.Darkvision, SpecialAbility.SnowVision, SpecialAbility.ImmuneCold,
SpecialAbility.VulnerableFire, SpecialAbility.IceGlide, SpecialAbility.Icewalking];
const lightningElementalTraits = [SpecialAbility.Darkvision, SpecialAbility.ImmuneElectricity,
SpecialAbility.MetalMastery, SpecialAbility.SparkLeap];
const magmaElementalTraits = [SpecialAbility.Darkvision, SpecialAbility.ImmuneFire,
SpecialAbility.VulnerableCold, SpecialAbility.EarthGlide];
const mudElementalTraits = [SpecialAbility.Darkvision, SpecialAbility.Tremorsense, SpecialAbility.ImmuneAcid, SpecialAbility.EarthGlide];
const waterElementalTraits = [SpecialAbility.Darkvision, SpecialAbility.Drench, SpecialAbility.WaterMastery];
const airElementalImage = 'http://cdn.obsidianportal.com/assets/94811/windelemental.jpg';
const earthElementalImage = 'https://pathfinderwiki.com/mediawiki/images/thumb/0/0a/Earth_elemental_1.jpg/250px-Earth_elemental_1.jpg';
const fireElementalImage = 'https://pathfinderwiki.com/mediawiki/images/thumb/e/e8/Fire_elemental_1.jpg/250px-Fire_elemental_1.jpg';
const iceElementalImage = 'http://3.bp.blogspot.com/-UxQgzrN05wk/VSwPtJugyJI/AAAAAAAACfs/8pfMiTzgGO4/s1600/Ice%2BElemental.png';
const lightningElementalImage = 'http://www.killershrike.com/Fate/Fae/Pathfinder/Content/Characters/Elementals/images/LargeAirElemental.jpg';
const magmaElementalImage = 'https://i.pinimg.com/originals/e8/71/0a/e8710a8e7d01f0812eb36237a5ee1efc.jpg';
const mudElementalImage = 'https://pathfinderwiki.com/mediawiki/images/thumb/3/33/Mud_elemental.jpg/250px-Mud_elemental.jpg';
const waterElementalImage = 'http://www.killershrike.com/Fate/Fae/Pathfinder/Content/Characters/Elementals/images/LargeWaterElemental.jpg';


export const elementals: Creature[] = [
  new Creature(
    'smallairelemental',
    'Small Air Elemental',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/elemental/elemental-air/small-air-elemental',
    airElementalImage,
    Size.Small,
    CreatureType.Elemental,
    Alignment.trueNeutral,
    new Speeds(0, 0, 100),
    5,
    new AbilityScores(12, 17, 12, 4, 11, 11),
    2,
    13,
    new ArmorClass(17, 14, 14),
    2,
    15,
    2,
    1,
    0,
    new Saves(4, 6, 0),
    [Feat.FlybyAttack, Feat.ImprovedInititive, Feat.WeaponFinesse],
    [
      new SkillBonus(Skill.Acrobatics, 7),
      new SkillBonus(Skill.EscapeArtist, 7),
      new SkillBonus(Skill.Fly, 17),
      new SkillBonus(Skill.KnowledgePlanes, 1),
      new SkillBonus(Skill.Perception, 4),
      new SkillBonus(Skill.Stealth, 11)
    ],
    [
      new Attack('Slam', 6, '1d4', 1, false, AttackType.Melee, [DamageType.Bludgeoning]),
      new Attack('Whirlwind', null, '1d4', 1, false, AttackType.Melee, [DamageType.Bludgeoning], [new Whirlwind(1, 12, 20)])
    ],
    [...airElementalTraits, ...elementalTraits]
  ),
  new Creature(
    'mediumairelemental',
    'Medium Air Elemental',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/elemental/elemental-air/medium-air-elemental',
    airElementalImage,
    Size.Medium,
    CreatureType.Elemental,
    Alignment.trueNeutral,
    new Speeds(0, 0, 100),
    5,
    new AbilityScores(14, 21, 14, 4, 11, 11),
    4,
    30,
    new ArmorClass(19, 16, 13),
    6,
    22,
    4,
    3,
    0,
    new Saves(6, 9, 1),
    [Feat.Dodge, Feat.FlybyAttack, Feat.ImprovedInititive, Feat.WeaponFinesse],
    [
      new SkillBonus(Skill.Acrobatics, 11),
      new SkillBonus(Skill.EscapeArtist, 9),
      new SkillBonus(Skill.Fly, 17),
      new SkillBonus(Skill.KnowledgePlanes, 1),
      new SkillBonus(Skill.Perception, 7),
      new SkillBonus(Skill.Stealth, 10)
    ],
    [
      new Attack('Slam', 9, '1d6', 3, false, AttackType.Melee, [DamageType.Bludgeoning]),
      new Attack('Whirlwind', null, '1d6', 3, false, AttackType.Melee, [DamageType.Bludgeoning], [new Whirlwind(2, 14, 30)])
    ],
    [...airElementalTraits, ...elementalTraits]
  ),
  new Creature(
    'largeairelemental',
    'Large Air Elemental',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/elemental/elemental-air/large-air-elemental',
    airElementalImage,
    Size.Large,
    CreatureType.Elemental,
    Alignment.trueNeutral,
    new Speeds(0, 0, 100),
    10,
    new AbilityScores(18, 25, 16, 6, 11, 11),
    8,
    68,
    new ArmorClass(21, 17, 13),
    13,
    31,
    8,
    5,
    0,
    new Saves(9, 13, 2),
    [Feat.CombatReflexes, Feat.Dodge, Feat.FlybyAttack, Feat.ImprovedInititive, Feat.Mobility, Feat.WeaponFinesse],
    [
      new SkillBonus(Skill.Acrobatics, 15),
      new SkillBonus(Skill.EscapeArtist, 15),
      new SkillBonus(Skill.Fly, 21),
      new SkillBonus(Skill.KnowledgePlanes, 5),
      new SkillBonus(Skill.Perception, 11),
      new SkillBonus(Skill.Stealth, 11)
    ],
    [
      new Attack('Slam', 14, '1d8', 4, false, AttackType.Melee, [DamageType.Bludgeoning]),
      new Attack('Slam', 14, '1d8', 4, false, AttackType.Melee, [DamageType.Bludgeoning]),
      new Attack('Whirlwind', null, '1d8', 4, false, AttackType.Melee, [DamageType.Bludgeoning], [new Whirlwind(4, 18, 40)])
    ],
    [...airElementalTraits, ...elementalTraits, SpecialAbility.DamageResistance5]
  ),
  new Creature(
    'smallearthelemental',
    'Small Earth Elemental',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/elemental/elemental-earth/small-earth-elemental',
    earthElementalImage,
    Size.Small,
    CreatureType.Elemental,
    Alignment.trueNeutral,
    new Speeds(20, 0, 0, 0, 20),
    5,
    new AbilityScores(16, 8, 13, 4, 11, 11),
    2,
    13,
    new ArmorClass(17, 10, 17),
    4,
    13,
    2,
    1,
    0,
    new Saves(4, -1, 3),
    [Feat.ImprovedBullRush, Feat.PowerAttack],
    [
      new SkillBonus(Skill.Appraise, 1),
      new SkillBonus(Skill.Climb, 7),
      new SkillBonus(Skill.KnowledgeDungeoneering, 1),
      new SkillBonus(Skill.KnowledgePlanes, 1),
      new SkillBonus(Skill.Perception, 4),
      new SkillBonus(Skill.Stealth, 7)
    ],
    [new Attack('Slam', 6, '1d6', 4, false, AttackType.Melee, [DamageType.Bludgeoning])],
    [...earthElementalTraits, ...elementalTraits]
  ),
  new Creature(
    'mediumearthelemental',
    'Medium Earth Elemental',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/elemental/elemental-earth/medium-earth-elemental',
    earthElementalImage,
    Size.Medium,
    CreatureType.Elemental,
    Alignment.trueNeutral,
    new Speeds(20, 0, 0, 0, 20),
    5,
    new AbilityScores(20, 8, 17, 4, 11, 11),
    4,
    34,
    new ArmorClass(18, 9, 18),
    9,
    18,
    4,
    3,
    0,
    new Saves(7, 0, 4),
    [Feat.Cleave, Feat.ImprovedBullRush, Feat.PowerAttack],
    [
      new SkillBonus(Skill.Appraise, 1),
      new SkillBonus(Skill.Climb, 10),
      new SkillBonus(Skill.KnowledgeDungeoneering, 2),
      new SkillBonus(Skill.KnowledgePlanes, 2),
      new SkillBonus(Skill.Perception, 7),
      new SkillBonus(Skill.Stealth, 3)
    ],
    [
      new Attack('Slam', 9, '1d8', 7, false, AttackType.Melee, [DamageType.Bludgeoning]),
    ],
    [...earthElementalTraits, ...elementalTraits]
  ),
  new Creature(
    'largeearthelemental',
    'Large Earth Elemental',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/elemental/elemental-earth/large-earth-elemental',
    earthElementalImage,
    Size.Large,
    CreatureType.Elemental,
    Alignment.trueNeutral,
    new Speeds(20, 0, 0, 0, 20),
    10,
    new AbilityScores(24, 8, 17, 6, 11, 11),
    8,
    68,
    new ArmorClass(18, 8, 18),
    16,
    25,
    8,
    5,
    0,
    new Saves(9, 1, 6),
    [Feat.Cleave, Feat.GreaterBullRush, Feat.ImprovedBullRush, Feat.ImprovedOverrun, Feat.PowerAttack],
    [
      new SkillBonus(Skill.Appraise, 6),
      new SkillBonus(Skill.Climb, 15),
      new SkillBonus(Skill.KnowledgeDungeoneering, 3),
      new SkillBonus(Skill.KnowledgePlanes, 6),
      new SkillBonus(Skill.Perception, 11),
      new SkillBonus(Skill.Stealth, 5)
    ],
    [
      new Attack('Slam', 14, '2d6', 7, false, AttackType.Melee, [DamageType.Bludgeoning]),
      new Attack('Slam', 14, '2d6', 7, false, AttackType.Melee, [DamageType.Bludgeoning])
    ],
    [...earthElementalTraits, ...elementalTraits, SpecialAbility.DamageResistance5]
  ),
  new Creature(
    'smallfireelemental',
    'Small Fire Elemental',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/elemental/elemental-fire/small-fire-elemental',
    fireElementalImage,
    Size.Small,
    CreatureType.Elemental,
    Alignment.trueNeutral,
    new Speeds(50),
    5,
    new AbilityScores(10, 13, 10, 4, 11, 11),
    2,
    11,
    new ArmorClass(16, 13, 14),
    1,
    13,
    2,
    1,
    0,
    new Saves(3, 4, 0),
    [Feat.Dodge, Feat.ImprovedInititive, Feat.WeaponFinesse],
    [
      new SkillBonus(Skill.Acrobatics, 5),
      new SkillBonus(Skill.Climb, 4),
      new SkillBonus(Skill.EscapeArtist, 5),
      new SkillBonus(Skill.Intimidate, 4),
      new SkillBonus(Skill.KnowledgePlanes, 1),
      new SkillBonus(Skill.Perception, 4)
    ],
    [new Attack('Slam', 4, '1d4', 0, false, AttackType.Melee, [DamageType.Bludgeoning], [new Burn('1d4', 11)])],
    [...fireElementalTraits, ...elementalTraits]
  ),
  new Creature(
    'mediumfireelemental',
    'Medium Fire Elemental',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/elemental/elemental-fire/medium-fire-elemental',
    fireElementalImage,
    Size.Medium,
    CreatureType.Elemental,
    Alignment.trueNeutral,
    new Speeds(50),
    5,
    new AbilityScores(12, 17, 14, 4, 11, 11),
    4,
    30,
    new ArmorClass(17, 14, 13),
    5,
    19,
    4,
    3,
    0,
    new Saves(6, 7, 1),
    [Feat.Dodge, Feat.ImprovedInititive, Feat.Mobility, Feat.WeaponFinesse],
    [
      new SkillBonus(Skill.Acrobatics, 8),
      new SkillBonus(Skill.Climb, 5),
      new SkillBonus(Skill.EscapeArtist, 8),
      new SkillBonus(Skill.Intimidate, 5),
      new SkillBonus(Skill.KnowledgePlanes, 1),
      new SkillBonus(Skill.Perception, 7)
    ],
    [new Attack('Slam', 7, '1d6', 1, false, AttackType.Melee, [DamageType.Bludgeoning], [new Burn('1d6', 14)])],
    [...fireElementalTraits, ...elementalTraits]
  ),
  new Creature(
    'largefireelemental',
    'Large Fire Elemental',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/elemental/elemental-fire/large-fire-elemental',
    fireElementalImage,
    Size.Large,
    CreatureType.Elemental,
    Alignment.trueNeutral,
    new Speeds(50),
    10,
    new AbilityScores(14, 21, 14, 6, 11, 11),
    8,
    60,
    new ArmorClass(19, 15, 13),
    11,
    27,
    8,
    5,
    0,
    new Saves(8, 11, 4),
    [Feat.Dodge, Feat.ImprovedInititive, Feat.IronWill, Feat.Mobility, Feat.SpringAttack, Feat.WeaponFinesse],
    [
      new SkillBonus(Skill.Acrobatics, 14),
      new SkillBonus(Skill.Climb, 9),
      new SkillBonus(Skill.EscapeArtist, 12),
      new SkillBonus(Skill.Intimidate, 9),
      new SkillBonus(Skill.KnowledgePlanes, 5),
      new SkillBonus(Skill.Perception, 11)
    ],
    [
      new Attack('Slam', 12, '1d8', 2, false, AttackType.Melee, [DamageType.Bludgeoning], [new Burn('1d8', 16)]),
      new Attack('Slam', 12, '1d8', 2, false, AttackType.Melee, [DamageType.Bludgeoning], [new Burn('1d8', 16)])
    ],
    [...fireElementalTraits, ...elementalTraits, SpecialAbility.DamageResistance5]
  ),
  new Creature(
    'smalliceelemental',
    'Small Ice Elemental',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/elemental/elemental-ice/small-ice-elemental',
    iceElementalImage,
    Size.Small,
    CreatureType.Elemental,
    Alignment.trueNeutral,
    new Speeds(20, 0, 0, 60, 20),
    5,
    new AbilityScores(12, 8, 13, 4, 11, 11),
    2,
    13,
    new ArmorClass(16, 10, 16),
    2,
    11,
    2,
    1,
    0,
    new Saves(4, 2, 0),
    [Feat.PowerAttack],
    [
      new SkillBonus(Skill.KnowledgePlanes, 2),
      new SkillBonus(Skill.Perception, 5),
      new SkillBonus(Skill.Stealth, 8),
      new SkillBonus(Skill.Swim, 9)
    ],
    [new Attack('Slam', 4, '1d4', 1, false, AttackType.Melee, [DamageType.Bludgeoning], [new NumbingCold(12)],
      [new AdditionalDamage('1d3', 0, DamageType.Cold)])],
    [...iceElementalTraits, ...elementalTraits]
  ),
  new Creature(
    'mediumiceelemental',
    'Medium Ice Elemental',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/elemental/elemental-ice/medium-ice-elemental',
    iceElementalImage,
    Size.Medium,
    CreatureType.Elemental,
    Alignment.trueNeutral,
    new Speeds(20, 0, 0, 60, 20),
    5,
    new AbilityScores(16, 10, 15, 4, 11, 11),
    4,
    30,
    new ArmorClass(16, 10, 16),
    7,
    17,
    4,
    3,
    0,
    new Saves(6, 4, 1),
    [Feat.Cleave, Feat.PowerAttack],
    [
      new SkillBonus(Skill.KnowledgePlanes, 4),
      new SkillBonus(Skill.Perception, 7),
      new SkillBonus(Skill.Stealth, 7),
      new SkillBonus(Skill.Swim, 11)
    ],
    [new Attack('Slam', 7, '1d6', 4, false, AttackType.Melee, [DamageType.Bludgeoning], [new NumbingCold(14)],
      [new AdditionalDamage('1d4', 0, DamageType.Cold)])],
    [...iceElementalTraits, ...elementalTraits]
  ),
  new Creature(
    'largeiceelemental',
    'Large Ice Elemental',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/elemental/elemental-ice/large-ice-elemental',
    iceElementalImage,
    Size.Large,
    CreatureType.Elemental,
    Alignment.trueNeutral,
    new Speeds(20, 0, 0, 60, 20),
    10,
    new AbilityScores(20, 12, 17, 6, 11, 11),
    8,
    68,
    new ArmorClass(17, 10, 16),
    14,
    25,
    8,
    5,
    0,
    new Saves(9, 7, 2),
    [Feat.Cleave, Feat.GreatCleave, Feat.ImprovedInititive, Feat.PowerAttack],
    [
      new SkillBonus(Skill.Intimidate, 11),
      new SkillBonus(Skill.KnowledgePlanes, 9),
      new SkillBonus(Skill.Perception, 11),
      new SkillBonus(Skill.Stealth, 8),
      new SkillBonus(Skill.Swim, 13)
    ],
    [
      new Attack('Slam', 12, '1d8', 5, false, AttackType.Melee, [DamageType.Bludgeoning], [new NumbingCold(17)],
      [new AdditionalDamage('1d6', 0, DamageType.Cold)]),
      new Attack('Slam', 12, '1d8', 5, false, AttackType.Melee, [DamageType.Bludgeoning], [new NumbingCold(17)],
      [new AdditionalDamage('1d6', 0, DamageType.Cold)])
    ],
    [...iceElementalTraits, ...elementalTraits, SpecialAbility.DamageResistance5]
  ),
  new Creature(
    'smalllightningelemental',
    'Small Lightning Elemental',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/elemental/elemental-lightning/small-lightning-elemental',
    lightningElementalImage,
    Size.Small,
    CreatureType.Elemental,
    Alignment.trueNeutral,
    new Speeds(0, 0, 100),
    5,
    new AbilityScores(10, 15, 10, 4, 11, 11),
    2,
    11,
    new ArmorClass(14, 13, 12),
    1,
    13,
    2,
    1,
    0,
    new Saves(3, 5, 0),
    [Feat.ImprovedInititive, Feat.WeaponFinesse],
    [
      new SkillBonus(Skill.Acrobatics, 7),
      new SkillBonus(Skill.EscapeArtist, 6),
      new SkillBonus(Skill.Fly, 12),
      new SkillBonus(Skill.KnowledgePlanes, 1),
      new SkillBonus(Skill.Perception, 5)
    ],
    [new Attack('Slam', 5, '1d4', 0, false, AttackType.Melee, [DamageType.Bludgeoning], [],
      [new AdditionalDamage('1d3', 0, DamageType.Electricity)])],
    [...lightningElementalTraits, ...elementalTraits]
  ),
  new Creature(
    'mediumlightningelemental',
    'Medium Lightning Elemental',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/elemental/elemental-lightning/medium-lightning-elemental',
    lightningElementalImage,
    Size.Medium,
    CreatureType.Elemental,
    Alignment.trueNeutral,
    new Speeds(0, 0, 100),
    5,
    new AbilityScores(14, 19, 12, 4, 11, 11),
    4,
    26,
    new ArmorClass(16, 15, 11),
    6,
    21,
    4,
    3,
    0,
    new Saves(5, 8, 1),
    [Feat.Dodge, Feat.ImprovedInititive, Feat.WeaponFinesse],
    [
      new SkillBonus(Skill.Acrobatics, 11),
      new SkillBonus(Skill.EscapeArtist, 9),
      new SkillBonus(Skill.Fly, 12),
      new SkillBonus(Skill.KnowledgePlanes, 2),
      new SkillBonus(Skill.Perception, 7)
    ],
    [new Attack('Slam', 8, '1d6', 3, false, AttackType.Melee, [DamageType.Bludgeoning], [],
      [new AdditionalDamage('1d4', 0, DamageType.Electricity)])],
    [...lightningElementalTraits, ...elementalTraits]
  ),
  new Creature(
    'largelightningelemental',
    'Large Lightning Elemental',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/elemental/elemental-lightning/large-lightning-elemental',
    lightningElementalImage,
    Size.Large,
    CreatureType.Elemental,
    Alignment.trueNeutral,
    new Speeds(0, 0, 100),
    10,
    new AbilityScores(16, 23, 14, 6, 11, 11),
    8,
    60,
    new ArmorClass(18, 16, 11),
    12,
    29,
    8,
    5,
    0,
    new Saves(8, 12, 2),
    [Feat.Dodge, Feat.FlybyAttack, Feat.ImprovedInititive, Feat.Mobility, Feat.WeaponFinesse],
    [
      new SkillBonus(Skill.Acrobatics, 17),
      new SkillBonus(Skill.EscapeArtist, 17),
      new SkillBonus(Skill.Fly, 12),
      new SkillBonus(Skill.KnowledgePlanes, 9),
      new SkillBonus(Skill.Perception, 11)
    ],
    [
      new Attack('Slam', 13, '1d8', 3, false, AttackType.Melee, [DamageType.Bludgeoning], [],
      [new AdditionalDamage('1d6', 0, DamageType.Electricity)]),
      new Attack('Slam', 13, '1d8', 3, false, AttackType.Melee, [DamageType.Bludgeoning], [],
      [new AdditionalDamage('1d6', 0, DamageType.Electricity)])
    ],
    [...lightningElementalTraits, ...elementalTraits, SpecialAbility.DamageResistance5]
  ),
  new Creature(
    'smallmagmaelemental',
    'Small Magma Elemental',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/elemental/elemental-magma/small-magma-elemental',
    magmaElementalImage,
    Size.Small,
    CreatureType.Elemental,
    Alignment.trueNeutral,
    new Speeds(20, 0, 0, 0, 20),
    5,
    new AbilityScores(10, 8, 11, 4, 11, 11),
    2,
    11,
    new ArmorClass(15, 10, 15),
    1,
    10,
    2,
    1,
    0,
    new Saves(3, 2, 0),
    [Feat.ImprovedInititive],
    [
      new SkillBonus(Skill.KnowledgeDungeoneering, 2),
      new SkillBonus(Skill.Perception, 5),
      new SkillBonus(Skill.Stealth, 8)
    ],
    [
      new Attack('Slam', 3, '1d3', 0, false, AttackType.Melee, [DamageType.Bludgeoning], [new Burn('1d4', 9)]),
      new Attack('Lava Puddle', null, '', 0, false, AttackType.Melee, [], [new LavaPuddle(2)])
    ],
    [...magmaElementalTraits, ...elementalTraits]
  ),
  new Creature(
    'mediummagmaelemental',
    'Medium Magma Elemental',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/elemental/elemental-magma/medium-magma-elemental',
    magmaElementalImage,
    Size.Medium,
    CreatureType.Elemental,
    Alignment.trueNeutral,
    new Speeds(20, 0, 0, 0, 20),
    5,
    new AbilityScores(14, 8, 15, 4, 11, 11),
    4,
    30,
    new ArmorClass(16, 9, 16),
    6,
    15,
    4,
    3,
    0,
    new Saves(6, 3, 1),
    [Feat.ImprovedInititive, Feat.PowerAttack],
    [
      new SkillBonus(Skill.KnowledgeDungeoneering, 4),
      new SkillBonus(Skill.Perception, 7),
      new SkillBonus(Skill.Stealth, 6)
    ],
    [
      new Attack('Slam', 6, '1d6', 3, false, AttackType.Melee, [DamageType.Bludgeoning], [new Burn('1d4', 12)]),
      new Attack('Lava Puddle', null, '', 0, false, AttackType.Melee, [], [new LavaPuddle(4)])
    ],
    [...magmaElementalTraits, ...elementalTraits]
  ),
  new Creature(
    'largemagmaelemental',
    'Large Magma Elemental',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/elemental/elemental-magma/large-magma-elemental',
    magmaElementalImage,
    Size.Large,
    CreatureType.Elemental,
    Alignment.trueNeutral,
    new Speeds(20, 0, 0, 0, 20),
    10,
    new AbilityScores(18, 8, 15, 6, 11, 11),
    8,
    60,
    new ArmorClass(16, 8, 16),
    13,
    22,
    8,
    5,
    0,
    new Saves(8, 5, 2),
    [Feat.Cleave, Feat.ImprovedBullRush, Feat.ImprovedInititive, Feat.PowerAttack],
    [
      new SkillBonus(Skill.Climb, 15),
      new SkillBonus(Skill.KnowledgeDungeoneering, 9),
      new SkillBonus(Skill.Perception, 11),
      new SkillBonus(Skill.Stealth, 6)
    ],
    [
      new Attack('Slam', 11, '1d8', 4, false, AttackType.Melee, [DamageType.Bludgeoning], [new Burn('1d6', 14)]),
      new Attack('Slam', 11, '1d8', 4, false, AttackType.Melee, [DamageType.Bludgeoning], [new Burn('1d6', 14)]),
      new Attack('Lava Puddle', null, '', 0, false, AttackType.Melee, [], [new LavaPuddle(8)])
    ],
    [...magmaElementalTraits, ...elementalTraits, SpecialAbility.DamageResistance5]
  ),
  new Creature(
    'smallmudelemental',
    'Small Mud Elemental',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/elemental/elemental-mud/small-mud-elemental',
    mudElementalImage,
    Size.Small,
    CreatureType.Elemental,
    Alignment.trueNeutral,
    new Speeds(20, 0, 0, 30, 10),
    5,
    new AbilityScores(14, 8, 13, 4, 11, 11),
    2,
    13,
    new ArmorClass(16, 10, 16),
    3,
    12,
    2,
    1,
    0,
    new Saves(4, 2, 0),
    [Feat.ImprovedBullRush, Feat.PowerAttack],
    [
      new SkillBonus(Skill.Climb, 6),
      new SkillBonus(Skill.EscapeArtist, 3),
      new SkillBonus(Skill.KnowledgePlanes, 1),
      new SkillBonus(Skill.Perception, 5),
      new SkillBonus(Skill.Stealth, 7),
      new SkillBonus(Skill.Swim, 10)
    ],
    [new Attack('Slam', 5, '1d4', 3, false, AttackType.Melee, [DamageType.Bludgeoning], [new Entrap(12, '10 minutes', 5, 5)])],
    [...mudElementalTraits, ...elementalTraits]
  ),
  new Creature(
    'mediummudelemental',
    'Medium Mud Elemental',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/elemental/elemental-mud/medium-mud-elemental',
    mudElementalImage,
    Size.Medium,
    CreatureType.Elemental,
    Alignment.trueNeutral,
    new Speeds(20, 0, 0, 30, 10),
    5,
    new AbilityScores(16, 10, 15, 4, 11, 11),
    4,
    30,
    new ArmorClass(16, 10, 16),
    7,
    17,
    4,
    3,
    0,
    new Saves(6, 4, 1),
    [Feat.Cleave, Feat.ImprovedBullRush, Feat.PowerAttack],
    [
      new SkillBonus(Skill.Climb, 8),
      new SkillBonus(Skill.EscapeArtist, 5),
      new SkillBonus(Skill.KnowledgePlanes, 2),
      new SkillBonus(Skill.Perception, 7),
      new SkillBonus(Skill.Stealth, 5),
      new SkillBonus(Skill.Swim, 11)
    ],
    [new Attack('Slam', 7, '1d6', 4, false, AttackType.Melee, [DamageType.Bludgeoning], [new Entrap(14, '10 minutes', 5, 5)])],
    [...mudElementalTraits, ...elementalTraits]
  ),
  new Creature(
    'largemudelemental',
    'Large Mud Elemental',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/elemental/elemental-mud/large-mud-elemental',
    mudElementalImage,
    Size.Large,
    CreatureType.Elemental,
    Alignment.trueNeutral,
    new Speeds(20, 0, 0, 30, 10),
    10,
    new AbilityScores(20, 12, 17, 4, 11, 11),
    8,
    68,
    new ArmorClass(17, 10, 16),
    14,
    25,
    8,
    5,
    0,
    new Saves(9, 7, 2),
    [Feat.Cleave, Feat.GreatCleave, Feat.GreaterBullRush, Feat.ImprovedBullRush, Feat.PowerAttack],
    [
      new SkillBonus(Skill.Climb, 12),
      new SkillBonus(Skill.EscapeArtist, 8),
      new SkillBonus(Skill.KnowledgePlanes, 4),
      new SkillBonus(Skill.Perception, 11),
      new SkillBonus(Skill.Stealth, 4),
      new SkillBonus(Skill.Swim, 13)
    ],
    [
      new Attack('Slam', 12, '1d8', 5, false, AttackType.Melee, [DamageType.Bludgeoning], [new Entrap(17, '10 minutes', 10, 10)]),
      new Attack('Slam', 12, '1d8', 5, false, AttackType.Melee, [DamageType.Bludgeoning], [new Entrap(17, '10 minutes', 10, 10)])
    ],
    [...mudElementalTraits, ...elementalTraits, SpecialAbility.DamageResistance5]
  ),
  new Creature(
    'smallwaterelemental',
    'Small Water Elemental',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/elemental/elemental-water/small-water-elemental',
    waterElementalImage,
    Size.Small,
    CreatureType.Elemental,
    Alignment.trueNeutral,
    new Speeds(20, 0, 0, 90),
    5,
    new AbilityScores(14, 10, 13, 4, 11, 11),
    2,
    13,
    new ArmorClass(17, 11, 17),
    3,
    13,
    2,
    1,
    0,
    new Saves(4, 3, 0),
    [Feat.PowerAttack],
    [
      new SkillBonus(Skill.Acrobatics, 4),
      new SkillBonus(Skill.EscapeArtist, 4),
      new SkillBonus(Skill.KnowledgePlanes, 1),
      new SkillBonus(Skill.Perception, 4),
      new SkillBonus(Skill.Stealth, 8),
      new SkillBonus(Skill.Swim, 14)
    ],
    [
      new Attack('Slam', 5, '1d6', 3, false, AttackType.Melee, [DamageType.Bludgeoning]),
      new Attack('Vortex', null, '1d6', 3, false, AttackType.Melee, [DamageType.Bludgeoning], [new Vortex(1, 13, 20)])
    ],
    [...waterElementalTraits, ...elementalTraits]
  ),
  new Creature(
    'mediumwaterelemental',
    'Medium Water Elemental',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/elemental/elemental-water/medium-water-elemental',
    waterElementalImage,
    Size.Medium,
    CreatureType.Elemental,
    Alignment.trueNeutral,
    new Speeds(20, 0, 0, 90),
    5,
    new AbilityScores(16, 12, 15, 4, 11, 11),
    4,
    30,
    new ArmorClass(17, 11, 16),
    7,
    18,
    4,
    3,
    0,
    new Saves(6, 5, 1),
    [Feat.Cleave, Feat.PowerAttack],
    [
      new SkillBonus(Skill.Acrobatics, 6),
      new SkillBonus(Skill.EscapeArtist, 6),
      new SkillBonus(Skill.KnowledgePlanes, 2),
      new SkillBonus(Skill.Perception, 5),
      new SkillBonus(Skill.Stealth, 6),
      new SkillBonus(Skill.Swim, 16)
    ],
    [
      new Attack('Slam', 7, '1d8', 4, false, AttackType.Melee, [DamageType.Bludgeoning]),
      new Attack('Vortex', null, '1d8', 4, false, AttackType.Melee, [DamageType.Bludgeoning], [new Vortex(2, 15, 30)])
    ],
    [...waterElementalTraits, ...elementalTraits]
  ),
  new Creature(
    'largewaterelemental',
    'Large Water Elemental',
    'https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/elemental/elemental-water/large-water-elemental',
    waterElementalImage,
    Size.Large,
    CreatureType.Elemental,
    Alignment.trueNeutral,
    new Speeds(20, 0, 0, 90),
    10,
    new AbilityScores(20, 14, 17, 6, 11, 11),
    8,
    68,
    new ArmorClass(18, 12, 15),
    14,
    27,
    8,
    5,
    0,
    new Saves(9, 8, 2),
    [Feat.Cleave, Feat.Dodge, Feat.GreatCleave, Feat.PowerAttack],
    [
      new SkillBonus(Skill.Acrobatics, 9),
      new SkillBonus(Skill.EscapeArtist, 11),
      new SkillBonus(Skill.KnowledgePlanes, 5),
      new SkillBonus(Skill.Perception, 9),
      new SkillBonus(Skill.Stealth, 5),
      new SkillBonus(Skill.Swim, 24)
    ],
    [
      new Attack('Slam', 12, '1d8', 5, false, AttackType.Melee, [DamageType.Bludgeoning]),
      new Attack('Slam', 12, '1d8', 5, false, AttackType.Melee, [DamageType.Bludgeoning]),
      new Attack('Vortex', null, '1d8', 5, false, AttackType.Melee, [DamageType.Bludgeoning], [new Vortex(4, 19, 40)])
    ],
    [...waterElementalTraits, ...elementalTraits, SpecialAbility.DamageResistance5]
  )
];
