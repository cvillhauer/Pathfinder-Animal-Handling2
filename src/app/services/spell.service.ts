import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

import { Spell, ShapeshiftSpell, SummonSpell } from '../model/spell';

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


  getSpellsByCharacterClassAndLevel(characterClass: string, level: number): Observable<Spell[]> {
    let spells: Observable<Spell[]>;
    const spellGroup = this.calculateSpellGroupFromClass(characterClass);

    // TODO: How do I combine these two items into one returnable Observable?
    spells = this.getShapeshiftSpellsBySpellLevel(level);
    spells = this.getSummonSpellsBySpellGroupAndLevel(spellGroup, level);

    return spells;
  }

  getShapeshiftSpellsBySpellLevel(level: number): Observable<ShapeshiftSpell[]> {
    return this.http.get<ShapeshiftSpell[]>((this.spellsUrl) + '/?type=shapeshift').pipe(
      map(spells => {
        return spells.filter(spell => spell.level <= level);
      })
    );
  }

  getSummonSpellsBySpellGroupAndLevel(spellGroup: string, level: number): Observable<SummonSpell[]> {
    return this.http.get<SummonSpell[]>((this.spellsUrl) + '/?type=summon&group=' + spellGroup).pipe(
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

  calculateSpellGroupFromClass(characterClass): string {
    let spellGroup = '';
    switch (characterClass) {
      case 'Druid':
      case 'Ranger':
      case 'Shaman':
        spellGroup = 'summonnaturesally';
        break;
      case 'Cleric':
      case 'Bard':
      case 'Oracle':
      case 'Sorcerer':
      case 'Summoner':
      case 'Witch':
      case 'Wizard':
        spellGroup = 'summonmonster';
        break;
      default:
        spellGroup = '';
        break;
    }
    return spellGroup;
  }
}
