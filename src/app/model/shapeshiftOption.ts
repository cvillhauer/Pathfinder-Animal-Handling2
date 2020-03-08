import { Size, CreatureType } from './enums';

export class ShapeshiftOption {
  static MediumAnimal = {
    description: 'Medium Animal',
    size: Size.Medium,
    creatureType: CreatureType.Animal
  };

  static SmallAnimal = {
    description: 'Small Animal',
    size: Size.Small,
    creatureType: CreatureType.Animal
  };

  static LargeAnimal = {
    description: 'Large Animal',
    size: Size.Large,
    creatureType: CreatureType.Animal
  };

  static TinyAnimal = {
    description: 'Tiny Animal',
    size: Size.Tiny,
    creatureType: CreatureType.Animal
  };

  static HugeAnimal = {
    description: 'Huge Animal',
    size: Size.Huge,
    creatureType: CreatureType.Animal
  };

  static DiminutiveAnimal = {
    description: 'Diminutive Animal',
    size: Size.Diminutive,
    creatureType: CreatureType.Animal
  };

  static GargantuanAnimal = {
    description: 'Gargantuan Animal',
    size: Size.Gargantuan,
    creatureType: CreatureType.Animal
  };

  static FineAnimal = {
    description: 'Fine Animal',
    size: Size.Fine,
    creatureType: CreatureType.Animal
  };

  static ColossalAnimal = {
    description: 'Colossal Animal',
    size: Size.Colossal,
    creatureType: CreatureType.Animal
  };

  static MediumMagicalBeast = {
    description: 'Medium Magical Beast',
    size: Size.Medium,
    creatureType: CreatureType.MagicalBeast
  };

  static SmallMagicalBeast = {
    description: 'Small Magical Beast',
    size: Size.Small,
    creatureType: CreatureType.MagicalBeast
  };

  static LargeMagicalBeast = {
    description: 'Large Magical Beast',
    size: Size.Large,
    creatureType: CreatureType.MagicalBeast
  };

  static TinyMagicalBeast = {
    description: 'Tiny Magical Beast',
    size: Size.Tiny,
    creatureType: CreatureType.MagicalBeast
  };

  static MediumPlant = {
    description: 'Medium Plant',
    size: Size.Medium,
    creatureType: CreatureType.Plant
  };

  static SmallPlant = {
    description: 'Small Plant',
    size: Size.Small,
    creatureType: CreatureType.Plant
  };

  static LargePlant = {
    description: 'Large Plant',
    size: Size.Large,
    creatureType: CreatureType.Plant
  };

  static HugePlant = {
    description: 'Huge Plant',
    size: Size.Huge,
    creatureType: CreatureType.Plant
  };

  static MediumElemental = {
    description: 'Medium Elemental',
    size: Size.Medium,
    creatureType: CreatureType.Elemental
  };

  static SmallElemental = {
    description: 'Small Elemental',
    size: Size.Small,
    creatureType: CreatureType.Elemental
  };

  static LargeElemental = {
    description: 'Large Elementalt',
    size: Size.Large,
    creatureType: CreatureType.Elemental
  };

  static HugeElemental = {
    description: 'Huge Elemental',
    size: Size.Huge,
    creatureType: CreatureType.Elemental
  };

  description: string;
  size: Size;
  creatureType: CreatureType;
}
