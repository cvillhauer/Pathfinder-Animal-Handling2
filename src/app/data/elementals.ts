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
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Small%20Air%20Elemental',
    airElementalImage,
    Size.Small,
    CreatureType.Elemental,
    Alignment.trueNeutral,
    new Speeds(0, 0, 100, 0),
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
    'smallearthelemental',
    'Small Earth Elemental',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Small%20Earth%20Elemental',
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
    'smallfireelemental',
    'Small Fire Elemental',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Small%20Fire%20Elemental',
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
    'smalliceelemental',
    'Small Ice Elemental',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Small%20Ice%20Elemental',
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
    'smalllightningelemental',
    'Small Lightning Elemental',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Small%20Lightning%20Elemental',
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
    'smallmagmaelemental',
    'Small Magma Elemental',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Small%20Magma%20Elemental',
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
    'smallmudelemental',
    'Small Mud Elemental',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Small%20Mud%20Elemental',
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
    'smallwaterelemental',
    'Small Water Elemental',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Small%20Water%20Elemental',
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
  )
];
