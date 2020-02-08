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
    'https://www.d20pfsrd.com/bestiary/monster-listings/humanoids/giants/cyclops/',
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
    'https://www.d20pfsrd.com/bestiary/monster-listings/humanoids/giants/ettin/',
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
  )
];
