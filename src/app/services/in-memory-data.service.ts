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
        creatureList: [
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
        classes: ["druid2", "ranger2", "shaman2"],
        creatureList: [
          "horse",
          "octopus",
          "wolf"
        ]
      },
      {
        id: "summonnaturesally3",
        description: "Summon Nature's Ally III",
        group: "summonnaturesally",
        level: 3,
        classes: ["druid3", "ranger3", "shaman3"],
        creatureList: []
      },
      {
        id: "summonnaturesally4",
        description: "Summon Nature's Ally IV",
        group: "summonnaturesally",
        level: 4,
        classes: ["druid4", "ranger4", "shaman4"],
        creatureList: []
      },
      {
        id: "summonnaturesally5",
        description: "Summon Nature's Ally V",
        group: "summonnaturesally",
        level: 5,
        classes: ["druid5", "shaman5"],
        creatureList: []
      },
      {
        id: "summonnaturesally6",
        description: "Summon Nature's Ally VI",
        group: "summonnaturesally",
        level: 6,
        classes: ["druid6", "shaman6"],
        creatureList: []
      },
      {
        id: "summonnaturesally7",
        description: "Summon Nature's Ally VII",
        group: "summonnaturesally",
        level: 7,
        classes: ["druid7", "shaman7"],
        creatureList: []
      },
      {
        id: "summonnaturesally8",
        description: "Summon Nature's Ally VIII",
        group: "summonnaturesally",
        level: 8,
        classes: ["druid8", "shaman8"],
        creatureList: []
      },
      {
        id: "summonnaturesally9",
        description: "Summon Nature's Ally IX",
        group: "summonnaturesally",
        level: 9,
        classes: ["druid9", "shaman9"],
        creatureList: []
      },
      {
        id: "summonmonster1",
        description: "Summon Monster I",
        group: "summonmonster",
        level: 1,
        classes: ["bard1", "cleric1", "oracle1", "sorcerer1", "summoner1", "witch1", "wizard1"],
        creatureList: []
      },
      {
        id: "summonmonster2",
        description: "Summon Monster II",
        group: "summonmonster",
        level: 2,
        classes: ["bard2", "cleric2", "oracle2", "sorcerer2", "summoner2", "witch2", "wizard2"],
        creatureList: []
      },
      {
        id: "summonmonster3",
        description: "Summon Monster III",
        group: "summonmonster",
        level: 3,
        classes: ["bard3", "cleric3", "oracle3", "sorcerer3", "summoner3", "witch3", "wizard3"],
        creatureList: []
      },
      {
        id: "summonmonster4",
        description: "Summon Monster IV",
        group: "summonmonster",
        level: 4,
        classes: ["bard4", "cleric4", "oracle4", "sorcerer4", "summoner3", "witch4", "wizard4"],
        creatureList: []
      },
      {
        id: "summonmonster5",
        description: "Summon Monster V",
        group: "summonmonster",
        level: 5,
        classes: ["bard5", "cleric5", "oracle5", "sorcerer5", "summoner4", "witch5", "wizard5"],
        creatureList: []
      },
      {
        id: "summonmonster6",
        description: "Summon Monster VI",
        group: "summonmonster",
        level: 6,
        classes: ["bard6", "cleric6", "oracle6", "sorcerer6", "summoner5", "witch6", "wizard6"],
        creatureList: []
      },
      {
        id: "summonmonster7",
        description: "Summon Monster VII",
        group: "summonmonster",
        level: 7,
        classes: ["cleric7", "oracle7", "sorcerer7", "summoner5", "witch7", "wizard7"],
        creatureList: []
      },
      {
        id: "summonmonster8",
        description: "Summon Monster VIII",
        group: "summonmonster",
        level: 8,
        classes: ["cleric8", "oracle8", "sorcerer8", "summoner6", "witch8", "wizard8"],
        creatureList: []
      },
      {
        id: "summonmonster9",
        description: "Summon Monster IX",
        group: "summonmonster",
        level: 9,
        classes: ["cleric9", "oracle9", "sorcerer9", "witch9", "wizard9"],
        creatureList: []
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
      },
      {
        id: "horse",
        description: "Horse",
        strength: 16,
        dexterity: 14,
        constitution: 17,
        intelligence: 2,
        wisdom: 13,
        charisma: 7
      },
      {
        id: "octopus",
        description: "Octopus",
        strength: 12,
        dexterity: 17,
        constitution: 14,
        intelligence: 2,
        wisdom: 13,
        charisma: 3
      },
      {
        id: "wolf",
        description: "Wolf",
        strength: 13,
        dexterity: 15,
        constitution: 15,
        intelligence: 2,
        wisdom: 12,
        charisma: 6
      }
    ];
    return { creatures, spells };
  }
}