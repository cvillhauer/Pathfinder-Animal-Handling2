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
import { BloodDrain } from '../model/grappleEffects';
import { Speeds } from '../model/speed';

export const magicalbeasts: Creature[] = [
  new Creature(
    'stirge',
    'Stirge',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Stirge',
    'https://vignette1.wikia.nocookie.net/forgottenrealms/images/d/d2/Stirge_-_Lars_Grant-West.jpg/revision/latest?cb=20090218055114',
    Size.Tiny,
    CreatureType.MagicalBeast,
    Alignment.trueNeutral,
    new Speeds(10, 0, 40),
    0,
    new AbilityScores(3, 19, 10, 1, 12, 6),
    1,
    5,
    new ArmorClass(16, 16, 12),
    3,
    9,
    1,
    0.5,
    0,
    new Saves(2, 6, 1),
    [Feat.WeaponFinesse],
    [
      new SkillBonus(Skill.Fly, 8),
      new SkillBonus(Skill.Stealth, 16)
    ],
    [new Attack('Touch', 7, ' ', 0, true, AttackType.Melee, [], [new Attach(11), new BloodDrain('1', 'For up to 4 con damage total.')])],
    [SpecialAbility.Darkvision, SpecialAbility.LowLightVision, SpecialAbility.Scent]
  )
];
