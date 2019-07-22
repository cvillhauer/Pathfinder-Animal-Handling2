import { Size, CreatureType, DamageType, AttackType, Spell } from '../model/enums';
import { AbilityScores } from '../model/abilityscores';
import { Saves } from '../model/saves';
import { Creature } from '../model/creature';
import { Attack } from '../model/attack';
import { ArmorClass } from '../model/armorClass';
import { SkillBonus } from '../model/skillbonus';
import { Speeds } from '../model/speed';
import { SpellLikeAbility } from '../model/spellLikeAbility';
import { Feat } from '../model/feat';
import { Alignment } from '../model/alignment';
import { Skill } from '../model/skill';
import { SpecialAbility } from '../model/specialAbility';

export const fey: Creature[] = [
  new Creature(
    'mite',
    'Mite',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Mite',
    'https://pathfinderwiki.com/mediawiki/images/0/04/Mite.jpg',
    Size.Small,
    CreatureType.Fey,
    Alignment.trueNeutral,
    new Speeds(20, 20),
    5,
    new AbilityScores(8, 13, 11, 8, 13, 8),
    1,
    3,
    new ArmorClass(12, 12, 11),
    -2,
    9,
    0,
    0.25,
    0,
    new Saves(0, 3, 3),
    [Feat.PointBlankShot],
    [
      new SkillBonus(Skill.Climb, 7),
      new SkillBonus(Skill.HandleAnimal, 0),
      new SkillBonus(Skill.Perception, 5),
      new SkillBonus(Skill.Ride, 2),
      new SkillBonus(Skill.SlightOfHand, 9),
      new SkillBonus(Skill.Stealth, 13)
    ],
    [
      new Attack('Dagger', 0, '1d3', -1, false, AttackType.Melee, [DamageType.Piercing, DamageType.Slashing]),
      new Attack('Dart', 2, '1d3', -1, false, AttackType.Ranged, [DamageType.Piercing])
    ],
    [
      SpecialAbility.DamageResistanceColdIron2, SpecialAbility.Darkvision, SpecialAbility.Hatred, SpecialAbility.LightSensitivity,
      SpecialAbility.LowLightVision, SpecialAbility.Scent, SpecialAbility.VerminEmpathy
    ],
    [
      new SpellLikeAbility(1, 'at will', Spell.Prestidigitation),
      new SpellLikeAbility(1, 'once per day', Spell.Doom, 10)
    ]
  )
];
