import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CharacterComponent } from './character.component';
import { FormsModule } from '@angular/forms';
import { SpellComponent } from '../spell/spell.component';
import { CreatureComponent } from '../creature/creature.component';

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

  it('calculateSpellLevelBardOrSummoner should return 1', () => {
    expect(component.calculateSpellLevelBardOrSummoner(1)).toBe(1);
  });

  it('getCharacterById "" should return nothing', () => {
    expect(component.getCharacterById('test')).toBeFalsy();
  });
});
