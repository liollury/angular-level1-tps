import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { environment } from '../../../environments/environment';
import { ComicsService } from './comics.service';

describe('ComicsService', () => {
  let service: ComicsService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ ComicsService ]
    });
    service = TestBed.inject(ComicsService);
  }));

  describe('#list', () => {

    function spyOnHttpGet(): HttpClient {
      const httpClient = TestBed.inject(HttpClient);
      spyOn(httpClient, 'get');

      return httpClient;
    }

    it(`should retrieve a booking by it's volume ID`, () => {
      const httpClient = spyOnHttpGet();
      let expectedParams: HttpParams = new HttpParams();
      expectedParams = expectedParams.set('volumeId', '10');

      service.list(10);
      expect(httpClient.get).toHaveBeenCalledWith(`${environment.apiUrl}/comics`, {
        params: expectedParams
      });
    });

    it(`should retrieve a filtered list of bookings`, () => {
      const httpClient = spyOnHttpGet();
      let expectedParams: HttpParams = new HttpParams();
      expectedParams = expectedParams.set('q', 'Astérix');

      service.list(null, 'Astérix');
      expect(httpClient.get).toHaveBeenCalledWith(`${environment.apiUrl}/comics`, {
        params: expectedParams
      });
    });

    it(`should retrieve the whole list of bookings`, () => {
      const httpClient = spyOnHttpGet();

      service.list();
      expect(httpClient.get).toHaveBeenCalledWith(`${environment.apiUrl}/comics`, {
        params: new HttpParams()
      });
    });

  });

});
