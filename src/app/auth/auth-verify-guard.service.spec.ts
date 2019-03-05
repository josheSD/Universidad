import { TestBed } from '@angular/core/testing';

import { AuthVerifyGuardService } from './auth-verify-guard.service';

describe('AuthVerifyGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthVerifyGuardService = TestBed.get(AuthVerifyGuardService);
    expect(service).toBeTruthy();
  });
});
