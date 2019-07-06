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

export const vermin: Creature[] = [
  new Creature(
    'firebeetle',
    'Fire Beetle',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Fire%20Beetle',
    'https://wrathofzombie.files.wordpress.com/2017/08/fire-beetle.jpg',
    Size.Small,
    CreatureType.Vermin,
    Alignment.trueNeutral,
    30,
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
    'giantcentipede',
    'Giant Centipede',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Giant%20Centipede',
    'https://ironbombs.files.wordpress.com/2014/03/giant-centipede-smaller.jpg',
    Size.Medium,
    CreatureType.Vermin,
    Alignment.trueNeutral,
    40,
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
];
