import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CharacterComponent } from './character.component';
import { FormsModule } from '@angular/forms';
import { SummonSpellComponent } from '../summon-spell/summon-spell.component';
import { CreatureComponent } from '../creature/creature.component';
import { Character } from 'src/app/model/character';
import { AbilityScores } from 'src/app/model/abilityscores';
import { Creature } from 'src/app/model/creature';
import { SpellService } from 'src/app/services/spell.service';
import { Spell } from 'src/app/model/spell';
import { of } from 'rxjs';
import { Alignment } from 'src/app/model/alignment';
import { AttackComponent } from '../attack/attack.component';
import { InGameModifiersComponent } from '../in-game-modifiers/in-game-modifiers.component';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;
  const mockSpells: Spell[] = [];

  beforeEach(async(() => {
    const spellService = jasmine.createSpyObj('SpellService', ['getSpellsByCharacterGroupAndLevel']);
    spellService.getSpellsByCharacterGroupAndLevel.and.returnValue(of(mockSpells));
    TestBed.configureTestingModule({
      declarations: [CharacterComponent, SummonSpellComponent, CreatureComponent, AttackComponent, InGameModifiersComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule],
      providers: [{ provide: SpellService, useValue: spellService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.character = new Character('', '', Alignment.trueNeutral, '', 1, new AbilityScores(10, 10, 10, 10, 10, 10));
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calculateSpellLevel Bard should return 1', () => {
    component.character = new Character('1', 'test', Alignment.trueNeutral, 'Bard', 1, new AbilityScores(10, 10, 10, 10, 10, 11));
    expect(component.character.calculateSpellLevel()).toBe(1);
  });

  it('calculateSpellLevel Summoner should return 1', () => {
    component.character = new Character('1', 'test', Alignment.trueNeutral, 'Summoner', 1, new AbilityScores(10, 10, 10, 10, 10, 11));
    expect(component.character.calculateSpellLevel()).toBe(1);
  });

  it('calculateSpellLevel Ranger should return 0', () => {
    component.character = new Character('1', 'test', Alignment.trueNeutral, 'Ranger', 1, new AbilityScores(10, 10, 10, 10, 11, 10));
    expect(component.character.calculateSpellLevel()).toBe(0);
  });

  it('calculateSpellLevel Sorcerer should return 1', () => {
    component.character = new Character('1', 'test', Alignment.trueNeutral, 'Sorcerer', 1, new AbilityScores(10, 10, 10, 10, 10, 11));
    expect(component.character.calculateSpellLevel()).toBe(1);
  });

  it('calculateSpellLevel Druid 3 should return 2', () => {
    component.character = new Character('1', 'test', Alignment.trueNeutral, 'Druid', 3, new AbilityScores(10, 10, 10, 10, 12, 10));
    expect(component.character.calculateSpellLevel()).toBe(2);
  });

  it('calculateSpellLevel Druid 5 should return 3', () => {
    component.character = new Character('1', 'test', Alignment.trueNeutral, 'Druid', 5, new AbilityScores(10, 10, 10, 10, 13, 10));
    expect(component.character.calculateSpellLevel()).toBe(3);
  });

  it('calculateSpellLevel Druid 7 should return 4', () => {
    component.character = new Character('1', 'test', Alignment.trueNeutral, 'Druid', 7, new AbilityScores(10, 10, 10, 10, 14, 10));
    expect(component.character.calculateSpellLevel()).toBe(4);
  });

  it('calculateSpellLevel Druid 9 should return 5', () => {
    component.character = new Character('1', 'test', Alignment.trueNeutral, 'Druid', 9, new AbilityScores(10, 10, 10, 10, 15, 10));
    expect(component.character.calculateSpellLevel()).toBe(5);
  });

  it('calculateSpellLevel Druid 11 should return 6', () => {
    component.character = new Character('1', 'test', Alignment.trueNeutral, 'Druid', 11, new AbilityScores(10, 10, 10, 10, 16, 10));
    expect(component.character.calculateSpellLevel()).toBe(6);
  });

  it('calculateSpellLevel Druid 13 should return 7', () => {
    component.character = new Character('1', 'test', Alignment.trueNeutral, 'Druid', 13, new AbilityScores(10, 10, 10, 10, 17, 10));
    expect(component.character.calculateSpellLevel()).toBe(7);
  });

  it('calculateSpellLevel Druid 15 should return 8', () => {
    component.character = new Character('1', 'test', Alignment.trueNeutral, 'Druid', 15, new AbilityScores(10, 10, 10, 10, 18, 10));
    expect(component.character.calculateSpellLevel()).toBe(8);
  });

  it('calculateSpellLevel Druid 17 should return 9', () => {
    component.character = new Character('1', 'test', Alignment.trueNeutral, 'Druid', 17, new AbilityScores(10, 10, 10, 10, 19, 10));
    expect(component.character.calculateSpellLevel()).toBe(9);
  });

  it('calculateSpellLevel Druid 33 should return 0', () => {
    component.character = new Character('1', 'test', Alignment.trueNeutral, 'Druid', 33, new AbilityScores(10, 10, 10, 10, 10, 10));
    expect(component.character.calculateSpellLevel()).toBe(0);
  });


  it('calculateSpellLevelBardOrSummoner should return 1', () => {
    expect(component.character.calculateSpellLevelBardOrSummoner(1)).toBe(1);
  });

  it('calculateSpellLevelBardOrSummoner should return 2', () => {
    expect(component.character.calculateSpellLevelBardOrSummoner(4)).toBe(2);
  });

  it('calculateSpellLevelBardOrSummoner should return 3', () => {
    expect(component.character.calculateSpellLevelBardOrSummoner(7)).toBe(3);
  });

  it('calculateSpellLevelBardOrSummoner should return 4', () => {
    expect(component.character.calculateSpellLevelBardOrSummoner(10)).toBe(4);
  });

  it('calculateSpellLevelBardOrSummoner should return 5', () => {
    expect(component.character.calculateSpellLevelBardOrSummoner(13)).toBe(5);
  });

  it('calculateSpellLevelBardOrSummoner should return 6', () => {
    expect(component.character.calculateSpellLevelBardOrSummoner(16)).toBe(6);
  });

  it('calculateSpellLevelBardOrSummoner should return 0', () => {
    expect(component.character.calculateSpellLevelBardOrSummoner(111)).toBe(0);
  });


  it('calculateSpellLevelRanger should return 0', () => {
    expect(component.character.calculateSpellLevelRanger(1)).toBe(0);
  });

  it('calculateSpellLevelRanger should return 1', () => {
    expect(component.character.calculateSpellLevelRanger(4)).toBe(1);
  });

  it('calculateSpellLevelRanger should return 2', () => {
    expect(component.character.calculateSpellLevelRanger(7)).toBe(2);
  });

  it('calculateSpellLevelRanger should return 3', () => {
    expect(component.character.calculateSpellLevelRanger(10)).toBe(3);
  });

  it('calculateSpellLevelRanger should return 4', () => {
    expect(component.character.calculateSpellLevelRanger(13)).toBe(4);
  });

  it('calculateSpellLevelRanger should return 0', () => {
    expect(component.character.calculateSpellLevelRanger(111)).toBe(0);
  });

  it('calculateSpellLevelSorcerer should return 1', () => {
    expect(component.character.calculateSpellLevelSorcerer(1)).toBe(1);
  });

  it('calculateSpellLevelSorcerer should return 2', () => {
    expect(component.character.calculateSpellLevelSorcerer(4)).toBe(2);
  });

  it('calculateSpellLevelSorcerer should return 3', () => {
    expect(component.character.calculateSpellLevelSorcerer(6)).toBe(3);
  });

  it('calculateSpellLevelSorcerer should return 4', () => {
    expect(component.character.calculateSpellLevelSorcerer(8)).toBe(4);
  });

  it('calculateSpellLevelSorcerer should return 5', () => {
    expect(component.character.calculateSpellLevelSorcerer(10)).toBe(5);
  });

  it('calculateSpellLevelSorcerer should return 6', () => {
    expect(component.character.calculateSpellLevelSorcerer(12)).toBe(6);
  });

  it('calculateSpellLevelSorcerer should return 7', () => {
    expect(component.character.calculateSpellLevelSorcerer(14)).toBe(7);
  });

  it('calculateSpellLevelSorcerer should return 8', () => {
    expect(component.character.calculateSpellLevelSorcerer(16)).toBe(8);
  });

  it('calculateSpellLevelSorcerer should return 9', () => {
    expect(component.character.calculateSpellLevelSorcerer(18)).toBe(9);
  });

  it('calculateSpellLevelSorcerer should return 0', () => {
    expect(component.character.calculateSpellLevelSorcerer(111)).toBe(0);
  });

  it('summon should return nothing', () => {
    component.character = new Character('1', 'test', Alignment.trueNeutral, 'test', 1, new AbilityScores(10, 10, 10, 10, 10, 10));
    expect(component.summon({ creatures: [], id: '1' })).toBeUndefined();
  });

  it('delete should return nothing', () => {
    const char = new Character('1', 'test', Alignment.trueNeutral, 'test', 1, new AbilityScores(10, 10, 10, 10, 10, 10));
    const creature = new Creature('1', 'test');
    component.character = char;
    expect(component.delete(creature)).toBeUndefined();
  });

  it('calculateSpellGroup default should return nothing', () => {
    const char = new Character('1', 'test', Alignment.trueNeutral, 'test', 1, new AbilityScores(10, 10, 10, 10, 10, 10));
    component.character = char;
    expect(component.character.calculateSpellGroup()).toBeUndefined();
  });

  it('calculateSpellGroup Cleric should return nothing', () => {
    const char = new Character('1', 'test', Alignment.trueNeutral, 'Cleric', 1, new AbilityScores(10, 10, 10, 10, 10, 10));
    component.character = char;
    expect(component.character.calculateSpellGroup()).toBeUndefined();
  });

  it('getValidSpells should return nothing', () => {
    const char = new Character('1', 'test', Alignment.trueNeutral, 'Cleric', 1, new AbilityScores(10, 10, 10, 10, 10, 10));
    component.character = char;
    expect(component.getValidSpells()).toBeUndefined();
  });
});
