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

export const humanoids: Creature[] = [
  new Creature(
    'cyclops',
    'Cyclops',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Cyclops',
    'https://pathfinderwiki.com/mediawiki/images/thumb/9/9d/Aebos.jpg/250px-Aebos.jpg',
    Size.Large,
    CreatureType.Humanoid,
    Alignment.trueNeutral,
    new Speeds(30),
    10,
    new AbilityScores(21, 8, 15, 10, 13, 8),
    10,
    65,
    new ArmorClass(19, 8, 19),
    13,
    22,
    7,
    5,
    0,
    new Saves(9, 2, 4),
    [Feat.Alertness, Feat.Cleave, Feat.GreatCleave, Feat.ImprovedBullRush, Feat.PowerAttack],
    [
      new SkillBonus(Skill.Intimidate, 9),
      new SkillBonus(Skill.Perception, 11),
      new SkillBonus(Skill.Perception, 10),
      new SkillBonus(Skill.SenseMotive, 5),
      new SkillBonus(Skill.Survival, 6),
    ],
    [
      new Attack('Greataxe', 11, '3d6', 7, false, AttackType.Melee, [DamageType.Slashing]),
      new Attack('Greataxe', 6, '3d6', 7, false, AttackType.Melee, [DamageType.Slashing]),
      new Attack('Heavy Crossbow', 5, '2d8', 0, false, AttackType.Ranged, [DamageType.Piercing])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.Ferocity, SpecialAbility.FlashOfInsight]
  ),
  new Creature(
    'ettin',
    'Ettin',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Ettin',
    'https://i.pinimg.com/originals/5f/2c/d7/5f2cd775f19838458c4ffa8eb9c09a7a.jpg',
    Size.Large,
    CreatureType.Humanoid,
    Alignment.trueNeutral,
    new Speeds(40),
    10,
    new AbilityScores(23, 8, 15, 6, 10, 11),
    10,
    65,
    new ArmorClass(18, 8, 18),
    14,
    23,
    7,
    6,
    0,
    new Saves(9, 2, 5),
    [Feat.Cleave, Feat.ImprovedInititive, Feat.ImprovedOverrun, Feat.IronWill, Feat.PowerAttack],
    [
      new SkillBonus(Skill.HandleAnimal, 8),
      new SkillBonus(Skill.Perception, 12)
    ],
    [
      new Attack('Left Flail', 12, '2d6', 6, false, AttackType.Melee, [DamageType.Bludgeoning]),
      new Attack('Left Flail', 7, '2d6', 6, false, AttackType.Melee, [DamageType.Bludgeoning]),
      new Attack('Right Flail', 12, '2d6', 6, false, AttackType.Melee, [DamageType.Bludgeoning]),
      new Attack('Right Flail', 7, '2d6', 6, false, AttackType.Melee, [DamageType.Bludgeoning]),
      new Attack('Left Javalin', 5, '1d8', 6, false, AttackType.Ranged, [DamageType.Piercing]),
      new Attack('Right Javalin', 5, '1d8', 6, false, AttackType.Ranged, [DamageType.Piercing])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.SuperiorTwoWeaponFighting]
  ),
  new Creature(
    'hillgiant',
    'Hill Giant',
    'https://www.d20pfsrd.com/bestiary/monster-listings/humanoids/giants/giant-true/giant-hill',
    'https://i.pinimg.com/originals/c2/66/67/c26667c1c6ace74d95d7784a576d0aac.png',
    Size.Large,
    CreatureType.Humanoid,
    Alignment.trueNeutral,
    new Speeds(30),
    10,
    new AbilityScores(25, 8, 19, 6, 10, 7),
    10,
    85,
    new ArmorClass(21, 8, 21),
    15,
    24,
    7,
    7,
    0,
    new Saves(11, 2, 3),
    [Feat.Cleave, Feat.IntimidatingProwess, Feat.MartialWeaponProficiencyGreatclub, Feat.PowerAttack, Feat.WeaponFocusGreatclub],
    [
      new SkillBonus(Skill.Climb, 10),
      new SkillBonus(Skill.Intimidate, 12),
      new SkillBonus(Skill.Perception, 6)
    ],
    [
      new Attack('Greatclub', 14, '2d8', 10, false, AttackType.Melee, [DamageType.Bludgeoning]),
      new Attack('Greatclub', 9, '2d8', 10, false, AttackType.Melee, [DamageType.Bludgeoning]),
      new Attack('Slam', 13, '1d8', 7, false, AttackType.Melee, [DamageType.Bludgeoning]),
      new Attack('Slam', 13, '1d8', 7, false, AttackType.Melee, [DamageType.Bludgeoning]),
      new Attack('Rock Throw', 6, '1d8', 10, false, AttackType.Ranged, [DamageType.Bludgeoning])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.RockCatching]
  ),
  new Creature(
    'stonegiant',
    'Stone Giant',
    'https://www.d20pfsrd.com/bestiary/monster-listings/humanoids/giants/giant-true/giant-stone',
    'https://vignette.wikia.nocookie.net/forgottenrealms/images/0/08/Monster_Manual_5e_-_Giant%2C_Stone_-_p156.jpg/revision/latest?cb=20141112174505',
    Size.Large,
    CreatureType.Humanoid,
    Alignment.trueNeutral,
    new Speeds(40),
    10,
    new AbilityScores(27, 15, 19, 10, 12, 10),
    12,
    102,
    new ArmorClass(22, 11, 20),
    18,
    30,
    9,
    8,
    0,
    new Saves(12, 6, 7),
    [Feat.IronWill, Feat.MartialWeaponProficiencyGreatclub, Feat.PointBlankShot, Feat.PowerAttack, Feat.PreciseShot, Feat.QuickDraw],
    [
      new SkillBonus(Skill.Climb, 12),
      new SkillBonus(Skill.Intimidate, 12),
      new SkillBonus(Skill.Perception, 12),
      new SkillBonus(Skill.Stealth, 4),
      new SkillBonus(Skill.Stealth, 12, 'in rocky terrain')
    ],
    [
      new Attack('Greatclub', 16, '2d8', 12, false, AttackType.Melee, [DamageType.Bludgeoning]),
      new Attack('Greatclub', 11, '2d8', 12, false, AttackType.Melee, [DamageType.Bludgeoning]),
      new Attack('Slam', 16, '1d8', 8, false, AttackType.Melee, [DamageType.Bludgeoning]),
      new Attack('Slam', 16, '1d8', 8, false, AttackType.Melee, [DamageType.Bludgeoning]),
      new Attack('Rock Throw', 11, '1d8', 12, false, AttackType.Ranged, [DamageType.Bludgeoning]),
      new Attack('Rock Throw', 6, '1d8', 12, false, AttackType.Ranged, [DamageType.Bludgeoning])
    ],
    [SpecialAbility.Darkvision, SpecialAbility.LowLightVision, SpecialAbility.RockCatching]
  )
];
