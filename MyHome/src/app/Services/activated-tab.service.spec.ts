import { TestBed } from '@angular/core/testing';

import { ActivatedTabService } from './activated-tab.service';

describe('ActivatedTabService', () => {
  let service: ActivatedTabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivatedTabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
