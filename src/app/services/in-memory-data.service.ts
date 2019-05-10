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
        creatureList: [
          "cheetah",
          "crocodile",
          "shark"
        ]
      },
      {
        id: "summonnaturesally4",
        description: "Summon Nature's Ally IV",
        group: "summonnaturesally",
        level: 4,
        creatureList: []
      },
      {
        id: "summonnaturesally5",
        description: "Summon Nature's Ally V",
        group: "summonnaturesally",
        level: 5,
        creatureList: []
      },
      {
        id: "summonnaturesally6",
        description: "Summon Nature's Ally VI",
        group: "summonnaturesally",
        level: 6,
        creatureList: []
      },
      {
        id: "summonnaturesally7",
        description: "Summon Nature's Ally VII",
        group: "summonnaturesally",
        level: 7,
        creatureList: []
      },
      {
        id: "summonnaturesally8",
        description: "Summon Nature's Ally VIII",
        group: "summonnaturesally",
        level: 8,
        creatureList: []
      },
      {
        id: "summonnaturesally9",
        description: "Summon Nature's Ally IX",
        group: "summonnaturesally",
        level: 9,
        creatureList: []
      },
      {
        id: "summonmonster1",
        description: "Summon Monster I",
        group: "summonmonster",
        level: 1,
        creatureList: [
          "direrat",
          "dog",
          "dolphin"
        ]
      },
      {
        id: "summonmonster2",
        description: "Summon Monster II",
        group: "summonmonster",
        level: 2,
        creatureList: [
          "horse",
          "octopus",
          "wolf"
        ]
      },
      {
        id: "summonmonster3",
        description: "Summon Monster III",
        group: "summonmonster",
        level: 3,
        creatureList: [
          "cheetah",
          "crocodile",
          "shark"
        ]
      },
      {
        id: "summonmonster4",
        description: "Summon Monster IV",
        group: "summonmonster",
        level: 4,
        creatureList: []
      },
      {
        id: "summonmonster5",
        description: "Summon Monster V",
        group: "summonmonster",
        level: 5,
        creatureList: []
      },
      {
        id: "summonmonster6",
        description: "Summon Monster VI",
        group: "summonmonster",
        level: 6,
        creatureList: []
      },
      {
        id: "summonmonster7",
        description: "Summon Monster VII",
        group: "summonmonster",
        level: 7,
        creatureList: []
      },
      {
        id: "summonmonster8",
        description: "Summon Monster VIII",
        group: "summonmonster",
        level: 8,
        creatureList: []
      },
      {
        id: "summonmonster9",
        description: "Summon Monster IX",
        group: "summonmonster",
        level: 9,
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
      },
      {
        id: "cheetah",
        description: "Cheetah",
        strength: 17,
        dexterity: 19,
        constitution: 15,
        intelligence: 2,
        wisdom: 12,
        charisma: 6
      },
      {
        id: "crocodile",
        description: "Crocodile",
        strength: 19,
        dexterity: 12,
        constitution: 17,
        intelligence: 1,
        wisdom: 12,
        charisma: 2
      },
      {
        id: "shark",
        description: "Shark",
        strength: 17,
        dexterity: 12,
        constitution: 13,
        intelligence: 1,
        wisdom: 12,
        charisma: 2
      }
    ];
    
    const modifiers = [
      {
        id: "str",
        description: "Strength",
      },
      {
        id: "dex",
        description: "Dexterity",
      },
      {
        id: "con",
        description: "Constitution",
      },
      {
        id: "int",
        description: "Intelligence",
      },
      {
        id: "wis",
        description: "Wisdom",
      },
      {
        id: "cha",
        description: "Charisma",
      },
    ]

    const skills = [
      {
        id: "acrobatics",
        description: "Acrobatics",
        modifier: "dex"
      },
      {
        id: "appraise",
        description: "Appraise",
        modifier: "int"
      },
      {
        id: "bluff",
        description: "Bluff",
        modifier: "cha"
      },
      {
        id: "climb",
        description: "Climb",
        modifier: "str"
      },
      {
        id: "craft",
        description: "Craft",
        modifier: "int"
      },
      {
        id: "diplomacy",
        description: "Diplomacy",
        modifier: "cha"
      },
      {
        id: "disabledevice",
        description: "Disable Device",
        modifier: "dex"
      },
      {
        id: "disguise",
        description: "Disguise",
        modifier: "cha"
      },
      {
        id: "escapeartist",
        description: "Escape Artist",
        modifier: "dex"
      },
      {
        id: "fly",
        description: "Fly",
        modifier: "dex"
      },
      {
        id: "handleanimal",
        description: "Handle Animal",
        modifier: "cha"
      },
      {
        id: "heal",
        description: "Heal",
        modifier: "wis"
      },
      {
        id: "intimidate",
        description: "Intimidate",
        modifier: "cha"
      },
      {
        id: "knowledgearcana",
        description: "Knowledge (Arcana)",
        modifier: "int"
      },
      {
        id: "knowledgedungeoneering",
        description: "Knowledge (Dungeoneering)",
        modifier: "int"
      },
      {
        id: "knowledgeengineering",
        description: "Knowledge (Engineering)",
        modifier: "int"
      },
      {
        id: "knowledgegeography",
        description: "Knowledge (Geography)",
        modifier: "int"
      },
      {
        id: "knowledgehistory",
        description: "Knowledge (History)",
        modifier: "int"
      },
      {
        id: "knowledgelocal",
        description: "Knowledge (Local)",
        modifier: "int"
      },
      {
        id: "knowledgenature",
        description: "Knowledge (Nature)",
        modifier: "int"
      },
      {
        id: "knowledgenobility",
        description: "Knowledge (Nobility)",
        modifier: "int"
      },
      {
        id: "knowledgeplanes",
        description: "Knowledge (Planes)",
        modifier: "int"
      },
      {
        id: "knowledgereligion",
        description: "Knowledge (Religion)",
        modifier: "int"
      },
      {
        id: "linguistics",
        description: "Linguistics",
        modifier: "int"
      },
      {
        id: "perception",
        description: "Perception",
        modifier: "wis"
      },
      {
        id: "perform",
        description: "perform",
        modifier: "cha"
      },
      {
        id: "profession",
        description: "Profession",
        modifier: "wis"
      },
      {
        id: "ride",
        description: "Ride",
        modifier: "dex"
      },
      {
        id: "sensemotive",
        description: "senseMotive",
        modifier: "wis"
      },
      {
        id: "slightofhand",
        description: "Slight of Hand",
        modifier: "dex"
      },
      {
        id: "spellcraft",
        description: "Spellcraft",
        modifier: "int"
      },
      {
        id: "stealth",
        description: "Stealth",
        modifier: "dex"
      },
      {
        id: "survival",
        description: "Survival",
        modifier: "wis"
      },
      {
        id: "swim",
        description: "Swim",
        modifier: "str"
      },
      {
        id: "usemagicdevice",
        description: "Use Magic Device",
        modifier: "cha"
      }
    ]

    return { creatures, spells, modifiers, skills };
  }
}