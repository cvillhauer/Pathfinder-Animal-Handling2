import { TestBed } from '@angular/core/testing';

import { DiceService } from './dice.service';

describe('DiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiceService = TestBed.get(DiceService);
    expect(service).toBeTruthy();
  });

  describe('roleDice', () => {
    it('should return 2', () => {
      const service: DiceService = TestBed.get(DiceService);
      expect(service.rollDice(1, 2)).toBeGreaterThan(0);
    });
  });
});
