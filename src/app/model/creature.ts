import { Size, CreatureType, Modifier, Morality, Sociology, Feat, SpecialAbility } from './enums';
import { AbilityScores } from './abilityscores';
import { SkillBonus } from './skillbonus';
import { Saves } from './saves';
import { Alignment } from './alignment';
import { Attack } from './attack';
import { ArmorClass } from './armorClass';
import { Speeds } from './speed';

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
    public speed?: Speeds,
    public reach?: number,
    public abilityScores?: AbilityScores,
    public hitDice?: number,
    public hitPoints?: number,
    public armorClass?: ArmorClass,
    public combatManeuverBonus?: number, // BAB + Str + size
    public combatManeuverDefense?: number, // 10 + BAB + Str + Dex + size + dodge
    public saves?: Saves,
    public feats?: Feat[],
    public skills: SkillBonus[] = [],
    public attacks: Attack[] = [],
    public abilities: SpecialAbility[] = []) {
      abilities.sort();
  }

  static fromObject(creature: Creature): Creature {
    const { id, description, link, image, size, type, alignment,
      speed, reach, abilityScores,
      hitDice, hitPoints, armorClass, combatManeuverBonus, combatManeuverDefense,
      saves, feats, skills, attacks, abilities } = creature;
    const newCreature = new this(id, description, link, image, size, type, alignment,
      Speeds.fromObject(speed), reach, AbilityScores.fromObject(abilityScores),
      hitDice, hitPoints, ArmorClass.fromObject(armorClass), combatManeuverBonus, combatManeuverDefense,
      Saves.fromObject(saves), feats, skills, attacks, abilities);
    newCreature.skills = skills.map(s => SkillBonus.fromObject(s));
    newCreature.attacks = attacks.map(a => Attack.fromObject(a));
    return newCreature;
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
    this.abilities.push(SpecialAbility.SmiteEvil);
    if (this.hitDice < 1) {
      console.log('Error: Unable to calculate creature hit dice.');
    } else if (this.hitDice <= 4) {
      this.abilities.push(SpecialAbility.ResistAcid5);
      this.abilities.push(SpecialAbility.ResistCold5);
      this.abilities.push(SpecialAbility.ResistElectricity5);
    } else if (this.hitDice <= 10) {
      this.abilities.push(SpecialAbility.ResistAcid10);
      this.abilities.push(SpecialAbility.ResistCold10);
      this.abilities.push(SpecialAbility.ResistElectricity10);
      this.abilities.push(SpecialAbility.DamageResistanceEvil5);
    } else if (this.hitDice >= 11) {
      this.abilities.push(SpecialAbility.ResistAcid15);
      this.abilities.push(SpecialAbility.ResistCold15);
      this.abilities.push(SpecialAbility.ResistElectricity15);
      this.abilities.push(SpecialAbility.DamageResistanceEvil10);
    }
    this.abilities.sort();
  }

  applyFiendishTemplate() {
    this.description = 'Fiendish ' + this.description;
    this.abilities.push(SpecialAbility.SmiteGood);
    if (this.hitDice < 1) {
      console.log('Error: Unable to calculate creature hit dice.');
    } else if (this.hitDice <= 4) {
      this.abilities.push(SpecialAbility.ResistCold5);
      this.abilities.push(SpecialAbility.ResistFire5);
    } else if (this.hitDice <= 10) {
      this.abilities.push(SpecialAbility.ResistCold10);
      this.abilities.push(SpecialAbility.ResistFire10);
      this.abilities.push(SpecialAbility.DamageResistanceGood5);
    } else if (this.hitDice >= 11) {
      this.abilities.push(SpecialAbility.ResistCold15);
      this.abilities.push(SpecialAbility.ResistFire15);
      this.abilities.push(SpecialAbility.DamageResistanceGood10);
    }
    this.abilities.sort();
  }

  augmentSummoning() {
    this.abilityScores.strength += 4;
    this.abilityScores.constitution += 4;
    this.hitPoints += (2 * this.hitDice);
    this.combatManeuverBonus += 2;
    this.combatManeuverDefense += 2;
    this.saves.augmentSummoning();
    for (const skill of this.skills) {
      skill.augmentSummoning();
    }
    const hasWeaponFinesse = this.feats.indexOf(Feat.WeaponFinesse) >= 0;
    const strBonus = this.abilityScores.getBonus(Modifier.Strength);
    const dexBonus = this.abilityScores.getBonus(Modifier.Dexterity);
    for (const attack of this.attacks) {
      attack.augmentSummoning(hasWeaponFinesse, strBonus, dexBonus);
    }
  }
}
