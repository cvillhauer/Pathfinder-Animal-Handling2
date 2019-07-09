import {
  Size, CreatureType, Skill, Alignment, DamageType, AttackType, Feat, SpecialAbility, Spell
} from '../model/enums';
import { AbilityScores } from '../model/abilityscores';
import { Saves } from '../model/saves';
import { Creature } from '../model/creature';
import { Attack } from '../model/attack';
import { ArmorClass } from '../model/armorClass';
import { SkillBonus } from '../model/skillbonus';
import { Speeds } from '../model/speed';
import { Whirlwind, Vortex } from '../model/whirlwind';
import { Burn } from '../model/burn';

const elementalTraits = [
  SpecialAbility.ImmuneBleed, SpecialAbility.ImmuneParalysis, SpecialAbility.ImmunePoison,
  SpecialAbility.ImmuneSleepEffects, SpecialAbility.ImmuneStunning,
  SpecialAbility.ImmuneCritical, SpecialAbility.ImmuneFlanking, SpecialAbility.ImmuneSneakAttack
];

export const elementals: Creature[] = [
  new Creature(
    'smallairelemental',
    'Small Air Elemental',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Small%20Air%20Elemental',
    'http://cdn.obsidianportal.com/assets/94811/windelemental.jpg',
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
    [SpecialAbility.Darkvision, SpecialAbility.AirMastery, ...elementalTraits]
  ),
  new Creature(
    'smallearthelemental',
    'Small Earth Elemental',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Small%20Earth%20Elemental',
    'https://pathfinderwiki.com/mediawiki/images/thumb/0/0a/Earth_elemental_1.jpg/250px-Earth_elemental_1.jpg',
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
    [SpecialAbility.Darkvision, SpecialAbility.Tremorsense, SpecialAbility.EarthMastery, SpecialAbility.EarthGlide, ...elementalTraits]
  ),
  new Creature(
    'smallfireelemental',
    'Small Fire Elemental',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Small%20Fire%20Elemental',
    'https://pathfinderwiki.com/mediawiki/images/thumb/e/e8/Fire_elemental_1.jpg/250px-Fire_elemental_1.jpg',
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
    [SpecialAbility.Darkvision, SpecialAbility.ImmuneFire, SpecialAbility.VulnerableCold, ...elementalTraits]
  ),
  new Creature(
    'smallwaterelemental',
    'Small Water Elemental',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Small%20Water%20Elemental',
    'http://www.killershrike.com/Fate/Fae/Pathfinder/Content/Characters/Elementals/images/LargeWaterElemental.jpg',
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
    [SpecialAbility.Darkvision, SpecialAbility.Drench, SpecialAbility.WaterMastery, ...elementalTraits]
  )
];
