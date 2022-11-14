import { TestBed } from '@angular/core/testing';

import { KakesApiService } from './kakes-api.service';

describe('KakesApiService', () => {
  let service: KakesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KakesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
