import { Size, CreatureType } from '../model/enums';
import { AbilityScores } from '../model/abilityscores';

export const creatures = [
  {
    id: 'direrat',
    description: 'Dire Rat',
    size: Size.Small,
    type: CreatureType.Animal,
    abilityScores: new AbilityScores(10, 17, 12, 2, 12, 4)
  },
  {
    id: 'dog',
    description: 'Dog',
    size: Size.Small,
    type: CreatureType.Animal,
    abilityScores: new AbilityScores(13, 13, 15, 2, 12, 6)
  },
  {
    id: 'dolphin',
    description: 'Dolphin',
    size: Size.Medium,
    type: CreatureType.Animal,
    abilityScores: new AbilityScores(12, 15, 13, 2, 12, 6)
  },
  {
    id: 'horse',
    description: 'Horse',
    size: Size.Large,
    type: CreatureType.Animal,
    abilityScores: new AbilityScores(16, 14, 17, 2, 13, 7)
  },
  {
    id: 'octopus',
    description: 'Octopus',
    size: Size.Small,
    type: CreatureType.Animal,
    abilityScores: new AbilityScores(12, 17, 14, 2, 13, 3)
  },
  {
    id: 'wolf',
    description: 'Wolf',
    size: Size.Medium,
    type: CreatureType.Animal,
    abilityScores: new AbilityScores(13, 15, 15, 2, 12, 6)
  },
  {
    id: 'cheetah',
    description: 'Cheetah',
    size: Size.Medium,
    type: CreatureType.Animal,
    abilityScores: new AbilityScores(17, 19, 15, 2, 12, 6)
  },
  {
    id: 'crocodile',
    description: 'Crocodile',
    size: Size.Large,
    type: CreatureType.Animal,
    abilityScores: new AbilityScores(19, 12, 17, 1, 12, 2)
  },
  {
    id: 'shark',
    description: 'Shark',
    size: Size.Large,
    type: CreatureType.Animal,
    abilityScores: new AbilityScores(17, 12, 13, 1, 12, 2)
  }
];
