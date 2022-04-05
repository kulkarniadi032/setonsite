import { TestBed } from '@angular/core/testing';

import { EleventhPageService } from './eleventh-page.service';

describe('EleventhPageService', () => {
  let service: EleventhPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EleventhPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
