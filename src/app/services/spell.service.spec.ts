import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SpellService } from './spell.service';

describe('ModifierService', () => {
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
      expect(service.getSpellsByGroup('summonnaturesally')).toBeTruthy();
  })));

  it(`can get a spell by group`, async(inject([SpellService, HttpTestingController],
    (service: SpellService, httpClient: HttpTestingController) => {
      expect(service.getSpellsByCharacterGroupAndLevel('summonnaturesally', 1)).toBeTruthy();
  })));
});
