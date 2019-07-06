import {
  Size, CreatureType, Skill, Alignment, AttackType, Feat, SpecialAbility
} from '../model/enums';
import { AbilityScores } from '../model/abilityscores';
import { Saves } from '../model/saves';
import { Creature } from '../model/creature';
import { Attack } from '../model/attack';
import { ArmorClass } from '../model/armorClass';
import { SkillBonus } from '../model/skillbonus';
import { Attach } from '../model/combatManeuvers';

export const magicalbeasts: Creature[] = [
  new Creature(
    'stirge',
    'Stirge',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Stirge',
    'https://vignette1.wikia.nocookie.net/forgottenrealms/images/d/d2/Stirge_-_Lars_Grant-West.jpg/revision/latest?cb=20090218055114',
    Size.Tiny,
    CreatureType.MagicalBeast,
    Alignment.trueNeutral,
    40,
    0,
    new AbilityScores(3, 19, 10, 1, 12, 6),
    1,
    5,
    new ArmorClass(16, 16, 12),
    3,
    9,
    new Saves(2, 6, 1),
    [Feat.WeaponFinesse],
    [
      new SkillBonus(Skill.fly, 8),
      new SkillBonus(Skill.stealth, 16)
    ],
    [new Attack('Touch', 7, ' ', 0, true, AttackType.Melee, [], [new Attach(11)])],
    [SpecialAbility.Darkvision, SpecialAbility.LowLightVision, SpecialAbility.Scent]
  )
];
