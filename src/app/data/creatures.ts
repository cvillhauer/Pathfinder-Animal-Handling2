import { Size, CreatureType, Skill, Alignment, Modifier, DamageType, AttackType, AbilityEffectType, Save, Feat } from '../model/enums';
import { AbilityScores } from '../model/abilityscores';
import { Saves } from '../model/saves';
import { Creature } from '../model/creature';
import { Attack } from '../model/attack';
import { SavingThrow } from '../model/savingThrow';
import { AbilityEffect } from '../model/abilityEffect';
import { Grab, Trip } from '../model/combatManeuvers';
import { Disease } from '../model/disease';
import { Poison } from '../model/poison';

export const creatures: Creature[] = [
  new Creature(
    'direrat',
    'Dire Rat',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Dire%20Rat',
    'https://pathfinderwiki.com/mediawiki/images/1/12/Dire_rat.jpg',
    Size.Small,
    CreatureType.Animal,
    // Alignment.trueNeutral,
    Alignment.neutralEvil, // TODO: Rats aren't REALLY evil, I just need to test getSpellCreatures with something that isn't True Neutral
    40,
    new AbilityScores(10, 17, 12, 2, 12, 4),
    5,
    14,
    -1,
    12,
    new Saves(3, 5, 1),
    [Feat.SkillFocusPerception],
    [
      { skill: Skill.climb, bonus: 11 },
      { skill: Skill.perception, bonus: 4 },
      { skill: Skill.stealth, bonus: 11 },
      { skill: Skill.swim, bonus: 11 }
    ],
    [
      new Attack('Bite', 1, '1d4', 0, false, AttackType.Melee, Modifier.Strength,
        [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing],
        [new Disease('Filth Fever', new SavingThrow(Save.Fortitude, 11), '1d3 days', 'once per day',
          [new AbilityEffect('1d3', Modifier.Dexterity, AbilityEffectType.Damage),
          new AbilityEffect('1d3', Modifier.Constitution, AbilityEffectType.Damage)], 2)]
      )
    ]
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
    new AbilityScores(13, 13, 15, 2, 12, 6),
    6,
    13,
    0,
    11,
    new Saves(4, 3, 1),
    [Feat.SkillFocusPerception],
    [
      { skill: Skill.acrobatics, bonus: 1 },
      { skill: Skill.perception, bonus: 8 },
      { skill: Skill.survival, bonus: 1 }
    ],
    [
      new Attack('Bite', 2, '1d4', 1, false, AttackType.Melee, Modifier.Strength,
        [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing])
    ]
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
    new AbilityScores(12, 15, 13, 2, 12, 6),
    11,
    13,
    2,
    14,
    new Saves(4, 5, 1),
    [Feat.WeaponFinesse],
    [
      { skill: Skill.perception, bonus: 9 },
      { skill: Skill.swim, bonus: 13 }
    ],
    [new Attack('Slam', 3, '1d4', 1, false, AttackType.Melee, Modifier.Dexterity, [DamageType.Bludgeoning])]
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
    new AbilityScores(16, 14, 17, 2, 13, 7),
    15,
    11,
    5,
    17,
    new Saves(6, 5, 1),
    [Feat.Endurance, Feat.Run],
    [
      { skill: Skill.perception, bonus: 6 }
    ],
    [
      new Attack('Hoof', -2, '1d4', 1, false, AttackType.Melee, Modifier.Strength, [DamageType.Bludgeoning]),
      new Attack('Hoof', -2, '1d4', 1, false, AttackType.Melee, Modifier.Strength, [DamageType.Bludgeoning])
    ]
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
    new AbilityScores(12, 17, 14, 2, 13, 3),
    13,
    15,
    1,
    14,
    new Saves(5, 6, 1),
    [Feat.Multiattack, Feat.WeaponFinesse],
    [
      { skill: Skill.climb, bonus: 13 },
      { skill: Skill.stealth, bonus: 20 },
      { skill: Skill.swim, bonus: 9 }
    ],
    [
      new Attack('Bite', 5, '1d3', 1, false, AttackType.Melee, Modifier.Dexterity,
        [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing],
        [new Poison(new SavingThrow(Save.Fortitude, 13), 'once per round for 6 rounds',
          [new AbilityEffect('1', Modifier.Strength, AbilityEffectType.Damage)], 1)]),
      new Attack('Tentacles', 3, '', 0, false, AttackType.Melee, Modifier.Dexterity, [DamageType.Bludgeoning],
        [new Grab(5)])
    ]
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
    new AbilityScores(13, 15, 15, 2, 12, 6),
    13,
    14,
    2,
    14,
    new Saves(5, 5, 1),
    [Feat.SkillFocusPerception],
    [
      { skill: Skill.perception, bonus: 8 },
      { skill: Skill.stealth, bonus: 6 },
      { skill: Skill.survival, bonus: 1 }
    ],
    [
      new Attack('Bite', 2, '1d6', 1, false, AttackType.Melee, Modifier.Strength,
        [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing],
        [new Trip(2)])
    ]
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
    new AbilityScores(17, 19, 15, 2, 12, 6),
    19,
    15,
    5,
    19,
    new Saves(5, 7, 2),
    [Feat.ImprovedInititive, Feat.WeaponFinesse],
    [
      { skill: Skill.acrobatics, bonus: 8 },
      { skill: Skill.perception, bonus: 5 },
      { skill: Skill.stealth, bonus: 8 }
    ],
    [
      new Attack('Bite', 6, '1d6', 3, false, AttackType.Melee, Modifier.Dexterity,
        [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing]),
      new Attack('Claw', 6, '1d3', 3, false, AttackType.Melee, Modifier.Dexterity, [DamageType.Bludgeoning, DamageType.Slashing]),
      new Attack('Claw', 6, '1d3', 3, false, AttackType.Melee, Modifier.Dexterity, [DamageType.Bludgeoning, DamageType.Slashing])
    ]
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
    new AbilityScores(19, 12, 17, 1, 12, 2),
    22,
    14,
    7,
    18,
    new Saves(6, 4, 2),
    [Feat.SkillFocusPerception, Feat.SkillFocusStealth],
    [
      { skill: Skill.perception, bonus: 8 },
      { skill: Skill.stealth, bonus: 5 },
      { skill: Skill.swim, bonus: 12 }
    ],
    [
      new Attack('Bite', 5, '1d8', 4, false, AttackType.Melee, Modifier.Strength,
        [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing],
        [new Grab(11)]),
      new Attack('Tail Slap', 0, '1d12', 2, false, AttackType.Melee, Modifier.Strength, [DamageType.Bludgeoning])
    ],
    ['Death Roll'] // TODO: Should DeathRoll be a CombatManeuver?
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
    new AbilityScores(17, 12, 13, 1, 12, 2),
    22,
    14,
    7,
    18,
    new Saves(7, 5, 2),
    [Feat.GreatFortitude, Feat.ImprovedInititive],
    [
      { skill: Skill.perception, bonus: 8 },
      { skill: Skill.swim, bonus: 11 }
    ],
    [
      new Attack('Bite', 5, '1d8', 4, false, AttackType.Melee, Modifier.Strength,
        [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing])
    ]
  )
];
