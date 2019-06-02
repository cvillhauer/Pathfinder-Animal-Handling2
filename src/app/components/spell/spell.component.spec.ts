import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SpellComponent } from './spell.component';
import { FormsModule } from '@angular/forms';
import { Character } from 'src/app/model/character';
import { AbilityScores } from 'src/app/model/abilityscores';
import { Size, CreatureType, Alignment } from 'src/app/model/enums';
import { Creature } from 'src/app/model/creature';
import { Saves } from 'src/app/model/saves';
import { DiceService } from 'src/app/services/dice.service';
import { SpellService } from 'src/app/services/spell.service';
import { CreatureService } from 'src/app/services/creature.service';
import { of } from 'rxjs';

describe('SpellComponent', () => {
  let component: SpellComponent;
  let fixture: ComponentFixture<SpellComponent>;
  const mockCreatureCodes: string[] = [];
  const mockCreatures: Creature[] = [];

  beforeEach(async(() => {
    const spellService = jasmine.createSpyObj('SpellService', ['getSpellCreatureListBySpellId']);
    spellService.getSpellCreatureListBySpellId.and.returnValue(of(mockCreatureCodes));
    const creatureService = jasmine.createSpyObj('CreatureService', ['getCreaturesFromCreatureList']);
    creatureService.getCreaturesFromCreatureList.and.returnValue(of(mockCreatures));
    TestBed.configureTestingModule({
      declarations: [SpellComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule],
      providers: [DiceService,
        { provide: SpellService, useValue: spellService },
        { provide: CreatureService, useValue: creatureService }]
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
    component.castingCharacter = new Character('1', 'test', Alignment.trueNeutral, 'test', 1, new AbilityScores(10, 10, 10, 10, 10, 10));
    component.selectedCreature = new Creature(
      'test',
      'test',
      '',
      '',
      Size.Small,
      CreatureType.Animal,
      Alignment.trueNeutral,
      20,
      new AbilityScores(10, 10, 10, 10, 10, 10),
      15,
      15,
      5,
      15,
      new Saves(1, 2, 3),
      []
    );
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
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

  it('calculateNumberOfCreatures should return 1', () => {
    expect(component.calculateNumberOfCreatures(1, 1)).toBe(1);
  });

  it('calculateNumberOfCreatures should return 3', () => {
    expect(component.calculateNumberOfCreatures(1, 2)).toBe(0);
  });

  it('calculateNumberOfCreatures should return 0', () => {
    expect(component.calculateNumberOfCreatures(4, 3)).toBeTruthy(1);
  });

  it('onSummon should emit a creature without augmented summoning', () => {
    component.selectedLevel = 1;
    spyOn(component.summon, 'emit');
    component.onSummon();
    const testCreature = new Creature(
      'test',
      'test',
      '',
      '',
      Size.Small,
      CreatureType.Animal,
      Alignment.trueNeutral,
      20,
      new AbilityScores(10, 10, 10, 10, 10, 10),
      15,
      15,
      5,
      15,
      new Saves(1, 2, 3),
      []
    );
    testCreature.level = 1;
    testCreature.creatureName = 'Squeaky 1',
      testCreature.editName = false;
    testCreature.roundsLeft = 1;
    expect(component.summon.emit).toHaveBeenCalledWith({
      id: '1', creatures: [testCreature]
    });
  });

  it('onSummon should emit a creature with augmented summoning', () => {
    component.castingCharacter.feats.push('Augmented Summoning'); // +4 to str, +4 to con, +2 HP
    component.selectedLevel = 1;
    spyOn(component.summon, 'emit');
    component.onSummon();
    const testCreature = new Creature(
      'test',
      'test',
      '',
      '',
      Size.Small,
      CreatureType.Animal,
      Alignment.trueNeutral,
      20,
      new AbilityScores(14, 10, 14, 10, 10, 10),
      17,
      15,
      7,
      17,
      new Saves(3, 2, 3),
      []
    );
    testCreature.level = 1;
    testCreature.creatureName = 'Squeaky 1',
      testCreature.editName = false;
    testCreature.roundsLeft = 1;
    expect(component.summon.emit).toHaveBeenCalledWith({
      id: '1', creatures: [testCreature]
    });
  });

});
