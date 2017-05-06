import { TestBed, inject } from '@angular/core/testing';

import { NativeRegisterValidationService } from './native-reg-validate.service';

describe('NativeRegValidateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NativeRegisterValidationService]
    });
  });

  it('should ...', inject([NativeRegisterValidationService], (service: NativeRegisterValidationService) => {
    expect(service).toBeTruthy();
  }));
});
