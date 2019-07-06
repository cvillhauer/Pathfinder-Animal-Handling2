import { Skill } from './skill';
import { Modifier } from './enums';

export class SkillBonus {

  constructor(public skill: Skill, public bonus: number, public circumstance?: string) {
  }

  static fromObject(skillBonus: SkillBonus): SkillBonus {
    const { skill, bonus, circumstance } = skillBonus;
    return new this(skill, bonus, circumstance);
  }

  augmentSummoning() {
    if (this.skill.modifier === Modifier.Strength || this.skill.modifier === Modifier.Constitution) {
      this.bonus += 2;
    }
  }
}
