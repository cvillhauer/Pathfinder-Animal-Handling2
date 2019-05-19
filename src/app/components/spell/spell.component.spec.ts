import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SpellComponent } from './spell.component';
import { FormsModule } from '@angular/forms';
import { Character } from 'src/app/model/character';
import { AbilityScores } from 'src/app/model/abilityscores';
import { Size, CreatureType } from 'src/app/model/enums';
import { Creature } from 'src/app/model/creature';

describe('SpellComponent', () => {
  let component: SpellComponent;
  let fixture: ComponentFixture<SpellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpellComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellComponent);
    component = fixture.componentInstance;
    component.spell = {
      id: 'test',
      description: 'test',
      group: 'test',
      level: 1,
      levelList: [],
      creatureList: [],
      creatures: []
    };
    component.castingCharacter = new Character('1', 'test', 'test', 1, new AbilityScores(10, 10, 10, 10, 10, 10));
    component.selectedCreature = {
      id: 'test',
      description: 'test',
      level: 1,
      hitPoints: 5,
      armorClass: 5,
      combatManeuverBonus: 5,
      combatManeuverDefense: 15,
      size: Size.Small,
      type: CreatureType.Animal,
      abilityScores: { strength: 1, dexterity: 1, constitution: 1, intelligence: 1, wisdom: 1, charisma: 1 },
      skills: []
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should return void; and cover', () => {
    expect(component.ngOnInit()).toBeUndefined();
  });

  it('getSpellLevelList should return void', () => {
    expect(component.getSpellLevelList()).toBeUndefined();
  });

  it('getSpellCreatures should return void', () => {
    expect(component.getSpellCreatures(1)).toBeUndefined();
  });

  it('levelChange should return void', () => {
    expect(component.levelChange()).toBeUndefined();
  });

  it('onSummon should return void', () => {
    expect(component.onSummon()).toBeUndefined();
  });

  it('calculateNumberOfCreatures should return void', () => {
    expect(component.calculateNumberOfCreatures(1, 1)).toBe(1);
  });

  it('onSummon should emit a creature without augmented summoning', () => {
    component.selectedLevel = 1;
    spyOn(component.summon, 'emit');
    component.onSummon();
    expect(component.summon.emit).toHaveBeenCalledWith({
      id: '1', creatures: [{
        id: 'test',
        description: 'test',
        level: 1,
        hitPoints: 5,
        armorClass: 5,
        combatManeuverBonus: 5,
        combatManeuverDefense: 15,
        size: Size.Small,
        type: CreatureType.Animal,
        abilityScores: { strength: 1, dexterity: 1, constitution: 1, intelligence: 1, wisdom: 1, charisma: 1 },
        skills: []
      }]
    });
  });

  it('onSummon should emit a creature with augmented summoning', () => {
    component.castingCharacter.feats.push('Augmented Summoning'); // +4 to str, +4 to con, +2 HP
    component.selectedLevel = 1;
    spyOn(component.summon, 'emit');
    component.onSummon();
    expect(component.summon.emit).toHaveBeenCalledWith({
      id: '1', creatures: [{
        id: 'test',
        description: 'test',
        level: 1,
        hitPoints: 7,
        armorClass: 5,
        combatManeuverBonus: 7,
        combatManeuverDefense: 17,
        size: Size.Small,
        type: CreatureType.Animal,
        abilityScores: { strength: 5, dexterity: 1, constitution: 5, intelligence: 1, wisdom: 1, charisma: 1 },
        skills: []
      }]
    });
  });

});
