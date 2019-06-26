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
        filteredCreatures.map(c => {
          const nc = Creature.fromObject(c);
          nc.attacks = this.buildAttacks(c.attacks);
          returnCreatures.push(nc);
        });
        // TODO: Every time I add anything to creature, I need to add it here too
        return returnCreatures;
      })
    );
  }

  private buildAttacks(creatureAttacks: Attack[]): Attack[] {
    const attacks: Attack[] = [];
    creatureAttacks.map(a => {
      const na = Attack.fromObject(a);
      na.attackEffects = this.buildAttackEffects(a.attackEffects);
      attacks.push(na);
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
          const disease = Disease.fromObject(ae); // ae as Disease;
          disease.effects = disease.effects.map(e => AbilityEffect.fromObject(e));
          effects.push(disease);
          break;
        case 'Grab':
          const grab = ae as Grab;
          const newGrab = new Grab(grab.combatManeuverBonus);
          effects.push(newGrab);
          break;
        case 'Poison':
          const poison = Poison.fromObject(ae); // ae as Disease;
          poison.effects = poison.effects.map(e => AbilityEffect.fromObject(e));
          effects.push(poison);
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
