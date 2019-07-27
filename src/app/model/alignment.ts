import { Sociology, Morality } from './enums';

export class Alignment {
  static lawfulGood = {
    description: 'Lawful Good',
    sociology: Sociology.Lawful,
    morality: Morality.Good
  };

  static neutralGood = {
    description: 'Neutral Good',
    sociology: Sociology.Neutral,
    morality: Morality.Good
  };

  static chaoticGood = {
    description: 'Chaotic Good',
    sociology: Sociology.Chaotic,
    morality: Morality.Good
  };

  static lawfulNeutral = {
    description: 'Lawful Neutral',
    sociology: Sociology.Lawful,
    morality: Morality.Neutral
  };

  static trueNeutral = {
    description: 'True Neutral',
    sociology: Sociology.Neutral,
    morality: Morality.Neutral
  };

  static chaoticNeutral = {
    description: 'Chaotic Neutral',
    sociology: Sociology.Chaotic,
    morality: Morality.Neutral
  };

  static lawfulEvil = {
    description: 'Lawful Evil',
    sociology: Sociology.Lawful,
    morality: Morality.Evil
  };

  static neutralEvil = {
    description: 'Neutral Evil',
    sociology: Sociology.Neutral,
    morality: Morality.Evil
  };

  static chaoticEvil = {
    description: 'Chaotic Evil',
    sociology: Sociology.Chaotic,
    morality: Morality.Evil
  };

  description: string;
  sociology: Sociology;
  morality: Morality;
}
