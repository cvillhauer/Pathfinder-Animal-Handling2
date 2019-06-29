import { Modifier } from './enums';

export class AbilityScores {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;

  constructor(str: number, dex: number, con: number, int: number, wis: number, cha: number) {
    this.strength = str;
    this.dexterity = dex;
    this.constitution = con;
    this.intelligence = int;
    this.wisdom = wis;
    this.charisma = cha;
  }

  getBonus(ability: Modifier) {
    switch (ability) {
      case Modifier.Strength:
        return this.calculateBonus(this.strength);
      case Modifier.Dexterity:
        return this.calculateBonus(this.dexterity);
      case Modifier.Constitution:
        return this.calculateBonus(this.constitution);
      case Modifier.Intelligence:
        return this.calculateBonus(this.intelligence);
      case Modifier.Wisdom:
        return this.calculateBonus(this.wisdom);
      case Modifier.Charisma:
        return this.calculateBonus(this.charisma);
      default:
        return 0;
    }
  }

  calculateBonus(abilityScore: number) {
    let bonus = 0;
    bonus = (abilityScore - 10) / 2;
    bonus = Math.floor(bonus);
    return bonus;
  }

}
