import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Spell, SummonSpell } from '../model/spell';

@Injectable({
    providedIn: 'root'
})
export class SpellService {
    private spellsUrl = 'api/spells';

    constructor(private http: HttpClient) {

    }

    getSpells(): Observable<Spell[]> {
        return this.http.get<Spell[]>(this.spellsUrl);
    }

    getSpellsByGroup(group: string): Observable<Spell[]> {
        return this.http.get<Spell[]>(this.spellsUrl + '/?group=' + group);
    }

    getSpellsByCharacterGroupAndLevel(group: string, level: number): Observable<Spell[]> {
        return this.http.get<Spell[]>((this.spellsUrl) + '/?group=' + group).pipe(
            map(spells => {
                return spells.filter(spell => spell.level <= level);
            })
        );
    }

    getSummonSpellCreatureListBySpellId(spellId: string): Observable<string[]> {
        return this.http.get<SummonSpell>((this.spellsUrl) + '/' + spellId).pipe(
            map(spell => {
                return spell.creatureList.sort();
            })
        );
    }
}
