import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { spells, animals, fey, magicalbeasts, vermin } from '../data';
import { Creature } from '../model/creature';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    const creatures: Creature[] = [...animals, ...fey, ...magicalbeasts, ...vermin];
    creatures.sort((a, b) => (a.description > b.description) ? 1 : -1);
    return { creatures, spells };
  }
}
