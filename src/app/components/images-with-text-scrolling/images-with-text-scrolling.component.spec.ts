import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesWithTextScrollingComponent } from './images-with-text-scrolling.component';

describe('ImagesWithTextScrollingComponent', () => {
  let component: ImagesWithTextScrollingComponent;
  let fixture: ComponentFixture<ImagesWithTextScrollingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagesWithTextScrollingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagesWithTextScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
