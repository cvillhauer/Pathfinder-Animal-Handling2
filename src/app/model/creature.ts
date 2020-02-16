import { Size, CreatureType, Morality, Sociology, InGameCondition } from './enums';
import { AbilityScores } from './abilityscores';
import { SkillBonus } from './skillbonus';
import { Saves } from './saves';
import { Alignment } from './alignment';
import { Feat } from './feat';
import { Attack } from './attack';
import { ArmorClass } from './armorClass';
import { Speeds } from './speed';
import { SpellLikeAbility } from './spellLikeAbility';
import { InGameModifier } from './inGameModifiers';
import { SpecialAbility } from '../model/specialAbility';

export class Creature {
  level: number;
  creatureName: string;
  editName: boolean;
  roundSummoned: number;
  roundsLeft: number;
  inGameModifiers: InGameModifier[] = [new InGameModifier(InGameCondition.Grappled), new InGameModifier(InGameCondition.Charging)];

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
    public baseAttackBonus?: number,
    public challengeRating?: number,
    public spellResistance?: number,
    public saves?: Saves,
    public feats?: Feat[],
    public skills: SkillBonus[] = [],
    public attacks: Attack[] = [],
    public abilities: SpecialAbility[] = [],
    public spellLikeAbilities: SpellLikeAbility[] = []) {
    if (this.feats) {
      this.feats.forEach(f => {
        if (f.description === Feat.PowerAttack.description) {
          this.inGameModifiers.push(new InGameModifier(InGameCondition.PowerAttack));
        } else if (f.description === Feat.Cleave.description) {
          this.inGameModifiers.push(new InGameModifier(InGameCondition.Cleave));
        } else if (f.description === Feat.RapidShot.description) {
          this.inGameModifiers.push(new InGameModifier(InGameCondition.RapidShot));
        }
      });
    }
    if (this.abilities) {
      this.abilities.forEach(a => {
        if (a.description === SpecialAbility.Rage.description) {
          this.inGameModifiers.push(new InGameModifier(InGameCondition.Rage));
        } else if (a.description === SpecialAbility.EarthMastery.description) {
          this.inGameModifiers.push(new InGameModifier(InGameCondition.EarthMastery));
        } else if (a.description === SpecialAbility.MetalMastery.description) {
          this.inGameModifiers.push(new InGameModifier(InGameCondition.MetalMastery));
        } else if (a.description === SpecialAbility.WaterMastery.description) {
          this.inGameModifiers.push(new InGameModifier(InGameCondition.WaterMastery));
        }
      });
    }
    abilities.sort((a, b) => (a.description > b.description) ? 1 : -1);
    this.inGameModifiers.sort((a, b) => (a.description > b.description) ? 1 : -1);
  }

  static fromObject(creature: Creature): Creature {
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

  isTrueNeutral() {
    if (this.alignment.sociology === Sociology.Neutral && this.alignment.morality === Morality.Neutral) {
      return true;
    } else {
      return false;
    }
  }

  getStrengthBonus() {
    return this.abilityScores.calculateBonus(this.abilityScores.strength);
  }

  getDexterityBonus() {
    return this.abilityScores.calculateBonus(this.abilityScores.dexterity);
  }

  getConstitutionBonus() {
    return this.abilityScores.calculateBonus(this.abilityScores.constitution);
  }

  getIntelligenceBonus() {
    return this.abilityScores.calculateBonus(this.abilityScores.intelligence);
  }

  getWisdomBonus() {
    return this.abilityScores.calculateBonus(this.abilityScores.wisdom);
  }

  getCharismaBonus() {
    return this.abilityScores.calculateBonus(this.abilityScores.charisma);
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
