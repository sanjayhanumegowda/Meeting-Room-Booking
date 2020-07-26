import { TestBed } from '@angular/core/testing';

import { GlaobalVariableService } from './glaobal-variable.service';

describe('GlaobalVariableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlaobalVariableService = TestBed.get(GlaobalVariableService);
    expect(service).toBeTruthy();
  });
});
