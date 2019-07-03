import { Modifier } from './enums';

export class AbilityScores {

  constructor(
    public strength: number,
    public dexterity: number,
    public constitution: number,
    public intelligence: number,
    public wisdom: number,
    public charisma: number) {
  }

  static fromObject(abilityScores: any): AbilityScores {
    const { strength, dexterity, constitution, intelligence, wisdom, charisma } = abilityScores;
    return new this(strength, dexterity, constitution, intelligence, wisdom, charisma);
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
