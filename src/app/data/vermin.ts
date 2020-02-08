import { Size, CreatureType, Modifier, DamageType, AttackType, AbilityEffectType, Save } from '../model/enums';
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
import { Feat } from '../model/feat';
import { Alignment } from '../model/alignment';
import { Skill } from '../model/skill';
import { SpecialAbility } from '../model/specialAbility';
import { Trample } from '../model/trample';

export const vermin: Creature[] = [
  new Creature(
    'firebeetle',
    'Fire Beetle',
    'https://www.d20pfsrd.com/bestiary/monster-listings/vermin/beetle/beetle-fire/',
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
    0,
    0.33,
    0,
    new Saves(2, 0, 0),
    [],
    [new SkillBonus(Skill.Fly, -2)],
    [new Attack('Bite', 1, '1d4', 0, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing])],
    [SpecialAbility.ImmuneMindAffecting, SpecialAbility.LowLightVision, SpecialAbility.Luminescence]
  ),
  new Creature(
    'giantantdrone',
    'Giant Ant (Drone)',
    'https://www.d20pfsrd.com/bestiary/monster-listings/vermin/ant/ant-giant-drone/',
    'https://vignette.wikia.nocookie.net/non-aliencreatures/images/5/5e/Fire_Ant_Warrior.png/revision/latest?cb=20101228091156',
    Size.Medium,
    CreatureType.Vermin,
    Alignment.trueNeutral,
    new Speeds(50, 20, 30),
    5,
    new AbilityScores(14, 10, 17, 0, 13, 11),
    2,
    22,
    new ArmorClass(19, 14, 19),
    5,
    17,
    1,
    3,
    0,
    new Saves(6, 0, 1),
    [Feat.Toughness],
    [
      new SkillBonus(Skill.Climb, 10),
      new SkillBonus(Skill.Perception, 5),
      new SkillBonus(Skill.Survival, 5)
    ],
    [
      new Attack('Bite', 5, '1d6', 4, false, AttackType.Melee,
        [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing], [new Grab(9)]),
      new Attack('Sting', 5, '1d4', 4, false, AttackType.Melee, [DamageType.Piercing],
        [new Poison(new SavingThrow(Save.Fortitude, 16), 'once per round for 4 rounds',
          [new AbilityEffect('1d2', Modifier.Strength, AbilityEffectType.Damage)], 1)])
    ],
    [SpecialAbility.Darkvision, SpecialAbility.Scent, SpecialAbility.ImmuneMindAffecting]
  ),
  new Creature(
    'giantantsoldier',
    'Giant Ant (Soldier)',
    'https://www.d20pfsrd.com/bestiary/monster-listings/vermin/ant/ant-giant-soldier/',
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
    1,
    2,
    0,
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
    'https://www.d20pfsrd.com/bestiary/monster-listings/vermin/ant/ant-giant-worker/',
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
    1,
    1,
    0,
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
    'https://www.d20pfsrd.com/bestiary/monster-listings/vermin/centipede/centipede-giant/',
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
    0,
    0.5,
    0,
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
    'https://www.d20pfsrd.com/bestiary/monster-listings/vermin/crab/giant-crab/',
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
    2,
    2,
    0,
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
    'giantscorpion',
    'Giant Scorpion',
    'https://www.d20pfsrd.com/bestiary/monster-listings/vermin/scorpion/scorpion-giant/',
    'http://images.uesp.net//9/9b/ON-concept-Giant_scorpion.png',
    Size.Large,
    CreatureType.Vermin,
    Alignment.trueNeutral,
    new Speeds(50),
    10,
    new AbilityScores(19, 10, 16, 0, 10, 2),
    5,
    37,
    new ArmorClass(16, 9, 16),
    8,
    18,
    3,
    3,
    0,
    new Saves(7, 1, 1),
    [],
    [
      new SkillBonus(Skill.Climb, 8),
      new SkillBonus(Skill.Perception, 4),
      new SkillBonus(Skill.Stealth, 0)
    ],
    [
      new Attack('Claw', 6, '1d6', 4, false, AttackType.Melee,
        [DamageType.Bludgeoning, DamageType.Slashing], [new Grab(12), new Constrict(12, '1d6', 4)]),
      new Attack('Claw', 6, '1d6', 4, false, AttackType.Melee,
        [DamageType.Bludgeoning, DamageType.Slashing], [new Grab(12), new Constrict(12, '1d6', 4)]),
      new Attack('Sting', 6, '1d6', 4, false, AttackType.Melee, [DamageType.Piercing], [new Poison(new SavingThrow(Save.Fortitude, 17),
        'once per round for 6 rounds', [new AbilityEffect('1d2', Modifier.Strength, AbilityEffectType.Damage)], 1)])
    ],
    [SpecialAbility.Darkvision, SpecialAbility.Tremorsense, SpecialAbility.ImmuneMindAffecting]
  ),
  new Creature(
    'giantspider',
    'Giant Spider',
    'https://www.d20pfsrd.com/bestiary/monster-listings/vermin/spider/giant-spider/',
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
    2,
    1,
    0,
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
  ),
  new Creature(
    'giantstagbeetle',
    'Giant Stag Beetle',
    'https://www.d20pfsrd.com/bestiary/monster-listings/vermin/beetle/beetle-stag/',
    'https://thetrove.net/Assets/Roll%2020/Devin%20Night/Devin%20Token%20Pack%2043%20-%20Many%20Legged%20Fiends%20(KS)/TP43_ManyLegedFiends_KS/vermin_giant_stag_beetle.png',
    Size.Large,
    CreatureType.Vermin,
    Alignment.trueNeutral,
    new Speeds(20, 0, 20),
    5,
    new AbilityScores(19, 10, 15, 0, 10, 9),
    7,
    45,
    new ArmorClass(17, 9, 17),
    10,
    20,
    5,
    4,
    0,
    new Saves(7, 2, 2),
    [],
    [new SkillBonus(Skill.Fly, -6)],
    [
      new Attack('Bite', 8, '2d8', 6, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing]),
      new Attack('Trample', null, '', 0, false, AttackType.Melee, [DamageType.Bludgeoning], [new Trample('1d6', 6, 17)])
    ],
    [SpecialAbility.Darkvision, SpecialAbility.ImmuneMindAffecting]
  ),
  new Creature(
    'giantwasp',
    'Giant Wasp',
    'https://www.d20pfsrd.com/bestiary/monster-listings/vermin/bees-and-wasps/wasp/wasp-giant/',
    'https://ironbombs.files.wordpress.com/2014/03/wasp.jpg',
    Size.Large,
    CreatureType.Vermin,
    Alignment.trueNeutral,
    new Speeds(20, 0, 60),
    5,
    new AbilityScores(18, 12, 18, 0, 13, 11),
    4,
    34,
    new ArmorClass(14, 10, 13),
    8,
    19,
    3,
    3,
    0,
    new Saves(8, 2, 2),
    [],
    [
      new SkillBonus(Skill.Fly, 3),
      new SkillBonus(Skill.Perception, 9)
    ],
    [
      new Attack('Sting', 6, '1d8', 6, false, AttackType.Melee, [DamageType.Piercing],
        [new Poison(new SavingThrow(Save.Fortitude, 18), 'once per round for 6 rounds',
          [new AbilityEffect('1d2', Modifier.Dexterity, AbilityEffectType.Damage)], 1)])
    ],
    [SpecialAbility.Darkvision, SpecialAbility.ImmuneMindAffecting]
  )
];
