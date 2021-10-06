import { TestBed, waitForAsync } from '@angular/core/testing';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [ CartService ]
    });
    service = TestBed.inject(CartService);
  }));

  describe('#getComics', () => {

    it(`should retrieve a list of 2 comics`, () => {
      expect(service.getComics().length).toEqual(2);
    });

  });


});
