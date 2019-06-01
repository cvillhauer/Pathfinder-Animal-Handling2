import { Size, CreatureType, Skill, Alignment } from '../model/enums';
import { AbilityScores } from '../model/abilityscores';
import { Saves } from '../model/saves';
import { Creature } from '../model/creature';

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
    new AbilityScores(10, 17, 12, 2, 12, 4),
    5,
    14,
    -1,
    12,
    new Saves(3, 5, 1),
    [
      { skill: Skill.climb, bonus: 11 },
      { skill: Skill.perception, bonus: 4 },
      { skill: Skill.stealth, bonus: 11 },
      { skill: Skill.swim, bonus: 11 }
    ]),
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
    [
      { skill: Skill.acrobatics, bonus: 1 },
      { skill: Skill.perception, bonus: 8 },
      { skill: Skill.survival, bonus: 1 }
    ]),
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
    [
      { skill: Skill.perception, bonus: 9 },
      { skill: Skill.swim, bonus: 13 }
    ]),
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
    [
      { skill: Skill.perception, bonus: 6 }
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
    [
      { skill: Skill.climb, bonus: 13 },
      { skill: Skill.stealth, bonus: 20 },
      { skill: Skill.swim, bonus: 9 }
    ]),
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
    [
      { skill: Skill.perception, bonus: 8 },
      { skill: Skill.stealth, bonus: 6 },
      { skill: Skill.survival, bonus: 1 }
    ]),
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
    [
      { skill: Skill.acrobatics, bonus: 8 },
      { skill: Skill.perception, bonus: 5 },
      { skill: Skill.stealth, bonus: 8 }
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
    [
      { skill: Skill.perception, bonus: 8 },
      { skill: Skill.stealth, bonus: 5 },
      { skill: Skill.swim, bonus: 12 }
    ]
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
    [
      { skill: Skill.perception, bonus: 8 },
      { skill: Skill.swim, bonus: 11 }
    ])
];
