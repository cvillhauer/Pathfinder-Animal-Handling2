import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Creature } from '../model/creature';
import { Attack } from '../model/attack';
import { IAttackEffect } from '../model/attackeffect';
import { Poison } from '../model/poison';
import { Trip, Grab } from '../model/combatManeuvers';
import { Disease } from '../model/disease';
import { SavingThrow } from '../model/savingThrow';
import { Save, Modifier, AbilityEffectType } from '../model/enums';
import { AbilityEffect } from '../model/abilityEffect';

@Injectable({
  providedIn: 'root'
})
export class CreatureService {
  private creaturesUrl = 'api/creatures';

  constructor(private http: HttpClient) {

  }

  getCreatures(): Observable<Creature[]> {
    return this.http.get<Creature[]>(this.creaturesUrl);
  }

  getCreature(id: string): Observable<Creature> {
    return this.http.get<Creature>(this.creaturesUrl + '/' + id);
  }

  getCreaturesFromCreatureList(creatureList: string[]): Observable<Creature[]> {
    return this.http.get<Creature[]>(this.creaturesUrl).pipe(
      map(creatures => {
        const filteredCreatures = creatures.filter(creature => creatureList.indexOf(creature.id) > -1);
        const returnCreatures: Creature[] = [];
        filteredCreatures.map(c => returnCreatures.push(new Creature(c.id, c.description, c.link, c.image,
          c.size, c.type, c.alignment, c.speed, c.abilityScores, c.hitPoints, c.armorClass,
          c.combatManeuverBonus, c.combatManeuverDefense, c.saves, c.skills,
          this.buildAttacks(c.attacks), c.abilities)));
        // TODO: Every time I add anything to creature, I need to add it here too
        return returnCreatures;
      })
    );
  }

  private buildAttacks(creatureAttacks: Attack[]): Attack[] {
    const attacks: Attack[] = [];
    creatureAttacks.map(a => {
      attacks.push(new Attack(a.description, a.attackBonus, a.damageDice, a.damageBonus,
        a.touchAttack, a.attackType, a.modifier, a.damageTypes,
        this.buildAttackEffects(a.attackEffects)));
    });
    return attacks;
  }

  private buildAttackEffects(attackEffects: IAttackEffect[]): IAttackEffect[] {
    const effects: IAttackEffect[] = [];
    attackEffects.map(ae => {
      switch (ae.description) {
        // TODO: This is literally the stupidest code I've ever seen
        // Richard please do something!! HELP ME
        case 'Disease':
          const disease = ae as Disease;
          const newDisease = new Disease(disease.diseaseName,
            new SavingThrow(disease.savingThrow.save, disease.savingThrow.difficultyCheck),
            disease.onset, disease.frequency, [], disease.cureSaves);
          for (const effect of disease.effects) {
            const diseaseAbilityEffect = new AbilityEffect(effect.dice, effect.ability, effect.type);
            newDisease.effects.push(diseaseAbilityEffect);
          }
          effects.push(newDisease);
          break;
        case 'Grab':
          const grab = ae as Grab;
          const newGrab = new Grab(grab.combatManeuverBonus);
          effects.push(newGrab);
          break;
        case 'Poison':
          const poison = ae as Poison;
          const newPoison = new Poison(new SavingThrow(poison.savingThrow.save, poison.savingThrow.difficultyCheck),
            poison.frequency, [], poison.cureSaves);
          for (const effect of poison.effects) {
            const poisonAbilityEffect = new AbilityEffect(effect.dice, effect.ability, effect.type);
            newPoison.effects.push(poisonAbilityEffect);
          }
          effects.push(newPoison);
          break;
        case 'Trip':
          const trip = ae as Trip;
          const newTrip = new Trip(trip.combatManeuverBonus);
          effects.push(newTrip);
          break;
        default:
          console.log('Unknown attack effect');
          break;
      }
    });
    return effects;
  }
}
