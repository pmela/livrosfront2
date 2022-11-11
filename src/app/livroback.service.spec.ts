import { TestBed } from '@angular/core/testing';

import { LivrobackService } from './livroback.service';

describe('LivrobackService', () => {
  let service: LivrobackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivrobackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
