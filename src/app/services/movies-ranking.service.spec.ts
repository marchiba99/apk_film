import { TestBed } from '@angular/core/testing';

import { MovieRankingService } from './movies-ranking.service';

describe('MovieRankingService', () => {
  let service: MovieRankingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieRankingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
