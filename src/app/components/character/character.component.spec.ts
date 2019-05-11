import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CharacterComponent } from './character.component';
import { FormsModule } from '@angular/forms';
import { SpellComponent } from '../spell/spell.component';
import { CreatureComponent } from '../creature/creature.component';
import { Character } from 'src/app/model/character';

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

  it('calculateSpellLevel should return 1', () => {
    expect(component.calculateSpellLevel('test', 1)).toBe(1);
  });

  it('calculateSpellLevel Bard should return 1', () => {
    expect(component.calculateSpellLevel('Bard', 1)).toBe(1);
  });

  it('calculateSpellLevel Summoner should return 1', () => {
    expect(component.calculateSpellLevel('Summoner', 1)).toBe(1);
  });

  it('calculateSpellLevel Ranger should return 0', () => {
    expect(component.calculateSpellLevel('Ranger', 1)).toBe(0);
  });

  it('calculateSpellLevel Sorcerer should return 1', () => {
    expect(component.calculateSpellLevel('Sorcerer', 1)).toBe(1);
  });

  it('calculateSpellLevel Other 3 should return 2', () => {
    expect(component.calculateSpellLevel('Other', 3)).toBe(2);
  });

  it('calculateSpellLevel Other 5 should return 3', () => {
    expect(component.calculateSpellLevel('Other', 5)).toBe(3);
  });

  it('calculateSpellLevel Other 7 should return 4', () => {
    expect(component.calculateSpellLevel('Other', 7)).toBe(4);
  });


  it('calculateSpellLevel Other 9 should return 5', () => {
    expect(component.calculateSpellLevel('Other', 9)).toBe(5);
  });

  it('calculateSpellLevel Other 11 should return 6', () => {
    expect(component.calculateSpellLevel('Other', 11)).toBe(6);
  });

  it('calculateSpellLevel Other 13 should return 7', () => {
    expect(component.calculateSpellLevel('Other', 13)).toBe(7);
  });

  it('calculateSpellLevel Other 15 should return 8', () => {
    expect(component.calculateSpellLevel('Other', 15)).toBe(8);
  });

  it('calculateSpellLevel Other 17 should return 9', () => {
    expect(component.calculateSpellLevel('Other', 17)).toBe(9);
  });

  it('calculateSpellLevel Other 33 should return 0', () => {
    expect(component.calculateSpellLevel('Other', 33)).toBe(0);
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
    const character = new Character('test', 'test', 'Druid', 1);
    expect(component.calculateValidSpells(character)).toBeFalsy();
  });

  it('calculateValidSpells "Bard" should cover', () => {
    const character = new Character('test', 'test', 'Bard', 1);
    expect(component.calculateValidSpells(character)).toBeFalsy();
  });

  it('calculateValidSpells "Other" should cover', () => {
    const character = new Character('test', 'test', 'Other', 1);
    expect(component.calculateValidSpells(character)).toBeFalsy();
  });
});
