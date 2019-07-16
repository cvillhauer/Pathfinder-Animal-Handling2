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
    console.log('Increasing creature\'s strength bonus from ' + oldStrBonus + ' to ' + newStrBonus);
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
        // TODO: This method assumes that weaponFinesse is always applied before it's called
        // If this method is called again, this won't work right
        if (hasWeaponFinesse) {
          if (newStrBonus > dexBonus) {
            attack.attackBonus = attack.attackBonus - dexBonus + newStrBonus;
          }
        } else if (attack.attackBonus) {
          attack.attackBonus += strBonusIncrease;
        }
      }
      if (attack.attackEffects) {
        for (const attackEffect of attack.attackEffects) {
          // TODO: Move this logic to this service
          attackEffect.applyAugmentSummoning();
        }
      }
    }
  }

  increaseConstitution(affectedCreature: Creature, conIncrease: number){
    const oldConBonus = affectedCreature.abilityScores.getBonus(Modifier.Constitution);
    affectedCreature.abilityScores.constitution += conIncrease;
    const newConBonus = affectedCreature.abilityScores.getBonus(Modifier.Constitution);
    console.log('Increasing creature\'s constitution bonus from ' + oldConBonus + ' to ' + newConBonus);
    const conBonusIncrease = newConBonus - oldConBonus;
    affectedCreature.hitPoints += (conBonusIncrease * affectedCreature.hitDice);
    affectedCreature.saves.fortitude += conBonusIncrease;
  }

}
