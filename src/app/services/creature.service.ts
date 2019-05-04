import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}