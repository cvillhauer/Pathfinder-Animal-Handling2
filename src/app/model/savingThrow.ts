import { Save } from './enums';

export class SavingThrow {

  constructor(
    public save: Save,
    public difficultyCheck: number) {
  }

  static fromObject(savingThrow: SavingThrow): SavingThrow {
    const { save, difficultyCheck } = savingThrow;
    return new this(save, difficultyCheck);
  }

  getSummary() {
    if (this.save === Save.None) {
      return 'no saving throw';
    } else {
      return 'DC ' + this.difficultyCheck + ' ' + this.save + ' save';
    }
  }
}
