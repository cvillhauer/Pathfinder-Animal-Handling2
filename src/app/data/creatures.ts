import { Size, CreatureType } from '../model/enums';

export const creatures = [
  {
    id: 'direrat',
    description: 'Dire Rat',
    size: Size.Small,
    type: CreatureType.Animal,
    strength: 10,
    dexterity: 17,
    constitution: 12,
    intelligence: 2,
    wisdom: 12,
    charisma: 4
  },
  {
    id: 'dog',
    description: 'Dog',
    size: Size.Small,
    type: CreatureType.Animal,
    strength: 13,
    dexterity: 13,
    constitution: 15,
    intelligence: 2,
    wisdom: 12,
    charisma: 6
  },
  {
    id: 'dolphin',
    description: 'Dolphin',
    size: Size.Medium,
    type: CreatureType.Animal,
    strength: 12,
    dexterity: 15,
    constitution: 13,
    intelligence: 2,
    wisdom: 12,
    charisma: 6
  },
  {
    id: 'horse',
    description: 'Horse',
    size: Size.Large,
    type: CreatureType.Animal,
    strength: 16,
    dexterity: 14,
    constitution: 17,
    intelligence: 2,
    wisdom: 13,
    charisma: 7
  },
  {
    id: 'octopus',
    description: 'Octopus',
    size: Size.Small,
    type: CreatureType.Animal,
    strength: 12,
    dexterity: 17,
    constitution: 14,
    intelligence: 2,
    wisdom: 13,
    charisma: 3
  },
  {
    id: 'wolf',
    description: 'Wolf',
    size: Size.Medium,
    type: CreatureType.Animal,
    strength: 13,
    dexterity: 15,
    constitution: 15,
    intelligence: 2,
    wisdom: 12,
    charisma: 6
  },
  {
    id: 'cheetah',
    description: 'Cheetah',
    size: Size.Medium,
    type: CreatureType.Animal,
    strength: 17,
    dexterity: 19,
    constitution: 15,
    intelligence: 2,
    wisdom: 12,
    charisma: 6
  },
  {
    id: 'crocodile',
    description: 'Crocodile',
    size: Size.Large,
    type: CreatureType.Animal,
    strength: 19,
    dexterity: 12,
    constitution: 17,
    intelligence: 1,
    wisdom: 12,
    charisma: 2
  },
  {
    id: 'shark',
    description: 'Shark',
    size: Size.Large,
    type: CreatureType.Animal,
    strength: 17,
    dexterity: 12,
    constitution: 13,
    intelligence: 1,
    wisdom: 12,
    charisma: 2
  }
];
