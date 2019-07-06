import {
  Size, CreatureType, Skill, Alignment, DamageType, AttackType, Feat, SpecialAbility
} from '../model/enums';
import { AbilityScores } from '../model/abilityscores';
import { Saves } from '../model/saves';
import { Creature } from '../model/creature';
import { Attack } from '../model/attack';
import { ArmorClass } from '../model/armorClass';
import { SkillBonus } from '../model/skillbonus';

export const fey: Creature[] = [
  new Creature(
    'mite',
    'Mite',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Mite',
    'https://pathfinderwiki.com/mediawiki/images/0/04/Mite.jpg',
    Size.Small,
    CreatureType.Fey,
    Alignment.lawfulEvil,
    20,
    5,
    new AbilityScores(8, 13, 11, 8, 13, 8),
    1,
    3,
    new ArmorClass(12, 12, 11),
    -2,
    9,
    new Saves(0, 3, 3),
    [Feat.PointBlankShot],
    [
      new SkillBonus(Skill.climb, 7),
      new SkillBonus(Skill.handleanimal, 0),
      new SkillBonus(Skill.perception, 5),
      new SkillBonus(Skill.ride, 2),
      new SkillBonus(Skill.slightofhand, 9),
      new SkillBonus(Skill.stealth, 13)
    ],
    [
      new Attack('Dagger', 0, '1d3', -1, false, AttackType.Melee, [DamageType.Piercing, DamageType.Slashing]),
      new Attack('Dart', 2, '1d3', -1, false, AttackType.Ranged, [DamageType.Piercing])
    ],
    [
      SpecialAbility.DamageResistanceColdIron2, SpecialAbility.Darkvision, SpecialAbility.Hatred, SpecialAbility.LightSensitivity,
      SpecialAbility.LowLightVision, SpecialAbility.Scent, SpecialAbility.VerminEmpathy
    ] // TODO: Needs spell-like abilities
  )
];
