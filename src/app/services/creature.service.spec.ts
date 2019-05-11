import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CreatureService } from './creature.service';

describe('CreatureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
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
});
