export class Saves {

  constructor(
    public fortitude: number,
    public reflex: number,
    public will: number) {
  }

  augmentSummoning() {
    this.fortitude += 2;
  }
}
