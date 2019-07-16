import { Skill } from './skill';

export class SkillBonus {

  constructor(public skill: Skill, public bonus: number, public circumstance?: string) {
  }

  static fromObject(skillBonus: SkillBonus): SkillBonus {
    const { skill, bonus, circumstance } = skillBonus;
    return new this(skill, bonus, circumstance);
  }
}
