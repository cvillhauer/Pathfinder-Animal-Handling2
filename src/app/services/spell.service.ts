import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

import { Spell, ShapeshiftSpell, SummonSpell } from '../model/spell';
import { CharacterClass } from '../model/enums';

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
    const spellGroup = this.calculateSpellGroupFromClass(characterClass);

    return forkJoin([this.getShapeshiftSpellsBySpellLevel(level),
      this.getSummonSpellsBySpellGroupAndLevel(spellGroup, level)]).pipe(
        map(spells => [...spells[0], ...spells[1]])
      );
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
      case CharacterClass.Druid:
      case CharacterClass.Ranger:
      case CharacterClass.Shaman:
        spellGroup = 'summonnaturesally';
        break;
      case CharacterClass.Cleric:
      case CharacterClass.Bard:
      case CharacterClass.Oracle:
      case CharacterClass.Sorcerer:
      case CharacterClass.Summoner:
      case CharacterClass.Witch:
      case CharacterClass.Wizard:
        spellGroup = 'summonmonster';
        break;
      default:
        spellGroup = '';
        break;
    }
    return spellGroup;
  }
}
