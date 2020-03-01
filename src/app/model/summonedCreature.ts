import { Creature } from './creature';
import { SpecialAbility } from './specialAbility';
import { InGameModifier } from './inGameModifiers';
import { InGameCondition } from './enums';
import { AbilityScores } from './abilityscores';
import { Speeds } from './speed';
import { ArmorClass } from './armorClass';
import { Saves } from './saves';
import { SkillBonus } from './skillbonus';
import { Attack } from './attack';
import { SpellLikeAbility } from './spellLikeAbility';

export class SummonedCreature extends Creature {
  level: number;
  creatureName: string;
  editName: boolean;
  roundSummoned: number;
  roundsLeft: number;

  static fromObject(creature: Creature): SummonedCreature {
    const { id, description, link, image, size, type, alignment,
      speed, reach, abilityScores,
      hitDice, hitPoints, armorClass, combatManeuverBonus, combatManeuverDefense,
      baseAttackBonus, challengeRating, spellResistance,
      saves, feats, skills, attacks, abilities, spellLikeAbilities } = creature;
    const newCreature = new this(id, description, link, image, size, type, alignment,
      Speeds.fromObject(speed), reach, AbilityScores.fromObject(abilityScores),
      hitDice, hitPoints, ArmorClass.fromObject(armorClass), combatManeuverBonus, combatManeuverDefense,
      baseAttackBonus, challengeRating, spellResistance,
      Saves.fromObject(saves), feats, skills, attacks, abilities);
    newCreature.skills = skills.map(s => SkillBonus.fromObject(s));
    newCreature.attacks = attacks.map(a => Attack.fromObject(a));
    newCreature.spellLikeAbilities = spellLikeAbilities.map(sla => SpellLikeAbility.fromObject(sla));
    return newCreature;
  }

  toggleEditCreatureName() {
    this.editName = !this.editName;
  }

  applyCelestialTemplate() {
    this.description = 'Celestial ' + this.description;
    this.abilities.push(SpecialAbility.SmiteEvil);
    if (this.abilities.indexOf(SpecialAbility.Darkvision) === -1) {
      this.abilities.push(SpecialAbility.Darkvision);
    }
    this.inGameModifiers.push(new InGameModifier(InGameCondition.Smite, false));
    if (this.hitDice < 1) {
      console.log('Error: Unable to calculate creature hit dice.');
    } else if (this.hitDice <= 4) {
      this.abilities.push(SpecialAbility.ResistAcid5);
      this.abilities.push(SpecialAbility.ResistCold5);
      this.abilities.push(SpecialAbility.ResistElectricity5);
    } else if (this.hitDice <= 10) {
      this.challengeRating += 1;
      this.abilities.push(SpecialAbility.ResistAcid10);
      this.abilities.push(SpecialAbility.ResistCold10);
      this.abilities.push(SpecialAbility.ResistElectricity10);
      this.abilities.push(SpecialAbility.DamageReductionEvil5);
    } else if (this.hitDice >= 11) {
      this.challengeRating += 1;
      this.abilities.push(SpecialAbility.ResistAcid15);
      this.abilities.push(SpecialAbility.ResistCold15);
      this.abilities.push(SpecialAbility.ResistElectricity15);
      this.abilities.push(SpecialAbility.DamageReductionEvil10);
    }
    this.spellResistance = Math.floor(this.spellResistance + this.challengeRating + 5);
    this.abilities.sort();
  }

  applyFiendishTemplate() {
    this.description = 'Fiendish ' + this.description;
    this.abilities.push(SpecialAbility.SmiteGood);
    if (this.abilities.indexOf(SpecialAbility.Darkvision) === -1) {
      this.abilities.push(SpecialAbility.Darkvision);
    }
    this.inGameModifiers.push(new InGameModifier(InGameCondition.Smite, false));
    if (this.hitDice < 1) {
      console.log('Error: Unable to calculate creature hit dice.');
    } else if (this.hitDice <= 4) {
      this.abilities.push(SpecialAbility.ResistCold5);
      this.abilities.push(SpecialAbility.ResistFire5);
    } else if (this.hitDice <= 10) {
      this.challengeRating += 1;
      this.abilities.push(SpecialAbility.ResistCold10);
      this.abilities.push(SpecialAbility.ResistFire10);
      this.abilities.push(SpecialAbility.DamageReductionGood5);
    } else if (this.hitDice >= 11) {
      this.challengeRating += 1;
      this.abilities.push(SpecialAbility.ResistCold15);
      this.abilities.push(SpecialAbility.ResistFire15);
      this.abilities.push(SpecialAbility.DamageReductionGood10);
    }
    this.spellResistance = Math.floor(this.spellResistance + this.challengeRating + 5);
    this.abilities.sort();
  }
}
