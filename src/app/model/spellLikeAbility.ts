import { Spell } from './enums';

export class SpellLikeAbility {
  summary = '';
  details = '';

  constructor(
    public casterLevel: number,
    public timesPerDay: string,
    public spellName: Spell,
    public difficultyCheck?: number) {
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  static fromObject(spellLikeAbility: SpellLikeAbility) {
    const { casterLevel, timesPerDay, spellName, difficultyCheck } = spellLikeAbility;
    return new this(casterLevel, timesPerDay, spellName, difficultyCheck);
  }

  getSummary() {
    const summary: string = this.spellName + ': ';
    return summary;
  }

  getDetails() {
    let details: string = this.timesPerDay + ', CL ' + this.casterLevel;
    if (this.difficultyCheck) {
      details += ', DC ' + this.difficultyCheck;
    }
    return details;
  }

}
