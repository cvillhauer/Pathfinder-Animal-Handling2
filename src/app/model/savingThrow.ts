import { Save } from './enums';

export class SavingThrow {

  constructor(
    public save: Save,
    public difficultyCheck: number) {
  }

  getSummary() {
    return 'DC ' + this.difficultyCheck + ' ' + this.save + ' save';
  }
}
