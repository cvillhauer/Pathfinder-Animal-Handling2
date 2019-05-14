import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CreatureService } from './creature.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

describe('CreatureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService) ],
      providers: [ CreatureService ]
    });
  });

  afterEach(inject([HttpTestingController], (httpClient: HttpTestingController) => {
    httpClient.verify();
  }));

  it(`should create`, async(inject([CreatureService, HttpTestingController],
    (service: CreatureService, httpClient: HttpTestingController) => {
      expect(service).toBeTruthy();
  })));

  it(`can get a creatures list`, async(inject([CreatureService, HttpTestingController],
    (service: CreatureService, httpClient: HttpTestingController) => {
      expect(service.getCreatures()).toBeTruthy();
  })));

  it(`can get a creature`, async(inject([CreatureService, HttpTestingController],
    (service: CreatureService, httpClient: HttpTestingController) => {
      expect(service.getCreature('direrat')).toBeTruthy();
  })));

  it(`can get a creature list from array`, async(inject([CreatureService, HttpTestingController],
    (service: CreatureService, httpClient: HttpTestingController) => {
      expect(service.getCreaturesFromCreatureList(['direrat', 'dog'])).toBeTruthy();
  })));
});
