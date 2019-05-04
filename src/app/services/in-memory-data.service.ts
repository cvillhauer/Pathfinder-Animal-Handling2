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
        id: "summonNaturesAlly1",
        description: "Summon Nature's Ally I",
        classes: ["druid1", "ranger1", "shaman1"],
        creatures: [
          "direrat",
          "dog",
          "dolphin"
        ]
      },
      {
        id: "summonNaturesAlly2",
        description: "Summon Nature's Ally II",
        classes: ["druid2", "ranger2", "shaman2"]
      },
      {
        id: "summonNaturesAlly3",
        description: "Summon Nature's Ally III",
        classes: ["druid3", "ranger3", "shaman3"]
      },
      {
        id: "summonNaturesAlly4",
        description: "Summon Nature's Ally IV",
        classes: ["druid4", "ranger4", "shaman4"]
      },
      {
        id: "summonNaturesAlly5",
        description: "Summon Nature's Ally V",
        classes: ["druid5", "shaman5"]
      },
      {
        id: "summonNaturesAlly6",
        description: "Summon Nature's Ally VI",
        classes: ["druid6", "shaman6"]
      },
      {
        id: "summonNaturesAlly7",
        description: "Summon Nature's Ally VII",
        classes: ["druid7", "shaman7"]
      },
      {
        id: "summonNaturesAlly8",
        description: "Summon Nature's Ally VIII",
        classes: ["druid8", "shaman8"]
      },
      {
        id: "summonNaturesAlly9",
        description: "Summon Nature's Ally IX",
        classes: ["druid9", "shaman9"]
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