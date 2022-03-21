import { TestBed } from '@angular/core/testing';

import { ThirdPageService } from './third-page.service';

describe('ThirdPageService', () => {
  let service: ThirdPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThirdPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
