import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
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

  it('should create', () => {
    component.comic = {} as ComicModel;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

});
