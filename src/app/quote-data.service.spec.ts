import { TestBed, inject } from '@angular/core/testing';

import { QuoteDataService } from './quote-data.service';

describe('QuoteDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuoteDataService]
    });
  });

  it('should be created', inject([QuoteDataService], (service: QuoteDataService) => {
    expect(service).toBeTruthy();
  }));
});
