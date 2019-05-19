import { Size, CreatureType, Skill } from '../model/enums';
import { AbilityScores } from '../model/abilityscores';
import { Saves } from '../model/saves';

export const creatures = [
  {
    id: 'direrat',
    description: 'Dire Rat',
    size: Size.Small,
    type: CreatureType.Animal,
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
    size: Size.Small,
    type: CreatureType.Animal,
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
    size: Size.Medium,
    type: CreatureType.Animal,
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
    size: Size.Large,
    type: CreatureType.Animal,
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
    size: Size.Small,
    type: CreatureType.Animal,
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
    size: Size.Medium,
    type: CreatureType.Animal,
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
    size: Size.Medium,
    type: CreatureType.Animal,
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
    size: Size.Large,
    type: CreatureType.Animal,
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
    size: Size.Large,
    type: CreatureType.Animal,
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
