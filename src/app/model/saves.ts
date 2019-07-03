export class Saves {

  constructor(
    public fortitude: number,
    public reflex: number,
    public will: number) {
  }
  static fromObject(saves: Saves) {
    const { fortitude, reflex, will } = saves;
    return new this(fortitude, reflex, will);
  }
  augmentSummoning() {
    this.fortitude += 2;
  }
}
