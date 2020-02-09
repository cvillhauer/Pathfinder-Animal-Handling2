import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SpellService } from './spell.service';

describe('SpellService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ SpellService ]
    });
  });

  afterEach(inject([HttpTestingController], (httpClient: HttpTestingController) => {
    httpClient.verify();
  }));

  it(`should create`, async(inject([SpellService, HttpTestingController],
    (service: SpellService, httpClient: HttpTestingController) => {
      expect(service).toBeTruthy();
  })));

  it(`can get a spells list`, async(inject([SpellService, HttpTestingController],
    (service: SpellService, httpClient: HttpTestingController) => {
      expect(service.getSpells()).toBeTruthy();
  })));

  it(`can get a spell by group`, async(inject([SpellService, HttpTestingController],
    (service: SpellService, httpClient: HttpTestingController) => {
      expect(service.getSpellsByCharacterClassAndLevel('summonnaturesally', 1)).toBeTruthy();
  })));

  it(`can get a spell by spell id`, async(inject([SpellService, HttpTestingController],
    (service: SpellService, httpClient: HttpTestingController) => {
      expect(service.getSummonSpellCreatureListBySpellId('summonnaturesally1')).toBeTruthy();
  })));
});
