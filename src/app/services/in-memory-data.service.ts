import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    const spells = [
      {
        id: "summonnaturesally1",
        description: "Summon Nature's Ally I",
        group: "summonnaturesally",
        level: 1,
        classes: ["druid1", "ranger1", "shaman1"],
        creatures: [
          "direrat",
          "dog",
          "dolphin"
        ]
      },
      {
        id: "summonnaturesally2",
        description: "Summon Nature's Ally II",
        group: "summonnaturesally",
        level: 2,
        classes: ["druid2", "ranger2", "shaman2"]
      },
      {
        id: "summonnaturesally3",
        description: "Summon Nature's Ally III",
        group: "summonnaturesally",
        level: 3,
        classes: ["druid3", "ranger3", "shaman3"]
      },
      {
        id: "summonnaturesally4",
        description: "Summon Nature's Ally IV",
        group: "summonnaturesally",
        level: 4,
        classes: ["druid4", "ranger4", "shaman4"]
      },
      {
        id: "summonnaturesally5",
        description: "Summon Nature's Ally V",
        group: "summonnaturesally",
        level: 5,
        classes: ["druid5", "shaman5"]
      },
      {
        id: "summonnaturesally6",
        description: "Summon Nature's Ally VI",
        group: "summonnaturesally",
        level: 6,
        classes: ["druid6", "shaman6"]
      },
      {
        id: "summonnaturesally7",
        description: "Summon Nature's Ally VII",
        group: "summonnaturesally",
        level: 7,
        classes: ["druid7", "shaman7"]
      },
      {
        id: "summonnaturesally8",
        description: "Summon Nature's Ally VIII",
        group: "summonnaturesally",
        level: 8,
        classes: ["druid8", "shaman8"]
      },
      {
        id: "summonnaturesally9",
        description: "Summon Nature's Ally IX",
        group: "summonnaturesally",
        level: 9,
        classes: ["druid9", "shaman9"]
      },
      {
        id: "summonmonster1",
        description: "Summon Monster I",
        group: "summonmonster",
        level: 1,
        classes: ["druid1", "shaman1"]
      }
    ];
    const creatures = [
      {
        id: "direrat",
        description: "Dire Rat",
        strength: 10,
        dexterity: 17,
        constitution: 12,
        intelligence: 2,
        wisdom: 12,
        charisma: 4
      },
      {
        id: "dog",
        description: "Dog",
        strength: 13,
        dexterity: 13,
        constitution: 15,
        intelligence: 2,
        wisdom: 12,
        charisma: 6
      },
      {
        id: "dolphin",
        description: "Dolphin",
        strength: 12,
        dexterity: 15,
        constitution: 13,
        intelligence: 2,
        wisdom: 12,
        charisma: 6
      }
    ];
    return { creatures, spells };
  }
}