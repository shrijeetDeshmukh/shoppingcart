import { TestBed } from '@angular/core/testing';

import { LoadLocalJsonService } from './load-local-json.service';

describe('LoadLocalJsonService', () => {
  let service: LoadLocalJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadLocalJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
