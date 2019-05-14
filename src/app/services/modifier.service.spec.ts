import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ModifierService } from './modifier.service';

describe('ModifierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ModifierService ]
    });
  });

  afterEach(inject([HttpTestingController], (httpClient: HttpTestingController) => {
    httpClient.verify();
  }));

  it(`should create`, async(inject([ModifierService, HttpTestingController],
    (service: ModifierService, httpClient: HttpTestingController) => {
      expect(service).toBeTruthy();
  })));

  it(`can get a modifiers list`, async(inject([ModifierService, HttpTestingController],
    (service: ModifierService, httpClient: HttpTestingController) => {
      expect(service.getModifiers()).toBeTruthy();
  })));

  it(`can get a modifier`, async(inject([ModifierService, HttpTestingController],
    (service: ModifierService, httpClient: HttpTestingController) => {
      expect(service.getModifier('dex')).toBeTruthy();
  })));
});
