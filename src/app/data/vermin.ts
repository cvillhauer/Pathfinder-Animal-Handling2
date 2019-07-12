import {
  Size, CreatureType, Skill, Alignment, Modifier,
  DamageType, AttackType, AbilityEffectType, Save, Feat, SpecialAbility
} from '../model/enums';
import { AbilityScores } from '../model/abilityscores';
import { Saves } from '../model/saves';
import { Creature } from '../model/creature';
import { Attack } from '../model/attack';
import { SavingThrow } from '../model/savingThrow';
import { AbilityEffect } from '../model/abilityEffect';
import { Poison } from '../model/poison';
import { ArmorClass } from '../model/armorClass';
import { SkillBonus } from '../model/skillbonus';
import { Speeds } from '../model/speed';
import { Web } from '../model/web';
import { Grab, Constrict } from '../model/combatManeuvers';

export const vermin: Creature[] = [
  new Creature(
    'firebeetle',
    'Fire Beetle',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Fire%20Beetle',
    'https://wrathofzombie.files.wordpress.com/2017/08/fire-beetle.jpg',
    Size.Small,
    CreatureType.Vermin,
    Alignment.trueNeutral,
    new Speeds(30, 0, 30),
    5,
    new AbilityScores(10, 11, 11, 0, 10, 7),
    1,
    4,
    new ArmorClass(12, 11, 12),
    -1,
    9,
    new Saves(2, 0, 0),
    [],
    [new SkillBonus(Skill.Fly, -2)],
    [new Attack('Bite', 1, '1d4', 0, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing])],
    [SpecialAbility.ImmuneMindAffecting, SpecialAbility.LowLightVision, SpecialAbility.Luminescence]
  ),
  new Creature(
    'giantantsoldier',
    'Giant Ant (Soldier)',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Giant%20Ant',
    'https://vignette.wikia.nocookie.net/non-aliencreatures/images/5/5e/Fire_Ant_Warrior.png/revision/latest?cb=20101228091156',
    Size.Medium,
    CreatureType.Vermin,
    Alignment.trueNeutral,
    new Speeds(50, 20),
    5,
    new AbilityScores(14, 10, 17, 0, 13, 11),
    2,
    18,
    new ArmorClass(15, 10, 15),
    3,
    13,
    new Saves(6, 0, 1),
    [Feat.Toughness],
    [
      new SkillBonus(Skill.Climb, 10),
      new SkillBonus(Skill.Perception, 5),
      new SkillBonus(Skill.Survival, 5)
    ],
    [
      new Attack('Bite', 3, '1d6', 2, false, AttackType.Melee,
        [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing], [new Grab(7)]),
      new Attack('Sting', 3, '1d4', 2, false, AttackType.Melee, [DamageType.Piercing],
        [new Poison(new SavingThrow(Save.Fortitude, 14), 'once per round for 4 rounds',
          [new AbilityEffect('1d2', Modifier.Strength, AbilityEffectType.Damage)], 1)])
    ],
    [SpecialAbility.Darkvision, SpecialAbility.Scent, SpecialAbility.ImmuneMindAffecting]
  ),
  new Creature(
    'giantantworker',
    'Giant Ant (Worker)',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Giant%20Ant',
    'https://vignette.wikia.nocookie.net/non-aliencreatures/images/5/5e/Fire_Ant_Warrior.png/revision/latest?cb=20101228091156',
    Size.Medium,
    CreatureType.Vermin,
    Alignment.trueNeutral,
    new Speeds(50, 20),
    5,
    new AbilityScores(14, 10, 17, 0, 13, 11),
    2,
    18,
    new ArmorClass(15, 10, 15),
    3,
    13,
    new Saves(6, 0, 1),
    [Feat.Toughness],
    [
      new SkillBonus(Skill.Climb, 10),
      new SkillBonus(Skill.Perception, 5),
      new SkillBonus(Skill.Survival, 5)
    ],
    [new Attack('Bite', 3, '1d6', 2, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing])],
    [SpecialAbility.Darkvision, SpecialAbility.Scent, SpecialAbility.ImmuneMindAffecting]
  ),
  new Creature(
    'giantcentipede',
    'Giant Centipede',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Giant%20Centipede',
    'https://ironbombs.files.wordpress.com/2014/03/giant-centipede-smaller.jpg',
    Size.Medium,
    CreatureType.Vermin,
    Alignment.trueNeutral,
    new Speeds(40, 40),
    5,
    new AbilityScores(9, 15, 12, 0, 10, 2),
    1,
    5,
    new ArmorClass(14, 12, 12),
    -1,
    11,
    new Saves(3, 2, 0),
    [Feat.WeaponFinesse],
    [
      new SkillBonus(Skill.Climb, 10),
      new SkillBonus(Skill.Perception, 4),
      new SkillBonus(Skill.Stealth, 10)
    ],
    [
      new Attack('Bite', 2, '1d6', -1, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing],
        [new Poison(new SavingThrow(Save.Fortitude, 13), 'once per round for 6 rounds',
          [new AbilityEffect('1d3', Modifier.Dexterity, AbilityEffectType.Damage)], 1)])
    ],
    [SpecialAbility.Darkvision, SpecialAbility.ImmuneMindAffecting]
  ),
  new Creature(
    'giantcrab',
    'Giant Crab',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Giant%20Crab',
    'http://2.bp.blogspot.com/_Fwjw80hPmio/TOp2HbokuGI/AAAAAAAACCY/lv_SdLnlcbM/s1600/Tojanida.jpg',
    Size.Medium,
    CreatureType.Vermin,
    Alignment.trueNeutral,
    new Speeds(30, 0, 0, 20),
    5,
    new AbilityScores(15, 13, 14, 0, 10, 2),
    3,
    19,
    new ArmorClass(16, 11, 15),
    4,
    15,
    new Saves(5, 2, 1),
    [],
    [new SkillBonus(Skill.Perception, 4), new SkillBonus(Skill.Swim, 10)],
    [
      new Attack('Claw', 4, '1d4', 2, false, AttackType.Melee,
        [DamageType.Bludgeoning, DamageType.Slashing], [new Grab(8), new Constrict(8, '1d4', 2)]),
      new Attack('Claw', 4, '1d4', 2, false, AttackType.Melee,
        [DamageType.Bludgeoning, DamageType.Slashing], [new Grab(8), new Constrict(8, '1d4', 2)])
    ],
    [SpecialAbility.Darkvision, SpecialAbility.ImmuneMindAffecting]
  ),
  new Creature(
    'giantspider',
    'Giant Spider',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Giant%20Spider',
    'https://i.pinimg.com/736x/2f/42/9d/2f429d7c217e618be3ad75b88ddeac29--spider-art-giant-spider.jpg',
    Size.Medium,
    CreatureType.Vermin,
    Alignment.trueNeutral,
    new Speeds(30, 30),
    5,
    new AbilityScores(11, 17, 12, 0, 10, 2),
    3,
    16,
    new ArmorClass(14, 13, 11),
    2,
    15,
    new Saves(4, 4, 1),
    [],
    [
      new SkillBonus(Skill.Climb, 16),
      new SkillBonus(Skill.Perception, 4),
      new SkillBonus(Skill.Perception, 8, 'In Webs'),
      new SkillBonus(Skill.Stealth, 11),
      new SkillBonus(Skill.Stealth, 7, 'In Webs')
    ],
    [
      new Attack('Bite', 2, '1d6', 0, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing],
        [new Poison(new SavingThrow(Save.Fortitude, 14), 'once per round for 4 rounds',
          [new AbilityEffect('1d2', Modifier.Strength, AbilityEffectType.Damage)], 1)]),
      new Attack('Web', 5, '', 0, false, AttackType.Ranged, [], [new Web(12, 2)])
    ],
    [SpecialAbility.Darkvision, SpecialAbility.Tremorsense, SpecialAbility.ImmuneMindAffecting]
  )
];
