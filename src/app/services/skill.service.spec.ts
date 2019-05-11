import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SkillService } from './skill.service';

describe('ModifierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ SkillService ]
    });
  });

  afterEach(inject([HttpTestingController], (httpClient: HttpTestingController) => {
    httpClient.verify();
  }));

  it(`should create`, async(inject([SkillService, HttpTestingController],
    (service: SkillService, httpClient: HttpTestingController) => {
      expect(service).toBeTruthy();
  })));
});
