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
import { Whirlwind } from '../model/whirlwind';

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
];
