export class ArmorClass {

  constructor(
    public armorClass: number,
    public touchAC: number,
    public flatAC: number) {
  }

  static fromObject(AC: ArmorClass): ArmorClass {
    const { armorClass, touchAC, flatAC } = AC;
    return new this(armorClass, touchAC, flatAC);
  }

  applyArmorModifier(modifier: number) {
    this.armorClass += modifier;
    this.touchAC += modifier;
    this.flatAC += modifier;
  }
}
