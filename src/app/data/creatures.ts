import { Size, CreatureType, Skill } from '../model/enums';
import { AbilityScores } from '../model/abilityscores';

export const creatures = [
  {
    id: 'direrat',
    description: 'Dire Rat',
    size: Size.Small,
    type: CreatureType.Animal,
    abilityScores: new AbilityScores(10, 17, 12, 2, 12, 4),
    hitPoints: 5,
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
    skills: [
      { skill: Skill.perception, bonus: 8 },
      { skill: Skill.swim, bonus: 11 }
    ]
  }
];
