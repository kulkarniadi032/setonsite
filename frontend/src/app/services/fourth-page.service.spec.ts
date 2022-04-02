import { TestBed } from '@angular/core/testing';

import { FourthPageService } from './fourth-page.service';

describe('FourthPageService', () => {
  let service: FourthPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FourthPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
