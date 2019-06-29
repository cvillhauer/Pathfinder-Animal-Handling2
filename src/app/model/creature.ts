import { Size, CreatureType, Modifier, Morality, Sociology, AttackType, Feat, SpecialAbility } from './enums';
import { AbilityScores } from './abilityscores';
import { SkillBonus } from './skillbonus';
import { Saves } from './saves';
import { Alignment } from './alignment';
import { Attack } from './attack';

export class Creature {
  level: number;
  creatureName: string;
  editName: boolean;
  roundsLeft: number;

  constructor(
    public id: string,
    public description: string,
    public link?: string,
    public image?: string,
    public size?: Size,
    public type?: CreatureType,
    public alignment?: Alignment,
    public speed?: number,
    public reach?: number,
    public abilityScores?: AbilityScores,
    public hitPoints?: number,
    public armorClass?: number,
    public combatManeuverBonus?: number, // BAB + Str + size
    public combatManeuverDefense?: number, // 10 + BAB + Str + Dex + size + dodge
    public saves?: Saves,
    public feats?: Feat[],
    public skills: SkillBonus[] = [],
    public attacks: Attack[] = [],
    public abilities: SpecialAbility[] = []) {
  }

  static fromObject(creature: Creature): Creature {
    const { id, description, link, image, size, type, alignment, speed, reach, abilityScores,
      hitPoints, armorClass, combatManeuverBonus, combatManeuverDefense, saves, feats, skills, attacks, abilities } = creature;
    return new this(id, description, link, image, size, type, alignment, speed, reach, abilityScores,
      hitPoints, armorClass, combatManeuverBonus, combatManeuverDefense, saves, feats, skills, attacks, abilities);
  }

  toggleEditCreatureName() {
    this.editName = !this.editName;
  }

  isTrueNeutral() {
    if (this.alignment.sociology === Sociology.Neutral && this.alignment.morality === Morality.Neutral) {
      return true;
    } else {
      return false;
    }
  }

  applyCelestialTemplate() {
    this.description = 'Celestial ' + this.description;
    // TODO: Actually add in the Celestial abilities
  }

  applyFiendishTemplate() {
    this.description = 'Fiendish ' + this.description;
    // TODO: Actually add in the Fiendish abilities
  }

  augmentSummoning() {
    this.abilityScores.strength += 4;
    this.abilityScores.constitution += 4;
    this.hitPoints += (2 * this.level);
    this.combatManeuverBonus += 2;
    this.combatManeuverDefense += 2;
    this.saves.fortitude += 2;
    for (const skill of this.skills) {
      if (skill.skill.modifier === Modifier.Strength || skill.skill.modifier === Modifier.Constitution) {
        skill.bonus += 2;
      }
    }
    for (const attack of this.attacks) {
      if (attack.modifier === Modifier.Strength) {
        attack.attackBonus += 2;
        // TODO: If creature has a melee attack with Weapon Finesse that uses Dex modifier,
        // it's possible their attack would be more powerful if they used strength.
        // If that happens, the attack should switch to using strength, subtract dex bonus, add str bonus.
      }
      if (attack.attackType === AttackType.Melee) {
        attack.damageBonus += 2;
      }
      if (attack.attackEffects) {
        for (const attackEffect of attack.attackEffects) {
          attackEffect.applyAugmentSummoning();
        }
      }
    }
  }
}
