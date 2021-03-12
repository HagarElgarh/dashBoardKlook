import { TestBed } from '@angular/core/testing';

import { AuthSignService } from './auth-sign.service';

describe('AuthSignService', () => {
  let service: AuthSignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthSignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
