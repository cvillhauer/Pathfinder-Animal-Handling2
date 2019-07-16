import { Injectable } from '@angular/core';
import { Creature } from '../model/creature';
import { Modifier, Feat, AttackType } from '../model/enums';

@Injectable({
  providedIn: 'root'
})
export class AbilityScoreService {

  constructor() {

  }

  increaseStrength(affectedCreature: Creature, strIncrease: number) {
    const oldStrBonus = affectedCreature.abilityScores.getBonus(Modifier.Strength);
    affectedCreature.abilityScores.strength += strIncrease;
    const newStrBonus = affectedCreature.abilityScores.getBonus(Modifier.Strength);
    const strBonusIncrease = newStrBonus - oldStrBonus;
    affectedCreature.combatManeuverBonus += strBonusIncrease;
    affectedCreature.combatManeuverDefense += strBonusIncrease;
    for (const skillBonus of affectedCreature.skills) {
      if (skillBonus.skill.modifier === Modifier.Strength) {
        skillBonus.bonus += strBonusIncrease;
      }
    }
    const hasWeaponFinesse = affectedCreature.feats.indexOf(Feat.WeaponFinesse) >= 0;
    const dexBonus = affectedCreature.abilityScores.getBonus(Modifier.Dexterity);
    for (const attack of affectedCreature.attacks) {
      if (attack.attackType === AttackType.Melee) {
        if (!attack.touchAttack) {
          attack.damageBonus += strBonusIncrease;
        }
        if (hasWeaponFinesse && dexBonus >= oldStrBonus) { // Attack Bonus is using Dex bonus
          if (newStrBonus > dexBonus) {
            attack.attackBonus = attack.attackBonus - dexBonus + newStrBonus;
          }
        } else if (attack.attackBonus) { // Attack Bonus is using Str bonus already
          attack.attackBonus += strBonusIncrease;
        }
      }
      if (attack.attackEffects) {
        for (const attackEffect of attack.attackEffects) {
          attackEffect.applyAbilityBonusIncreases(strBonusIncrease, 0, 0);
        }
      }
    }
  }

  increaseDexterity(affectedCreature: Creature, dexIncrease: number) {
    const oldDexBonus = affectedCreature.abilityScores.getBonus(Modifier.Dexterity);
    affectedCreature.abilityScores.dexterity += dexIncrease;
    const newDexBonus = affectedCreature.abilityScores.getBonus(Modifier.Dexterity);
    const dexBonusIncrease = newDexBonus - oldDexBonus;
    // TODO: Increase Armor Bonus
    // TODO: Increase Reflex Save
    // TODO: Increase Dex-based skills
    // TODO: Increase Attack Bonus on Ranged attacks
    // TODO: Increase Attack Bonus on Melee Weapon Finesse attacks
    // TODO: Increase CMD
  }

  increaseConstitution(affectedCreature: Creature, conIncrease: number) {
    const oldConBonus = affectedCreature.abilityScores.getBonus(Modifier.Constitution);
    affectedCreature.abilityScores.constitution += conIncrease;
    const newConBonus = affectedCreature.abilityScores.getBonus(Modifier.Constitution);
    const conBonusIncrease = newConBonus - oldConBonus;
    affectedCreature.hitPoints += (conBonusIncrease * affectedCreature.hitDice);
    affectedCreature.saves.fortitude += conBonusIncrease;
    for (const attack of affectedCreature.attacks) {
      if (attack.attackEffects) {
        for (const attackEffect of attack.attackEffects) {
          attackEffect.applyAbilityBonusIncreases(0, 0, conBonusIncrease);
        }
      }
    }
  }

  increaseIntelligence(affectedCreature: Creature, intIncrease: number) {
    const oldIntBonus = affectedCreature.abilityScores.getBonus(Modifier.Intelligence);
    affectedCreature.abilityScores.intelligence += intIncrease;
    const newIntBonus = affectedCreature.abilityScores.getBonus(Modifier.Intelligence);
    const intBonusIncrease = newIntBonus - oldIntBonus;
    // TODO: Increase Int-based skills
    // TODO: Increase Spell-Like abilities?
  }

  increaseWisdom(affectedCreature: Creature, wisIncrease: number) {
    const oldWisBonus = affectedCreature.abilityScores.getBonus(Modifier.Wisdom);
    affectedCreature.abilityScores.wisdom += wisIncrease;
    const newWisBonus = affectedCreature.abilityScores.getBonus(Modifier.Wisdom);
    const wisBonusIncrease = newWisBonus - oldWisBonus;
    // TODO: Increase Will Save
    // TODO: Increase Wis-based skills
    // TODO: Increase Spell-Like abilities?
  }

  increaseCharisma(affectedCreature: Creature, chaIncrease: number) {
    const oldChaBonus = affectedCreature.abilityScores.getBonus(Modifier.Charisma);
    affectedCreature.abilityScores.charisma += chaIncrease;
    const newChaBonus = affectedCreature.abilityScores.getBonus(Modifier.Charisma);
    const chaBonusIncrease = newChaBonus - oldChaBonus;
    // TODO: Increase Cha-based skills
    // TODO: Increase Spell-Like abilities?
  }

}
