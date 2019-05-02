import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Creature } from '../model/creature';
import { Observable } from 'rxjs';

@Injectable( {
    providedIn: 'root'
})
export class CreatureService {
    private creaturesUrl = "assets/creatures.json";

    constructor(private http: HttpClient){

    }

    getCreatures(): Observable<Creature[]> {
        return this.http.get<Creature[]>(this.creaturesUrl);
    }
}