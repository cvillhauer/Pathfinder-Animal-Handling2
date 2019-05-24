import { Size, CreatureType, Skill } from '../model/enums';
import { AbilityScores } from '../model/abilityscores';
import { Saves } from '../model/saves';

export const creatures = [
  {
    id: 'direrat',
    description: 'Dire Rat',
    link: 'https://aonprd.com/MonsterDisplay.aspx?ItemName=Dire%20Rat',
    image: 'https://pathfinderwiki.com/mediawiki/images/1/12/Dire_rat.jpg',
    size: Size.Small,
    type: CreatureType.Animal,
    speed: 40,
    abilityScores: new AbilityScores(10, 17, 12, 2, 12, 4),
    hitPoints: 5,
    armorClass: 14,
    combatManeuverBonus: -1,
    combatManeuverDefense: 12,
    saves: new Saves(3, 5, 1),
    skills: [
      { skill: Skill.climb, bonus: 11 },
      { skill: Skill.perception, bonus: 4 },
      { skill: Skill.stealth, bonus: 11 },
      { skill: Skill.swim, bonus: 11 }
    ]
  },
  {
    id: 'dog',
    description: 'Dog',
    link: 'https://aonprd.com/MonsterDisplay.aspx?ItemName=Dog',
    image: 'https://images.beastsofwar.com/2014/10/Guard-Dog.png',
    size: Size.Small,
    type: CreatureType.Animal,
    speed: 40,
    abilityScores: new AbilityScores(13, 13, 15, 2, 12, 6),
    hitPoints: 6,
    armorClass: 13,
    combatManeuverBonus: 0,
    combatManeuverDefense: 11,
    saves: new Saves(4, 3, 1),
    skills: [
      { skill: Skill.acrobatics, bonus: 1 },
      { skill: Skill.perception, bonus: 8 },
      { skill: Skill.survival, bonus: 1 }
    ]
  },
  {
    id: 'dolphin',
    description: 'Dolphin',
    link: 'https://aonprd.com/MonsterDisplay.aspx?ItemName=Dolphin',
    image: 'http://d2ydh70d4b5xgv.cloudfront.net/images/f/5/safari-ltd-monterey-bay-aquarium-sea-life-collection-bottlenose-dolphin-f2383e6f99e01e61cd2371b00314e98c.jpg',
    size: Size.Medium,
    type: CreatureType.Animal,
    speed: 80,
    abilityScores: new AbilityScores(12, 15, 13, 2, 12, 6),
    hitPoints: 11,
    armorClass: 13,
    combatManeuverBonus: 2,
    combatManeuverDefense: 14,
    saves: new Saves(4, 5, 1),
    skills: [
      { skill: Skill.perception, bonus: 9 },
      { skill: Skill.swim, bonus: 13 }
    ]
  },
  {
    id: 'horse',
    description: 'Horse',
    link: 'https://aonprd.com/MonsterDisplay.aspx?ItemName=Horse',
    image: 'http://darkfienix.com/wp-content/uploads/2018/01/horse1.png',
    size: Size.Large,
    type: CreatureType.Animal,
    speed: 50,
    abilityScores: new AbilityScores(16, 14, 17, 2, 13, 7),
    hitPoints: 15,
    armorClass: 11,
    combatManeuverBonus: 5,
    combatManeuverDefense: 17,
    saves: new Saves(6, 5, 1),
    skills: [
      { skill: Skill.perception, bonus: 6 }
    ]
  },
  {
    id: 'octopus',
    description: 'Octopus',
    link: 'https://aonprd.com/MonsterDisplay.aspx?ItemName=Octopus',
    image: 'https://s-media-cache-ak0.pinimg.com/originals/20/29/38/202938767c7a7befba2974ff753e8ba5.jpg',
    size: Size.Small,
    type: CreatureType.Animal,
    speed: 20,
    abilityScores: new AbilityScores(12, 17, 14, 2, 13, 3),
    hitPoints: 13,
    armorClass: 15,
    combatManeuverBonus: 1,
    combatManeuverDefense: 14,
    saves: new Saves(5, 6, 1),
    skills: [
      { skill: Skill.climb, bonus: 13 },
      { skill: Skill.stealth, bonus: 20 },
      { skill: Skill.swim, bonus: 9 }
    ]
  },
  {
    id: 'wolf',
    description: 'Wolf',
    link: 'https://aonprd.com/MonsterDisplay.aspx?ItemName=Wolf',
    image: 'https://vignette.wikia.nocookie.net/rollplaywestmarches/images/3/35/Worg.jpg/revision/latest?cb=20150210055421',
    size: Size.Medium,
    type: CreatureType.Animal,
    speed: 50,
    abilityScores: new AbilityScores(13, 15, 15, 2, 12, 6),
    hitPoints: 13,
    armorClass: 14,
    combatManeuverBonus: 2,
    combatManeuverDefense: 14,
    saves: new Saves(5, 5, 1),
    skills: [
      { skill: Skill.perception, bonus: 8 },
      { skill: Skill.stealth, bonus: 6 },
      { skill: Skill.survival, bonus: 1 }
    ]
  },
  {
    id: 'cheetah',
    description: 'Cheetah',
    link: 'https://aonprd.com/MonsterDisplay.aspx?ItemName=Cheetah',
    image: 'https://img00.deviantart.net/bf17/i/2012/238/a/0/cheetah_running_by_prodigyduck-d5chize.jpg',
    size: Size.Medium,
    type: CreatureType.Animal,
    speed: 50,
    abilityScores: new AbilityScores(17, 19, 15, 2, 12, 6),
    hitPoints: 19,
    armorClass: 15,
    combatManeuverBonus: 5,
    combatManeuverDefense: 19,
    saves: new Saves(5, 7, 2),
    skills: [
      { skill: Skill.acrobatics, bonus: 8 },
      { skill: Skill.perception, bonus: 5 },
      { skill: Skill.stealth, bonus: 8 }
    ]
  },
  {
    id: 'crocodile',
    description: 'Crocodile',
    link: 'https://aonprd.com/MonsterDisplay.aspx?ItemName=Crocodile',
    image: 'https://78.media.tumblr.com/864cd2f022509d7f566ca9c4fd60cd4a/tumblr_o0n2mahH761uqhshmo1_1280.png',
    size: Size.Large,
    type: CreatureType.Animal,
    speed: 20,
    abilityScores: new AbilityScores(19, 12, 17, 1, 12, 2),
    hitPoints: 22,
    armorClass: 14,
    combatManeuverBonus: 7,
    combatManeuverDefense: 18,
    saves: new Saves(6, 4, 2),
    skills: [
      { skill: Skill.perception, bonus: 8 },
      { skill: Skill.stealth, bonus: 5 },
      { skill: Skill.swim, bonus: 12 }
    ]
  },
  {
    id: 'shark',
    description: 'Shark',
    link: 'https://aonprd.com/MonsterDisplay.aspx?ItemName=Shark',
    image: 'https://www.tribality.com/wp-content/uploads/2015/03/safariltd-tiger-shark-211702-0.jpg',
    size: Size.Large,
    type: CreatureType.Animal,
    speed: 60,
    abilityScores: new AbilityScores(17, 12, 13, 1, 12, 2),
    hitPoints: 22,
    armorClass: 14,
    combatManeuverBonus: 7,
    combatManeuverDefense: 18,
    saves: new Saves(7, 5, 2),
    skills: [
      { skill: Skill.perception, bonus: 8 },
      { skill: Skill.swim, bonus: 11 }
    ]
  }
];
