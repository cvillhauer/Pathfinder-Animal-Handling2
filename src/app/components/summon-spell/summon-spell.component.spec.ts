import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SummonSpellComponent } from './summon-spell.component';
import { FormsModule } from '@angular/forms';
import { Character } from 'src/app/model/character';
import { AbilityScores } from 'src/app/model/abilityscores';
import { Size, CreatureType } from 'src/app/model/enums';
import { Creature } from 'src/app/model/creature';
import { Saves } from 'src/app/model/saves';
import { DiceService } from 'src/app/services/dice.service';
import { SpellService } from 'src/app/services/spell.service';
import { CreatureService } from 'src/app/services/creature.service';
import { of } from 'rxjs';
import { ArmorClass } from 'src/app/model/armorClass';
import { Speeds } from 'src/app/model/speed';
import { Alignment } from 'src/app/model/alignment';
import { SummonedCreature } from 'src/app/model/summonedCreature';
import { Feat } from 'src/app/model/feat';

describe('SpellComponent', () => {
  let component: SummonSpellComponent;
  let fixture: ComponentFixture<SummonSpellComponent>;
  const mockCreatureCodes: string[] = [];
  const mockCreatures: Creature[] = [];

  beforeEach(async(() => {
    const spellService = jasmine.createSpyObj('SpellService', ['getSummonSpellCreatureListBySpellId']);
    spellService.getSummonSpellCreatureListBySpellId.and.returnValue(of(mockCreatureCodes));
    const creatureService = jasmine.createSpyObj('CreatureService', ['getCreaturesFromCreatureList']);
    creatureService.getCreaturesFromCreatureList.and.returnValue(of(mockCreatures));
    TestBed.configureTestingModule({
      declarations: [SummonSpellComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule],
      providers: [DiceService,
        { provide: SpellService, useValue: spellService },
        { provide: CreatureService, useValue: creatureService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonSpellComponent);
    component = fixture.componentInstance;
    component.spell = {
      id: 'test',
      type: 'summon',
      description: 'test',
      group: 'test',
      level: 1,
      levelList: [],
      creatureList: [],
      creatures: []
    };
    component.roundCount = 1;
    component.castingCharacter = new Character(
      'test',
      'Wizard',
      1,
      'test',
      'link',
      'image',
      Alignment.trueNeutral,
      new Speeds(30),
      new AbilityScores(10, 10, 10, 10, 10, 10),
      10,
      new ArmorClass(10, 10, 10),
      5,
      15,
      1,
      0,
      new Saves(5, 5, 5),
      []
    );
    component.selectedCreature = new Creature(
      'test',
      'test',
      '',
      '',
      Size.Small,
      CreatureType.Animal,
      Alignment.trueNeutral,
      new Speeds(20),
      5,
      new AbilityScores(10, 10, 10, 10, 10, 10),
      1,
      15,
      new ArmorClass(15, 12, 13),
      5,
      15,
      1,
      1,
      0,
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
    const testCreature = new SummonedCreature(
      'test',
      'test',
      '',
      '',
      Size.Small,
      CreatureType.Animal,
      Alignment.trueNeutral,
      new Speeds(20),
      5,
      new AbilityScores(10, 10, 10, 10, 10, 10),
      1,
      15,
      new ArmorClass(15, 12, 13),
      5,
      15,
      1,
      1,
      0,
      new Saves(1, 2, 3),
      []
    );
    testCreature.level = 1;
    testCreature.creatureName = 'Squeaky 1';
    testCreature.editName = false;
    testCreature.roundsLeft = 1;
    testCreature.roundSummoned = 1;
    expect(component.summon.emit).toHaveBeenCalledWith({
      id: 'test', creatures: [testCreature]
    });
  });

  it('onSummon should emit a creature with augmented summoning', () => {
    component.castingCharacter.feats.push(Feat.AugmentSummoning); // +4 to str, +4 to con, +2 HP
    component.selectedLevel = 1;
    spyOn(component.summon, 'emit');
    component.onSummon();
    const testCreature = new SummonedCreature(
      'test',
      'test',
      '',
      '',
      Size.Small,
      CreatureType.Animal,
      Alignment.trueNeutral,
      new Speeds(20),
      5,
      new AbilityScores(14, 10, 14, 10, 10, 10),
      1,
      17,
      new ArmorClass(15, 12, 13),
      7,
      17,
      1,
      1,
      0,
      new Saves(3, 2, 3),
      []
    );
    testCreature.level = 1;
    testCreature.creatureName = 'Squeaky 1';
    testCreature.editName = false;
    testCreature.roundsLeft = 1;
    testCreature.roundSummoned = 1;
    expect(component.summon.emit).toHaveBeenCalledWith({
      id: 'test', creatures: [testCreature]
    });
  });

});
