import { TestBed, async } from '@angular/core/testing';
import { CartService } from './cart.service';
import { SharedServiceModule } from '../shared-service.module';

describe('CartService', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedServiceModule]
        });
    }));
    it('should give 2 comics', () => {
        const cartService: CartService = TestBed.get(CartService);

        expect(cartService.comics.length).toEqual(2);
    });
});
