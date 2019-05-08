import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Creature } from '../model/creature';

@Injectable({
    providedIn: 'root'
})
export class CreatureService {
    private creaturesUrl = "api/creatures";

    constructor(private http: HttpClient) {

    }

    getCreatures(): Observable<Creature[]> {
        return this.http.get<Creature[]>(this.creaturesUrl);
    }

    getCreature(id: string): Observable<Creature> {
        return this.http.get<Creature>(this.creaturesUrl + "/" + id);
    }

    getSpellCreatures(creatureList: string[]): Observable<Creature[]> {
        return this.http.get<Creature[]>(this.creaturesUrl).pipe(
            map(items => {
                return items.filter(c => creatureList.indexOf(c.id) > -1);
            })
        );
    }
}