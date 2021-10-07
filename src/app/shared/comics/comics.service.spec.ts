import { TestBed, waitForAsync } from '@angular/core/testing';
import { ComicsService } from './comics.service';

describe('ComicsService', () => {
  let service: ComicsService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [ ComicsService ]
    });
    service = TestBed.inject(ComicsService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
