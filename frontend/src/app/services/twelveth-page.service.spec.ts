import { TestBed } from '@angular/core/testing';

import { TwelvethPageService } from './twelveth-page.service';

describe('TwelvethPageService', () => {
  let service: TwelvethPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwelvethPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
