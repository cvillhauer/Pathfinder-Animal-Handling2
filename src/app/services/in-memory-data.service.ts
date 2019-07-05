import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { spells, animals, vermin } from '../data';
import { Creature } from '../model/creature';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    const creatures: Creature[] = [];
    animals.forEach(a => {
      creatures.push(a);
    });
    vermin.forEach(v => {
      creatures.push(v);
    });
    return { creatures, spells };
  }
}
