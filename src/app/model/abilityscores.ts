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
}
