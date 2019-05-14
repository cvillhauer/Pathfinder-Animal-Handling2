import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CharacterComponent } from './character.component';
import { FormsModule } from '@angular/forms';
import { SpellComponent } from '../spell/spell.component';
import { CreatureComponent } from '../creature/creature.component';
import { Character } from 'src/app/model/character';
import { AbilityScores } from 'src/app/model/abilityscores';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterComponent, SpellComponent, CreatureComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule, FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calculateSpellLevel Bard should return 1', () => {
    expect(component.calculateSpellLevel(new Character('1', 'test', 'Bard', 1, new AbilityScores(10, 10, 10, 10, 10, 11)))).toBe(1);
  });

  it('calculateSpellLevel Summoner should return 1', () => {
    expect(component.calculateSpellLevel(new Character('1', 'test', 'Summoner', 1, new AbilityScores(10, 10, 10, 10, 10, 11)))).toBe(1);
  });

  it('calculateSpellLevel Ranger should return 0', () => {
    expect(component.calculateSpellLevel(new Character('1', 'test', 'Ranger', 1, new AbilityScores(10, 10, 10, 10, 11, 10)))).toBe(0);
  });

  it('calculateSpellLevel Sorcerer should return 1', () => {
    expect(component.calculateSpellLevel(new Character('1', 'test', 'Sorcerer', 1, new AbilityScores(10, 10, 10, 10, 10, 11)))).toBe(1);
  });

  it('calculateSpellLevel Druid 3 should return 2', () => {
    expect(component.calculateSpellLevel(new Character('1', 'test', 'Druid', 3, new AbilityScores(10, 10, 10, 10, 12, 10)))).toBe(2);
  });

  it('calculateSpellLevel Druid 5 should return 3', () => {
    expect(component.calculateSpellLevel(new Character('1', 'test', 'Druid', 5, new AbilityScores(10, 10, 10, 10, 13, 10)))).toBe(3);
  });

  it('calculateSpellLevel Druid 7 should return 4', () => {
    expect(component.calculateSpellLevel(new Character('1', 'test', 'Druid', 7, new AbilityScores(10, 10, 10, 10, 14, 10)))).toBe(4);
  });

  it('calculateSpellLevel Druid 9 should return 5', () => {
    expect(component.calculateSpellLevel(new Character('1', 'test', 'Druid', 9, new AbilityScores(10, 10, 10, 10, 15, 10)))).toBe(5);
  });

  it('calculateSpellLevel Druid 11 should return 6', () => {
    expect(component.calculateSpellLevel(new Character('1', 'test', 'Druid', 11, new AbilityScores(10, 10, 10, 10, 16, 10)))).toBe(6);
  });

  it('calculateSpellLevel Druid 13 should return 7', () => {
    expect(component.calculateSpellLevel(new Character('1', 'test', 'Druid', 13, new AbilityScores(10, 10, 10, 10, 17, 10)))).toBe(7);
  });

  it('calculateSpellLevel Druid 15 should return 8', () => {
    expect(component.calculateSpellLevel(new Character('1', 'test', 'Druid', 15, new AbilityScores(10, 10, 10, 10, 18, 10)))).toBe(8);
  });

  it('calculateSpellLevel Druid 17 should return 9', () => {
    expect(component.calculateSpellLevel(new Character('1', 'test', 'Druid', 17, new AbilityScores(10, 10, 10, 10, 19, 10)))).toBe(9);
  });

  it('calculateSpellLevel Druid 33 should return 0', () => {
    expect(component.calculateSpellLevel(new Character('1', 'test', 'Druid', 33, new AbilityScores(10, 10, 10, 10, 10, 10)))).toBe(0);
  });


  it('calculateSpellLevelBardOrSummoner should return 1', () => {
    expect(component.calculateSpellLevelBardOrSummoner(1)).toBe(1);
  });

  it('calculateSpellLevelBardOrSummoner should return 2', () => {
    expect(component.calculateSpellLevelBardOrSummoner(4)).toBe(2);
  });

  it('calculateSpellLevelBardOrSummoner should return 3', () => {
    expect(component.calculateSpellLevelBardOrSummoner(7)).toBe(3);
  });

  it('calculateSpellLevelBardOrSummoner should return 4', () => {
    expect(component.calculateSpellLevelBardOrSummoner(10)).toBe(4);
  });

  it('calculateSpellLevelBardOrSummoner should return 5', () => {
    expect(component.calculateSpellLevelBardOrSummoner(13)).toBe(5);
  });

  it('calculateSpellLevelBardOrSummoner should return 6', () => {
    expect(component.calculateSpellLevelBardOrSummoner(16)).toBe(6);
  });

  it('calculateSpellLevelBardOrSummoner should return 0', () => {
    expect(component.calculateSpellLevelBardOrSummoner(111)).toBe(0);
  });


  it('calculateSpellLevelRanger should return 0', () => {
    expect(component.calculateSpellLevelRanger(1)).toBe(0);
  });

  it('calculateSpellLevelRanger should return 1', () => {
    expect(component.calculateSpellLevelRanger(4)).toBe(1);
  });

  it('calculateSpellLevelRanger should return 2', () => {
    expect(component.calculateSpellLevelRanger(7)).toBe(2);
  });

  it('calculateSpellLevelRanger should return 3', () => {
    expect(component.calculateSpellLevelRanger(10)).toBe(3);
  });

  it('calculateSpellLevelRanger should return 4', () => {
    expect(component.calculateSpellLevelRanger(13)).toBe(4);
  });

  it('calculateSpellLevelRanger should return 0', () => {
    expect(component.calculateSpellLevelRanger(111)).toBe(0);
  });

  it('getCharacterById "" should return nothing', () => {
    expect(component.getCharacterById('test')).toBeFalsy();
  });

  it('calculateValidSpells "Druid" should cover', () => {
    const character = new Character('test', 'test', 'Druid', 1, new AbilityScores(10, 10, 10, 10, 10, 10));
    expect(component.calculateValidSpells(character)).toBeFalsy();
  });

  it('calculateValidSpells "Bard" should cover', () => {
    const character = new Character('test', 'test', 'Bard', 1, new AbilityScores(10, 10, 10, 10, 10, 10));
    expect(component.calculateValidSpells(character)).toBeFalsy();
  });

  it('calculateSpellLevelSorcerer should return 1', () => {
    expect(component.calculateSpellLevelSorcerer(1)).toBe(1);
  });

  it('calculateSpellLevelSorcerer should return 2', () => {
    expect(component.calculateSpellLevelSorcerer(4)).toBe(2);
  });

  it('calculateSpellLevelSorcerer should return 3', () => {
    expect(component.calculateSpellLevelSorcerer(6)).toBe(3);
  });

  it('calculateSpellLevelSorcerer should return 4', () => {
    expect(component.calculateSpellLevelSorcerer(8)).toBe(4);
  });

  it('calculateSpellLevelSorcerer should return 5', () => {
    expect(component.calculateSpellLevelSorcerer(10)).toBe(5);
  });

  it('calculateSpellLevelSorcerer should return 6', () => {
    expect(component.calculateSpellLevelSorcerer(12)).toBe(6);
  });

  it('calculateSpellLevelSorcerer should return 7', () => {
    expect(component.calculateSpellLevelSorcerer(14)).toBe(7);
  });

  it('calculateSpellLevelSorcerer should return 8', () => {
    expect(component.calculateSpellLevelSorcerer(16)).toBe(8);
  });

  it('calculateSpellLevelSorcerer should return 9', () => {
    expect(component.calculateSpellLevelSorcerer(18)).toBe(9);
  });

  it('calculateSpellLevelSorcerer should return 0', () => {
    expect(component.calculateSpellLevelSorcerer(111)).toBe(0);
  });

  it('getCharacterById "" should return nothing', () => {
    expect(component.getCharacterById('test')).toBeFalsy();
  });

  it('summon should return nothing', () => {
    component.characters = [new Character('1', 'test', 'test', 1, new AbilityScores(10, 10, 10, 10, 10, 10))];
    expect(component.summon({ creatures: [], id: '1' })).toBeUndefined();
  });
});
