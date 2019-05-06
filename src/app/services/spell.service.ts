import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Spell } from '../model/spell';

@Injectable({
    providedIn: 'root'
})
export class SpellService {
    private spellsUrl = "api/spells";

    constructor(private http: HttpClient) {

    }

    getSpells(): Observable<Spell[]> {
        return this.http.get<Spell[]>(this.spellsUrl);
    }

    getSpellsByGroup(group: string): Observable<Spell[]> {
        return this.http.get<Spell[]>(this.spellsUrl + "/?group=" + group);
    }

    getSpellsByGroupAndLevel(group: string, level: number): Observable<Spell[]> {
        return this.http.get<Spell[]>(this.spellsUrl + "/?group=" + group + "&level=" + level);
    }
}