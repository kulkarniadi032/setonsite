import { TestBed } from '@angular/core/testing';

import { NinthPageService } from './ninth-page.service';

describe('NinthPageService', () => {
  let service: NinthPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NinthPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
