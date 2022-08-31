import { TestBed } from '@angular/core/testing';

import { NgxNellLibraryService } from './ngx-nell-library.service';

describe('NgxNellLibraryService', () => {
  let service: NgxNellLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNellLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
