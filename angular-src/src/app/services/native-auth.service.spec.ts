import { TestBed, inject } from '@angular/core/testing';

import { NativeAuthService } from './native-auth.service';

describe('NativeAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NativeAuthService]
    });
  });

  it('should ...', inject([NativeAuthService], (service: NativeAuthService) => {
    expect(service).toBeTruthy();
  }));
});
