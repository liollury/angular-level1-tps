import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ComicTileComponent } from './comic-tile.component';
import { By } from '@angular/platform-browser';

describe('ComicTileComponent', () => {
    let component: ComicTileComponent;
    let fixture: ComponentFixture<ComicTileComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComicTileComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComicTileComponent);
        component = fixture.componentInstance;
    });

    it('should create the component with a comic', () => {
        component.comic = {
            date: '1990-11-14',
            id: 197814,
            name: `L'Héritier`,
            volumeId: 31638,
            imageUrl: '1812641-couv_212.jpg',
            description:
                'After the death of Nerio Winch are trying to kill them. Will Largo escape them...?'
        };
        fixture.detectChanges();

        const domElement = fixture.debugElement.query(
            By.css(`[data-testid="image-found"]`)
        ).nativeElement;

        expect(domElement.src).toContain('1812641-couv_212.jpg');
    });

    it('should create the component with a comic light', () => {
        component.comic = {
            date: '1990-11-14',
            id: 197814,
            name: `L'Héritier`,
            volumeId: 31638,
            imageUrl: '',
            description:
                'After the death of Nerio Winch are trying to kill them. Will Largo escape them...?'
        };
        fixture.detectChanges();

        const domElement = fixture.debugElement.query(
            By.css(`[data-testid="image-not-found"]`)
        ).nativeElement;

        expect(domElement.src).toContain('notfound.png');
    });
});
