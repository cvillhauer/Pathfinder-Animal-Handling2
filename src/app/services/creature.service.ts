import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Creature } from '../model/creature';
import { Attack } from '../model/attack';
import { IAttackEffect } from '../model/attackeffect';
import { SkillBonus } from '../model/skillbonus';

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
          const newCreature = Creature.fromObject(c);
          returnCreatures.push(newCreature);
        });
        return returnCreatures;
      })
    );
  }
}
