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
import { Grab, Trip } from '../model/combatManeuvers';
import { Disease } from '../model/disease';
import { Poison } from '../model/poison';
import { ArmorClass } from '../model/armorClass';
import { SkillBonus } from '../model/skillbonus';

export const creatures: Creature[] = [
  new Creature(
    'direrat',
    'Dire Rat',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Dire%20Rat',
    'https://pathfinderwiki.com/mediawiki/images/1/12/Dire_rat.jpg',
    Size.Small,
    CreatureType.Animal,
    Alignment.trueNeutral,
    40,
    5,
    new AbilityScores(10, 17, 12, 2, 12, 4),
    1,
    5,
    new ArmorClass(14, 14, 11),
    -1,
    12,
    new Saves(3, 5, 1),
    [Feat.SkillFocusPerception],
    [
      new SkillBonus(Skill.climb, 11),
      new SkillBonus(Skill.perception, 4),
      new SkillBonus(Skill.stealth, 11),
      new SkillBonus(Skill.swim, 11)
    ],
    [
      new Attack('Bite', 1, '1d4', 0, false, AttackType.Melee,
        [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing],
        [new Disease('Filth Fever', new SavingThrow(Save.Fortitude, 11), '1d3 days', 'once per day',
          [new AbilityEffect('1d3', Modifier.Dexterity, AbilityEffectType.Damage),
          new AbilityEffect('1d3', Modifier.Constitution, AbilityEffectType.Damage)], 2)]
      )
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent]
  ),
  new Creature(
    'dog',
    'Dog',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Dog',
    'https://images.beastsofwar.com/2014/10/Guard-Dog.png',
    Size.Small,
    CreatureType.Animal,
    Alignment.trueNeutral,
    40,
    5,
    new AbilityScores(13, 13, 15, 2, 12, 6),
    1,
    6,
    new ArmorClass(13, 12, 12),
    0,
    11,
    new Saves(4, 3, 1),
    [Feat.SkillFocusPerception],
    [
      new SkillBonus(Skill.acrobatics, 1),
      new SkillBonus(Skill.perception, 8),
      new SkillBonus(Skill.survival, 1)
    ],
    [
      new Attack('Bite', 2, '1d4', 1, false, AttackType.Melee,
        [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent]
  ),
  new Creature(
    'dolphin',
    'Dolphin',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Dolphin',
    'http://d2ydh70d4b5xgv.cloudfront.net/images/f/5/safari-ltd-monterey-bay-aquarium-sea-life-collection-bottlenose-dolphin-f2383e6f99e01e61cd2371b00314e98c.jpg',
    Size.Medium,
    CreatureType.Animal,
    Alignment.trueNeutral,
    80,
    5,
    new AbilityScores(12, 15, 13, 2, 12, 6),
    2,
    11,
    new ArmorClass(13, 12, 11),
    2,
    14,
    new Saves(4, 5, 1),
    [Feat.WeaponFinesse],
    [
      new SkillBonus(Skill.perception, 9),
      new SkillBonus(Skill.swim, 13)
    ],
    [new Attack('Slam', 3, '1d4', 1, false, AttackType.Melee, [DamageType.Bludgeoning])],
    [SpecialAbility.Blindsight, SpecialAbility.LowLightVision]
  ),
  new Creature(
    'horse',
    'Horse',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Horse',
    'http://darkfienix.com/wp-content/uploads/2018/01/horse1.png',
    Size.Large,
    CreatureType.Animal,
    Alignment.trueNeutral,
    50,
    5,
    new AbilityScores(16, 14, 17, 2, 13, 7),
    2,
    15,
    new ArmorClass(11, 11, 9),
    5,
    17,
    new Saves(6, 5, 1),
    [Feat.Endurance, Feat.Run],
    [
      new SkillBonus(Skill.perception, 6)
    ],
    [
      new Attack('Hoof', -2, '1d4', 1, false, AttackType.Melee, [DamageType.Bludgeoning]),
      new Attack('Hoof', -2, '1d4', 1, false, AttackType.Melee, [DamageType.Bludgeoning])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent]
  ),
  new Creature(
    'octopus',
    'Octopus',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Octopus',
    'https://s-media-cache-ak0.pinimg.com/originals/20/29/38/202938767c7a7befba2974ff753e8ba5.jpg',
    Size.Small,
    CreatureType.Animal,
    Alignment.trueNeutral,
    20,
    5,
    new AbilityScores(12, 17, 14, 2, 13, 3),
    2,
    13,
    new ArmorClass(15, 14, 12),
    1,
    14,
    new Saves(5, 6, 1),
    [Feat.Multiattack, Feat.WeaponFinesse],
    [
      new SkillBonus(Skill.escapeartist, 13),
      new SkillBonus(Skill.stealth, 20),
      new SkillBonus(Skill.swim, 9)
    ],
    [
      new Attack('Bite', 5, '1d3', 1, false, AttackType.Melee,
        [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing],
        [new Poison(new SavingThrow(Save.Fortitude, 13), 'once per round for 6 rounds',
          [new AbilityEffect('1', Modifier.Strength, AbilityEffectType.Damage)], 1)]),
      new Attack('Tentacles', 3, '', 0, false, AttackType.Melee, [DamageType.Bludgeoning],
        [new Grab(5)])
    ],
    [SpecialAbility.InkCloud, SpecialAbility.Jet, SpecialAbility.LowLightVision]
  ),
  new Creature(
    'wolf',
    'Wolf',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Wolf',
    'https://vignette.wikia.nocookie.net/rollplaywestmarches/images/3/35/Worg.jpg/revision/latest?cb=20150210055421',
    Size.Medium,
    CreatureType.Animal,
    Alignment.trueNeutral,
    50,
    5,
    new AbilityScores(13, 15, 15, 2, 12, 6),
    2,
    13,
    new ArmorClass(14, 12, 12),
    2,
    14,
    new Saves(5, 5, 1),
    [Feat.SkillFocusPerception],
    [
      new SkillBonus(Skill.perception, 8),
      new SkillBonus(Skill.stealth, 6),
      new SkillBonus(Skill.survival, 1)
    ],
    [
      new Attack('Bite', 2, '1d6', 1, false, AttackType.Melee,
        [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing],
        [new Trip(2)])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent]
  ),
  new Creature(
    'cheetah',
    'Cheetah',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Cheetah',
    'https://img00.deviantart.net/bf17/i/2012/238/a/0/cheetah_running_by_prodigyduck-d5chize.jpg',
    Size.Medium,
    CreatureType.Animal,
    Alignment.trueNeutral,
    50,
    5,
    new AbilityScores(17, 19, 15, 2, 12, 6),
    3,
    19,
    new ArmorClass(15, 14, 11),
    5,
    19,
    new Saves(5, 7, 2),
    [Feat.ImprovedInititive, Feat.WeaponFinesse],
    [
      new SkillBonus(Skill.acrobatics, 8),
      new SkillBonus(Skill.perception, 5),
      new SkillBonus(Skill.stealth, 8)
    ],
    [
      new Attack('Bite', 6, '1d6', 3, false, AttackType.Melee,
        [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing]),
      new Attack('Claw', 6, '1d3', 3, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing]),
      new Attack('Claw', 6, '1d3', 3, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent, SpecialAbility.Sprint]
  ),
  new Creature(
    'crocodile',
    'Crocodile',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Crocodile',
    'https://78.media.tumblr.com/864cd2f022509d7f566ca9c4fd60cd4a/tumblr_o0n2mahH761uqhshmo1_1280.png',
    Size.Large,
    CreatureType.Animal,
    Alignment.trueNeutral,
    20,
    5,
    new AbilityScores(19, 12, 17, 1, 12, 2),
    3,
    22,
    new ArmorClass(14, 10, 13),
    7,
    18,
    new Saves(6, 4, 2),
    [Feat.SkillFocusPerception, Feat.SkillFocusStealth],
    [
      new SkillBonus(Skill.perception, 8),
      new SkillBonus(Skill.stealth, 5),
      new SkillBonus(Skill.swim, 12)
    ],
    [
      new Attack('Bite', 5, '1d8', 4, false, AttackType.Melee,
        [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing],
        [new Grab(11)]),
      new Attack('Tail Slap', 0, '1d12', 2, false, AttackType.Melee, [DamageType.Bludgeoning])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.Sprint]
  ),
  new Creature(
    'shark',
    'Shark',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Shark',
    'https://www.tribality.com/wp-content/uploads/2015/03/safariltd-tiger-shark-211702-0.jpg',
    Size.Large,
    CreatureType.Animal,
    Alignment.trueNeutral,
    60,
    5,
    new AbilityScores(17, 12, 13, 1, 12, 2),
    4,
    22,
    new ArmorClass(14, 10, 13),
    7,
    18,
    new Saves(7, 5, 2),
    [Feat.GreatFortitude, Feat.ImprovedInititive],
    [
      new SkillBonus(Skill.perception, 8),
      new SkillBonus(Skill.swim, 11)
    ],
    [
      new Attack('Bite', 5, '1d8', 4, false, AttackType.Melee,
        [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing])
    ],
    [SpecialAbility.Blindsense, SpecialAbility.KeenScent]
  )
];
