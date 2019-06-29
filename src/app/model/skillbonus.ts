import { Skill } from './skill';
import { Modifier } from './enums';

export class SkillBonus {

  constructor(public skill: Skill, public bonus: number){
  }

  static fromObject(skillBonus: SkillBonus): SkillBonus {
    const { skill, bonus } = skillBonus;
    const newSkillBonus = new this(skill, bonus);
    return newSkillBonus;
  }

  augmentSummoning() {
    if (this.skill.modifier === Modifier.Strength || this.skill.modifier === Modifier.Constitution) {
      this.bonus += 2;
    }
  }
}
