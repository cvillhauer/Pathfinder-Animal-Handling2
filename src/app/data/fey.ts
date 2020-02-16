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
    'https://www.d20pfsrd.com/bestiary/monster-listings/fey/mite/',
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
      SpecialAbility.DamageReductionColdIron2, SpecialAbility.Darkvision, SpecialAbility.Hatred, SpecialAbility.LightSensitivity,
      SpecialAbility.LowLightVision, SpecialAbility.Scent, SpecialAbility.VerminEmpathy
    ],
    [
      new SpellLikeAbility(1, 'at will', Spell.Prestidigitation),
      new SpellLikeAbility(1, 'once per day', Spell.Doom, 10)
    ]
  ),
  new Creature(
    'satyr',
    'Satyr',
    'https://www.d20pfsrd.com/bestiary/monster-listings/fey/satyr/',
    'http://orig01.deviantart.net/4eaa/f/2009/296/a/4/satyr_for_paizo_publishing_by_michaeljaecks.jpg',
    Size.Medium,
    CreatureType.Fey,
    Alignment.trueNeutral,
    new Speeds(40),
    5,
    new AbilityScores(14, 15, 15, 12, 14, 19),
    8,
    44,
    new ArmorClass(18, 13, 15),
    6,
    18,
    4,
    4,
    0,
    new Saves(4, 8, 8),
    [Feat.Dodge, Feat.Mobility, Feat.SkillFocusPerception, Feat.WeaponFinesse],
    [
      new SkillBonus(Skill.Bluff, 15),
      new SkillBonus(Skill.Diplomacy, 15),
      new SkillBonus(Skill.Disguise, 9),
      new SkillBonus(Skill.Intimidate, 9),
      new SkillBonus(Skill.KnowledgeNature, 10),
      new SkillBonus(Skill.Perception, 18),
      new SkillBonus(Skill.Perform, 19, '(wind instruments)'),
      new SkillBonus(Skill.Stealth, 17),
      new SkillBonus(Skill.Survival, 7)
    ],
    [
      new Attack('Dagger', 6, '1d4', 2, false, AttackType.Melee, [DamageType.Piercing, DamageType.Slashing]),
      new Attack('Horns', 1, '1d6', 1, false, AttackType.Melee, [DamageType.Piercing]),
      new Attack('Short Bow', 6, '1d6', 0, false, AttackType.Ranged, [DamageType.Piercing])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.DamageReductionColdIron5],
    [
      new SpellLikeAbility(8, 'at will', Spell.CharmPerson, 15),
      new SpellLikeAbility(8, 'at will', Spell.DancingLights),
      new SpellLikeAbility(8, 'at will', Spell.GhostSound, 14),
      new SpellLikeAbility(8, 'at will', Spell.Sleep, 15),
      new SpellLikeAbility(8, 'at will', Spell.Suggestion, 17),
      new SpellLikeAbility(8, 'once per day', Spell.Fear, 18)
    ]
  )
];
