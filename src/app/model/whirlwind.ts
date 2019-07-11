import { IAttackEffect } from './attackeffect';

export class Whirlwind implements IAttackEffect {
  description = 'Whirlwind';
  summary = '';
  details = '';
  displayDescription = false;

  constructor(
    public rounds: number,
    public difficultyCheck: number,
    public maxHeight: number) {
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }

  static fromObject(whirlwind: Whirlwind): Whirlwind {
    const { rounds, difficultyCheck, maxHeight } = whirlwind;
    return new this(rounds, difficultyCheck, maxHeight);
  }

  getSummary() {
    let summary: string = this.rounds + ' round';
    if (this.rounds > 1) {
      summary += 's';
    }
    summary += ' per day, ';
    summary += '10-' + this.maxHeight + 'ft high, ';
    summary += 'DC ' + this.difficultyCheck;
    return summary;
  }

  getDetails() {
    let details: string = this.description + ': ' + this.getSummary();
    details += '\r\n' + 'Creatures that touch the whirlwind make a Reflex save to avoid being trapped.';
    details += '\r\n' + 'Creatures the same size or smaller make a Relfex save to avoid taking damage.';
    details += '\r\n' + 'A cloud of debris surrounds the creature and causes Concealment.';
    return details;
  }

  applyAugmentSummoning() {
    this.difficultyCheck += 2;
    this.summary = this.getSummary();
    this.details = this.getDetails();
  }
}

export class Vortex extends Whirlwind {
  constructor(
    public rounds: number,
    public difficultyCheck: number,
    public maxHeight: number) {
    super(rounds, difficultyCheck, maxHeight);
    this.description = 'Vortex';
  }

  getDetails() {
    let details: string = this.getSummary();
    details += '\r\n' + 'Creatures that touch the vortex make a Reflex save to avoid being trapped.';
    details += '\r\n' + 'Creatures the same size or smaller make a Relfex save to avoid taking damage.';
    details += '\r\n' + 'A cloud of bubbles surrounds the creature and causes Concealment.';
    return details;
  }
}
