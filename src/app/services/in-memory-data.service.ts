import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    const creatures = [
      { id: "direrat",
      description: "Dire Rat",
      strength: 10,
      dexterity: 17,
      constitution: 12,
      intelligence: 2,
      wisdom: 12,
      charisma: 4 },
      { id: "dog",
      description: "Dog",
      strength: 13,
      dexterity: 13,
      constitution: 15,
      intelligence: 2,
      wisdom: 12,
      charisma: 6 },
      { id: "dolphin",
      description: "Dolphin",
      strength: 12,
      dexterity: 15,
      constitution: 13,
      intelligence: 2,
      wisdom: 12,
      charisma: 6 }
    ];
    return { creatures };
  }
}