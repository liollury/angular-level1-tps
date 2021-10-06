import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ComicModel } from '../../shared/comics/comic.model';
import { ComicTileComponent } from './comic-tile.component';

describe('ComicTileComponent', () => {
  let component: ComicTileComponent;
  let fixture: ComponentFixture<ComicTileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicTileComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicTileComponent);
    component = fixture.componentInstance;
  });

  it(`should show the image if their is one`, () => {
    component.comic = { imageUrl: 'img.jpg' } as ComicModel;
    fixture.detectChanges();

    const imageFound = fixture.debugElement.query(By.css(`[data-testid="image-found"]`));
    const imageNotFound = fixture.debugElement.query(By.css(`[data-testid="image-not-found"]`));

    expect(imageFound).toBeTruthy();
    expect(imageNotFound).toBeFalsy();
  });

  it(`should show a "not found" image if the "imageUrl" is empty`, () => {
    component.comic = { imageUrl: null } as ComicModel;
    fixture.detectChanges();

    const imageFound = fixture.debugElement.query(By.css(`[data-testid="image-found"]`));
    const imageNotFound = fixture.debugElement.query(By.css(`[data-testid="image-not-found"]`));

    expect(imageNotFound).toBeTruthy();
    expect(imageFound).toBeFalsy();
  });

  describe('#onDelete', () => {

    it(`should stop the event propagation to avoid the delete click from triggering the parent's "routerLink" event`, () => {
      const event = new MouseEvent('mouse');
      spyOn(event, 'stopPropagation');

      component.onDelete(event);
      expect(event.stopPropagation).toHaveBeenCalled();
    });

  });

});
