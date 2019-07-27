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

export const dinosaurs: Creature[] = [
  new Creature(
    'deinonychus',
    'Deinonychus',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Deinonychus',
    'https://dungeonhacking.files.wordpress.com/2015/07/deinonychus_antirrhopus.gif',
    Size.Medium,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(60),
    5,
    new AbilityScores(15, 15, 19, 2, 12, 14),
    4,
    34,
    new ArmorClass(15, 12, 13),
    5,
    17,
    3,
    3,
    0,
    new Saves(8, 6, 2),
    [Feat.ImprovedInititive, Feat.Run],
    [
      new SkillBonus(Skill.Acrobatics, 10),
      new SkillBonus(Skill.Acrobatics, 22, 'Jumping'),
      new SkillBonus(Skill.Perception, 14),
      new SkillBonus(Skill.Stealth, 15)
    ],
    [
      new Attack('Talon', 5, '1d8', 2, false, AttackType.Melee, [DamageType.Slashing]),
      new Attack('Talon', 5, '1d8', 2, false, AttackType.Melee, [DamageType.Slashing]),
      new Attack('Bite', 5, '1d6', 2, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing]),
      new Attack('Foreclaws', 0, '1d4', 1, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent, SpecialAbility.Pounce]
  ),
  new Creature(
    'pteranodon',
    'Pteranodon',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Pteranodon',
    'https://vignette.wikia.nocookie.net/primalcarnagethegame/images/2/22/Pteranodon.png/revision/latest?cb=20170929141926',
    Size.Large,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(10, 0, 50),
    10,
    new AbilityScores(16, 19, 15, 2, 15, 12),
    5,
    32,
    new ArmorClass(16, 14, 11),
    7,
    21,
    3,
    3,
    0,
    new Saves(6, 8, 3),
    [Feat.Dodge, Feat.ImprovedInititive, Feat.SkillFocusPerception],
    [
      new SkillBonus(Skill.Fly, -1),
      new SkillBonus(Skill.Perception, 11)
    ],
    [new Attack('Bite', 5, '2d6', 4, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing])],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent]
  )
];
