import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Creature } from '../model/creature';

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
          c.combatManeuverBonus, c.combatManeuverDefense, c.saves, c.skills)));
        return returnCreatures;
      })
    );
  }
}
