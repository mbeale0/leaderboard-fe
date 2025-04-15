import { TestBed } from '@angular/core/testing';

import { ToptenService } from './topten.service';

describe('ToptenService', () => {
  let service: ToptenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToptenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
